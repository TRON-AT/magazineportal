"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function MagazineSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams(searchParams)
    if (searchQuery.trim()) {
      params.set("q", searchQuery.trim())
    } else {
      params.delete("q")
    }

    router.push(`/magazines?${params.toString()}`)
  }

  const clearSearch = () => {
    setSearchQuery("")
    const params = new URLSearchParams(searchParams)
    params.delete("q")
    router.push(`/magazines?${params.toString()}`)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative w-full">
        <div className="relative group w-full">
          <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors z-10" />
          <Input
            type="text"
            placeholder="पत्रिका खोजें..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 sm:pl-12 pr-20 sm:pr-24 h-11 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg border-2 border-orange-200 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-200 placeholder:text-gray-400"
          />
          {searchQuery && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={clearSearch}
              className="absolute right-12 sm:right-16 top-1/2 transform -translate-y-1/2 h-6 w-6 sm:h-7 sm:w-7 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full z-10"
            >
              <X className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          )}
          <Button
            type="submit"
            size="icon"
            className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 bg-orange-500 hover:bg-orange-600 rounded-lg sm:rounded-xl shadow-md transition-all duration-200 z-10"
          >
            <Search className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </Button>
        </div>
      </form>

      {/* Search hint */}
      <p className="text-center text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3">पत्रिका के नाम, महीने या विषय से खोजें</p>
    </div>
  )
}
