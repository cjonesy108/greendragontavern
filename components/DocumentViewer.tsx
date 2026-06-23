'use client'

import { useState, useRef, useEffect } from 'react'
import AnnotationPanel from './AnnotationPanel'
import SelectionPopover from './SelectionPopover'
import { selectionToPassageId } from '@/lib/utils'
import type { DocumentData, AnnotationCounts, ContestedPassages } from '@/lib/types'

interface Props {
  doc: DocumentData
  initialCounts: AnnotationCounts
  initialContested: ContestedPassages
}

export default function DocumentViewer({ doc, initialCounts, initialContested }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null)
  const [selectedText, setSelectedText] = useState<string | null>(null)
  const [counts, setCounts] = useState<AnnotationCounts>(initialCounts)
  const [contested, setContested] = useState<ContestedPassages>(initialContested)
  const textColRef = useRef<HTMLDivElement>(null)

  function selectPassage(id: string, text: string) {
    setSelectedId(id)
    setSelectedLabel(text.length > 60 ? text.slice(0, 57) + '…' : text)
    setSelectedText(null) // pre-defined passage, no free-form text
  }

  function selectFreeform(text: string) {
    const id = selectionToPassageId(text)
    setSelectedId(id)
    setSelectedLabel(text.length > 60 ? text.slice(0, 57) + '…' : text)
    setSelectedText(text)
  }

  function onAnnotationAdded(passageId: string, frame?: string) {
    setCounts((prev) => ({ ...prev, [passageId]: (prev[passageId] || 0) + 1 }))
    if (frame === 'contest') setContested((prev) => ({ ...prev, [passageId]: true }))
  }

  // On mobile, scroll to the panel whenever a passage is selected
  useEffect(() => {
    if (!selectedId) return
    if (typeof window === 'undefined' || window.innerWidth >= 768) return
    setTimeout(() => {
      document.getElementById('main-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }, [selectedId])

  return (
    <div className="body-grid">
      <div className="text-col" ref={textColRef}>
        {doc.sections.map((section, si) => (
          <div key={si} className="passage-block">
            <div className="section-label">{section.label}</div>
            <p className="passage">
              {section.content.map((seg, i) => {
                if (!seg.id) {
                  return <span key={i}>{seg.text}</span>
                }
                const count = counts[seg.id] || 0
                const isActive = selectedId === seg.id
                const isContested = !!contested[seg.id]
                return (
                  <span
                    key={i}
                    className={`annotatable${count > 0 ? ' has-annotations' : ''}${isActive ? ' active' : ''}${isContested ? ' contested' : ''}`}
                    onClick={() => selectPassage(seg.id!, seg.text)}
                  >
                    {seg.text}
                    {isContested && <span className="contested-badge" title="Contested reading">⚔</span>}
                    {count > 0 && <span className="ann-count">{count}</span>}
                  </span>
                )
              })}
            </p>
          </div>
        ))}
      </div>

      <SelectionPopover containerRef={textColRef} onAnnotate={selectFreeform} />

      <div className="panel-col">
        <AnnotationPanel
          passageId={selectedId}
          passageLabel={selectedLabel}
          selectedText={selectedText}
          documentId={doc.id}
          isContested={selectedId ? !!contested[selectedId] : false}
          onAnnotationAdded={onAnnotationAdded}
        />
      </div>
    </div>
  )
}
