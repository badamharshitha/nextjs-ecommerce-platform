import './globals.css'
import type { Metadata } from 'next'
import { Providers } from '@/components/providers'

export const metadata: Metadata = {
  title: 'Next.js E-commerce Platform',
  description: 'A production-ready ecommerce storefront built with Next.js, TypeScript, Tailwind CSS, and accessible UI.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Next.js E-commerce Platform',
    description: 'A production-ready ecommerce storefront built with Next.js, TypeScript, Tailwind CSS, and accessible UI.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
