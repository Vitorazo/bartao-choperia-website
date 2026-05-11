import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BARTÃO Choperia - Experiência Premium',
  description: 'Descubra a melhor experiência em choperia e gastronomia. BARTÃO: onde a qualidade encontra a autenticidade.',
  keywords: 'choperia, bar, restaurante, drinks, cervejas artesanais',
  openGraph: {
    title: 'BARTÃO Choperia',
    description: 'Experiência premium em gastronomia e bebidas',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-barto-dark text-barto-light font-sans">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
