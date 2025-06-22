"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"

// PDF document to display
const pdfDocument = {
	title: "Website Gallery Document",
	src: "/pdf/Website gallery doc.pdf",
	description: "उत्तराखंड की समृद्ध संस्कृति और परंपराओं का दस्तावेज़"
}

export default function GalleryPage() {
	const handleDownload = () => {
		const link = document.createElement('a')
		link.href = pdfDocument.src
		link.download = 'Website-Gallery-Document.pdf'
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
			<div className="container mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12">
				{/* Header */}
				<div className="text-center mb-8 sm:mb-12">
					<div className="flex items-center justify-center mb-4">
						<FileText className="h-8 w-8 sm:h-10 sm:w-10 text-orange-600 mr-3" />
						<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
							दस्तावेज़ गैलरी
						</h1>
					</div>
					<p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
						{pdfDocument.description}
					</p>
				</div>

				{/* PDF Document Card */}
				<div className="max-w-6xl mx-auto">
					<Card className="overflow-hidden border-0 shadow-lg bg-white">
						<CardContent className="p-4 sm:p-6">							{/* Document Header - Simple version */}
							<div className="text-center mb-6">
								<div className="flex items-center justify-center mb-2">
									<FileText className="h-6 w-6 text-orange-600 mr-3" />
									<h2 className="text-lg sm:text-xl font-semibold text-gray-800">
										{pdfDocument.title}
									</h2>
								</div>
								<p className="text-sm text-gray-600">
									{pdfDocument.description}
								</p>
							</div>{/* PDF Access Options */}
							<div className="w-full">
								{/* PDF Viewer with mobile optimization */}
								<div className="w-full bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
									{/* PDF Controls Header */}
									<div className="flex flex-col sm:flex-row items-center justify-between p-3 bg-white border-b border-gray-200 gap-2">
										<div className="flex items-center">
											<FileText className="h-5 w-5 text-orange-600 mr-2" />
											<span className="text-sm font-medium text-gray-700">PDF दस्तावेज़</span>
										</div>
										<Button
											onClick={handleDownload}
											variant="outline"
											size="sm"
											className="flex items-center gap-2 text-orange-600 border-orange-600 hover:bg-orange-50"
										>
											<Download className="h-4 w-4" />
											डाउनलोड करें
										</Button>
									</div>
									
									{/* PDF Iframe Container */}
									<div className="relative w-full">
										{/* Mobile optimized iframe */}
										<iframe
											src={`${pdfDocument.src}#toolbar=1&navpanes=0&scrollbar=1&page=1&view=FitH`}
											className="w-full border-0"
											style={{ 
												height: 'calc(100vh - 250px)', 
												minHeight: '500px',
												maxHeight: '800px'
											}}
											title={pdfDocument.title}
											loading="lazy"
											allow="fullscreen"
										/>
									</div>
									
									{/* Mobile Helper Text */}
									<div className="p-3 bg-orange-50 border-t border-orange-100 sm:hidden">
										<p className="text-xs text-orange-700 text-center">
											💡 बेहतर अनुभव के लिए फोन को लैंडस्केप मोड में घुमाएं या PDF डाउनलोड करें
										</p>
									</div>
								</div>
								
								{/* Alternative Download Section */}
								<div className="mt-4 text-center">
									<p className="text-sm text-gray-600 mb-3">
										यदि PDF ठीक से नहीं दिख रहा है, तो कृपया डाउनलोड करें
									</p>
									<Button
										onClick={handleDownload}
										className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2"
									>
										<Download className="h-4 w-4 mr-2" />
										PDF डाउनलोड करें
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
