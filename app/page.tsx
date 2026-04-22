import Link from 'next/link'
import { DOCUMENTS } from '@/lib/content'

export default function HomePage() {
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
        {DOCUMENTS.map((doc) => (
          <Link key={doc.id} href={`/documents/${doc.slug}`} className="doc-card">
            <div className="doc-card-title">
              {doc.title} <span className="doc-card-arrow">→</span>
            </div>
            <div className="doc-card-meta">{doc.dateDescription}</div>
            <div className="doc-card-desc">{doc.description}</div>
          </Link>
        ))}
      </section>
    </main>
  )
}
