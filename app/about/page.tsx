import { Calendar, Award, BookOpen, Users, Target, Heart, Star, Trophy } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "हमारे बारे में | साईं सृजन पटल",
  description: "प्रो. के.एल. तलवाड़ और साईं सृजन पटल के बारे में विस्तृत जानकारी",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-12 sm:py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 to-amber-100/20"></div>
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              हमारे बारे में
            </h1>
            <p className="mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 px-4">
              देवभूमि उत्तराखंड की सांस्कृतिक विरासत को संजोने और आगे बढ़ाने का संकल्प
            </p>
            <div className="mx-auto h-1 w-16 sm:w-20 bg-gradient-to-r from-orange-500 to-amber-500"></div>
          </div>
        </div>
      </section>

      {/* Prof. K.L. Talwar Detailed Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 sm:mb-16 text-center">
              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                प्रो.(डा.) के.एल. तलवाड़
              </h2>
              <p className="text-base sm:text-lg text-gray-600">मुख्य संपादक एवं संस्थापक</p>
              <div className="mx-auto mt-3 sm:mt-4 h-1 w-16 sm:w-20 bg-gradient-to-r from-orange-500 to-amber-500"></div>
            </div>

            <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-start">
              <div className="space-y-6 sm:space-y-8">
                <Card className="border-l-4 border-l-orange-500 bg-gradient-to-br from-orange-50 to-amber-50">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-orange-800 text-lg sm:text-xl">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                      व्यक्तिगत जानकारी
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="grid gap-2 sm:gap-3">
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                        <span className="font-medium text-gray-700 text-sm sm:text-base">जन्म:</span>
                        <span className="text-gray-600 text-sm sm:text-base">22 मार्च 1959</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                        <span className="font-medium text-gray-700 text-sm sm:text-base">जन्म स्थान:</span>
                        <span className="text-gray-600 text-sm sm:text-base">उत्तरकाशी, उत्तराखंड</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                        <span className="font-medium text-gray-700 text-sm sm:text-base">सेवा काल:</span>
                        <span className="text-gray-600 text-sm sm:text-base">7 फरवरी 1985 से लगभग 40 वर्ष</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                        <span className="font-medium text-gray-700 text-sm sm:text-base">विषय:</span>
                        <span className="text-gray-600 text-sm sm:text-base">अर्थशास्त्र</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-amber-500">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-amber-800 text-lg sm:text-xl">
                      <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                      शैक्षणिक यात्रा
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg bg-amber-50 p-3 sm:p-4">
                        <h4 className="font-semibold text-amber-800 mb-2 text-sm sm:text-base">पदों का क्रम:</h4>
                        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></div>
                            लेक्चरर (अर्थशास्त्र)
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></div>
                            रीडर
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></div>
                            प्रोफेसर
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></div>
                            यूजी प्रिन्सिपल
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></div>
                            पीजी प्रिन्सिपल
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-green-800 text-lg sm:text-xl">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                      विशेष योगदान
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg bg-green-50 p-3 sm:p-4">
                        <h4 className="font-semibold text-green-800 mb-2 sm:mb-3 text-sm sm:text-base">
                          मीडिया और पत्रकारिता:
                        </h4>
                        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                          <li>• महाविद्यालयों के मीडिया प्रभारी</li>
                          <li>• 'संस्था दर्पण' पत्रिका का संपादन</li>
                          <li>• 'युवा संकल्प' का संपादन</li>
                          <li>• 'संकल्प पत्र' का संपादन</li>
                        </ul>
                      </div>
                      <div className="rounded-lg bg-blue-50 p-3 sm:p-4">
                        <h4 className="font-semibold text-blue-800 mb-2 sm:mb-3 text-sm sm:text-base">
                          एनएसएस गतिविधियां:
                        </h4>
                        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                          <li>• जिला समन्वयक</li>
                          <li>• रिसोर्स पर्सन</li>
                          <li>• सामुदायिक सेवा कार्यक्रम</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-purple-800 text-lg sm:text-xl">
                      <Star className="h-4 w-4 sm:h-5 sm:w-5" />
                      विशेष प्रशिक्षण
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg bg-purple-50 p-3 sm:p-4">
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        विद्यार्थियों को <strong>'समाचार लेखन की कला'</strong> का निशुल्क प्रशिक्षण प्रदान करते रहे हैं। इससे अनेक युवाओं
                        को पत्रकारिता के क्षेत्र में आगे बढ़ने में सहायता मिली है।
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Image Grid */}
            <div className="mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
                  <img
                    src="/ab1.jpg"
                    alt="प्रो. के.एल. तलवाड़ छवि 1"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
                  <img
                    src="/ab2.jpg"
                    alt="प्रो. के.एल. तलवाड़ छवि 2"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
                  <img
                    src="/ab3.jpg"
                    alt="प्रो. के.एल. तलवाड़ छवि 3"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 sm:mb-12 text-center">
              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                सम्मान और पुरस्कार
              </h2>
              <div className="mx-auto h-1 w-16 sm:w-20 bg-gradient-to-r from-orange-500 to-amber-500"></div>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
              <Card className="text-center bg-white/80 backdrop-blur">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="mx-auto mb-3 sm:mb-4 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500">
                    <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-orange-800 text-base sm:text-lg">ज्ञान ज्योति पुरस्कार</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-orange-100 text-orange-800 mb-2">2017</Badge>
                  <p className="text-xs sm:text-sm text-gray-600">शिक्षा के क्षेत्र में उत्कृष्ट योगदान के लिए</p>
                </CardContent>
              </Card>

              <Card className="text-center bg-white/80 backdrop-blur">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="mx-auto mb-3 sm:mb-4 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600">
                    <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-blue-800 text-base sm:text-lg">स्पर्श गंगा शिक्षा श्री पुरस्कार</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-blue-100 text-blue-800 mb-2">2021</Badge>
                  <p className="text-xs sm:text-sm text-gray-600">शैक्षणिक नेतृत्व के लिए</p>
                </CardContent>
              </Card>

              <Card className="text-center bg-white/80 backdrop-blur md:col-span-1 md:mx-auto md:max-w-sm">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="mx-auto mb-3 sm:mb-4 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600">
                    <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-green-800 text-base sm:text-lg">उत्कृष्ट शिक्षक सम्मान</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-green-100 text-green-800 mb-2">2024</Badge>
                  <p className="text-xs sm:text-sm text-gray-600">शिक्षण में नवाचार के लिए</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 sm:mb-12 text-center">
              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                प्रकाशित पुस्तकें
              </h2>
              <div className="mx-auto h-1 w-16 sm:w-20 bg-gradient-to-r from-orange-500 to-amber-500"></div>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="flex items-center gap-2 text-green-800 text-lg sm:text-xl">
                    <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                    उत्तराखंड के पर्यावरणीय आंदोलन
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge className="bg-green-100 text-green-800">2015</Badge>
                    <p className="text-gray-700 text-sm sm:text-base">
                      उत्तराखंड के पर्यावरण संरक्षण आंदोलनों का विस्तृत अध्ययन और विश्लेषण। इस पुस्तक में चिपको आंदोलन से लेकर आधुनिक पर्यावरण
                      संरक्षण प्रयासों तक का समावेश है।
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="flex items-center gap-2 text-blue-800 text-lg sm:text-xl">
                    <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                    एनएसएस बी/सी प्रमाण पत्र परीक्षा
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge className="bg-blue-100 text-blue-800">प्रश्न/उत्तर श्रृंखला</Badge>
                    <p className="text-gray-700 text-sm sm:text-base">
                      राष्ट्रीय सेवा योजना के बी और सी प्रमाण पत्र परीक्षा की तैयारी के लिए व्यापक प्रश्न-उत्तर संग्रह। विद्यार्थियों के
                      लिए अत्यंत उपयोगी संदर्भ ग्रंथ।
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sain Srijan Patal Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 sm:mb-12 text-center">
              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                साईं सृजन पटल
              </h2>
              <p className="text-base sm:text-lg text-gray-600">स्वर्गीय श्री साईं दास तलवाड़ जी को समर्पित</p>
              <div className="mx-auto mt-3 sm:mt-4 h-1 w-16 sm:w-20 bg-gradient-to-r from-orange-500 to-amber-500"></div>
            </div>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              <Card className="bg-white/80 backdrop-blur">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="flex items-center gap-2 text-orange-800 text-lg sm:text-xl">
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                    समर्पण
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg bg-orange-50 p-3 sm:p-4">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      'साईं सृजन पटल' स्वर्गीय पिता श्री साईं दास तलवाड़ जी को समर्पित है, जो कि एक कर्मठ व्यक्ति, समाजसेवी और
                      'उत्तरकाशी गौरव' से सम्मानित थे।
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">उनके आदर्श:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm sm:text-base">
                      <li>• समाज सेवा में निरंतर योगदान</li>
                      <li>• शिक्षा के प्रति समर्पण</li>
                      <li>• सांस्कृतिक मूल्यों का संरक्षण</li>
                      <li>• युवाओं के लिए प्रेरणास्रोत</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="flex items-center gap-2 text-amber-800 text-lg sm:text-xl">
                    <Target className="h-4 w-4 sm:h-5 sm:w-5" />
                    हमारे लक्ष्य
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="rounded-lg bg-amber-50 p-3">
                      <h4 className="font-semibold text-amber-800 mb-2 text-sm sm:text-base">शिक्षा:</h4>
                      <p className="text-gray-700 text-xs sm:text-sm">मेधावी छात्रों को छात्रवृत्ति प्रदान करना</p>
                    </div>
                    <div className="rounded-lg bg-green-50 p-3">
                      <h4 className="font-semibold text-green-800 mb-2 text-sm sm:text-base">सम्मान:</h4>
                      <p className="text-gray-700 text-xs sm:text-sm">प्रतिभावान युवाओं का समय-समय पर सम्मान</p>
                    </div>
                    <div className="rounded-lg bg-blue-50 p-3">
                      <h4 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">प्रशिक्षण:</h4>
                      <p className="text-gray-700 text-xs sm:text-sm">निशुल्क समाचार लेखन पाठ्यक्रम</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              <Card className="border-l-4 border-l-orange-500 bg-gradient-to-br from-orange-50 to-amber-50">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="flex items-center gap-2 text-orange-800 text-xl sm:text-2xl">
                    <Target className="h-5 w-5 sm:h-6 sm:w-6" />
                    हमारा मिशन
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    देवभूमि उत्तराखंड की सांस्कृतिक विरासत और समृद्ध संस्कृति को जन-जन तक पहुंचाना। हमारा उद्देश्य है कि उत्तराखंड की
                    पारंपरिक कलाओं, भाषा, संस्कृति और मूल्यों को आने वाली पीढ़ियों तक सुरक्षित रूप से पहुंचाया जाए।
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-amber-500 bg-gradient-to-br from-amber-50 to-yellow-50">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="flex items-center gap-2 text-amber-800 text-xl sm:text-2xl">
                    <Star className="h-5 w-5 sm:h-6 sm:w-6" />
                    हमारा विजन
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    'लेखन और सृजन के उन्नयन के लिए सदैव प्रतिबद्धता'। आने वाली पीढ़ी को अपने उत्तराखंड के विकास के लिए तैयार करना और
                    सांस्कृतिक धरोहर को सहेजना। हमारा सपना है एक ऐसा उत्तराखंड जो अपनी जड़ों से जुड़ा हो और आधुनिकता के साथ आगे बढ़े।
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
