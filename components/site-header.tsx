"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { Search, BookOpen, Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-sm">
      <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0">
          <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
          <span className="font-bold text-sm sm:text-lg lg:text-xl bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent whitespace-nowrap">
            साईं सृजन पटल
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <MainNav />
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center">
          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-orange-600">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 h-9 w-9 hover:bg-gray-100 active:bg-gray-200"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0 z-[100]" onInteractOutside={() => setIsOpen(false)}>
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-orange-600" />
                    <span className="font-bold text-orange-600">मेन्यू</span>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-1 p-4 flex-1">
                  <Link
                    href="/"
                    className="flex items-center py-3 px-3 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    होम
                  </Link>
                  <Link
                    href="/magazines"
                    className="flex items-center py-3 px-3 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    पत्रिकाएं
                  </Link>
                  <Link
                    href="/gallery"
                    className="flex items-center py-3 px-3 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    गैलरी
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center py-3 px-3 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    हमारे बारे में
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center py-3 px-3 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    संपर्क
                  </Link>
                </div>

                {/* Footer */}
                <div className="p-4 border-t">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-gray-600 hover:text-orange-600 border-gray-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Search className="h-4 w-4 mr-2" />
                    खोजें
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
