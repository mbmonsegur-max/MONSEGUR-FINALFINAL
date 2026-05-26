import type { Metadata } from 'next'
import { dmSans, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { DM_Sans, Lora } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'MONSEGURO - María Monsegur | Productora de Seguros',
  description: 'Contratá tu seguro con confianza y sin dudas. Soy María Monsegur, tu productora de seguros. Asesoramiento personalizado en seguros de auto, moto, hogar, comercio y más.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${lora.variable}`}>
      <body className={`${dmSans.variable} ${lora.variable}`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
