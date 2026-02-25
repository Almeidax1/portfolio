"use client"

import Link from "next/link"
import { useState } from "react"
import { useTheme } from "@/hooks/use-theme"

export default function Footer() {
  const [showText, setShowText] = useState(false)
  const { currentTheme } = useTheme()

  return (
    <footer className="py-6 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center relative">
          <div className="text-sm">
            <span className="text-zinc-400">© 2025 </span>
            <span
              className={`bg-gradient-to-r ${currentTheme.textGradient} bg-clip-text text-transparent animate-glow-text`}
            >
              Kauã Almeida
            </span>
          </div>

          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <Link
              href="https://lucas-lima.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block transition-all duration-300"
              onMouseEnter={() => setShowText(true)}
              onMouseLeave={() => setShowText(false)}
            >
              {!showText ? (
                <span className="text-lg hover:scale-110 transition-all duration-300 cursor-pointer">😊</span>
              ) : (
                <span
                  className={`text-xs bg-gradient-to-r ${currentTheme.textGradient} bg-clip-text text-transparent animate-glow-text whitespace-nowrap cursor-pointer`}
                >
                  Made with ❤️ by Lucas Lima
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
