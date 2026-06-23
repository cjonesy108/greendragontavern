import Link from 'next/link'
import Image from 'next/image'

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="site-logo" href="/">
        <Image
          src="/logo.png"
          alt="Green Dragon Tavern"
          height={48}
          width={48}
          style={{ objectFit: 'contain' }}
        />
        <span>
          The Green Dragon Tavern <em>— where Americans still argue</em>
        </span>
      </Link>
      <nav className="site-nav">
        <Link href="/floor" className="site-nav-link">The Floor</Link>
      </nav>
      <div className="site-tagline">greendragontavern.ai</div>
    </header>
  )
}
