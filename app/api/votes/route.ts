import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  if (!supabase) return NextResponse.json({ error: 'Database not configured' }, { status: 503 })
  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })

  const { annotationId, replyId, floorPostId, floorReplyId, sessionId, action } = body

  if ((!annotationId && !replyId && !floorPostId && !floorReplyId) || !sessionId || !['add', 'remove'].includes(action)) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Floor reply vote
  if (floorReplyId) {
    if (action === 'add') {
      const { error } = await supabase.from('floor_reply_votes').insert({ reply_id: floorReplyId, session_id: sessionId })
      if (error && error.code !== '23505') return NextResponse.json({ error: error.message }, { status: 500 })
    } else {
      const { error } = await supabase.from('floor_reply_votes').delete().eq('reply_id', floorReplyId).eq('session_id', sessionId)
      if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ ok: true })
  }

  // Floor post vote
  if (floorPostId) {
    if (action === 'add') {
      const { error } = await supabase.from('floor_post_votes').insert({ post_id: floorPostId, session_id: sessionId })
      if (error && error.code !== '23505') return NextResponse.json({ error: error.message }, { status: 500 })
    } else {
      const { error } = await supabase.from('floor_post_votes').delete().eq('post_id', floorPostId).eq('session_id', sessionId)
      if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ ok: true })
  }

  // Annotation reply vote
  if (replyId) {
    if (action === 'add') {
      const { error } = await supabase
        .from('reply_votes')
        .insert({ reply_id: replyId, session_id: sessionId })
      if (error && error.code !== '23505') {
        return NextResponse.json({ error: error.message }, { status: 500 })
      }
    } else {
      const { error } = await supabase
        .from('reply_votes')
        .delete()
        .eq('reply_id', replyId)
        .eq('session_id', sessionId)
      if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ ok: true })
  }

  // Annotation vote
  if (action === 'add') {
    const { error } = await supabase
      .from('votes')
      .insert({ annotation_id: annotationId, session_id: sessionId })
    if (error && error.code !== '23505') {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
  } else {
    const { error } = await supabase
      .from('votes')
      .delete()
      .eq('annotation_id', annotationId)
      .eq('session_id', sessionId)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
