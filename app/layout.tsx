import type { Metadata, Viewport } from 'next'
import { Caveat, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'
import { SiteAnalytics } from '@/components/SiteAnalytics'
import './globals.css'

// Fonts are self-hosted by next/font: no requests to Google from the visitor's browser.
const sans = Hanken_Grotesk({ subsets: ['latin', 'latin-ext'], weight: ['400', '600', '800'], variable: '--font-sans', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['500'], variable: '--font-mono', display: 'swap' })
const hand = Caveat({ subsets: ['latin'], weight: ['600'], variable: '--font-hand', display: 'swap' })

const description =
  'LUPA is a desktop app where your coding agent does the work, and you never lose sight of the code. Coming 2027.'

export const metadata: Metadata = {
  metadataBase: new URL('https://lupa.lobatools.com'),
  title: 'LUPA · Look closer.',
  description,
  openGraph: { siteName: 'LUPA', type: 'website', title: 'LUPA · Look closer.', description, url: '/' },
  twitter: { card: 'summary_large_image' }
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${hand.variable}`}>
      <body>
        {children}
        <SiteAnalytics />
      </body>
    </html>
  )
}
