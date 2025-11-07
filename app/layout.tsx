import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Connell Commercial - Licensed General Contractor | San Antonio, Texas",
  description:
    "Veteran-owned general contractor delivering superior commercial construction services in San Antonio, Texas. Licensed, insured, and committed to building the future while honoring the past.",
  keywords:
    "commercial construction, San Antonio construction, veteran owned business, Texas construction company, general contractor, licensed contractor, ground up construction, interior finish outs",
  authors: [{ name: "Connell Commercial" }],
  creator: "Connell Commercial",
  publisher: "Connell Commercial",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://connellcommercial.com",
    title: "Connell Commercial - Licensed General Contractor | San Antonio, Texas",
    description:
      "Veteran-owned general contractor delivering superior commercial construction services in San Antonio, Texas. Licensed, insured, and committed to building the future while honoring the past.",
    siteName: "Connell Commercial",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connell Commercial - Licensed General Contractor | San Antonio, Texas",
    description:
      "Veteran-owned general contractor delivering superior commercial construction services in San Antonio, Texas.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/connell-logo-icon.png" />
        <link rel="apple-touch-icon" href="/images/connell-logo-icon.png" />
      </head>
      <body className={`${inter.className} ${playfair.variable}`}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
