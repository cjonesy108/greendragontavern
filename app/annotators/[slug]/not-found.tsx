import Link from 'next/link'

export default function AnnotatorNotFound() {
  return (
    <main style={{ maxWidth: 500, margin: '5rem auto', padding: '0 2rem', textAlign: 'center' }}>
      <div style={{ fontFamily: 'IM Fell English, Georgia, serif', fontSize: '22px', marginBottom: '1rem' }}>
        No annotator found
      </div>
      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
        This annotator does not have a public profile, or the link may be incorrect.
      </p>
      <Link href="/" style={{ color: 'var(--amber)', fontSize: '14px' }}>← Return to the tavern</Link>
    </main>
  )
}
