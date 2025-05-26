"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 text-sm font-medium">
      <Link
        href="/"
        className={cn(
          "transition-colors hover:text-orange-600 px-2 py-1 rounded-md",
          pathname === "/" ? "text-orange-600 bg-orange-50" : "text-gray-600",
        )}
      >
        होम
      </Link>
      <Link
        href="/magazines"
        className={cn(
          "transition-colors hover:text-orange-600 px-2 py-1 rounded-md",
          pathname?.startsWith("/magazines") ? "text-orange-600 bg-orange-50" : "text-gray-600",
        )}
      >
        पत्रिकाएं
      </Link>
      <Link
        href="/about"
        className={cn(
          "transition-colors hover:text-orange-600 px-2 py-1 rounded-md",
          pathname?.startsWith("/about") ? "text-orange-600 bg-orange-50" : "text-gray-600",
        )}
      >
        हमारे बारे में
      </Link>
      <Link
        href="/contact"
        className={cn(
          "transition-colors hover:text-orange-600 px-2 py-1 rounded-md",
          pathname?.startsWith("/contact") ? "text-orange-600 bg-orange-50" : "text-gray-600",
        )}
      >
        संपर्क
      </Link>
    </nav>
  )
}
