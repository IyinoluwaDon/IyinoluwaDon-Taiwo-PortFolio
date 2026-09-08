import { Inter, Manrope } from 'next/font/google'
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
  description: 'Portfolio of Iyinoluwa Don-Taiwo, a Computer Science student building machine learning systems, data products, and cloud-native APIs.',
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
      <body className={`${inter.variable} ${manrope.variable}`}>{children}</body>
    </html>
  )
}
