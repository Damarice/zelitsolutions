import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppBubble from '@/components/WhatsAppBubble'

const raleway = Raleway({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Zelitsolutions - Professional IT Solutions & Services in Kenya',
  description: 'Comprehensive IT solutions including website development, managed IT services, computer hardware sales, domain registration, email services, and structured cabling. Trusted by 500+ businesses.',
  keywords: ['IT services', 'web development', 'managed IT', 'network solutions', 'domain registration', 'cabling', 'Kenya'],
  authors: [{ name: 'Zelit Solutions Ltd' }],
  creator: 'Zelit Solutions Ltd',
  publisher: 'Zelit Solutions Ltd',
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://zelitsolutions.com',
    siteName: 'Zelit Solutions Ltd',
    title: 'Zelitsolutions - Professional IT Solutions & Services',
    description: 'Transform your business with comprehensive IT solutions. Website development, managed services, networking, and more.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Zelit Solutions IT Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zelitsolutions - Professional IT Solutions',
    description: 'Transform your business with comprehensive IT solutions',
    images: ['https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=630&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppBubble />
      </body>
    </html>
  )
}
