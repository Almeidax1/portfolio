"use client"

import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Theme = {
  name: string
  primary: string
  primaryHover: string
  primaryLight: string
  primaryDark: string
  gradient: string
  gradientHover: string
  textGradient: string
  glowColor: string
  borderColor: string
  bgColor: string
  icon: string
  description: string
}

const themes: Record<string, Theme> = {
  neon: {
    name: "Neon",
    primary: "cyan-500",
    primaryHover: "cyan-600",
    primaryLight: "cyan-400",
    primaryDark: "cyan-600",
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    gradientHover: "from-cyan-600 via-blue-600 to-purple-600",
    textGradient: "from-cyan-400 via-blue-300 to-purple-400",
    glowColor: "rgba(6, 182, 212, 0.5)",
    borderColor: "cyan-400/30",
    bgColor: "cyan-400/10",
    icon: "⚡",
    description: "Futurismo e tecnologia",
  },
  emerald: {
    name: "Emerald",
    primary: "emerald-500",
    primaryHover: "emerald-600",
    primaryLight: "emerald-400",
    primaryDark: "emerald-600",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    gradientHover: "from-emerald-600 via-teal-600 to-cyan-600",
    textGradient: "from-emerald-400 via-teal-300 to-cyan-400",
    glowColor: "rgba(16, 185, 129, 0.5)",
    borderColor: "emerald-400/30",
    bgColor: "emerald-400/10",
    icon: "🌿",
    description: "Natureza e crescimento",
  },
  ocean: {
    name: "Ocean",
    primary: "blue-500",
    primaryHover: "blue-600",
    primaryLight: "blue-400",
    primaryDark: "blue-600",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    gradientHover: "from-blue-600 via-cyan-600 to-teal-600",
    textGradient: "from-blue-400 via-cyan-300 to-teal-400",
    glowColor: "rgba(59, 130, 246, 0.5)",
    borderColor: "blue-400/30",
    bgColor: "blue-400/10",
    icon: "🌊",
    description: "Profundidade e serenidade",
  },
  sunset: {
    name: "Sunset",
    primary: "orange-500",
    primaryHover: "orange-600",
    primaryLight: "orange-400",
    primaryDark: "orange-600",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    gradientHover: "from-orange-600 via-red-600 to-pink-600",
    textGradient: "from-orange-400 via-red-400 to-pink-400",
    glowColor: "rgba(249, 115, 22, 0.5)",
    borderColor: "orange-400/30",
    bgColor: "orange-400/10",
    icon: "🌅",
    description: "Energia e paixão",
  },
  cosmic: {
    name: "Cosmic",
    primary: "purple-500",
    primaryHover: "purple-600",
    primaryLight: "purple-400",
    primaryDark: "purple-600",
    gradient: "from-purple-500 via-violet-500 to-indigo-500",
    gradientHover: "from-purple-600 via-violet-600 to-indigo-600",
    textGradient: "from-purple-400 via-violet-300 to-indigo-400",
    glowColor: "rgba(147, 51, 234, 0.5)",
    borderColor: "purple-400/30",
    bgColor: "purple-400/10",
    icon: "🌌",
    description: "Mistério e criatividade",
  },
  rose: {
    name: "Rose",
    primary: "rose-500",
    primaryHover: "rose-600",
    primaryLight: "rose-400",
    primaryDark: "rose-600",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    gradientHover: "from-rose-600 via-pink-600 to-fuchsia-600",
    textGradient: "from-rose-400 via-pink-300 to-fuchsia-400",
    glowColor: "rgba(244, 63, 94, 0.5)",
    borderColor: "rose-400/30",
    bgColor: "rose-400/10",
    icon: "🌹",
    description: "Elegância e sofisticação",
  },
  forest: {
    name: "Forest",
    primary: "green-600",
    primaryHover: "green-700",
    primaryLight: "green-500",
    primaryDark: "green-700",
    gradient: "from-green-600 via-emerald-600 to-teal-600",
    gradientHover: "from-green-700 via-emerald-700 to-teal-700",
    textGradient: "from-green-500 via-emerald-400 to-teal-500",
    glowColor: "rgba(34, 197, 94, 0.5)",
    borderColor: "green-500/30",
    bgColor: "green-500/10",
    icon: "🌲",
    description: "Estabilidade e harmonia",
  },
  gold: {
    name: "Gold",
    primary: "yellow-500",
    primaryHover: "yellow-600",
    primaryLight: "yellow-400",
    primaryDark: "yellow-600",
    gradient: "from-yellow-500 via-amber-500 to-orange-500",
    gradientHover: "from-yellow-600 via-amber-600 to-orange-600",
    textGradient: "from-yellow-400 via-amber-300 to-orange-400",
    glowColor: "rgba(234, 179, 8, 0.5)",
    borderColor: "yellow-400/30",
    bgColor: "yellow-400/10",
    icon: "✨",
    description: "Luxo e prosperidade",
  },
  matrix: {
    name: "Matrix",
    primary: "lime-500",
    primaryHover: "lime-600",
    primaryLight: "lime-400",
    primaryDark: "lime-600",
    gradient: "from-lime-500 via-green-500 to-emerald-500",
    gradientHover: "from-lime-600 via-green-600 to-emerald-600",
    textGradient: "from-lime-400 via-green-300 to-emerald-400",
    glowColor: "rgba(132, 204, 22, 0.5)",
    borderColor: "lime-400/30",
    bgColor: "lime-400/10",
    icon: "🔋",
    description: "Código e energia",
  },
  fire: {
    name: "Fire",
    primary: "red-500",
    primaryHover: "red-600",
    primaryLight: "red-400",
    primaryDark: "red-600",
    gradient: "from-red-500 via-orange-500 to-yellow-500",
    gradientHover: "from-red-600 via-orange-600 to-yellow-600",
    textGradient: "from-red-400 via-orange-300 to-yellow-400",
    glowColor: "rgba(239, 68, 68, 0.5)",
    borderColor: "red-400/30",
    bgColor: "red-400/10",
    icon: "🔥",
    description: "Intensidade e poder",
  },
  ice: {
    name: "Ice",
    primary: "sky-500",
    primaryHover: "sky-600",
    primaryLight: "sky-400",
    primaryDark: "sky-600",
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    gradientHover: "from-sky-600 via-blue-600 to-indigo-600",
    textGradient: "from-sky-400 via-blue-300 to-indigo-400",
    glowColor: "rgba(14, 165, 233, 0.5)",
    borderColor: "sky-400/30",
    bgColor: "sky-400/10",
    icon: "❄️",
    description: "Frieza e precisão",
  },
  royal: {
    name: "Royal",
    primary: "indigo-500",
    primaryHover: "indigo-600",
    primaryLight: "indigo-400",
    primaryDark: "indigo-600",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    gradientHover: "from-indigo-600 via-purple-600 to-pink-600",
    textGradient: "from-indigo-400 via-purple-300 to-pink-400",
    glowColor: "rgba(99, 102, 241, 0.5)",
    borderColor: "indigo-400/30",
    bgColor: "indigo-400/10",
    icon: "👑",
    description: "Nobreza e elegância",
  },
}

type ThemeContextType = {
  currentTheme: Theme
  themeName: string
  setTheme: (themeName: string) => void
  themes: Record<string, Theme>
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState("neon") // Padrão alterado para neon

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme")
    if (saved && themes[saved]) {
      setThemeName(saved)
    }
  }, [])

  const setTheme = (newTheme: string) => {
    if (themes[newTheme]) {
      setThemeName(newTheme)
      localStorage.setItem("portfolio-theme", newTheme)
    }
  }

  const currentTheme = themes[themeName]

  const value = {
    currentTheme,
    themeName,
    setTheme,
    themes,
  }

  return React.createElement(ThemeContext.Provider, { value }, children)
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
