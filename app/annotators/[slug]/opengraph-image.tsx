import { ImageResponse } from 'next/og'
import { supabase } from '@/lib/supabase'

export const runtime = 'edge'
export const alt = 'Scholar — The Green Dragon Tavern'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

function slugToName(slug: string): string {
  return slug.split('-').map((w: string) =>
    w.length === 1 ? w.toUpperCase() + '.' : w.charAt(0).toUpperCase() + w.slice(1)
  ).join(' ')
}

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  let name = slugToName(slug)
  let annotationCount = 0

  if (supabase) {
    const [annotatorRes, countRes] = await Promise.all([
      supabase.from('annotators').select('name').eq('slug', slug).single(),
      supabase.from('annotations').select('id', { count: 'exact', head: true }).eq('annotator_slug', slug),
    ])
    if (annotatorRes.data?.name) name = annotatorRes.data.name
    annotationCount = countRes.count ?? 0
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#16160E',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(186,117,23,0.25)', display: 'flex' }} />
        <div style={{ position: 'absolute', top: '48px', left: '80px', right: '80px', height: '1px', background: 'rgba(186,117,23,0.35)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: '48px', left: '80px', right: '80px', height: '1px', background: 'rgba(186,117,23,0.35)', display: 'flex' }} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 80px', textAlign: 'center' }}>
          <div style={{ fontSize: '13px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#BA7517', marginBottom: '32px' }}>
            The Green Dragon Tavern
          </div>

          <div style={{ fontSize: '16px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B6353', marginBottom: '20px', fontFamily: 'Georgia, serif' }}>
            Scholar
          </div>

          <div style={{ fontSize: name.length > 20 ? '56px' : '72px', fontFamily: 'Georgia, serif', fontStyle: 'italic', color: '#F0EAD8', lineHeight: 1.1, marginBottom: '24px' }}>
            {name}
          </div>

          <div style={{ width: '60px', height: '1px', background: '#BA7517', marginBottom: '24px', display: 'flex' }} />

          {annotationCount > 0 && (
            <div style={{ fontSize: '20px', color: '#A89F88', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              {annotationCount} annotation{annotationCount !== 1 ? 's' : ''} on the founding documents
            </div>
          )}
        </div>

        <div style={{ position: 'absolute', bottom: '28px', fontSize: '12px', color: '#4A4435', letterSpacing: '0.1em' }}>
          greendragontavern.ai
        </div>
      </div>
    ),
    { ...size }
  )
}
