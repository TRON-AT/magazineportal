"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      <Link
        href="/"
        className={cn(
          "transition-colors hover:text-orange-600",
          pathname === "/" ? "text-orange-600" : "text-gray-600",
        )}
      >
        होम
      </Link>
      <Link
        href="/magazines"
        className={cn(
          "transition-colors hover:text-orange-600",
          pathname === "/magazines" ? "text-orange-600" : "text-gray-600",
        )}
      >
        पत्रिकाएं
      </Link>
      <Link
        href="/gallery"
        className={cn(
          "transition-colors hover:text-orange-600",
          pathname === "/gallery" ? "text-orange-600" : "text-gray-600",
        )}
      >
        गैलरी
      </Link>
      <Link
        href="/about"
        className={cn(
          "transition-colors hover:text-orange-600",
          pathname === "/about" ? "text-orange-600" : "text-gray-600",
        )}
      >
        हमारे बारे में
      </Link>
      <Link
        href="/contact"
        className={cn(
          "transition-colors hover:text-orange-600",
          pathname === "/contact" ? "text-orange-600" : "text-gray-600",
        )}
      >
        संपर्क
      </Link>
    </nav>
  )
}
