import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Globe, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "संपर्क करें | साईं सृजन पटल",
  description: "साईं सृजन पटल से संपर्क करें - फोन, ईमेल और पता की जानकारी",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-12 sm:py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 to-amber-100/20"></div>
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              संपर्क करें
            </h1>
            <p className="mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 px-4">
              हमसे जुड़ें और उत्तराखंड की सांस्कृतिक यात्रा का हिस्सा बनें
            </p>
            <div className="mx-auto h-1 w-16 sm:w-20 bg-gradient-to-r from-orange-500 to-amber-500"></div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 sm:mb-12 text-center">
              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                संपर्क विवरण
              </h2>
              <p className="text-base sm:text-lg text-gray-600">हमसे संपर्क करने के विभिन्न तरीके</p>
              <div className="mx-auto mt-3 sm:mt-4 h-1 w-16 sm:w-20 bg-gradient-to-r from-orange-500 to-amber-500"></div>
            </div>

            <div className="grid gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center border-l-4 border-l-orange-500 bg-gradient-to-br from-orange-50 to-amber-50">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="mx-auto mb-3 sm:mb-4 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500">
                    <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-orange-800 text-base sm:text-lg">फोन नंबर</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-medium text-gray-900 text-sm sm:text-base">9412142822</p>
                  <p className="font-medium text-gray-900 text-sm sm:text-base">8630893871</p>
                  <Badge className="bg-orange-100 text-orange-800 text-xs">WhatsApp उपलब्ध</Badge>
                </CardContent>
              </Card>

              <Card className="text-center border-l-4 border-l-blue-500 bg-gradient-to-br from-blue-50 to-cyan-50">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="mx-auto mb-3 sm:mb-4 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500">
                    <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-blue-800 text-base sm:text-lg">ईमेल</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-medium text-gray-900 break-all text-sm sm:text-base">sainsrijanpatal@gmail.com</p>
                  <Badge className="bg-blue-100 text-blue-800 text-xs">24/7 उपलब्ध</Badge>
                </CardContent>
              </Card>

              <Card className="text-center border-l-4 border-l-green-500 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="mx-auto mb-3 sm:mb-4 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500">
                    <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-green-800 text-base sm:text-lg">पता</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-medium text-gray-900 text-sm sm:text-base">अक्षत पब्लिकेशन्स</p>
                  <p className="text-gray-700 text-sm sm:text-base">देहरादून, उत्तराखंड</p>
                  <Badge className="bg-green-100 text-green-800 text-xs">मुख्यालय</Badge>
                </CardContent>
              </Card>

              <Card className="text-center border-l-4 border-l-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 sm:col-span-2 lg:col-span-1">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="mx-auto mb-3 sm:mb-4 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                    <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-purple-800 text-base sm:text-lg">कार्य समय</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-medium text-gray-900 text-sm sm:text-base">सोमवार - शुक्रवार</p>
                  <p className="text-gray-700 text-sm sm:text-base">सुबह 9:00 - शाम 6:00</p>
                  <Badge className="bg-purple-100 text-purple-800 text-xs">IST</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Team Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <Card className="bg-white/80 backdrop-blur">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="flex items-center gap-2 text-orange-800 text-xl sm:text-2xl">
                    <Send className="h-5 w-5 sm:h-6 sm:w-6" />
                    संदेश भेजें
                  </CardTitle>
                  <p className="text-gray-600 text-sm sm:text-base">हमें अपना संदेश भेजें, हम जल्दी ही आपसे संपर्क करेंगे</p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4 sm:space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">नाम *</label>
                        <Input
                          placeholder="आपका नाम"
                          className="border-orange-200 focus:border-orange-500 h-10 sm:h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">फोन नंबर</label>
                        <Input
                          placeholder="आपका फोन नंबर"
                          className="border-orange-200 focus:border-orange-500 h-10 sm:h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">ईमेल *</label>
                      <Input
                        type="email"
                        placeholder="आपका ईमेल पता"
                        className="border-orange-200 focus:border-orange-500 h-10 sm:h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">विषय</label>
                      <Input
                        placeholder="संदेश का विषय"
                        className="border-orange-200 focus:border-orange-500 h-10 sm:h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">संदेश *</label>
                      <Textarea
                        placeholder="अपना संदेश यहां लिखें..."
                        className="min-h-24 sm:min-h-32 border-orange-200 focus:border-orange-500"
                      />
                    </div>

                    <Button className="w-full bg-orange-600 hover:bg-orange-700 h-10 sm:h-12">
                      <Send className="mr-2 h-4 w-4" />
                      संदेश भेजें
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Team Contact */}
              <div className="space-y-6 sm:space-y-8">
                <Card className="bg-white/80 backdrop-blur">
                  <CardHeader className="pb-4 sm:pb-6">
                    <CardTitle className="flex items-center gap-2 text-amber-800 text-xl sm:text-2xl">
                      <Users className="h-5 w-5 sm:h-6 sm:w-6" />
                      संपादकीय टीम
                    </CardTitle>
                    <p className="text-gray-600 text-sm sm:text-base">हमारी टीम से सीधे संपर्क करें</p>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6">
                    <div className="rounded-lg bg-gradient-to-r from-orange-50 to-amber-50 p-3 sm:p-4">
                      <h3 className="font-semibold text-orange-800 mb-2 text-sm sm:text-base">मुख्य संपादक</h3>
                      <p className="font-medium text-gray-900 text-sm sm:text-base">प्रो.(डा.) के.एल. तलवाड़</p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">संस्थापक एवं मुख्य संपादक</p>
                    </div>

                    <div className="rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 p-3 sm:p-4">
                      <h3 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">उप संपादक</h3>
                      <p className="font-medium text-gray-900 text-sm sm:text-base">श्री अंकित तिवारी</p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">सामग्री संपादन एवं प्रकाशन</p>
                    </div>

                    <div className="rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-4">
                      <h3 className="font-semibold text-green-800 mb-2 text-sm sm:text-base">सह संपादक</h3>
                      <p className="font-medium text-gray-900 text-sm sm:text-base">श्री अमन तलवाड़</p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">डिजिटल मीडिया एवं तकनीकी सहायता</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-green-800 text-lg sm:text-xl">
                      <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                      त्वरित संपर्क
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 text-sm sm:text-base">WhatsApp</p>
                        <p className="text-xs sm:text-sm text-gray-600">9412142822 पर तुरंत संदेश भेजें</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 text-sm sm:text-base">ईमेल सहायता</p>
                        <p className="text-xs sm:text-sm text-gray-600">24 घंटे के अंदर उत्तर की गारंटी</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 sm:mb-12 text-center">
              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                अतिरिक्त जानकारी
              </h2>
              <div className="mx-auto h-1 w-16 sm:w-20 bg-gradient-to-r from-orange-500 to-amber-500"></div>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="flex items-center gap-2 text-orange-800 text-lg sm:text-xl">
                    <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
                    योगदान के अवसर
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-700 text-sm sm:text-base">
                    यदि आप उत्तराखंड की संस्कृति और विरासत के संरक्षण में योगदान देना चाहते हैं:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                      <span>लेख और कहानियां भेजें</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                      <span>फोटोग्राफी में सहयोग करें</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                      <span>स्थानीय कार्यक्रमों की जानकारी दें</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="flex items-center gap-2 text-blue-800 text-lg sm:text-xl">
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    सुझाव और प्रतिक्रिया
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-700 text-sm sm:text-base">हमें बेहतर बनाने में आपकी सहायता चाहिए:</p>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                      <span>पत्रिका की गुणवत्ता पर सुझाव</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                      <span>नए विषयों के लिए विचार</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                      <span>तकनीकी सुधार के सुझाव</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 sm:mt-12 text-center">
              <Card className="bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-orange-800 mb-3 sm:mb-4">संपादक की कलम से</h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    "30 अगस्त 2024 को एक मासिक न्यूज लैटर की शुरुआत इस उद्देश्य से की गई कि इसमें उत्तराखंड से जुड़े शोध-पत्र, उभरती
                    प्रतिभाओं की कला, पहाड़ के व्यंजन और पर्यटन के साथ-साथ उत्तराखंड की समृद्ध विरासत और संस्कृति को भी समुचित स्थान मिले।
                    हमारा दरवाजा सभी के लिए खुला है जो इस मिशन में हमारा साथ देना चाहते हैं।"
                  </p>
                  <p className="text-orange-800 font-medium mt-3 sm:mt-4 text-sm sm:text-base">
                    - प्रो.(डा.) के.एल. तलवाड़
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
