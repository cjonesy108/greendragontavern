'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import type { Annotation, FrameType } from '@/lib/types'
import { nameToSlug } from '@/lib/utils'
import { getAnnotatorImageSlug } from '@/lib/annotators'
import ReplyThread from './ReplyThread'

const FRAME_LABELS: Record<FrameType, string> = {
  historical: 'Historical context',
  legal: 'Legal interpretation',
  contemporary: 'Contemporary echo',
  personal: 'Personal reflection',
  contest: 'Contested reading',
}

function getSessionId(): string {
  if (typeof window === 'undefined') return ''
  let id = localStorage.getItem('gdt_session')
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem('gdt_session', id)
  }
  return id
}

interface Props {
  passageId: string | null
  passageLabel: string | null
  selectedText: string | null
  documentId: string
  isContested: boolean
  onAnnotationAdded?: (passageId: string, frame?: string) => void
}

export default function AnnotationPanel({ passageId, passageLabel, selectedText, documentId, isContested, onAnnotationAdded }: Props) {
  const [annotations, setAnnotations] = useState<Annotation[]>([])
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [frame, setFrame] = useState<FrameType>('historical')
  const [name, setName] = useState('')
  const [body, setBody] = useState('')
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  function handleShare() {
    const url = `${window.location.origin}/documents/${documentId}?passage=${passageId}`
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const fetchAnnotations = useCallback(async (pid: string) => {
    setLoading(true)
    const sessionId = getSessionId()
    const res = await fetch(`/api/annotations?passageId=${pid}&sessionId=${sessionId}`)
    if (res.ok) {
      const data = await res.json()
      setAnnotations(data)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (!passageId) return
    setAnnotations([])
    setBody('')
    setSubmitError(null)
    fetchAnnotations(passageId)
  }, [passageId, fetchAnnotations])

  async function handleVote(annotationId: string, hasVoted: boolean) {
    const sessionId = getSessionId()
    const res = await fetch('/api/votes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ annotationId, sessionId, action: hasVoted ? 'remove' : 'add' }),
    })
    if (res.ok && passageId) {
      await fetchAnnotations(passageId)
    }
  }

  async function handleSubmit() {
    if (!body.trim() || !passageId) return
    setSubmitting(true)
    setSubmitError(null)
    const sessionId = getSessionId()
    const res = await fetch('/api/annotations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        passageId,
        documentId,
        annotatorName: name.trim() || 'Anonymous',
        frame,
        body: body.trim(),
        sessionId,
        selectedText: selectedText ?? undefined,
      }),
    })
    if (res.ok) {
      setBody('')
      setName('')
      onAnnotationAdded?.(passageId, frame)
      await fetchAnnotations(passageId)
    } else {
      const err = await res.json().catch(() => ({}))
      setSubmitError(err.error || 'Something went wrong. Please try again.')
    }
    setSubmitting(false)
  }

  if (!passageId) {
    return (
      <div className="panel" id="main-panel">
        <div className="panel-header">
          <strong>The tavern floor</strong>
          <span>Select a passage to open the debate</span>
        </div>
        <div className="default-state">
          <p>Click any underlined passage in the text to read annotations and add your voice to the debate.</p>
        </div>
      </div>
    )
  }

  // Pin contested-frame annotations to top, then sort by votes within each group
  const sortedAnnotations = [...annotations].sort((a, b) => {
    if (a.frame === 'contest' && b.frame !== 'contest') return -1
    if (b.frame === 'contest' && a.frame !== 'contest') return 1
    return b.voteCount - a.voteCount
  })

  return (
    <div className="panel" id="main-panel">
      <div className="panel-header">
        <span>
          {loading
            ? 'Loading…'
            : `${annotations.length} annotation${annotations.length !== 1 ? 's' : ''}${annotations.length === 0 ? ' — be the first' : ''}`}
        </span>
        <button className="share-btn" onClick={handleShare} title="Copy link to passage">
          {copied ? 'Copied!' : 'Share ↗'}
        </button>
      </div>

      {isContested && !loading && annotations.length > 0 && (
        <div className="faceoff-banner">
          <span className="faceoff-icon">⚔</span>
          <span>Contested reading — annotators disagree on this passage</span>
        </div>
      )}

      <div className="ann-list">
        {loading && <div className="loading-state">Loading annotations…</div>}

        {!loading && annotations.length === 0 && (
          <div className="empty-state">
            No annotations yet on this passage.<br />Start the debate below.
          </div>
        )}

        {!loading && sortedAnnotations.map((ann) => {
          const imageSlug = getAnnotatorImageSlug(ann.annotatorName)
          return (
            <div key={ann.id} className="ann-item">
              <div className="ann-header">
                {imageSlug && (
                  <div className="ann-portrait-wrap">
                    <img
                      src={`/images/annotators/${imageSlug}.png`}
                      alt={ann.annotatorName}
                      className="ann-portrait"
                      onError={(e) => {
                        const el = e.currentTarget
                        el.style.display = 'none'
                        el.parentElement!.style.display = 'none'
                      }}
                    />
                  </div>
                )}
                <div className="ann-byline">
                  <div className={`ann-frame frame-${ann.frame}`}>{FRAME_LABELS[ann.frame]}</div>
                  <div className="ann-author">
                    —{' '}
                    {ann.annotatorName !== 'Anonymous' ? (
                      <Link href={`/annotators/${ann.annotatorSlug ?? nameToSlug(ann.annotatorName)}`}>
                        {ann.annotatorName}
                      </Link>
                    ) : (
                      ann.annotatorName
                    )}
                    {ann.isFeatured && <span className="featured-badge">Featured</span>}
                  </div>
                </div>
              </div>
              {ann.selectedText && (
                <blockquote className="ann-quote">&ldquo;{ann.selectedText}&rdquo;</blockquote>
              )}
              <div className="ann-text">{ann.body}</div>
              <div className="ann-votes">
                <button
                  className={`vote-btn${ann.hasVoted ? ' voted' : ''}`}
                  onClick={() => handleVote(ann.id, ann.hasVoted)}
                >
                  {ann.hasVoted ? '✓' : '+'} {ann.voteCount}
                </button>
              </div>
              <ReplyThread annotationId={ann.id} initialCount={ann.replyCount} />
            </div>
          )
        })}
      </div>

      <div className="add-form">
        <label htmlFor="frame-select">Frame</label>
        <select
          id="frame-select"
          value={frame}
          onChange={(e) => setFrame(e.target.value as FrameType)}
        >
          {Object.entries(FRAME_LABELS).map(([k, v]) => (
            <option key={k} value={k}>{v}</option>
          ))}
        </select>

        <label htmlFor="author-name">Your name</label>
        <input
          type="text"
          id="author-name"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="annotation-text">Your annotation</label>
        <textarea
          id="annotation-text"
          placeholder="What does this passage mean to you? What have you learned about it?"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        {submitError && (
          <div style={{ fontSize: '12px', color: '#791F1F', marginBottom: '8px' }}>{submitError}</div>
        )}

        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={submitting || !body.trim()}
        >
          {submitting ? 'Adding…' : 'Add to the debate'}
        </button>
      </div>
    </div>
  )
}
