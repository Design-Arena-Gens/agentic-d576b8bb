import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fullstack Developer Portfolio',
  description: 'Modern portfolio showcasing fullstack development projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-950 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
