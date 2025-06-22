"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, ZoomIn, ZoomOut, RotateCw } from "lucide-react"
import { useState, useEffect } from "react"

// PDF document to display
const pdfDocument = {
	title: "Website Gallery Document",
	src: "/pdf/Website gallery doc.pdf",
	description: "उत्तराखंड की समृद्ध संस्कृति और परंपराओं का दस्तावेज़"
}

export default function GalleryPage() {
	const [isMobile, setIsMobile] = useState(false)
	const [pdfScale, setPdfScale] = useState(1)

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768)
		}
		
		checkMobile()
		window.addEventListener('resize', checkMobile)
		
		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	const handleDownload = () => {
		const link = document.createElement('a')
		link.href = pdfDocument.src
		link.download = 'Website-Gallery-Document.pdf'
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}

	const openPdfInNewTab = () => {
		window.open(pdfDocument.src, '_blank')
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
				</div>				{/* PDF Document Card */}
				<div className="max-w-7xl mx-auto">
					<Card className="overflow-hidden border-0 shadow-xl bg-white rounded-xl">
						<CardContent className="p-0">
							{/* Document Header */}
							<div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 sm:p-6 border-b border-gray-100">
								<div className="text-center">
									<div className="flex items-center justify-center mb-3">
										<FileText className="h-7 w-7 text-orange-600 mr-3" />
										<h2 className="text-xl sm:text-2xl font-bold text-gray-800">
											{pdfDocument.title}
										</h2>
									</div>
									<p className="text-sm sm:text-base text-gray-600 mb-4">
										{pdfDocument.description}
									</p>
									
									{/* PDF Controls */}
									<div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
										<Button
											onClick={handleDownload}
											variant="outline"
											size="sm"
											className="flex items-center gap-2 text-orange-600 border-orange-300 hover:bg-orange-50 bg-white"
										>
											<Download className="h-4 w-4" />
											<span className="hidden sm:inline">डाउनलोड करें</span>
											<span className="sm:hidden">डाउनलोड</span>
										</Button>
										<Button
											onClick={openPdfInNewTab}
											variant="outline"
											size="sm"
											className="flex items-center gap-2 text-blue-600 border-blue-300 hover:bg-blue-50 bg-white"
										>
											<ZoomIn className="h-4 w-4" />
											<span className="hidden sm:inline">नई टैब में खोलें</span>
											<span className="sm:hidden">नई टैब</span>
										</Button>
									</div>
								</div>
							</div>
							
							{/* PDF Viewer Container */}
							<div className="relative bg-gray-50">
								{isMobile ? (									// Mobile PDF Viewer
									<div className="p-4">
										<div className="bg-white rounded-lg shadow-inner border border-gray-200 overflow-hidden">
											<iframe
												src={`${pdfDocument.src}#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH&zoom=90`}
												className="w-full border-0"
												style={{ 
													height: '60vh',
													minHeight: '400px'
												}}
												title={pdfDocument.title}
												loading="lazy"
												allow="fullscreen"
											/>
										</div>
										
										{/* Mobile Helper */}
										<div className="mt-4 p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-100">
											<p className="text-xs text-orange-700 text-center mb-2">
												� <strong>मोबाइल उपयोगकर्ताओं के लिए टिप्स:</strong>
											</p>
											<ul className="text-xs text-orange-600 space-y-1">
												<li>• बेहतर देखने के लिए फोन को लैंडस्केप में घुमाएं</li>
												<li>• ज़ूम करने के लिए PDF पर टैप करें</li>
												<li>• सबसे अच्छे अनुभव के लिए "नई टैब में खोलें" का उपयोग करें</li>
											</ul>
										</div>
									</div>
								) : (									// Desktop PDF Viewer
									<div className="p-6">
										<div className="bg-white rounded-xl shadow-inner border border-gray-200 overflow-hidden">
											<iframe
												src={`${pdfDocument.src}#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH&zoom=100`}
												className="w-full border-0"
												style={{ 
													height: '80vh',
													minHeight: '600px'
												}}
												title={pdfDocument.title}
												loading="lazy"
												allow="fullscreen"
											/>
										</div>
									</div>
								)}							</div>
							
							{/* Alternative Access Section */}
							<div className="bg-gray-50 p-4 sm:p-6 text-center border-t border-gray-100">
								<p className="text-sm text-gray-600 mb-3">
									यदि PDF ठीक से नहीं दिख रहा है या आपको कोई समस्या आ रही है
								</p>
								<div className="flex flex-col sm:flex-row items-center justify-center gap-3">
									<Button
										onClick={handleDownload}
										className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors"
									>
										<Download className="h-4 w-4 mr-2" />
										PDF डाउनलोड करें
									</Button>
									<Button
										onClick={openPdfInNewTab}
										variant="outline"
										className="border-orange-300 text-orange-600 hover:bg-orange-50 px-6 py-2 rounded-lg"
									>
										<ZoomIn className="h-4 w-4 mr-2" />
										नई विंडो में खोलें
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
