'use client'
import { useState } from "react"

export default function PdfGridClient({ pdfs }: { pdfs: any[] }) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  if (!pdfs.length) {
    return <div className="text-center py-8 sm:py-12 md:py-16 w-full text-gray-600">कोई पीडीएफ़ नहीं मिली</div>
  }
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full">
        {pdfs.map((pdf: any) => (
          <div key={pdf._id} className="flex flex-col bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group w-full rounded-xl overflow-hidden">
            <div className="aspect-[3/4] flex items-center justify-center bg-orange-100">
              <span className="text-5xl text-orange-400">📄</span>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-bold text-base md:text-lg line-clamp-2 text-gray-900 mb-2 group-hover:text-orange-600 transition-colors leading-tight">
                {pdf.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mb-2 line-clamp-3">{pdf.description}</p>
            </div>
            <div className="p-4 pt-0 flex flex-col gap-2 sm:flex-row sm:gap-3">
              <button
                onClick={() => setPreviewUrl(pdf.pdfUrl)}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg transition-all duration-200 text-xs sm:text-sm md:text-base h-8 sm:h-9 md:h-10 w-full flex items-center justify-center rounded"
              >
                पढ़ें
              </button>
              <a
                href={pdf.pdfUrl}
                download
                className="flex-1 border border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-300 transition-all duration-200 text-xs sm:text-sm md:text-base h-8 sm:h-9 md:h-10 w-full flex items-center justify-center rounded"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
      {previewUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <span className="font-bold text-lg">PDF Preview</span>
              <button onClick={() => setPreviewUrl(null)} className="text-orange-500 hover:text-orange-700 text-2xl font-bold">&times;</button>
            </div>
            <div className="flex-1 overflow-auto">
              <iframe
                src={previewUrl}
                title="PDF Preview"
                className="w-full h-[70vh]"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
} 