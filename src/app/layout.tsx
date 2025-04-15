import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Buyer Next.js App',
  description: 'Basic Next.js application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
} 