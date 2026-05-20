import Link from 'next/link'
import { DOCUMENTS } from '@/lib/content'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

async function getDocumentCounts(): Promise<Record<string, number>> {
  if (!supabase) return {}
  const { data } = await supabase.from('annotations').select('document_id')
  if (!data) return {}
  const counts: Record<string, number> = {}
  for (const row of data) {
    counts[row.document_id] = (counts[row.document_id] || 0) + 1
  }
  return counts
}

export default async function HomePage() {
  const counts = await getDocumentCounts()

  return (
    <main>
      <section className="home-hero">
        <h1>America&rsquo;s founding documents,<br />annotated by Americans.</h1>
        <p>
          The Declaration, the Constitution, the Bill of Rights — read as their authors intended
          them to be read: debated, contested, and kept alive by each generation.
        </p>
        <p style={{ marginTop: '0.5rem', fontSize: '13px' }}>
          Select a document to begin.
        </p>
      </section>

      <section className="home-documents">
        {DOCUMENTS.map((doc) => {
          const count = counts[doc.id] || 0
          return (
            <Link key={doc.id} href={`/documents/${doc.slug}`} className="doc-card">
              <div className="doc-card-title">
                {doc.title} <span className="doc-card-arrow">→</span>
              </div>
              <div className="doc-card-meta">{doc.dateDescription}</div>
              <div className="doc-card-desc">{doc.description}</div>
              {count > 0 && (
                <div className="doc-card-count">
                  {count} annotation{count !== 1 ? 's' : ''}
                </div>
              )}
            </Link>
          )
        })}
      </section>
    </main>
  )
}
