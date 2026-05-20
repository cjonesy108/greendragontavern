import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  if (!supabase) return NextResponse.json([], { status: 200 })
  const { searchParams } = req.nextUrl
  const annotationId = searchParams.get('annotationId')
  const sessionId = searchParams.get('sessionId') || ''

  if (!annotationId) return NextResponse.json({ error: 'annotationId required' }, { status: 400 })

  const { data: replies, error } = await supabase
    .from('replies')
    .select('*, annotators!replies_author_slug_fkey(is_featured)')
    .eq('annotation_id', annotationId)
    .order('vote_count', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  // Fetch which ones this session has voted on
  const ids = (replies ?? []).map((r) => r.id)
  let votedIds: Set<string> = new Set()
  if (ids.length > 0 && sessionId) {
    const { data: votes } = await supabase
      .from('reply_votes')
      .select('reply_id')
      .in('reply_id', ids)
      .eq('session_id', sessionId)
    for (const v of votes ?? []) votedIds.add(v.reply_id)
  }

  const result = (replies ?? []).map((r) => ({
    id: r.id,
    annotationId: r.annotation_id,
    authorName: r.author_name,
    authorSlug: r.author_slug ?? null,
    body: r.body,
    voteCount: r.vote_count,
    hasVoted: votedIds.has(r.id),
    createdAt: r.created_at,
  }))

  return NextResponse.json(result)
}

export async function POST(req: NextRequest) {
  if (!supabase) return NextResponse.json({ error: 'Database not configured' }, { status: 503 })
  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })

  const { annotationId, authorName, body: text, inviteToken } = body

  if (!annotationId || !text?.trim()) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const safeName = String(authorName || 'Anonymous').slice(0, 120)
  const safeText = String(text).slice(0, 2000)

  let authorSlug: string | null = null
  if (inviteToken) {
    const { data: ann } = await supabase
      .from('annotators')
      .select('slug')
      .eq('invite_token', inviteToken)
      .single()
    if (ann) authorSlug = ann.slug
  }

  const { data, error } = await supabase
    .from('replies')
    .insert({
      annotation_id: annotationId,
      author_name: safeName,
      author_slug: authorSlug,
      body: safeText,
    })
    .select('id')
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ id: data.id }, { status: 201 })
}
