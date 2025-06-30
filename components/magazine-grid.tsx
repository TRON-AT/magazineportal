"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Search, Calendar, ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Define the type for a PDF item
interface PdfItem {
	id: string
	title: string
	filename: string
	date: string
	coverImage: string
}

// Simple PDF list with cover images - just add your PDF files here!
const pdfList: PdfItem[] = [
	{
		id: "0",
		title: "Sain Srijan Patal Monthly Magazine 11th issue",
		filename: "Sain Srijan Patal Monthly Magazine 11th issue (June-2025).pdf",
		date: "जून 2025",
		coverImage: "/pdf/Sain Srijan Patal Monthly Magazine 11th issue (June-2025).png",
	},
    {
        id: "1",
        title: "Sain Srijan Patal Monthly Magazine 10th issue",
        filename: "Sain Srijan Patal Monthly Magazine 10th issue (May-2025).pdf",
        date: "मई 2025",
        coverImage: "/pdf/Sain Srijan Patal Monthly Magazine 10th issue (May-2025).png",
    },
    {
        id: "2",
        title: "Sain Srijan Patal Monthly Magazine 9th issue",
        filename: "Sain Srijan Patal Monthly Magazine 9th issue (April-2025).pdf",
        date: "अप्रैल 2025",
        coverImage: "/pdf/Sain Srijan Patal Monthly Magazine 9th issue (April-2025).png",
    },
    {
        id: "3",
        title: "Sain Srijan Patal Monthly Magazine 8th issue",
        filename: "Sain Srijan Patal Monthly Magazine 8th issue (March-2025).pdf",
        date: "मार्च 2025",
        coverImage: "/pdf/Sain Srijan Patal Monthly Magazine 8th issue (March-2025).png",
    },
    {
        id: "4",
        title: "Sain Srijan Patal Monthly Magazine 7th issue",
        filename: "Sain Srijan Patal Monthly Magazine 7th issue (Febuary-2025).pdf",
        date: "फरवरी 2025",
        coverImage: "/pdf/Sain Srijan Patal Monthly Magazine 7th issue (Febuary-2025).png",
    },
    {
        id: "5",
        title: "Sain Srijan Patal Monthly Magazine 6th issue",
        filename: "Sain Srijan Patal  Monthly Magazine 6th  issue ( January-2025).pdf",
        date: "जनवरी 2025",
        coverImage: "/pdf/Sain Srijan Patal  Monthly Magazine 6th  issue ( January-2025).png",
    },
    {
        id: "6",
        title: "Sain Srijan Patal Monthly Magazine 5th issue",
        filename: "Sain Srijan Patal  Monthly Magazine 5th issue ( December-2024).pdf",
        date: "दिसंबर 2024",
        coverImage: "/pdf/Sain Srijan Patal  Monthly Magazine 5th issue ( December-2024).png",
    },
    {
        id: "7",
        title: "Sain Srijan Patal News Letter Fourth Issue",
        filename: "Sain Srijan Patal News Letter Fourth issue ( November-2024).pdf",
        date: "नवंबर 2024",
        coverImage: "/pdf/Sain Srijan Patal News Letter Fourth issue ( November-2024).png",
    },
    {
        id: "8",
        title: "Sain Srijan Patal News Letter Third Issue",
        filename: "Sain Srijan Patal News Letter Third Issue (October 2024).pdf",
        date: "अक्टूबर 2024",
        coverImage: "/pdf/Sain Srijan Patal News Letter Third Issue (October 2024).png",
    },
    {
        id: "9",
        title: "Sain Srijan Patal News Letter Second Issue",
        filename: "Sain Srijan Patal News Letter second Issue.pdf",
        date: "सितंबर 2024",
        coverImage: "/pdf/Sain Srijan Patal News Letter second Issue.png",
    },
    {
        id: "10",
        title: "Sain Srijan Patal News Letter First Issue",
        filename: "Sain Srijan Patal News Letter  First Issue.pdf",
        date: "अगस्त 2024",
        coverImage: "/pdf/Sain Srijan Patal News Letter  First Issue.png",
    },
]
	

export function MagazineGrid() {
	const [filteredPdfs, setFilteredPdfs] = useState<PdfItem[]>(pdfList)
	const searchParams = useSearchParams()
	const searchQuery = searchParams.get("q") || ""

	useEffect(() => {
		if (!searchQuery.trim()) {
			setFilteredPdfs(pdfList)
			return
		}

		const filtered = pdfList.filter((pdf) => pdf.title.toLowerCase().includes(searchQuery.toLowerCase()))
		setFilteredPdfs(filtered)
	}, [searchQuery])

	return (
		<div className="w-full">
			{filteredPdfs.length > 0 ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full">
					{filteredPdfs.map((pdf) => (
						<Card
							key={pdf.id}
							className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group w-full"
						>
							<div className="aspect-[3/4] relative overflow-hidden">
								<img
									src={pdf.coverImage}
									alt="PDF Cover"
									className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

								{/* PDF Badge */}
								<div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
									PDF
								</div>
							</div>
							<CardContent className="p-3 sm:p-4 md:p-6">
								<h3 className="font-bold text-sm sm:text-base md:text-lg line-clamp-2 text-gray-900 mb-2 group-hover:text-orange-600 transition-colors leading-tight">
									{pdf.title}
								</h3>
								<div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
									<Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500 flex-shrink-0" />
									<span>{pdf.date}</span>
								</div>
							</CardContent>
							<CardFooter className="p-3 sm:p-4 md:p-6 pt-0 flex flex-col gap-2 sm:flex-row sm:gap-3">
								<Button
									asChild
									className="flex-1 bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg transition-all duration-200 text-xs sm:text-sm md:text-base h-8 sm:h-9 md:h-10 w-full"
								>
									<Link href={`/viewer/${pdf.id}`}>
										<ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
										पढ़ें
									</Link>
								</Button>
								<Button
									asChild
									variant="outline"
									className="flex-1 border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-300 transition-all duration-200 text-xs sm:text-sm md:text-base h-8 sm:h-9 md:h-10 w-full"
								>
									<a href={`/pdf/${pdf.filename}`} download>
										Download
									</a>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			) : (
				<div className="text-center py-8 sm:py-12 md:py-16 w-full">
					<div className="max-w-md mx-auto px-3 sm:px-4">
						<div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 md:mb-6 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center">
							<Search className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-orange-400" />
						</div>
						<h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">कोई पत्रिका नहीं मिली</h3>
						<p className="text-sm sm:text-base text-gray-600">कृपया अपनी खोज को बदलकर फिर से कोशिश करें</p>
					</div>
				</div>
			)}
		</div>
	)
}
