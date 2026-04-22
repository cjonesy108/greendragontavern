import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  if (!supabase) return NextResponse.json({}, { status: 503 })
  const { searchParams } = req.nextUrl
  const passageId = searchParams.get('passageId')
  const documentId = searchParams.get('documentId')
  const annotatorSlug = searchParams.get('annotatorSlug')
  const sessionId = searchParams.get('sessionId') || ''

  // Counts for all passages in a document
  if (documentId && !passageId) {
    const { data, error } = await supabase
      .from('annotations')
      .select('passage_id, id')
      .eq('document_id', documentId)

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    const counts: Record<string, number> = {}
    for (const row of data ?? []) {
      counts[row.passage_id] = (counts[row.passage_id] || 0) + 1
    }
    return NextResponse.json(counts)
  }

  // All annotations by a specific annotator
  if (annotatorSlug) {
    const { data, error } = await supabase
      .from('annotations')
      .select('*, annotators!annotations_annotator_slug_fkey(is_featured, title)')
      .eq('annotator_slug', annotatorSlug)
      .order('created_at', { ascending: false })

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json(data ?? [])
  }

  // Annotations for a specific passage
  if (!passageId) return NextResponse.json({ error: 'passageId required' }, { status: 400 })

  const { data: anns, error } = await supabase
    .from('annotations')
    .select('*, annotators!annotations_annotator_slug_fkey(is_featured)')
    .eq('passage_id', passageId)
    .order('vote_count', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  // Fetch which ones this session has voted on
  const ids = (anns ?? []).map((a) => a.id)
  let votedIds: Set<string> = new Set()
  if (ids.length > 0 && sessionId) {
    const { data: votes } = await supabase
      .from('votes')
      .select('annotation_id')
      .in('annotation_id', ids)
      .eq('session_id', sessionId)
    for (const v of votes ?? []) votedIds.add(v.annotation_id)
  }

  const result = (anns ?? []).map((ann) => ({
    id: ann.id,
    passageId: ann.passage_id,
    documentId: ann.document_id,
    annotatorName: ann.annotator_name,
    annotatorSlug: ann.annotator_slug,
    isFeatured: ann.annotators?.is_featured ?? false,
    frame: ann.frame,
    body: ann.body,
    voteCount: ann.vote_count,
    hasVoted: votedIds.has(ann.id),
    createdAt: ann.created_at,
  }))

  return NextResponse.json(result)
}

export async function POST(req: NextRequest) {
  if (!supabase) return NextResponse.json({ error: 'Database not configured' }, { status: 503 })
  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })

  const { passageId, documentId, annotatorName, frame, body: text, sessionId, inviteToken } = body

  if (!passageId || !documentId || !frame || !text?.trim()) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const VALID_FRAMES = ['historical', 'legal', 'contemporary', 'personal', 'contest']
  if (!VALID_FRAMES.includes(frame)) {
    return NextResponse.json({ error: 'Invalid frame type' }, { status: 400 })
  }

  const safeName = String(annotatorName || 'Anonymous').slice(0, 120)
  const safeText = String(text).slice(0, 4000)

  // Resolve annotator slug (if invite token provided or name matches a featured annotator)
  let annotatorSlug: string | null = null
  if (inviteToken) {
    const { data: ann } = await supabase
      .from('annotators')
      .select('slug, name')
      .eq('invite_token', inviteToken)
      .single()
    if (ann) annotatorSlug = ann.slug
  }

  const { data, error } = await supabase
    .from('annotations')
    .insert({
      passage_id: passageId,
      document_id: documentId,
      annotator_name: safeName,
      annotator_slug: annotatorSlug,
      frame,
      body: safeText,
    })
    .select('id')
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ id: data.id }, { status: 201 })
}
