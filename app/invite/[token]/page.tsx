import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import InviteForm from '@/components/InviteForm'

interface PageProps {
  params: Promise<{ token: string }>
}

export default async function InvitePage({ params }: PageProps) {
  const { token } = await params

  const { data: annotator } = await supabase
    .from('annotators')
    .select('id, name, slug, title, bio, is_featured')
    .eq('invite_token', token)
    .single()

  if (!annotator) notFound()

  return (
    <main className="invite-main">
      <div className="invite-header">
        <h1>Welcome to the tavern floor, {annotator.name.split(' ')[0]}.</h1>
        <p>
          You&rsquo;ve been invited to annotate America&rsquo;s founding documents for{' '}
          <em>The Green Dragon Tavern</em>. Your annotations will be published with a Featured badge
          and linked to your profile before the July 4th, 2026 launch.
        </p>
        {annotator.title && (
          <p style={{ marginTop: '0.5rem', fontSize: '13px', color: 'var(--text-tertiary)' }}>
            {annotator.title}
          </p>
        )}
      </div>

      <InviteForm annotator={annotator} inviteToken={token} />
    </main>
  )
}
