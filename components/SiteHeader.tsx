import Link from 'next/link'

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="site-logo" href="/">
        The Green Dragon Tavern <em>— where Americans still argue</em>
      </Link>
      <div className="site-tagline">greendragontavern.ai</div>
    </header>
  )
}
