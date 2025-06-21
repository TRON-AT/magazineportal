"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Download, X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

// PDF data - same as in magazine-grid.tsx
const pdfList = [
    {
        id: "1",
        title: "Sain Srijan Patal Monthly Magazine 10th issue",
        filename: "Sain Srijan Patal Monthly Magazine 10th issue (May-2025).pdf",
        date: "मई 2025",
    },
    {
        id: "2",
        title: "Sain Srijan Patal Monthly Magazine 9th issue",
        filename: "Sain Srijan Patal Monthly Magazine 9th issue (April-2025).pdf",
        date: "अप्रैल 2025",
    },
    {
        id: "3",
        title: "Sain Srijan Patal Monthly Magazine 8th issue",
        filename: "Sain Srijan Patal Monthly Magazine 8th issue (March-2025).pdf",
        date: "मार्च 2025",
    },
    {
        id: "4",
        title: "Sain Srijan Patal Monthly Magazine 7th issue",
        filename: "Sain Srijan Patal Monthly Magazine 7th issue (Febuary-2025).pdf",
        date: "फरवरी 2025",
    },
    {
        id: "5",
        title: "Sain Srijan Patal Monthly Magazine 6th issue",
        filename: "Sain Srijan Patal  Monthly Magazine 6th  issue ( January-2025).pdf",
        date: "जनवरी 2025",
    },
    {
        id: "6",
        title: "Sain Srijan Patal Monthly Magazine 5th issue",
        filename: "Sain Srijan Patal  Monthly Magazine 5th issue ( December-2024).pdf",
        date: "दिसंबर 2024",
    },
    {
        id: "7",
        title: "Sain Srijan Patal News Letter Fourth Issue",
        filename: "Sain Srijan Patal News Letter Fourth issue ( November-2024).pdf",
        date: "नवंबर 2024",
    },
    {
        id: "8",
        title: "Sain Srijan Patal News Letter Third Issue",
        filename: "Sain Srijan Patal News Letter Third Issue (October 2024).pdf",
        date: "अक्टूबर 2024",
    },
    {
        id: "9",
        title: "Sain Srijan Patal News Letter Second Issue",
        filename: "Sain Srijan Patal News Letter second Issue.pdf",
        date: "सितंबर 2024",
    },
    {
        id: "10",
        title: "Sain Srijan Patal News Letter First Issue",
        filename: "Sain Srijan Patal News Letter  First Issue.pdf",
        date: "अगस्त 2024",
    },
]

export default function MagazineViewerPage() {
	const params = useParams()
	const id = params?.slug as string
	const [zoom, setZoom] = useState(100)

	// Find the PDF by ID
	const pdf = pdfList.find((p) => p.id === id)

	const zoomIn = () => {
		if (zoom < 200) {
			setZoom(zoom + 10)
		}
	}

	const zoomOut = () => {
		if (zoom > 50) {
			setZoom(zoom - 10)
		}
	}

	const resetZoom = () => {
		setZoom(100)
	}

	if (!pdf) {
		return (
			<div className="container flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-3 sm:px-4">
				<h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center">पत्रिका नहीं मिली</h1>
				<Button asChild className="w-full sm:w-auto">
					<Link href="/magazines">पत्रिकाओं पर वापस जाएं</Link>
				</Button>
			</div>
		)
	}

	return (
		<div className="flex flex-col min-h-screen bg-gray-100 w-full overflow-x-hidden">
			{/* Viewer Header */}
			<div className="sticky top-0 z-10 bg-white border-b shadow-sm w-full">
				<div className="container flex items-center justify-between h-12 sm:h-14 md:h-16 px-3 sm:px-4">
					<div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
						<Button asChild variant="ghost" size="icon" className="flex-shrink-0 h-8 w-8 sm:h-9 sm:w-9">
							<Link href="/magazines">
								<X className="h-4 w-4 sm:h-5 sm:w-5" />
							</Link>
						</Button>
						<h1 className="font-medium truncate text-xs sm:text-sm md:text-base leading-tight">{pdf.title}</h1>
					</div>

					<div className="flex items-center gap-1 flex-shrink-0">
						<Button
							variant="outline"
							size="icon"
							onClick={zoomOut}
							disabled={zoom <= 50}
							className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9"
						>
							<ZoomOut className="h-3 w-3 sm:h-4 sm:w-4" />
						</Button>
						<Button
							variant="outline"
							size="icon"
							onClick={resetZoom}
							className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 hidden sm:flex"
						>
							<RotateCcw className="h-3 w-3 sm:h-4 sm:w-4" />
						</Button>
						<span className="text-xs sm:text-sm w-10 sm:w-12 text-center">{zoom}%</span>
						<Button
							variant="outline"
							size="icon"
							onClick={zoomIn}
							disabled={zoom >= 200}
							className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9"
						>
							<ZoomIn className="h-3 w-3 sm:h-4 sm:w-4" />
						</Button>
						<Button asChild variant="outline" size="icon" className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 ml-1">
							<a href={`/pdf/${pdf.filename}`} download>
								<Download className="h-3 w-3 sm:h-4 sm:w-4" />
							</a>
						</Button>
					</div>
				</div>
			</div>

			{/* PDF Viewer */}
			<div className="flex-1 p-2 sm:p-3 md:p-4 w-full">
				<div className="mx-auto max-w-4xl h-full w-full">
					<div
						className="w-full h-[calc(100vh-80px)] sm:h-[calc(100vh-90px)] md:h-[calc(100vh-100px)] border rounded-lg shadow-lg bg-white overflow-auto"
						style={{
							transform: `scale(${zoom / 100})`,
							transformOrigin: "top center",
						}}
					>
						<iframe
							src={`/pdf/${pdf.filename}#toolbar=1&navpanes=0&scrollbar=1&page=1&view=FitH`}
							className="w-full h-full"
							title={`${pdf.title} PDF Viewer`}
							style={{ border: "none" }}
						/>
					</div>
				</div>
			</div>

			{/* Mobile-friendly footer */}
			<div className="bg-white border-t p-2 sm:p-3 md:p-4 text-center text-xs sm:text-sm text-gray-600 w-full">
				<p className="hidden sm:block">PDF में नेविगेशन के लिए PDF viewer के controls का उपयोग करें</p>
				<p className="sm:hidden">PDF controls के लिए स्वाइप करें</p>
			</div>
		</div>
	)
}
