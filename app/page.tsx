import Link from 'next/link'
import Image from 'next/image'
import { DOCUMENTS } from '@/lib/content'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']

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
  const total = Object.values(counts).reduce((a, b) => a + b, 0)

  return (
    <main>
      {/* ── Full-viewport painting hero with text overlaid ── */}
      <section className="landing-hero">
        <div className="landing-painting-wrap">
          <Image
            src="/trumbull.jpg"
            alt="Declaration of Independence (1819) by John Trumbull"
            fill
            className="landing-painting-img"
            priority
            sizes="100vw"
          />
          <div className="landing-painting-fade" />
        </div>

        <div className="landing-hero-content">
          <div className="landing-eyebrow">Boston &middot; est. 1654</div>

          <h1 className="landing-h1">
            The documents<br />that made us.
          </h1>

          <div className="landing-ornament">✦</div>

          <p className="landing-sub">
            The Declaration. The Constitution. The Bill of Rights.<br />
            Read them, argue over them, keep them alive &mdash; as their authors intended.
          </p>

          {total > 0 && (
            <div className="landing-stat">
              {total.toLocaleString()} annotation{total !== 1 ? 's' : ''} and counting.
            </div>
          )}

          <a href="#documents" className="landing-cta">
            Enter the tavern →
          </a>

          <div className="landing-painting-credit">
            <em>Declaration of Independence</em> (1819), John Trumbull &middot; Public domain
          </div>
        </div>
      </section>

      {/* ── Canon ── */}
      <section className="landing-canon" id="documents">
        <div className="landing-canon-header">
          <div className="landing-canon-label">The Canon</div>
          <div className="landing-canon-rule" />
        </div>

        <div className="landing-doc-list">
          {DOCUMENTS.map((doc, i) => {
            const count = counts[doc.id] || 0
            return (
              <Link key={doc.id} href={`/documents/${doc.slug}`} className="landing-doc-row">
                <div className="landing-doc-numeral">{ROMAN[i]}</div>
                <div className="landing-doc-info">
                  <div className="landing-doc-title">{doc.title}</div>
                  <div className="landing-doc-meta">
                    {doc.dateDescription}
                    {count > 0 && (
                      <span className="landing-doc-count">
                        &nbsp;&middot;&nbsp;{count} annotation{count !== 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                </div>
                <div className="landing-doc-arrow">→</div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="landing-mission">
        <div className="landing-mission-rule" />
        <p>
          The original Green Dragon Tavern was where Boston&rsquo;s patriots gathered to argue
          about liberty &mdash; where the Sons of Liberty met, where the Tea Party was planned,
          where the Revolution took shape in argument and debate. This is where we continue
          that argument. Every generation must read these words for itself.
        </p>
      </section>
    </main>
  )
}
