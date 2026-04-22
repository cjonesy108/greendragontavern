'use client'

import { useState } from 'react'
import Link from 'next/link'
import { DOCUMENTS } from '@/lib/content'
import type { FrameType } from '@/lib/types'

const FRAME_LABELS: Record<FrameType, string> = {
  historical: 'Historical context',
  legal: 'Legal interpretation',
  contemporary: 'Contemporary echo',
  personal: 'Personal reflection',
  contest: 'Contested reading',
}

interface Annotator {
  name: string
  slug: string
  title: string | null
  bio: string | null
  is_featured: boolean
}

interface Props {
  annotator: Annotator
  inviteToken: string
}

interface Submission {
  passageId: string
  documentId: string
  passageText: string
  documentTitle: string
  frame: FrameType
  body: string
}

export default function InviteForm({ annotator, inviteToken }: Props) {
  const [documentId, setDocumentId] = useState(DOCUMENTS[0].id)
  const [passageId, setPassageId] = useState('')
  const [frame, setFrame] = useState<FrameType>('historical')
  const [body, setBody] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState<Submission[]>([])

  const selectedDoc = DOCUMENTS.find((d) => d.id === documentId)!
  const allPassages = selectedDoc.sections.flatMap((s) =>
    s.content.filter((seg) => seg.id).map((seg) => ({
      id: seg.id!,
      label: `${s.label} — ${seg.text.length > 60 ? seg.text.slice(0, 57) + '…' : seg.text}`,
      text: seg.text,
    }))
  )

  async function handleSubmit() {
    if (!passageId || !body.trim()) {
      setError('Please select a passage and write your annotation.')
      return
    }
    setSubmitting(true)
    setError(null)

    const res = await fetch('/api/annotations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        passageId,
        documentId,
        annotatorName: annotator.name,
        frame,
        body: body.trim(),
        inviteToken,
      }),
    })

    if (res.ok) {
      const passageText = allPassages.find((p) => p.id === passageId)?.text ?? passageId
      setSubmitted((prev) => [
        ...prev,
        {
          passageId,
          documentId,
          passageText,
          documentTitle: selectedDoc.title,
          frame,
          body: body.trim(),
        },
      ])
      setBody('')
      setPassageId('')
    } else {
      const err = await res.json().catch(() => ({}))
      setError(err.error || 'Something went wrong.')
    }
    setSubmitting(false)
  }

  return (
    <div>
      {submitted.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '0.75rem', fontWeight: 500 }}>
            Your annotations so far
          </div>
          {submitted.map((s, i) => (
            <div key={i} style={{ border: '0.5px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '0.85rem 1rem', marginBottom: '0.6rem', background: 'var(--bg-panel)' }}>
              <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontStyle: 'italic', marginBottom: '0.4rem' }}>
                {s.documentTitle} — &ldquo;{s.passageText.length > 60 ? s.passageText.slice(0, 57) + '…' : s.passageText}&rdquo;
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-primary)' }}>{s.body}</div>
              <div style={{ marginTop: '0.4rem' }}>
                <span className={`ann-frame frame-${s.frame}`}>{FRAME_LABELS[s.frame]}</span>
              </div>
            </div>
          ))}
          <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '0.5rem', fontStyle: 'italic' }}>
            You can{' '}
            <Link href={`/annotators/${annotator.slug}`} style={{ color: 'var(--amber)' }}>
              view your profile
            </Link>{' '}
            to see annotations as they appear publicly.
          </div>
        </div>
      )}

      <div className="invite-form">
        <div className="invite-form-inner">
          <label>Annotating as</label>
          <div className="invite-name-locked">
            <span className="featured-badge">Featured</span>
            {annotator.name}
          </div>

          <label htmlFor="inv-document">Document</label>
          <select
            id="inv-document"
            value={documentId}
            onChange={(e) => { setDocumentId(e.target.value); setPassageId('') }}
          >
            {DOCUMENTS.map((d) => (
              <option key={d.id} value={d.id}>{d.title}</option>
            ))}
          </select>

          <label htmlFor="inv-passage">Passage</label>
          <select
            id="inv-passage"
            value={passageId}
            onChange={(e) => setPassageId(e.target.value)}
          >
            <option value="">— Select a passage —</option>
            {allPassages.map((p) => (
              <option key={p.id} value={p.id}>{p.label}</option>
            ))}
          </select>

          <label htmlFor="inv-frame">Frame</label>
          <select id="inv-frame" value={frame} onChange={(e) => setFrame(e.target.value as FrameType)}>
            {Object.entries(FRAME_LABELS).map(([k, v]) => (
              <option key={k} value={k}>{v}</option>
            ))}
          </select>

          <label htmlFor="inv-body">Your annotation</label>
          <textarea
            id="inv-body"
            placeholder="What does this passage mean to you? What have historians missed, contested, or misread?"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            style={{ minHeight: '120px' }}
          />

          {error && (
            <div style={{ fontSize: '12px', color: '#791F1F', marginBottom: '10px' }}>{error}</div>
          )}

          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={submitting || !body.trim() || !passageId}
          >
            {submitting ? 'Submitting…' : 'Submit annotation'}
          </button>
        </div>
      </div>
    </div>
  )
}
