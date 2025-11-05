import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "ETAT ASMAKAM - Authentic Karnataka Cuisine",
  description: "Experience the royal taste of authentic Karnataka cuisine. Specializing in signature rice baths, traditional dosas, and authentic biryanis.",
  keywords: "Karnataka cuisine, Indian restaurant, authentic food, biryani, dosa, rice bath",
  authors: [{ name: "ETAT ASMAKAM" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: "#2A1810",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`font-sans antialiased bg-stone-brown text-sacred-white min-h-screen`}>
        <div className="relative z-0">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
