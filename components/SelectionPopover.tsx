'use client'

import { useEffect, useState, useCallback } from 'react'

interface PopoverState {
  text: string
  x: number
  y: number
}

interface Props {
  containerRef: React.RefObject<HTMLDivElement | null>
  onAnnotate: (text: string) => void
}

export default function SelectionPopover({ containerRef, onAnnotate }: Props) {
  const [popover, setPopover] = useState<PopoverState | null>(null)

  const handleSelectionChange = useCallback(() => {
    const selection = window.getSelection()
    if (!selection || selection.isCollapsed) {
      setPopover(null)
      return
    }

    const text = selection.toString().trim()
    if (text.length < 8) {
      setPopover(null)
      return
    }

    // Only trigger inside the text column
    const range = selection.getRangeAt(0)
    const container = containerRef.current
    if (!container || !container.contains(range.commonAncestorContainer)) {
      setPopover(null)
      return
    }

    const rect = range.getBoundingClientRect()
    setPopover({
      text,
      x: (rect.left + rect.right) / 2,
      y: rect.top - 12,
    })
  }, [containerRef])

  useEffect(() => {
    document.addEventListener('mouseup', handleSelectionChange)
    document.addEventListener('touchend', handleSelectionChange)
    return () => {
      document.removeEventListener('mouseup', handleSelectionChange)
      document.removeEventListener('touchend', handleSelectionChange)
    }
  }, [handleSelectionChange])

  if (!popover) return null

  return (
    <div
      style={{
        position: 'fixed',
        left: popover.x,
        top: popover.y,
        transform: 'translate(-50%, -100%)',
        zIndex: 200,
        pointerEvents: 'auto',
      }}
    >
      <button
        onMouseDown={(e) => {
          e.preventDefault() // prevent selection from clearing
          const text = popover.text
          setPopover(null)
          window.getSelection()?.removeAllRanges()
          onAnnotate(text)
        }}
        style={{
          background: 'var(--amber)',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '5px 12px',
          fontSize: '12px',
          fontFamily: 'Spectral, serif',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        ✏ Annotate this
      </button>
      {/* little arrow */}
      <div style={{
        width: 0,
        height: 0,
        borderLeft: '6px solid transparent',
        borderRight: '6px solid transparent',
        borderTop: '6px solid var(--amber)',
        margin: '0 auto',
      }} />
    </div>
  )
}
