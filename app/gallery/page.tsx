"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ZoomIn, ImageIcon } from "lucide-react"

// Gallery images from 001.jpg to 081.jpg
const galleryImages = [
	{
		id: 1,
		src: "/gallery/001.jpg",
		alt: "Gallery Image 1",
	},
	{
		id: 2,
		src: "/gallery/002.jpg",
		alt: "Gallery Image 2",
	},
	{
		id: 3,
		src: "/gallery/003.jpg",
		alt: "Gallery Image 3",
	},
	{
		id: 4,
		src: "/gallery/004.jpg",
		alt: "Gallery Image 4",
	},
	{
		id: 5,
		src: "/gallery/005.jpg",
		alt: "Gallery Image 5",
	},
	{
		id: 6,
		src: "/gallery/006.jpg",
		alt: "Gallery Image 6",
	},
	{
		id: 7,
		src: "/gallery/007.jpg",
		alt: "Gallery Image 7",
	},
	{
		id: 8,
		src: "/gallery/008.jpg",
		alt: "Gallery Image 8",
	},
	{
		id: 9,
		src: "/gallery/009.jpg",
		alt: "Gallery Image 9",
	},
	{
		id: 10,
		src: "/gallery/010.jpg",
		alt: "Gallery Image 10",
	},
	{
		id: 11,
		src: "/gallery/011.jpg",
		alt: "Gallery Image 11",
	},
	{
		id: 12,
		src: "/gallery/012.jpg",
		alt: "Gallery Image 12",
	},
	{
		id: 13,
		src: "/gallery/013.jpg",
		alt: "Gallery Image 13",
	},
	{
		id: 14,
		src: "/gallery/014.jpg",
		alt: "Gallery Image 14",
	},
	{
		id: 15,
		src: "/gallery/015.jpg",
		alt: "Gallery Image 15",
	},
	{
		id: 16,
		src: "/gallery/016.jpg",
		alt: "Gallery Image 16",
	},
	{
		id: 17,
		src: "/gallery/017.jpg",
		alt: "Gallery Image 17",
	},
	{
		id: 18,
		src: "/gallery/018.jpg",
		alt: "Gallery Image 18",
	},
	{
		id: 19,
		src: "/gallery/019.jpg",
		alt: "Gallery Image 19",
	},
	{
		id: 20,
		src: "/gallery/020.jpg",
		alt: "Gallery Image 20",
	},
	{
		id: 21,
		src: "/gallery/021.jpg",
		alt: "Gallery Image 21",
	},
	{
		id: 22,
		src: "/gallery/022.jpg",
		alt: "Gallery Image 22",
	},
	{
		id: 23,
		src: "/gallery/023.jpg",
		alt: "Gallery Image 23",
	},
	{
		id: 24,
		src: "/gallery/024.jpg",
		alt: "Gallery Image 24",
	},
	{
		id: 25,
		src: "/gallery/025.jpg",
		alt: "Gallery Image 25",
	},
	{
		id: 26,
		src: "/gallery/026.jpg",
		alt: "Gallery Image 26",
	},
	{
		id: 27,
		src: "/gallery/027.jpg",
		alt: "Gallery Image 27",
	},
	{
		id: 28,
		src: "/gallery/028.jpg",
		alt: "Gallery Image 28",
	},
	{
		id: 29,
		src: "/gallery/029.jpg",
		alt: "Gallery Image 29",
	},
	{
		id: 30,
		src: "/gallery/030.jpg",
		alt: "Gallery Image 30",
	},
	{
		id: 31,
		src: "/gallery/031.jpg",
		alt: "Gallery Image 31",
	},
	{
		id: 32,
		src: "/gallery/032.jpg",
		alt: "Gallery Image 32",
	},
	{
		id: 33,
		src: "/gallery/033.jpg",
		alt: "Gallery Image 33",
	},
	{
		id: 34,
		src: "/gallery/034.jpg",
		alt: "Gallery Image 34",
	},
	{
		id: 35,
		src: "/gallery/035.jpg",
		alt: "Gallery Image 35",
	},
	{
		id: 36,
		src: "/gallery/036.jpg",
		alt: "Gallery Image 36",
	},
	{
		id: 37,
		src: "/gallery/037.jpg",
		alt: "Gallery Image 37",
	},
	{
		id: 38,
		src: "/gallery/038.jpg",
		alt: "Gallery Image 38",
	},
	{
		id: 39,
		src: "/gallery/039.jpg",
		alt: "Gallery Image 39",
	},
	{
		id: 40,
		src: "/gallery/040.jpg",
		alt: "Gallery Image 40",
	},
	{
		id: 41,
		src: "/gallery/041.jpg",
		alt: "Gallery Image 41",
	},
	{
		id: 42,
		src: "/gallery/042.jpg",
		alt: "Gallery Image 42",
	},
	{
		id: 43,
		src: "/gallery/043.jpg",
		alt: "Gallery Image 43",
	},
	{
		id: 44,
		src: "/gallery/044.jpg",
		alt: "Gallery Image 44",
	},
	{
		id: 45,
		src: "/gallery/045.jpg",
		alt: "Gallery Image 45",
	},
	{
		id: 46,
		src: "/gallery/046.jpg",
		alt: "Gallery Image 46",
	},
	{
		id: 47,
		src: "/gallery/047.jpg",
		alt: "Gallery Image 47",
	},
	{
		id: 48,
		src: "/gallery/048.jpg",
		alt: "Gallery Image 48",
	},
	{
		id: 49,
		src: "/gallery/049.jpg",
		alt: "Gallery Image 49",
	},
	{
		id: 50,
		src: "/gallery/050.jpg",
		alt: "Gallery Image 50",
	},
	{
		id: 51,
		src: "/gallery/051.jpg",
		alt: "Gallery Image 51",
	},
	{
		id: 52,
		src: "/gallery/052.jpg",
		alt: "Gallery Image 52",
	},
	{
		id: 53,
		src: "/gallery/053.jpg",
		alt: "Gallery Image 53",
	},
	{
		id: 54,
		src: "/gallery/054.jpg",
		alt: "Gallery Image 54",
	},
	{
		id: 55,
		src: "/gallery/055.jpg",
		alt: "Gallery Image 55",
	},
	{
		id: 56,
		src: "/gallery/056.jpg",
		alt: "Gallery Image 56",
	},
	{
		id: 57,
		src: "/gallery/057.jpg",
		alt: "Gallery Image 57",
	},
	{
		id: 58,
		src: "/gallery/058.jpg",
		alt: "Gallery Image 58",
	},
	{
		id: 59,
		src: "/gallery/059.jpg",
		alt: "Gallery Image 59",
	},
	{
		id: 60,
		src: "/gallery/060.jpg",
		alt: "Gallery Image 60",
	},
	{
		id: 61,
		src: "/gallery/061.jpg",
		alt: "Gallery Image 61",
	},
	{
		id: 62,
		src: "/gallery/062.jpg",
		alt: "Gallery Image 62",
	},
	{
		id: 63,
		src: "/gallery/063.jpg",
		alt: "Gallery Image 63",
	},
	{
		id: 64,
		src: "/gallery/064.jpg",
		alt: "Gallery Image 64",
	},
	{
		id: 65,
		src: "/gallery/065.jpg",
		alt: "Gallery Image 65",
	},
	{
		id: 66,
		src: "/gallery/066.jpg",
		alt: "Gallery Image 66",
	},
	{
		id: 67,
		src: "/gallery/067.jpg",
		alt: "Gallery Image 67",
	},
	{
		id: 68,
		src: "/gallery/068.jpg",
		alt: "Gallery Image 68",
	},
	{
		id: 69,
		src: "/gallery/069.jpg",
		alt: "Gallery Image 69",
	},
	{
		id: 70,
		src: "/gallery/070.jpg",
		alt: "Gallery Image 70",
	},
	{
		id: 71,
		src: "/gallery/071.jpg",
		alt: "Gallery Image 71",
	},
	{
		id: 72,
		src: "/gallery/072.jpg",
		alt: "Gallery Image 72",
	},
	{
		id: 73,
		src: "/gallery/073.jpg",
		alt: "Gallery Image 73",
	},
	{
		id: 74,
		src: "/gallery/074.jpg",
		alt: "Gallery Image 74",
	},
	{
		id: 75,
		src: "/gallery/075.jpg",
		alt: "Gallery Image 75",
	},
	{
		id: 76,
		src: "/gallery/076.jpg",
		alt: "Gallery Image 76",
	},
	{
		id: 77,
		src: "/gallery/077.jpg",
		alt: "Gallery Image 77",
	},
	{
		id: 78,
		src: "/gallery/078.jpg",
		alt: "Gallery Image 78",
	},
	{
		id: 79,
		src: "/gallery/079.jpg",
		alt: "Gallery Image 79",
	},
	{
		id: 80,
		src: "/gallery/080.jpg",
		alt: "Gallery Image 80",
	},
	{
		id: 81,
		src: "/gallery/081.jpg",
		alt: "Gallery Image 81",
	},
]

export default function GalleryPage() {
	const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

	return (
		<div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
			<div className="container mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12">
				{/* Header */}
				<div className="text-center mb-8 sm:mb-12">
					<div className="flex items-center justify-center mb-4">
						<ImageIcon className="h-8 w-8 sm:h-10 sm:w-10 text-orange-600 mr-3" />
						<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
							फोटो गैलरी
						</h1>
					</div>
					<p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
						उत्तराखंड की समृद्ध संस्कृति, प्राकृतिक सुंदरता और पारंपरिक कलाओं की झलकियां
					</p>
				</div>
				{/* Simple Gallery Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
					{galleryImages.map((image) => (
						<Card
							key={image.id}
							className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white"
						>
							<CardContent className="p-0 relative">
								{/* Image Container with Fixed Aspect Ratio */}
								<div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
									<Image
										src={image.src}
										alt={image.alt}
										fill
										className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
									/>

									{/* Overlay */}
									<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

									{/* Zoom Button */}
									<Dialog>
										<DialogTrigger asChild>
											<Button
												size="icon"
												variant="secondary"
												className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 hover:bg-white text-gray-700 h-8 w-8"
												onClick={() => setSelectedImage(image)}
											>
												<ZoomIn className="h-4 w-4" />
											</Button>
										</DialogTrigger>
										<DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 bg-black/95 border-0">
											<div className="relative w-full h-full flex items-center justify-center">
												<Image
													src={image.src}
													alt={image.alt}
													fill
													className="object-contain"
													sizes="95vw"
												/>
											</div>
										</DialogContent>
									</Dialog>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	)
}
