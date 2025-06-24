import './globals.css'

import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { Arimo } from 'next/font/google'
import localFont from 'next/font/local'

const arimo = Arimo({
  subsets: ['latin'],
  variable: '--font-arimo',
})

const biryani = localFont({
  src: '../../public/fonts/Biryani.ttf',
  variable: '--font-biryani',
})

const glacial = localFont({
  src: '../../public/fonts/GlacialIndifference.otf',
  variable: '--font-glacial',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Eventos Aesas',
    default: 'Eventos Aesas',
  },
  description: 'Agenda de eventos da Aesas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${glacial.variable} ${biryani.variable} ${arimo.variable} antialiased`}
      >
        <div className="mx-auto flex min-h-dvh w-full flex-col 2xl:max-w-[1200px]">
          {children}
        </div>
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID!} />
    </html>
  )
}
