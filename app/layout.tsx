import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] })

export const metadata: Metadata = {
  title: "MINIMAL - Natural Textile Fiber Sport Shorts",
  description: "Sustainable performance wear crafted from natural fibers. Coming September 2025.",
  keywords: ["organic clothing", "sustainable sportswear", "natural textile", "bananatex", "minimal"],
  authors: [{ name: "MINIMAL" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  openGraph: {
    title: "MINIMAL - Natural Textile Fiber Sport Shorts",
    description: "Sustainable performance wear crafted from natural fibers. Coming September 2025.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

