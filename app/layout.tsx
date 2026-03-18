import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Cinzel, DM_Sans } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { GlobalFooter } from '@/components/global-footer'

/* ─────────────────────────────────────────
   FONT DEFINITIONS
───────────────────────────────────────── */

/* Display / Serif — Cormorant Garamond */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
  preload: true,
})

/* Ceremonial Caps — Cinzel */
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-cinzel',
  preload: true,
})

/* Body — DM Sans */
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-body',
  preload: true,
})

/* ─────────────────────────────────────────
   METADATA
───────────────────────────────────────── */

export const metadata: Metadata = {
  metadataBase: new URL('https://etatasmakam.com'),

  title: {
    default: "ETAT ASMAKAM — Authentic Karnataka Cuisine",
    template: "%s | ETAT ASMAKAM",
  },

  description:
    "Experience the royal heritage of Karnataka cuisine. Signature rice baths, traditional dosas, aromatic biryanis — every plate tells a story of lineage and love.",

  keywords: [
    "Karnataka cuisine",
    "authentic Indian restaurant",
    "biryani Bengaluru",
    "dosa",
    "rice bath",
    "Karnataka royal food",
    "South Indian fine dining",
    "heritage restaurant Bengaluru",
    "traditional Karnataka food",
  ],

  authors: [{ name: "ETAT ASMAKAM", url: "https://etatasmakam.com" }],
  creator: "ETAT ASMAKAM",
  publisher: "ETAT ASMAKAM",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://etatasmakam.com",
    siteName: "ETAT ASMAKAM",
    title: "ETAT ASMAKAM — Authentic Karnataka Cuisine",
    description:
      "Heritage flavors, royal presentation. Taste authentic Karnataka cuisine crafted with generations of tradition and passion.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ETAT ASMAKAM — Authentic Karnataka Royal Cuisine",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ETAT ASMAKAM — Authentic Karnataka Cuisine",
    description: "Heritage flavors, royal presentation. Where Karnataka's culinary legacy meets every plate.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#C8973A' },
    ],
  },

  manifest: '/site.webmanifest',

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

  alternates: {
    canonical: '/',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: dark)',  color: '#130C05' },
    { media: '(prefers-color-scheme: light)', color: '#130C05' },
  ],
  colorScheme: 'dark',
}

/* ─────────────────────────────────────────
   STRUCTURED DATA
───────────────────────────────────────── */

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "ETAT ASMAKAM",
  "description": "Authentic Karnataka royal cuisine featuring signature rice baths, traditional dosas, and aromatic biryanis.",
  "servesCuisine": ["Karnataka", "South Indian", "Indian"],
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, Credit Card, UPI",
  "url": "https://etatasmakam.com",
  "image": "https://etatasmakam.com/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  }
}

/* ─────────────────────────────────────────
   ROOT LAYOUT
───────────────────────────────────────── */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const fontClasses = [
    cormorant.variable,
    cinzel.variable,
    dmSans.variable,
  ].join(' ')

  return (
    <html
      lang="en-IN"
      className={fontClasses}
      suppressHydrationWarning
    >
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for analytics */}
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
      </head>

      <body className="antialiased min-h-screen noise-overlay">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-stone-brown-warm focus:text-sacred-white focus:border focus:border-golden-beige focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>

        {/* Page wrapper — handles stacking context */}
        <div className="relative isolate min-h-screen flex flex-col">
          {/* Main content */}
          <main id="main-content" className="relative z-0 flex-1">
            {children}
          </main>

          {/* Footer sits below page content */}
          <GlobalFooter />
        </div>

        {/* Analytics */}
        <Analytics />
      </body>
    </html>
  )
}