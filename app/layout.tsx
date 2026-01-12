import type { Metadata } from 'next'
import { Oswald, Roboto } from 'next/font/google'
import './globals.css'

const oswald = Oswald({ 
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

const roboto = Roboto({ 
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Everston Home | Construction & Remodeling | Littleton, Colorado',
  description: 'All phases of construction and remodeling—structure, mechanicals, and finishes. Serving Littleton, Denver, and the Front Range. Licensed & Insured. Call (303) 242-4524.',
  keywords: 'construction, remodeling, contractor, Littleton, Colorado, Denver, kitchen remodel, bathroom remodel, electrical, windows, flooring',
  openGraph: {
    title: 'Everston Home | Construction & Remodeling',
    description: 'All phases of construction and remodeling. No job too big or too small.',
    url: 'https://everstonhome.com',
    siteName: 'Everston Home',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  )
}
