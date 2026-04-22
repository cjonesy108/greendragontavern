import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  if (!supabase) return NextResponse.json({ error: 'Database not configured' }, { status: 503 })
  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })

  const { annotationId, sessionId, action } = body

  if (!annotationId || !sessionId || !['add', 'remove'].includes(action)) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

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
