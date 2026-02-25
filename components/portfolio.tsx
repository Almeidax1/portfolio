"use client"

import { useState, useEffect } from "react"
import { ThemeProvider, useTheme } from "@/hooks/use-theme"
import { ParallaxBackground } from "@/components/ui/parallax-background"
import Header from "./sections/header"
import Hero from "./sections/hero"
import About from "./sections/about"
import Projects from "./sections/projects"
import Skills from "./sections/skills"
import Experience from "./sections/experience"
import Certificates from "./sections/certificates"
import Contact from "./sections/contact"
import Footer from "./sections/footer"

function PortfolioContent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const { themeName, currentTheme } = useTheme()

  useEffect(() => {
    setIsLoaded(true)

    document.documentElement.setAttribute("data-theme", themeName)
    document.documentElement.style.setProperty("--theme-glow", currentTheme.glowColor)
    document.documentElement.style.setProperty("--theme-color", `rgb(${getThemeRGB(currentTheme.primaryLight)})`)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [themeName, currentTheme])

  const getThemeRGB = (colorClass: string) => {
    const colorMap: Record<string, string> = {
      "cyan-400": "34, 211, 238",
      "emerald-400": "52, 211, 153",
      "blue-400": "96, 165, 250",
      "orange-400": "251, 146, 60",
      "purple-400": "196, 181, 253",
      "rose-400": "251, 113, 133",
      "green-500": "74, 222, 128",
      "yellow-400": "250, 204, 21",
      "lime-400": "163, 230, 53",
      "red-400": "248, 113, 113",
      "sky-400": "56, 189, 248",
      "indigo-400": "129, 140, 248",
    }
    return colorMap[colorClass] || "34, 211, 238"
  }

  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-x-hidden">
      <ParallaxBackground />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute inset-0 bg-gradient-to-br from-${currentTheme.primary}/5 via-transparent to-blue-500/5`}
        ></div>
        <div
          className={`absolute w-96 h-96 bg-${currentTheme.primary}/10 rounded-full blur-3xl transition-all duration-1000 ease-out`}
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <Header />
      <Hero isLoaded={isLoaded} />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  )
}

export default function Portfolio() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  )
}
