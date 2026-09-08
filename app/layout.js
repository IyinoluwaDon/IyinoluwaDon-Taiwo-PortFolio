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
  metadataBase: new URL('https://iyinoluwa-don-taiwo.vercel.app'),
  openGraph: {
    title: 'Iyinoluwa Don-Taiwo | ML Engineer & Data Scientist',
    description: 'Machine learning systems, data products, and cloud-native APIs.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>{children}</body>
    </html>
  )
}
