'use client'

import { useState } from 'react'
import AnnotationPanel from './AnnotationPanel'
import type { DocumentData, AnnotationCounts } from '@/lib/types'

interface Props {
  doc: DocumentData
  initialCounts: AnnotationCounts
}

export default function DocumentViewer({ doc, initialCounts }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null)
  const [counts, setCounts] = useState<AnnotationCounts>(initialCounts)

  function selectPassage(id: string, text: string) {
    setSelectedId(id)
    setSelectedLabel(text.length > 60 ? text.slice(0, 57) + '…' : text)
  }

  function onAnnotationAdded(passageId: string) {
    setCounts((prev) => ({ ...prev, [passageId]: (prev[passageId] || 0) + 1 }))
  }

  return (
    <div className="body-grid">
      <div className="text-col">
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
                return (
                  <span
                    key={i}
                    className={`annotatable${count > 0 ? ' has-annotations' : ''}${isActive ? ' active' : ''}`}
                    onClick={() => selectPassage(seg.id!, seg.text)}
                  >
                    {seg.text}
                    {count > 0 && <span className="ann-count">{count}</span>}
                  </span>
                )
              })}
            </p>
          </div>
        ))}
      </div>

      <div className="panel-col">
        <AnnotationPanel
          passageId={selectedId}
          passageLabel={selectedLabel}
          documentId={doc.id}
          onAnnotationAdded={onAnnotationAdded}
        />
      </div>
    </div>
  )
}
