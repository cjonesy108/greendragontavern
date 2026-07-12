'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [q, setQ] = useState('')
  const [expanded, setExpanded] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = q.trim()
    if (trimmed) {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`)
      setExpanded(false)
    }
  }

  function handleIconClick() {
    setExpanded(true)
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  return (
    <form className={`search-form${expanded ? ' expanded' : ''}`} onSubmit={handleSubmit}>
      <button type="button" className="search-icon-btn" onClick={handleIconClick} aria-label="Search">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="10.5" y1="10.5" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
      <input
        ref={inputRef}
        className="search-input"
        type="search"
        placeholder="Search passages, annotations…"
        value={q}
        onChange={e => setQ(e.target.value)}
        onBlur={() => { if (!q) setExpanded(false) }}
      />
    </form>
  )
}
