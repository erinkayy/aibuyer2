import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Le Jardin - Design 1',
  description: 'Elegant plant and flower shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 