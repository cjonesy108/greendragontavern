import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'The Green Dragon Tavern'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
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
        {/* Subtle vignette border */}
        <div style={{
          position: 'absolute',
          inset: 0,
          border: '1px solid rgba(186,117,23,0.25)',
          borderRadius: '0px',
          display: 'flex',
        }} />

        {/* Decorative top rule */}
        <div style={{
          position: 'absolute',
          top: '48px',
          left: '80px',
          right: '80px',
          height: '1px',
          background: 'rgba(186,117,23,0.35)',
          display: 'flex',
        }} />

        {/* Decorative bottom rule */}
        <div style={{
          position: 'absolute',
          bottom: '48px',
          left: '80px',
          right: '80px',
          height: '1px',
          background: 'rgba(186,117,23,0.35)',
          display: 'flex',
        }} />

        {/* Main content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0px',
          padding: '0 80px',
          textAlign: 'center',
        }}>
          {/* Eyebrow */}
          <div style={{
            fontSize: '13px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#BA7517',
            marginBottom: '28px',
            fontFamily: 'Georgia, serif',
          }}>
            Boston · est. 1654
          </div>

          {/* Title */}
          <div style={{
            fontSize: '78px',
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            color: '#F0EAD8',
            lineHeight: 1.1,
            marginBottom: '28px',
          }}>
            The Green Dragon Tavern
          </div>

          {/* Rule */}
          <div style={{
            width: '60px',
            height: '1px',
            background: '#BA7517',
            marginBottom: '28px',
            display: 'flex',
          }} />

          {/* Tagline */}
          <div style={{
            fontSize: '24px',
            color: '#A89F88',
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            lineHeight: 1.5,
          }}>
            America&apos;s founding documents, annotated.
          </div>

          <div style={{
            fontSize: '18px',
            color: '#6B6353',
            fontFamily: 'Georgia, serif',
            marginTop: '12px',
          }}>
            Where Americans still argue.
          </div>
        </div>

        {/* URL */}
        <div style={{
          position: 'absolute',
          bottom: '28px',
          fontSize: '12px',
          color: '#4A4435',
          letterSpacing: '0.1em',
          fontFamily: 'Georgia, serif',
        }}>
          greendragontavern.ai
        </div>
      </div>
    ),
    { ...size }
  )
}
