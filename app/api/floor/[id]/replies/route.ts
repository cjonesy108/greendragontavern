import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!supabase) return NextResponse.json([], { status: 200 })
  const { id } = await params
  const { searchParams } = req.nextUrl
  const sessionId = searchParams.get('sessionId') || ''

  const { data: replies, error } = await supabase
    .from('floor_replies')
    .select('*')
    .eq('post_id', id)
    .order('created_at', { ascending: true })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const replyIds = (replies ?? []).map((r) => r.id)
  let votedIds: Set<string> = new Set()
  if (replyIds.length > 0 && sessionId) {
    const { data: votes } = await supabase
      .from('floor_reply_votes')
      .select('reply_id')
      .in('reply_id', replyIds)
      .eq('session_id', sessionId)
    for (const v of votes ?? []) votedIds.add(v.reply_id)
  }

  return NextResponse.json(
    (replies ?? []).map((r) => ({
      id: r.id,
      postId: r.post_id,
      authorName: r.author_name,
      body: r.body,
      voteCount: r.vote_count,
      hasVoted: votedIds.has(r.id),
      createdAt: r.created_at,
    }))
  )
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!supabase) return NextResponse.json({ error: 'Database not configured' }, { status: 503 })
  const { id } = await params
  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })

  const { body: text, authorName } = body
  if (!text?.trim()) return NextResponse.json({ error: 'Body is required' }, { status: 400 })

  const { data, error } = await supabase
    .from('floor_replies')
    .insert({
      post_id: id,
      author_name: String(authorName || 'Anonymous').slice(0, 120),
      body: String(text).slice(0, 4000),
    })
    .select('id')
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ id: data.id }, { status: 201 })
}
