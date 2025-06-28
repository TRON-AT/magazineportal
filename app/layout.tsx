import type React from "react"
import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "साईं सृजन पटल | देवभूमि उत्तराखंड की सांस्कृतिक विरासत",
  description: "उत्तराखंड की समृद्ध संस्कृति और विरासत को जन-जन तक पहुंचाने का मिशन - साईं सृजन पटल",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        <div className="relative flex min-h-screen flex-col bg-white">
          <SiteHeader />
          <div className="flex-1 w-full overflow-x-hidden">{children}</div>
          <SiteFooter />
        </div>
        <Toaster />
      </body>
    </html>
  )
}
