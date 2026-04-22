import type { Metadata } from 'next'
import './globals.css'
import SiteHeader from '@/components/SiteHeader'

export const metadata: Metadata = {
  title: 'The Green Dragon Tavern',
  description: 'America\'s founding documents, annotated. Where Americans still argue.',
  openGraph: {
    title: 'The Green Dragon Tavern',
    description: 'America\'s founding documents, annotated.',
    url: 'https://greendragontavern.ai',
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
