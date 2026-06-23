import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  if (!supabase) return NextResponse.json([], { status: 200 })
  const { searchParams } = req.nextUrl
  const sessionId = searchParams.get('sessionId') || ''
  const sort = searchParams.get('sort') || 'hot'

  const { data: posts, error } = await supabase
    .from('floor_posts')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(50)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const ids = (posts ?? []).map((p) => p.id)
  let votedIds: Set<string> = new Set()
  if (ids.length > 0 && sessionId) {
    const { data: votes } = await supabase
      .from('floor_post_votes')
      .select('post_id')
      .in('post_id', ids)
      .eq('session_id', sessionId)
    for (const v of votes ?? []) votedIds.add(v.post_id)
  }

  let result = (posts ?? []).map((p) => ({
    id: p.id,
    title: p.title,
    body: p.body,
    authorName: p.author_name,
    authorSlug: p.author_slug ?? null,
    voteCount: p.vote_count,
    replyCount: p.reply_count,
    hasVoted: votedIds.has(p.id),
    createdAt: p.created_at,
  }))

  if (sort === 'hot') {
    result = result.sort((a, b) => {
      const scoreA = a.voteCount + a.replyCount * 2
      const scoreB = b.voteCount + b.replyCount * 2
      return scoreB - scoreA
    })
  }

  return NextResponse.json(result)
}

export async function POST(req: NextRequest) {
  if (!supabase) return NextResponse.json({ error: 'Database not configured' }, { status: 503 })
  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })

  const { title, body: text, authorName } = body

  if (!title?.trim() || !text?.trim()) {
    return NextResponse.json({ error: 'Title and body are required' }, { status: 400 })
  }

  const safeTitle = String(title).slice(0, 200)
  const safeName = String(authorName || 'Anonymous').slice(0, 120)
  const safeText = String(text).slice(0, 8000)

  const { data, error } = await supabase
    .from('floor_posts')
    .insert({ title: safeTitle, body: safeText, author_name: safeName })
    .select('id')
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ id: data.id }, { status: 201 })
}
