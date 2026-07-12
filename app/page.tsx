import Link from 'next/link'
import Image from 'next/image'
import { DOCUMENTS } from '@/lib/content'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']

interface TrendingPassage {
  passageId: string
  documentId: string
  docTitle: string
  docSlug: string
  passageText: string
  score: number
  votes: number
  count: number
}

async function getTrending(): Promise<TrendingPassage[]> {
  if (!supabase) return []
  const { data } = await supabase
    .from('annotations')
    .select('passage_id, document_id, vote_count')

  if (!data) return []

  const scores: Record<string, { documentId: string; votes: number; count: number }> = {}
  for (const ann of data) {
    if (!scores[ann.passage_id]) {
      scores[ann.passage_id] = { documentId: ann.document_id, votes: 0, count: 0 }
    }
    scores[ann.passage_id].votes += ann.vote_count || 0
    scores[ann.passage_id].count += 1
  }

  return Object.entries(scores)
    .map(([passageId, { documentId, votes, count }]) => {
      const doc = DOCUMENTS.find(d => d.id === documentId)
      let passageText = passageId
      if (doc) {
        for (const section of doc.sections) {
          for (const seg of section.content) {
            if (seg.id === passageId) {
              passageText = seg.text
              break
            }
          }
        }
      }
      return {
        passageId,
        documentId,
        docTitle: doc?.title ?? documentId,
        docSlug: doc?.slug ?? documentId,
        passageText,
        score: votes + count * 2,
        votes,
        count,
      }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
}

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

interface FeaturedDebate {
  id: string
  title: string
  body: string
  replyCount: number
}

async function getFeaturedDebate(): Promise<FeaturedDebate | null> {
  if (!supabase) return null
  const { data } = await supabase
    .from('floor_posts')
    .select('id, title, body, reply_count')
    .eq('is_featured', true)
    .order('created_at', { ascending: false })
    .limit(1)
    .single()
  if (!data) return null
  return { id: data.id, title: data.title, body: data.body, replyCount: data.reply_count }
}

export default async function HomePage() {
  const [counts, featured, trending] = await Promise.all([getDocumentCounts(), getFeaturedDebate(), getTrending()])
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

      {/* ── Tonight's Debate ── */}
      {featured && (
        <section className="tonights-debate">
          <div className="tonights-debate-inner">
            <div className="tonights-debate-eyebrow">Tonight&rsquo;s Debate</div>
            <h2 className="tonights-debate-title">{featured.title}</h2>
            <p className="tonights-debate-excerpt">
              {featured.body.split('\n')[0].slice(0, 180)}{featured.body.split('\n')[0].length > 180 ? '…' : ''}
            </p>
            <Link href={`/floor#${featured.id}`} className="tonights-debate-cta">
              Join the argument →
              {featured.replyCount > 0 && (
                <span className="tonights-debate-count">{featured.replyCount} {featured.replyCount === 1 ? 'reply' : 'replies'}</span>
              )}
            </Link>
          </div>
        </section>
      )}

      {/* ── Trending ── */}
      {trending.length > 0 && (
        <section className="trending-section">
          <div className="trending-header">
            <div className="trending-label">Debated passages</div>
            <div className="landing-canon-rule" />
          </div>
          <div className="trending-grid">
            {trending.map(t => (
              <Link
                key={t.passageId}
                href={`/documents/${t.docSlug}?passage=${t.passageId}`}
                className="trending-card"
              >
                <div className="trending-card-doc">{t.docTitle}</div>
                <blockquote className="trending-card-text">
                  &ldquo;{t.passageText.length > 120 ? t.passageText.slice(0, 117) + '…' : t.passageText}&rdquo;
                </blockquote>
                <div className="trending-card-meta">
                  {t.count} annotation{t.count !== 1 ? 's' : ''}
                  {t.votes > 0 && <> &middot; {t.votes} vote{t.votes !== 1 ? 's' : ''}</>}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

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
