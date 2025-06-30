import Link from "next/link"
import { Calendar, BookOpen, Users, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Featured magazines for home page
const featuredMagazines = [

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
    
]

export default function HomePage() {
	return (
		<div className="min-h-screen w-full overflow-x-hidden">
			{/* Hero Section */}
			<section className="relative w-full overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-8 sm:py-12 md:py-16 lg:py-24 flex flex-col items-center justify-center">
				{/* Use next/image for optimized images and correct the path */}
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src="/hero.jpg"
					alt="साईं सृजन पटल"
					className="max-w-full h-auto mb-6 rounded-xl shadow-lg"
				/>
				<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
					<Button
						asChild
						size="lg"
						className="bg-orange-600 hover:bg-orange-700 w-full sm:w-auto text-sm sm:text-base"
					>
						<Link href="/magazines">पत्रिका पढ़ें</Link>
					</Button>
					<Button
						asChild
						variant="outline"
						size="lg"
						className="border-orange-600 text-orange-600 hover:bg-orange-50 w-full sm:w-auto text-sm sm:text-base"
					>
						<Link href="#about">हमारे बारे में</Link>
					</Button>
				</div>
			</section>

			{/* About Prof. K.L. Talwar Section */}
			<section id="about" className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white w-full overflow-hidden">
				<div className="container w-full">
					<div className="mx-auto max-w-6xl">
						<div className="mb-6 sm:mb-8 md:mb-12 text-center px-3 sm:px-4">
							<h2 className="mb-2 sm:mb-3 md:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
								प्रो. के.एल. तलवाड़ के बारे में
							</h2>
							<div className="mx-auto h-1 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-orange-500 to-amber-500"></div>
						</div>

						<div className="grid gap-6 sm:gap-8 lg:gap-12 lg:grid-cols-2 items-start px-3 sm:px-4">
							<div className="space-y-4 sm:space-y-6 w-full">
								<div className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 p-4 sm:p-6 md:p-8 w-full">
									<div className="mb-3 sm:mb-4 flex items-center gap-2">
										<Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 flex-shrink-0" />
										<span className="text-xs sm:text-sm font-medium text-orange-800">जन्म: 22 मार्च 1959, उत्तरकाशी</span>
									</div>
									<p className="leading-relaxed text-sm sm:text-base text-gray-700">
										प्रो.(डा.)के.एल.तलवाड़ ने 7 फरवरी 1985 से उत्तराखंड के विभिन्न राजकीय महाविद्यालयों में लगभग 40 वर्ष तक अपनी सेवाएं
										दी। इस अवधि में उन्होंने लेक्चरर(अर्थशास्त्र), रीडर, प्रोफेसर, यूजी प्रिन्सिपल और पीजी प्रिन्सिपल के रूप में सफलतापूर्वक
										कार्य किया।
									</p>
								</div>

								<div className="space-y-3 sm:space-y-4 w-full">
									<h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">मुख्य योगदान</h3>
									<ul className="space-y-2 sm:space-y-3">
										<li className="flex items-start gap-2">
											<div className="mt-2 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0"></div>
											<span className="text-sm sm:text-base text-gray-700 leading-relaxed">
												महाविद्यालयों के मीडिया प्रभारी के रूप में कार्य
											</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="mt-2 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0"></div>
											<span className="text-sm sm:text-base text-gray-700 leading-relaxed">
												एनएसएस के जिला समन्वयक और रिसोर्स पर्सन
											</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="mt-2 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0"></div>
											<span className="text-sm sm:text-base text-gray-700 leading-relaxed">
												'संस्था दर्पण', 'युवा संकल्प' और 'संकल्प पत्र' का संपादन
											</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="mt-2 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0"></div>
											<span className="text-sm sm:text-base text-gray-700 leading-relaxed">
												विद्यार्थियों को 'समाचार लेखन की कला' का निशुल्क प्रशिक्षण
											</span>
										</li>
									</ul>
								</div>
							</div>

							<div className="space-y-4 sm:space-y-6 w-full">
								<Card className="border-l-4 border-l-orange-500 w-full">
									<CardHeader className="pb-2 sm:pb-3">
										<CardTitle className="flex items-center gap-2 text-orange-800 text-base sm:text-lg md:text-xl">
											<BookOpen className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
											मिशन
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-sm sm:text-base text-gray-700 leading-relaxed">
											देवभूमि उत्तराखंड की सांस्कृतिक विरासत और समृद्ध संस्कृति को जन-जन तक पहुंचाना
										</p>
									</CardContent>
								</Card>

								<Card className="border-l-4 border-l-amber-500 w-full">
									<CardHeader className="pb-2 sm:pb-3">
										<CardTitle className="flex items-center gap-2 text-amber-800 text-base sm:text-lg md:text-xl">
											<Users className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
											विजन
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-sm sm:text-base text-gray-700 leading-relaxed">
											'लेखन और सृजन के उन्नयन के लिए सदैव प्रतिबद्धता'। आने वाली पीढ़ी को अपने उत्तराखंड के विकास के लिए तैयार करना और
											सांस्कृतिक धरोहर को सहेजना।
										</p>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Magazines Section */}
			<section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-amber-50 w-full overflow-hidden">
				<div className="container w-full">
					<div className="mx-auto max-w-6xl">
						<div className="mb-6 sm:mb-8 md:mb-12 text-center px-3 sm:px-4">
							<h2 className="mb-2 sm:mb-3 md:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
								हमारी पत्रिकाएं
							</h2>
							<p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
								उत्तराखंड की संस्कृति और विरासत से समृद्ध मासिक पत्रिका
							</p>
							<div className="mx-auto mt-2 sm:mt-3 md:mt-4 h-1 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-orange-500 to-amber-500"></div>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12 px-3 sm:px-4">
							{featuredMagazines.map((magazine) => (
								<Card
									key={magazine.id}
									className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group w-full"
								>
									<div className="aspect-[3/4] relative overflow-hidden">
										<img
											src={magazine.coverImage}
											alt={`${magazine.title} cover`}
											className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
										/>
									</div>
									<CardContent className="p-3 sm:p-4 md:p-6">
										<h3 className="font-bold text-sm sm:text-base md:text-lg line-clamp-2 text-gray-900 mb-2 group-hover:text-orange-600 transition-colors leading-tight">
											{magazine.title}
										</h3>
										<div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
											<Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500 flex-shrink-0" />
											<span>{magazine.date}</span>
										</div>
									</CardContent>
									<div className="p-3 sm:p-4 md:p-6 pt-0">
										<Button
											asChild
											className="w-full bg-orange-600 hover:bg-orange-700 text-sm sm:text-base h-8 sm:h-9 md:h-10"
										>
											<Link href={`/viewer/${magazine.id}`}>पढ़ें</Link>
										</Button>
									</div>
								</Card>
							))}
						</div>

						<div className="text-center px-3 sm:px-4">
							<Button
								asChild
								size="lg"
								className="bg-orange-600 hover:bg-orange-700 w-full sm:w-auto text-sm sm:text-base"
							>
								<Link href="/magazines">सभी पत्रिकाएं देखें</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Editorial Team */}
			<section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white w-full overflow-hidden">
				<div className="container w-full">
					<div className="mx-auto max-w-4xl">
						<div className="mb-6 sm:mb-8 md:mb-12 text-center px-3 sm:px-4">
							<h2 className="mb-2 sm:mb-3 md:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
								संपादकीय टीम
							</h2>
							<div className="mx-auto h-1 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-orange-500 to-amber-500"></div>
						</div>

						<div className="grid gap-3 sm:gap-4 md:gap-6 md:grid-cols-3 px-3 sm:px-4">
							<Card className="text-center w-full flex flex-col items-center">
								<div className="flex justify-center mt-4 mb-2">
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										src="/ab1.jpg"
										alt="प्रो.(डा.)के.एल.तलवाड़"
										className="w-24 h-24 rounded-full object-cover border-4 border-orange-200 shadow"
									/>
								</div>
								<CardHeader className="pb-2 sm:pb-3">
									<CardTitle className="text-orange-800 text-sm sm:text-base md:text-lg">मुख्य संपादक</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="font-medium text-gray-900 text-sm sm:text-base">प्रो.(डा.)के.एल.तलवाड़</p>
								</CardContent>
							</Card>

							<Card className="text-center w-full flex flex-col items-center">
								<div className="flex justify-center mt-4 mb-2">
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										src="/ab2.jpg"
										alt="श्री अंकित तिवारी"
										className="w-24 h-24 rounded-full object-cover border-4 border-orange-200 shadow"
									/>
								</div>
								<CardHeader className="pb-2 sm:pb-3">
									<CardTitle className="text-orange-800 text-sm sm:text-base md:text-lg">उप संपादक</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="font-medium text-gray-900 text-sm sm:text-base">श्री अंकित तिवारी</p>
								</CardContent>
							</Card>

							<Card className="text-center w-full flex flex-col items-center">
								<div className="flex justify-center mt-4 mb-2">
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										src="/ab3.jpg"
										alt="श्री अमन तलवाड़"
										className="w-24 h-24 rounded-full object-cover border-4 border-orange-200 shadow"
									/>
								</div>
								<CardHeader className="pb-2 sm:pb-3">
									<CardTitle className="text-orange-800 text-sm sm:text-base md:text-lg">तकनीकी संपादक</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="font-medium text-gray-900 text-sm sm:text-base">श्री अमन तलवाड़</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-orange-50 w-full overflow-hidden">
				<div className="container w-full">
					<div className="mx-auto max-w-4xl">
						<div className="mb-6 sm:mb-8 md:mb-12 text-center px-3 sm:px-4">
							<h2 className="mb-2 sm:mb-3 md:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
								संपर्क करें
							</h2>
							<div className="mx-auto h-1 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-orange-500 to-amber-500"></div>
						</div>

						<div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 px-3 sm:px-4">
							<Card className="bg-white/80 backdrop-blur w-full">
								<CardHeader className="pb-3 sm:pb-4">
									<CardTitle className="text-orange-800 text-base sm:text-lg md:text-xl">संपर्क विवरण</CardTitle>
								</CardHeader>
								<CardContent className="space-y-3 sm:space-y-4">
									<div className="flex items-start gap-3">
										<Phone className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 mt-1 flex-shrink-0" />
										<div className="min-w-0 flex-1">
											<p className="font-medium text-gray-900 text-sm sm:text-base">Mobile/WhatsApp</p>
											<p className="text-gray-700 text-sm sm:text-base break-all">9412142822, 8630893870</p>
										</div>
									</div>

									<div className="flex items-start gap-3">
										<Mail className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 mt-1 flex-shrink-0" />
										<div className="min-w-0 flex-1">
											<p className="font-medium text-gray-900 text-sm sm:text-base">Email</p>
											<p className="text-gray-700 text-sm sm:text-base break-all">sainsrijanpatal@gmail.com</p>
										</div>
									</div>

									<div className="flex items-start gap-3">
										<MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 mt-1 flex-shrink-0" />
										<div className="min-w-0 flex-1">
											<p className="font-medium text-gray-900 text-sm sm:text-base">पता</p>
											<p className="text-gray-700 text-sm sm:text-base">
												अक्षत पब्लिकेशन्स
												<br />
												आर.के. पुरम, जोगीवाला
											</p>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card className="bg-white/80 backdrop-blur w-full">
								<CardHeader className="pb-3 sm:pb-4">
									<CardTitle className="text-orange-800 text-base sm:text-lg md:text-xl">संपादक की कलम से</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-gray-700 leading-relaxed text-sm sm:text-base">
										30 अगस्त 2024 को एक मासिक न्यूज़ लेटर की शुरुआत इस उद्देश्य से की गई कि इसमें उत्तराखंड से जुड़े शोध-पत्र, उभरती प्रतिभाओं की कला, पहाड़ के व्यंजन और पर्यटन के साथ-साथ उत्तराखंड की समृद्ध विरासत और संस्कृति को भी समुचित स्थान मिले।आज यह न्यूज लैटर एक प्रतिष्ठित पत्रिका के रूप में अपनी जिम्मेदारी का कुशलतापूर्वक निर्वहन कर रही है
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
