import Link from "next/link"
import { BookOpen, Phone, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-gradient-to-br from-gray-50 to-orange-50 w-full overflow-hidden">
      <div className="container w-full py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-3 sm:px-4">
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600 flex-shrink-0" />
              <span className="font-bold text-base sm:text-lg md:text-xl bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                साईं सृजन पटल
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              देवभूमि उत्तराखंड की सांस्कृतिक विरासत और समृद्ध संस्कृति को जन-जन तक पहुंचाना।
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm font-medium text-gray-900">त्वरित लिंक</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-orange-600 transition-colors">
                  होम
                </Link>
              </li>
              <li>
                <Link href="/magazines" className="text-gray-600 hover:text-orange-600 transition-colors">
                  पत्रिकाएं
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-orange-600 transition-colors">
                  हमारे बारे में
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-orange-600 transition-colors">
                  संपर्क
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm font-medium text-gray-900">संपादकीय टीम</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>मुख्य संपादक: प्रो.(डा.)के.एल.तलवाड़</li>
              <li>उप संपादक: श्री अंकित तिवारी</li>
              <li>सह संपादक: श्री अमन तलवाड़</li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm font-medium text-gray-900">संपर्क</h3>
            <div className="space-y-2 sm:space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <span className="break-all">9412142822</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <span className="break-all">sainsrijanpatal@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <span>अक्षत पब्लिकेशन्स, देहरादून</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 md:mt-8 border-t pt-4 sm:pt-6 md:pt-8 text-center text-xs sm:text-sm text-gray-600 px-3 sm:px-4">
          <p>© {new Date().getFullYear()} साईं सृजन पटल। सभी अधिकार सुरक्षित।</p>
        </div>
      </div>
    </footer>
  )
}
