export const dynamic = 'force-dynamic'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getDocument, DOCUMENTS } from '@/lib/content'
import { supabase } from '@/lib/supabase'
import DocumentViewer from '@/components/DocumentViewer'
import type { AnnotationCounts } from '@/lib/types'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const doc = getDocument(slug)
  if (!doc) return {}
  return { title: `${doc.title} — The Green Dragon Tavern` }
}

async function getAnnotationCounts(documentId: string): Promise<AnnotationCounts> {
  if (!supabase) return {}
  const { data } = await supabase
    .from('annotations')
    .select('passage_id')
    .eq('document_id', documentId)

  const counts: AnnotationCounts = {}
  for (const row of data ?? []) {
    counts[row.passage_id] = (counts[row.passage_id] || 0) + 1
  }
  return counts
}

export default async function DocumentPage({ params }: PageProps) {
  const { slug } = await params
  const doc = getDocument(slug)
  if (!doc) notFound()

  const counts = await getAnnotationCounts(doc.id)

  return (
    <main>
      <nav className="doc-nav">
        <div className="doc-nav-inner">
          {DOCUMENTS.map((d) => (
            <Link
              key={d.id}
              href={`/documents/${d.slug}`}
              className={`doc-nav-link${d.slug === slug ? ' active' : ''}`}
            >
              {d.title}
            </Link>
          ))}
        </div>
      </nav>

      <div className="main">
        <div className="doc-header">
          <div className="doc-title">{doc.title}</div>
          <div className="doc-meta">{doc.subtitle} · {doc.dateDescription}</div>
          <div className="doc-hint">Click any underlined passage to read and add annotations</div>
        </div>

        <DocumentViewer doc={doc} initialCounts={counts} />
      </div>
    </main>
  )
}
