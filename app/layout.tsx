import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppBubble from '@/components/WhatsAppBubble'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Zelitsolutions - IT Solutions & Services',
  description: 'Website Development, Managed IT Services, Sale of Computers & Accessories, Domain Registration & Email Services, Structured Cabling & Networking Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>
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
