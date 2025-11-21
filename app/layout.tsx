import type { Metadata } from "next"
import { Lexend } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import Header from "@/components/header"

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Supply Chain Guru AI | Supply Chain Intelligence for e-commerce merchants",
  description:
    "Guaranteed 5X ROI on inventory optimization and demand forecasting for peak season. Expert ML-powered supply chain consulting + custom Shopify apps.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/logo-supply-chain-guru/icon-transparent.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-supply-chain-guru/icon-original.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/logo-supply-chain-guru/icon-original.png", sizes: "180x180", type: "image/png" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${lexend.variable} antialiased`}>
        <Header />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
