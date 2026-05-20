'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import type { Reply } from '@/lib/types'
import { nameToSlug } from '@/lib/utils'

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
  annotationId: string
  initialCount: number
}

export default function ReplyThread({ annotationId, initialCount }: Props) {
  const [open, setOpen] = useState(false)
  const [replies, setReplies] = useState<Reply[]>([])
  const [loaded, setLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [body, setBody] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [count, setCount] = useState(initialCount)

  const fetchReplies = useCallback(async () => {
    setLoading(true)
    const sessionId = getSessionId()
    const res = await fetch(`/api/replies?annotationId=${annotationId}&sessionId=${sessionId}`)
    if (res.ok) {
      const data = await res.json()
      setReplies(data)
      setCount(data.length)
    }
    setLoading(false)
    setLoaded(true)
  }, [annotationId])

  function handleToggle() {
    if (!open && !loaded) fetchReplies()
    setOpen((v) => !v)
  }

  async function handleVote(replyId: string, hasVoted: boolean) {
    const sessionId = getSessionId()
    const res = await fetch('/api/votes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ replyId, sessionId, action: hasVoted ? 'remove' : 'add' }),
    })
    if (res.ok) fetchReplies()
  }

  async function handleSubmit() {
    if (!body.trim()) return
    setSubmitting(true)
    const res = await fetch('/api/replies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        annotationId,
        authorName: name.trim() || 'Anonymous',
        body: body.trim(),
      }),
    })
    if (res.ok) {
      setBody('')
      setName('')
      await fetchReplies()
    }
    setSubmitting(false)
  }

  return (
    <div className="reply-thread">
      <button className="reply-toggle" onClick={handleToggle}>
        {open ? '▲' : '▼'}{' '}
        {count > 0
          ? `${count} ${count === 1 ? 'reply' : 'replies'}`
          : 'Reply'}
      </button>

      {open && (
        <div className="reply-body">
          {loading && <div className="reply-loading">Loading…</div>}

          {!loading && replies.map((r) => (
            <div key={r.id} className="reply-item">
              <div className="reply-text">{r.body}</div>
              <div className="reply-meta">
                —{' '}
                {r.authorName !== 'Anonymous' ? (
                  <Link href={`/annotators/${r.authorSlug ?? nameToSlug(r.authorName)}`}>
                    {r.authorName}
                  </Link>
                ) : (
                  r.authorName
                )}
                <button
                  className={`reply-vote-btn${r.hasVoted ? ' voted' : ''}`}
                  onClick={() => handleVote(r.id, r.hasVoted)}
                >
                  {r.hasVoted ? '✓' : '+'} {r.voteCount}
                </button>
              </div>
            </div>
          ))}

          {!loading && replies.length === 0 && (
            <div className="reply-empty">Be the first to reply.</div>
          )}

          <div className="reply-form">
            <input
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="reply-input"
            />
            <textarea
              placeholder="Your reply…"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="reply-textarea"
            />
            <button
              className="reply-submit"
              onClick={handleSubmit}
              disabled={submitting || !body.trim()}
            >
              {submitting ? 'Posting…' : 'Post reply'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
