import { Suspense } from "react"
import PdfGridClient from "@/components/pdf-grid-client"

export const metadata = {
  title: "All PDFs | Regional Magazine Portal",
  description: "Browse all uploaded PDFs",
}

async function fetchPdfs() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  const res = await fetch(`${baseUrl}/api/pdfs`, { cache: "no-store" })
  if (!res.ok) throw new Error("Failed to fetch PDFs")
  return res.json()
}

export default async function PdfsPage() {
  const pdfs = await fetchPdfs()
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="container w-full py-6 sm:py-8 md:py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 px-3 sm:px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight">
            सभी पीडीएफ
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
            सभी अपलोड की गई पीडीएफ़ यहाँ देखें और डाउनलोड करें
          </p>
          <div className="mx-auto h-1 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-orange-500 to-amber-500 mb-6 sm:mb-8 md:mb-12"></div>
        </div>
        {/* PDFs Grid */}
        <div className="w-full px-3 sm:px-4">
          <Suspense fallback={<div>Loading...</div>}>
            <PdfGridClient pdfs={pdfs} />
          </Suspense>
        </div>
      </div>
    </div>
  )
} 