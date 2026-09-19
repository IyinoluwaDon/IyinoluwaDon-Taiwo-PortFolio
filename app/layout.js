import { Inter, Manrope } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata = {
  title: 'Iyinoluwa Don-Taiwo | ML Engineer & Data Scientist',
  description: 'Portfolio of Iyinoluwa Don-Taiwo, a Machine Learning Engineer, Data Scientist, and AI Researcher building intelligent systems and data-driven products.',
  metadataBase: new URL('https://iyinoluwa-don-taiwo.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Iyinoluwa Don-Taiwo | ML Engineer & Data Scientist',
    description: 'Machine learning systems, data products, and cloud-native APIs.',
    type: 'website',
    url: 'https://iyinoluwa-don-taiwo.vercel.app/',
    siteName: 'Iyinoluwa Don-Taiwo',
    images: [{ url: '/opengraph-image.svg', width: 1200, height: 630, alt: 'Iyinoluwa Don-Taiwo portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iyinoluwa Don-Taiwo | ML Engineer & Data Scientist',
    description: 'Machine learning systems, data products, and cloud-native APIs.',
    images: ['/opengraph-image.svg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        {children}
        <Script
          src="https://cdn.botpress.cloud/webchat/v5.0/inject.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://files.bpcontent.cloud/2026/09/19/18/20260919180504-D8YF0M0G.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}