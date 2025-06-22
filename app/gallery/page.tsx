"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Images, Download, ZoomIn, X, ChevronUp, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

// Type definition for gallery image
type GalleryImage = {
	id: number
	src: string
	alt: string
	title: string
}

// Gallery images
const galleryImages: GalleryImage[] = [
	{
		id: 1,
		src: "/gallery/1.jpg",
		alt: "गैलरी छवि 1",
		title: "छवि 1"
	},
	{
		id: 2,
		src: "/gallery/2.jpg",
		alt: "गैलरी छवि 2",
		title: "छवि 2"
	},
	{
		id: 3,
		src: "/gallery/3.jpg",
		alt: "गैलरी छवि 3",
		title: "छवि 3"
	},
	{
		id: 4,
		src: "/gallery/4.jpg",
		alt: "गैलरी छवि 4",
		title: "छवि 4"
	},
	{
		id: 5,
		src: "/gallery/5.jpg",
		alt: "गैलरी छवि 5",
		title: "छवि 5"
	}
]

export default function GalleryPage() {
	const [isMobile, setIsMobile] = useState(false)
	const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
	const [currentPage, setCurrentPage] = useState(1)
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768)
		}
		
		checkMobile()
		window.addEventListener('resize', checkMobile)
		
		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	// Track current page based on scroll position
	useEffect(() => {
		const handleScroll = () => {
			const pageElements = galleryImages.map((_, index) => 
				document.getElementById(`page-${index + 1}`)
			)
			
			const scrollPosition = window.scrollY + window.innerHeight / 2
			
			for (let i = pageElements.length - 1; i >= 0; i--) {
				const element = pageElements[i]
				if (element && element.offsetTop <= scrollPosition) {
					setCurrentPage(i + 1)
					break
				}
			}
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll() // Initial check
		
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const handleImageClick = (image: GalleryImage) => {
		setSelectedImage(image)
	}

	const closeModal = () => {
		setSelectedImage(null)
	}

	const downloadImage = (imageSrc: string, imageName: string) => {
		const link = document.createElement('a')
		link.href = imageSrc
		link.download = `${imageName}.jpg`
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}

	const scrollToPage = (pageNumber: number) => {
		const element = document.getElementById(`page-${pageNumber}`)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' })
			setCurrentPage(pageNumber)
		}
	}

	const nextPage = () => {
		if (currentPage < galleryImages.length) {
			scrollToPage(currentPage + 1)
		}
	}

	const prevPage = () => {
		if (currentPage > 1) {
			scrollToPage(currentPage - 1)
		}
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
			{/* Smooth scrolling for better reading experience */}
			<style jsx global>{`
				html {
					scroll-behavior: smooth;
				}
				body {
					overflow-x: hidden;
				}
			`}</style>
			
			<div className="container mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12">
				{/* Header */}
				<div className="text-center mb-8 sm:mb-12">
					<div className="flex items-center justify-center mb-4">
						<Images className="h-8 w-8 sm:h-10 sm:w-10 text-orange-600 mr-3" />
						<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
							छवि पुस्तक
						</h1>
					</div>
					<p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
						उत्तराखंड की समृद्ध संस्कृति और परंपराओं की छवि संग्रह - एक समय में एक पृष्ठ
					</p>
					
					{/* Reading Instructions */}
					<div className="mt-6 p-4 bg-white/70 rounded-lg border border-orange-100 max-w-md mx-auto">
						<p className="text-sm text-orange-700">
							📖 पुस्तक की तरह पढ़ें - नीचे स्क्रॉल करके अगला पृष्ठ देखें
						</p>
					</div>
				</div>				{/* Single Image Display - PDF-like Reading Experience */}
				<div className="max-w-5xl mx-auto space-y-8">
					{galleryImages.map((image, index) => (
						<div key={image.id} id={`page-${index + 1}`} className="relative scroll-mt-20">
							{/* Page Number Indicator */}
							<div className="text-center mb-4">
								<span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
									पृष्ठ {index + 1} / {galleryImages.length}
								</span>
							</div>
							
							<Card className="overflow-hidden border-0 shadow-xl bg-white rounded-xl">
								<CardContent className="p-0 relative">
									<div 
										className={`relative ${
											isMobile 
												? 'min-h-[70vh] max-h-[80vh]' 
												: 'min-h-[75vh] max-h-[85vh]'
										} overflow-hidden`}
									>
										<Image
											src={image.src}
											alt={image.alt}
											fill
											className="object-contain bg-gray-50"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
											priority={index <= 1}
											quality={95}
										/>
										
										{/* Image Controls Overlay */}
										<div className="absolute top-4 right-4 flex gap-2">
											<Button
												onClick={() => handleImageClick(image)}
												className="bg-black/50 hover:bg-black/70 text-white p-2"
												size="sm"
											>
												<ZoomIn className="h-4 w-4" />
											</Button>
											<Button
												onClick={() => downloadImage(image.src, image.title)}
												className="bg-orange-600/90 hover:bg-orange-700 text-white p-2"
												size="sm"
											>
												<Download className="h-4 w-4" />
											</Button>
										</div>
									</div>
									
									{/* Image Title Bar */}
									<div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 border-t border-gray-100">
										<div className="text-center">
											<h3 className="text-lg font-semibold text-gray-800 mb-1">
												{image.title}
											</h3>
											<p className="text-sm text-gray-600">
												{image.alt}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
							
							{/* Reading Progress Indicator */}
							{index < galleryImages.length - 1 && (
								<div className="text-center mt-8 mb-4">
									<div className="inline-flex items-center gap-2 text-gray-400">
										<div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-300"></div>
										<span className="text-xs font-medium">स्क्रॉल करें</span>
										<div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-300"></div>
									</div>
								</div>
							)}
						</div>
					))}
					
					{/* End of Gallery Indicator */}
					<div className="text-center py-8">
						<div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full">
							<span className="text-orange-700 font-medium">गैलरी समाप्त</span>
						</div>
					</div>
				</div>

				{/* Floating Navigation Controls */}
				<div className="fixed bottom-6 right-6 flex flex-col gap-2 z-40">
					<Button
						onClick={prevPage}
						disabled={currentPage <= 1}
						className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
						size="sm"
					>
						<ChevronUp className="h-5 w-5" />
					</Button>
					<div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700 text-center min-w-[50px]">
						{currentPage}/{galleryImages.length}
					</div>
					<Button
						onClick={nextPage}
						disabled={currentPage >= galleryImages.length}
						className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
						size="sm"
					>
						<ChevronDown className="h-5 w-5" />
					</Button>
				</div>

				{/* Full Screen Image Modal */}
				{selectedImage && (
					<div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
						<div className="relative max-w-full max-h-full">
							<Image
								src={selectedImage.src}
								alt={selectedImage.alt}
								width={1200}
								height={800}
								className="max-w-full max-h-[90vh] object-contain"
								quality={95}
							/>
							<Button
								onClick={closeModal}
								className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2"
								size="sm"
							>
								<X className="h-4 w-4" />
							</Button>
							<Button
								onClick={() => downloadImage(selectedImage.src, selectedImage.title)}
								className="absolute bottom-4 right-4 bg-orange-600 hover:bg-orange-700 text-white"
								size="sm"
							>
								<Download className="h-4 w-4 mr-2" />
								डाउनलोड
							</Button>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
