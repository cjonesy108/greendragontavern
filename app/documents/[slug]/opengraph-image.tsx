import { ImageResponse } from 'next/og'
import { getDocument } from '@/lib/content'

export const runtime = 'edge'
export const alt = 'The Green Dragon Tavern'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doc = getDocument(slug)
  const title = doc?.title ?? 'The Green Dragon Tavern'
  const subtitle = doc?.subtitle ?? ''
  const date = doc?.dateDescription ?? ''

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
        {/* Border */}
        <div style={{
          position: 'absolute',
          inset: 0,
          border: '1px solid rgba(186,117,23,0.25)',
          display: 'flex',
        }} />

        {/* Top rule */}
        <div style={{
          position: 'absolute',
          top: '48px',
          left: '80px',
          right: '80px',
          height: '1px',
          background: 'rgba(186,117,23,0.35)',
          display: 'flex',
        }} />

        {/* Bottom rule */}
        <div style={{
          position: 'absolute',
          bottom: '48px',
          left: '80px',
          right: '80px',
          height: '1px',
          background: 'rgba(186,117,23,0.35)',
          display: 'flex',
        }} />

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 80px',
          textAlign: 'center',
          gap: '0px',
        }}>
          {/* Site name eyebrow */}
          <div style={{
            fontSize: '13px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#BA7517',
            marginBottom: '32px',
          }}>
            The Green Dragon Tavern
          </div>

          {/* Document title */}
          <div style={{
            fontSize: title.length > 30 ? '52px' : '68px',
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            color: '#F0EAD8',
            lineHeight: 1.15,
            marginBottom: '24px',
          }}>
            {title}
          </div>

          {/* Rule */}
          <div style={{
            width: '60px',
            height: '1px',
            background: '#BA7517',
            marginBottom: '24px',
            display: 'flex',
          }} />

          {/* Subtitle + date */}
          {subtitle && (
            <div style={{
              fontSize: '20px',
              color: '#A89F88',
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              marginBottom: '8px',
            }}>
              {subtitle}
            </div>
          )}
          {date && (
            <div style={{
              fontSize: '16px',
              color: '#6B6353',
              fontFamily: 'Georgia, serif',
            }}>
              {date}
            </div>
          )}
        </div>

        {/* URL */}
        <div style={{
          position: 'absolute',
          bottom: '28px',
          fontSize: '12px',
          color: '#4A4435',
          letterSpacing: '0.1em',
        }}>
          greendragontavern.ai
        </div>
      </div>
    ),
    { ...size }
  )
}
