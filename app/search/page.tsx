import Link from 'next/link'
import type { Metadata } from 'next'
import { DOCUMENTS } from '@/lib/content'
import { supabase } from '@/lib/supabase'
import { nameToSlug } from '@/lib/utils'
import type { FrameType } from '@/lib/types'

export const dynamic = 'force-dynamic'

const FRAME_LABELS: Record<FrameType, string> = {
  historical: 'Historical context',
  legal: 'Legal interpretation',
  contemporary: 'Contemporary echo',
  personal: 'Personal reflection',
  contest: 'Contested reading',
}

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ q?: string }> }): Promise<Metadata> {
  const { q } = await searchParams
  return { title: q ? `"${q}" — Search — The Green Dragon Tavern` : 'Search — The Green Dragon Tavern' }
}

interface PassageResult {
  docId: string
  docTitle: string
  docSlug: string
  passageId: string
  text: string
  sectionLabel: string
}

interface AnnotationResult {
  id: string
  passageId: string
  documentId: string
  annotatorName: string
  frame: string
  body: string
}

interface AnnotatorResult {
  name: string
  slug: string
  count: number
}

function searchPassages(query: string): PassageResult[] {
  const q = query.toLowerCase()
  const results: PassageResult[] = []
  for (const doc of DOCUMENTS) {
    for (const section of doc.sections) {
      for (const seg of section.content) {
        if (seg.id && seg.text.toLowerCase().includes(q)) {
          results.push({
            docId: doc.id,
            docTitle: doc.title,
            docSlug: doc.slug,
            passageId: seg.id,
            text: seg.text,
            sectionLabel: section.label,
          })
        }
      }
    }
  }
  return results.slice(0, 12)
}

function highlight(text: string, query: string): string {
  if (!query) return text
  const idx = text.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return text.length > 160 ? text.slice(0, 157) + '…' : text
  const start = Math.max(0, idx - 60)
  const end = Math.min(text.length, idx + query.length + 100)
  return (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '')
}

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams
  const query = q?.trim() ?? ''

  let passageResults: PassageResult[] = []
  let annotationResults: AnnotationResult[] = []
  let annotatorResults: AnnotatorResult[] = []

  if (query) {
    passageResults = searchPassages(query)

    if (supabase) {
      const [annRes, nameRes] = await Promise.all([
        supabase
          .from('annotations')
          .select('id, passage_id, document_id, annotator_name, frame, body')
          .ilike('body', `%${query}%`)
          .order('vote_count', { ascending: false })
          .limit(15),
        supabase
          .from('annotations')
          .select('annotator_name, document_id, passage_id')
          .ilike('annotator_name', `%${query}%`)
          .limit(30),
      ])

      annotationResults = (annRes.data ?? []).map(r => ({
        id: r.id,
        passageId: r.passage_id,
        documentId: r.document_id,
        annotatorName: r.annotator_name,
        frame: r.frame,
        body: r.body,
      }))

      // Dedupe annotators and count their appearances
      const annotatorMap: Record<string, { name: string; count: number }> = {}
      for (const r of nameRes.data ?? []) {
        if (!annotatorMap[r.annotator_name]) {
          annotatorMap[r.annotator_name] = { name: r.annotator_name, count: 0 }
        }
        annotatorMap[r.annotator_name].count += 1
      }
      annotatorResults = Object.values(annotatorMap).map(({ name, count }) => ({
        name,
        slug: nameToSlug(name),
        count,
      }))
    }
  }

  const totalResults = passageResults.length + annotationResults.length + annotatorResults.length

  return (
    <main className="search-page">
      <div className="search-page-header">
        <form className="search-page-form" action="/search" method="GET">
          <input
            className="search-page-input"
            type="search"
            name="q"
            defaultValue={query}
            placeholder="Search passages, annotations, scholars…"
            autoFocus
          />
          <button className="search-page-btn" type="submit">Search</button>
        </form>
      </div>

      {query && (
        <div className="search-summary">
          {totalResults === 0
            ? `No results for "${query}"`
            : `${totalResults} result${totalResults !== 1 ? 's' : ''} for "${query}"`}
        </div>
      )}

      {!query && (
        <div className="search-empty">
          Search across 9 founding documents, their annotations, and the scholars who wrote them.
        </div>
      )}

      {annotatorResults.length > 0 && (
        <section className="search-section">
          <h2 className="search-section-label">Scholars</h2>
          <div className="search-annotator-list">
            {annotatorResults.map(a => (
              <Link key={a.slug} href={`/annotators/${a.slug}`} className="search-annotator-chip">
                {a.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {passageResults.length > 0 && (
        <section className="search-section">
          <h2 className="search-section-label">Passages</h2>
          <div className="search-result-list">
            {passageResults.map(r => (
              <Link
                key={r.passageId}
                href={`/documents/${r.docSlug}?passage=${r.passageId}`}
                className="search-result-item"
              >
                <div className="search-result-meta">{r.docTitle} &middot; {r.sectionLabel}</div>
                <div className="search-result-text">&ldquo;{highlight(r.text, query)}&rdquo;</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {annotationResults.length > 0 && (
        <section className="search-section">
          <h2 className="search-section-label">Annotations</h2>
          <div className="search-result-list">
            {annotationResults.map(r => {
              const doc = DOCUMENTS.find(d => d.id === r.documentId)
              return (
                <Link
                  key={r.id}
                  href={`/documents/${r.documentId}?passage=${r.passageId}`}
                  className="search-result-item"
                >
                  <div className="search-result-meta">
                    <span className={`ann-frame frame-${r.frame}`}>{FRAME_LABELS[r.frame as FrameType]}</span>
                    {' '}&middot; {r.annotatorName} &middot; {doc?.title ?? r.documentId}
                  </div>
                  <div className="search-result-text">{highlight(r.body, query)}</div>
                </Link>
              )
            })}
          </div>
        </section>
      )}
    </main>
  )
}
