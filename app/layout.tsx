import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ISTOS - Cryptocurrency Exchange Platform',
  description: 'Trade cryptocurrencies with confidence on ISTOS - A secure, MiCAR-compliant digital asset exchange',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/proxima-nova-2"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {/* MiCAR Compliance Banner */}
        <div className="bg-gradient-primary py-2 px-4 text-center text-sm font-semibold text-white">
          🇪🇺 MiCAR Compliant - EU-Regulated Cryptocurrency Exchange
        </div>
        {children}
      </body>
    </html>
  )
}
