'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import type { FloorPost, FloorReply } from '@/lib/types'
import { nameToSlug } from '@/lib/utils'

function getSessionId(): string {
  if (typeof window === 'undefined') return ''
  let id = localStorage.getItem('gdt_session')
  if (!id) { id = crypto.randomUUID(); localStorage.setItem('gdt_session', id) }
  return id
}

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  const d = Math.floor(h / 24)
  if (d < 30) return `${d}d ago`
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

function PostCard({ post, onVote }: { post: FloorPost; onVote: (id: string, hasVoted: boolean) => void }) {
  const [expanded, setExpanded] = useState(false)
  const [replies, setReplies] = useState<FloorReply[]>([])
  const [repliesLoaded, setRepliesLoaded] = useState(false)
  const [replyName, setReplyName] = useState('')
  const [replyBody, setReplyBody] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [replyCount, setReplyCount] = useState(post.replyCount)

  const loadReplies = useCallback(async () => {
    const sessionId = getSessionId()
    const res = await fetch(`/api/floor/${post.id}/replies?sessionId=${sessionId}`)
    if (res.ok) {
      const data = await res.json()
      setReplies(data)
      setReplyCount(data.length)
    }
    setRepliesLoaded(true)
  }, [post.id])

  function handleToggle() {
    if (!expanded && !repliesLoaded) loadReplies()
    setExpanded(v => !v)
  }

  async function handleReplyVote(replyId: string, hasVoted: boolean) {
    const sessionId = getSessionId()
    await fetch('/api/votes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ floorReplyId: replyId, sessionId, action: hasVoted ? 'remove' : 'add' }),
    })
    loadReplies()
  }

  async function handleReplySubmit() {
    if (!replyBody.trim()) return
    setSubmitting(true)
    const res = await fetch(`/api/floor/${post.id}/replies`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ body: replyBody.trim(), authorName: replyName.trim() || 'Anonymous' }),
    })
    if (res.ok) {
      setReplyBody('')
      setReplyName('')
      await loadReplies()
    }
    setSubmitting(false)
  }

  return (
    <div className={`floor-post${expanded ? ' expanded' : ''}`}>
      <div className="floor-post-vote">
        <button
          className={`floor-vote-btn${post.hasVoted ? ' voted' : ''}`}
          onClick={() => onVote(post.id, post.hasVoted)}
        >
          ▲
        </button>
        <span className="floor-vote-count">{post.voteCount}</span>
      </div>

      <div className="floor-post-body">
        <div className="floor-post-title" onClick={handleToggle}>{post.title}</div>
        <div className="floor-post-meta">
          {post.authorName !== 'Anonymous' ? (
            <Link href={`/annotators/${post.authorSlug ?? nameToSlug(post.authorName)}`}>
              {post.authorName}
            </Link>
          ) : post.authorName}
          {' · '}{timeAgo(post.createdAt)}
        </div>

        {expanded && (
          <div className="floor-post-text">{post.body}</div>
        )}

        <button className="floor-reply-toggle" onClick={handleToggle}>
          {expanded ? '▲ hide' : `▼ ${replyCount > 0 ? `${replyCount} ${replyCount === 1 ? 'reply' : 'replies'}` : 'discuss'}`}
        </button>

        {expanded && (
          <div className="floor-replies">
            {replies.map(r => (
              <div key={r.id} className="floor-reply-item">
                <div className="floor-reply-text">{r.body}</div>
                <div className="floor-reply-meta">
                  — {r.authorName} · {timeAgo(r.createdAt)}
                  <button
                    className={`reply-vote-btn${r.hasVoted ? ' voted' : ''}`}
                    onClick={() => handleReplyVote(r.id, r.hasVoted)}
                  >
                    {r.hasVoted ? '✓' : '+'} {r.voteCount}
                  </button>
                </div>
              </div>
            ))}
            {repliesLoaded && replies.length === 0 && (
              <div className="floor-reply-empty">No replies yet. Start the argument.</div>
            )}
            <div className="floor-reply-form">
              <input
                className="reply-input"
                type="text"
                placeholder="Your name (optional)"
                value={replyName}
                onChange={e => setReplyName(e.target.value)}
              />
              <textarea
                className="reply-textarea"
                placeholder="Your reply…"
                value={replyBody}
                onChange={e => setReplyBody(e.target.value)}
              />
              <button
                className="reply-submit"
                onClick={handleReplySubmit}
                disabled={submitting || !replyBody.trim()}
              >
                {submitting ? 'Posting…' : 'Post reply'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

interface Props {
  initialPosts: FloorPost[]
}

export default function FloorFeed({ initialPosts }: Props) {
  const [posts, setPosts] = useState<FloorPost[]>(initialPosts)
  const [sort, setSort] = useState<'hot' | 'new'>('hot')
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [name, setName] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const fetchPosts = useCallback(async (s: 'hot' | 'new') => {
    const sessionId = getSessionId()
    const res = await fetch(`/api/floor?sort=${s}&sessionId=${sessionId}`)
    if (res.ok) setPosts(await res.json())
  }, [])

  function handleSort(s: 'hot' | 'new') {
    setSort(s)
    fetchPosts(s)
  }

  async function handleVote(postId: string, hasVoted: boolean) {
    const sessionId = getSessionId()
    await fetch('/api/votes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ floorPostId: postId, sessionId, action: hasVoted ? 'remove' : 'add' }),
    })
    fetchPosts(sort)
  }

  async function handleSubmit() {
    if (!title.trim() || !body.trim()) return
    setSubmitting(true)
    const res = await fetch('/api/floor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: title.trim(), body: body.trim(), authorName: name.trim() || 'Anonymous' }),
    })
    if (res.ok) {
      setTitle(''); setBody(''); setName(''); setShowForm(false)
      fetchPosts(sort)
    }
    setSubmitting(false)
  }

  return (
    <div className="floor-feed">
      <div className="floor-controls">
        <div className="floor-sort">
          <button className={`floor-sort-btn${sort === 'hot' ? ' active' : ''}`} onClick={() => handleSort('hot')}>Hot</button>
          <button className={`floor-sort-btn${sort === 'new' ? ' active' : ''}`} onClick={() => handleSort('new')}>New</button>
        </div>
        <button className="floor-new-btn" onClick={() => setShowForm(v => !v)}>
          {showForm ? 'Cancel' : '+ Open a debate'}
        </button>
      </div>

      {showForm && (
        <div className="floor-new-form">
          <input
            className="floor-title-input"
            type="text"
            placeholder="What's the question or argument?"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            className="floor-body-input"
            placeholder="Make your case… cite the text, name names, take a position."
            value={body}
            onChange={e => setBody(e.target.value)}
          />
          <div className="floor-form-footer">
            <input
              className="floor-name-input"
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={submitting || !title.trim() || !body.trim()}
            >
              {submitting ? 'Posting…' : 'Post to the floor'}
            </button>
          </div>
        </div>
      )}

      {posts.length === 0 && (
        <div className="floor-empty">
          <p>The floor is quiet. Be the first to open a debate.</p>
        </div>
      )}

      {posts.map(post => (
        <PostCard key={post.id} post={post} onVote={handleVote} />
      ))}
    </div>
  )
}
