import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { supabase } from '@/lib/supabase'
import { getDocument } from '@/lib/content'
import type { FrameType } from '@/lib/types'

const FRAME_LABELS: Record<FrameType, string> = {
  historical: 'Historical context',
  legal: 'Legal interpretation',
  contemporary: 'Contemporary echo',
  personal: 'Personal reflection',
  contest: 'Contested reading',
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  if (!supabase) return {}
  const { data } = await supabase.from('annotators').select('name').eq('slug', slug).single()
  if (!data) return {}
  return { title: `${data.name} — The Green Dragon Tavern` }
}

async function getAnnotatorData(slug: string) {
  if (!supabase) return null

  // Try featured annotators table first
  const { data: annotator } = await supabase
    .from('annotators')
    .select('*')
    .eq('slug', slug)
    .single()

  if (annotator) {
    const { data: annotations } = await supabase
      .from('annotations')
      .select('*')
      .eq('annotator_slug', slug)
      .order('vote_count', { ascending: false })
    return { annotator, annotations: annotations ?? [] }
  }

  // Fall back: find annotations where the name slugifies to match
  const namePattern = slug.replace(/-/g, ' ')
  const { data: annotations } = await supabase
    .from('annotations')
    .select('*')
    .ilike('annotator_name', namePattern)
    .order('vote_count', { ascending: false })

  if (!annotations || annotations.length === 0) return null

  return {
    annotator: {
      name: annotations[0].annotator_name as string,
      slug,
      title: null,
      bio: null,
      is_featured: false,
    },
    annotations,
  }
}

export default async function AnnotatorPage({ params }: PageProps) {
  const { slug } = await params
  const result = await getAnnotatorData(slug)
  if (!result) notFound()

  const { annotator, annotations } = result

  // Group by document
  const byDoc: Record<string, typeof annotations> = {}
  for (const ann of annotations) {
    if (!byDoc[ann.document_id]) byDoc[ann.document_id] = []
    byDoc[ann.document_id].push(ann)
  }

  const totalVotes = annotations.reduce((sum, a) => sum + (a.vote_count || 0), 0)

  // Get passage label from content
  function getPassageText(documentId: string, passageId: string): string {
    const doc = getDocument(documentId)
    if (!doc) return passageId
    for (const section of doc.sections) {
      for (const seg of section.content) {
        if (seg.id === passageId) {
          const text = seg.text
          return text.length > 80 ? text.slice(0, 77) + '…' : text
        }
      }
    }
    return passageId
  }

  return (
    <main className="profile-main">
      <div style={{ marginBottom: '1rem' }}>
        <Link href="/" style={{ fontSize: '13px', color: 'var(--text-tertiary)', textDecoration: 'none' }}>
          ← Back to documents
        </Link>
      </div>

      <div className="profile-header">
        <div className="profile-name">
          {annotator.name}
          {annotator.is_featured && <span className="featured-badge">Featured</span>}
        </div>
        {annotator.title && <div className="profile-title">{annotator.title}</div>}
        {annotator.bio && <div className="profile-bio">{annotator.bio}</div>}
        <div className="profile-stats">
          <div className="profile-stat">
            <strong>{annotations.length}</strong>
            annotation{annotations.length !== 1 ? 's' : ''}
          </div>
          <div className="profile-stat">
            <strong>{totalVotes}</strong>
            total votes
          </div>
        </div>
      </div>

      {Object.keys(byDoc).length === 0 && (
        <div style={{ fontStyle: 'italic', color: 'var(--text-tertiary)', textAlign: 'center', padding: '3rem 0' }}>
          No annotations yet.
        </div>
      )}

      {Object.entries(byDoc).map(([docId, anns]) => {
        const doc = getDocument(docId)
        return (
          <div key={docId} className="profile-doc-group">
            <div className="profile-doc-title">
              <Link href={`/documents/${docId}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                {doc?.title ?? docId}
              </Link>
            </div>
            {anns.map((ann) => (
              <div key={ann.id} className="profile-ann-card">
                <div className="profile-ann-passage">
                  on &ldquo;{getPassageText(docId, ann.passage_id)}&rdquo;
                </div>
                <div className="profile-ann-body">{ann.body}</div>
                <div className="profile-ann-meta">
                  <span className={`ann-frame frame-${ann.frame}`}>{FRAME_LABELS[ann.frame as FrameType]}</span>
                  <span className="profile-ann-votes">
                    {ann.vote_count} vote{ann.vote_count !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )
      })}
    </main>
  )
}
