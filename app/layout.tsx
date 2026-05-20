import type { Metadata } from 'next'
import './globals.css'
import SiteHeader from '@/components/SiteHeader'

export const metadata: Metadata = {
  title: {
    default: 'The Green Dragon Tavern',
    template: '%s — The Green Dragon Tavern',
  },
  description: 'America\'s founding documents, annotated. The Declaration, the Constitution, the Bill of Rights — debated, contested, and kept alive.',
  metadataBase: new URL('https://greendragontavern.ai'),
  openGraph: {
    title: 'The Green Dragon Tavern',
    description: 'America\'s founding documents, annotated. Where Americans still argue.',
    url: 'https://greendragontavern.ai',
    siteName: 'The Green Dragon Tavern',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Green Dragon Tavern',
    description: 'America\'s founding documents, annotated. Where Americans still argue.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <footer>
          The Green Dragon Tavern — Boston, MA, est. 1654. &nbsp;·&nbsp; greendragontavern.ai &nbsp;·&nbsp; Where Americans still argue.
        </footer>
      </body>
    </html>
  )
}
