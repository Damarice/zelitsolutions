import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppBubble from '@/components/WhatsAppBubble'
import StructuredData from '@/components/StructuredData'

const raleway = Raleway({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Zelit Solutions Ltd - Professional IT Services & Web Development in Kenya',
  description: 'Transform your business with comprehensive IT solutions in Kenya. Website development, managed IT services, cybersecurity, structured cabling, domain registration, computer sales, and networking solutions for 500+ businesses.',
  keywords: [
    'IT services Kenya',
    'web development Kenya',
    'managed IT services',
    'cybersecurity solutions',
    'structured cabling',
    'network solutions',
    'domain registration Kenya',
    'computer hardware sales',
    'email services',
    'business IT support',
    'network infrastructure',
    'IT support Nairobi',
  ],
  authors: [{ name: 'Zelit Solutions Ltd', url: 'https://zelitsolutions.com' }],
  creator: 'Zelit Solutions Ltd',
  publisher: 'Zelit Solutions Ltd',
  metadataBase: new URL('https://zelitsolutions.com'),
  alternates: {
    canonical: 'https://zelitsolutions.com',
  },
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
    title: 'Zelit Solutions Ltd - Professional IT Services & Web Development',
    description: 'Transform your business with comprehensive IT solutions. Website development, managed services, networking, cybersecurity, and more. Trusted by 500+ businesses across Kenya.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Zelit Solutions IT Services',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zelit Solutions Ltd - Professional IT Services',
    description: 'Transform your business with comprehensive IT solutions. Website development, managed services, networking, and more.',
    images: ['https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=630&fit=crop'],
    creator: '@zelitsolutions',
    site: '@zelitsolutions',
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
      <head>
        <StructuredData />
      </head>
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
