import { Suspense } from "react"
import { MagazineGrid } from "@/components/magazine-grid"
import { MagazineSearch } from "@/components/magazine-search"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "All Magazines | Regional Magazine Portal",
  description: "Browse all issues of our regional monthly magazine",
}

export default function MagazinesPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="container w-full py-6 sm:py-8 md:py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 px-3 sm:px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight">
            हमारी पत्रिकाएं
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
            उत्तराखंड की संस्कृति और विरासत से भरपूर मासिक पत्रिका
          </p>
          <div className="mx-auto h-1 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-orange-500 to-amber-500 mb-6 sm:mb-8 md:mb-12"></div>
        </div>

        {/* Search Section */}
        <div className="mb-8 sm:mb-12 md:mb-16 px-3 sm:px-4">
          <MagazineSearch />
        </div>

        {/* Magazines Grid */}
        <div className="w-full px-3 sm:px-4">
          <Suspense fallback={<MagazineGridSkeleton />}>
            <MagazineGrid />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

function MagazineGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="flex flex-col gap-3 w-full">
            <Skeleton className="aspect-[3/4] w-full rounded-xl" />
            <Skeleton className="h-4 sm:h-5 md:h-6 w-3/4" />
            <Skeleton className="h-3 sm:h-4 w-1/2" />
          </div>
        ))}
    </div>
  )
}
