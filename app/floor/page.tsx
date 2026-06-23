export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { supabase } from '@/lib/supabase'
import FloorFeed from '@/components/FloorFeed'
import type { FloorPost } from '@/lib/types'

export const metadata: Metadata = {
  title: 'The Tavern Floor',
  description: 'Open debate on America\'s founding documents. Ask questions, take positions, argue with strangers.',
}

async function getPosts(): Promise<FloorPost[]> {
  if (!supabase) return []
  const { data } = await supabase
    .from('floor_posts')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(50)

  return (data ?? [])
    .map((p) => ({
      id: p.id,
      title: p.title,
      body: p.body,
      authorName: p.author_name,
      authorSlug: p.author_slug ?? null,
      voteCount: p.vote_count,
      replyCount: p.reply_count,
      hasVoted: false,
      createdAt: p.created_at,
    }))
    .sort((a, b) => (b.voteCount + b.replyCount * 2) - (a.voteCount + a.replyCount * 2))
}

export default async function FloorPage() {
  const posts = await getPosts()

  return (
    <main>
      <div className="floor-main">
        <div className="floor-header">
          <h1 className="floor-title">The Tavern Floor</h1>
          <p className="floor-desc">
            Open debate — not tied to any passage. Ask questions, take positions, argue with strangers.
            Cite the texts. Name names. Keep it interesting.
          </p>
        </div>
        <FloorFeed initialPosts={posts} />
      </div>
    </main>
  )
}
