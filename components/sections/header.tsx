"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import ThemeSelector from "@/components/theme-selector"
import { useTheme } from "@/hooks/use-theme"
import { Menu, X, Download } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const { currentTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleCVDownload = (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      window.open("https://drive.google.com/file/d/13cJjb75PjwrAbGQ-2RYWB1VoXWEatwiL/view?usp=drivesdk", "_blank")
    } catch (error) {
      console.error("Erro ao abrir CV:", error)
    }
  }

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    try {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    } catch (error) {
      console.error("Erro ao navegar:", error)
    }
  }

  const navItems = [
    { name: "Sobre", id: "sobre" },
    { name: "Projetos", id: "projetos" },
    { name: "Skills", id: "habilidades" },
    { name: "Experiência", id: "experiencia" },
    { name: "Contato", id: "contato" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 bg-zinc-950/95 backdrop-blur-xl border-b border-${currentTheme.primary}/20 shadow-header`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="text-lg sm:text-xl font-bold text-white">
              <span className="text-zinc-400">{"<"}</span>
              <span
                className={`bg-gradient-to-r ${currentTheme.textGradient} bg-clip-text text-transparent animate-glow-text animate-header-glow`}
              >
                Kauã Almeida
              </span>
              <span className="text-zinc-400">{"/>"}</span>
            </div>

            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`text-zinc-400 hover:text-${currentTheme.primaryLight} transition-all duration-300 text-sm font-medium relative group cursor-pointer`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-${currentTheme.primaryLight} to-blue-400 transition-all duration-300 group-hover:w-full`}
                  ></span>
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <ThemeSelector />
              <Button
                variant="outline"
                size="sm"
                className={`border-${currentTheme.primary}/30 text-${currentTheme.primaryLight} bg-${currentTheme.primary}/5 hover:bg-${currentTheme.primary}/10 backdrop-blur-sm group transition-all duration-300 hover:scale-105 min-h-[44px]`}
                onClick={handleCVDownload}
              >
                <Download className="w-4 h-4 sm:mr-2 group-hover:animate-bounce" />
                <span className="hidden sm:inline">CV</span>
              </Button>
            </div>

            <div className="flex items-center gap-2 sm:hidden">
              <ThemeSelector />
              <Button
                variant="ghost"
                size="sm"
                className="p-2 min-h-[44px] min-w-[44px]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        <div
          className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-${currentTheme.primaryLight}/60 to-transparent animate-glow-line`}
        ></div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-zinc-950/90 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-16 left-0 right-0 bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-800/50 shadow-2xl">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`block w-full text-left px-4 py-3 text-zinc-300 hover:text-${currentTheme.primaryLight} hover:bg-${currentTheme.primary}/10 rounded-lg transition-all duration-300 font-medium`}
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-4 border-t border-zinc-800/50">
                <Button
                  variant="outline"
                  className={`w-full border-${currentTheme.primary}/30 text-${currentTheme.primaryLight} bg-${currentTheme.primary}/5 hover:bg-${currentTheme.primary}/10 min-h-[48px]`}
                  onClick={handleCVDownload}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
