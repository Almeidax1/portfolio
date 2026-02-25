"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Palette, Check, Sparkles } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"

export default function ThemeSelector() {
  const { currentTheme, themeName, setTheme, themes } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  // Configuração visual dos temas
  const themeVisuals = {
    neon: {
      colors: ["#06b6d4", "#22d3ee", "#67e8f9"],
      gradient: "from-cyan-500 to-blue-400",
    },
    emerald: {
      colors: ["#10b981", "#34d399", "#6ee7b7"],
      gradient: "from-emerald-500 to-teal-400",
    },
    ocean: {
      colors: ["#3b82f6", "#60a5fa", "#93c5fd"],
      gradient: "from-blue-500 to-cyan-400",
    },
    sunset: {
      colors: ["#f97316", "#fb923c", "#fdba74"],
      gradient: "from-orange-500 to-red-400",
    },
    cosmic: {
      colors: ["#9333ea", "#c084fc", "#ddd6fe"],
      gradient: "from-purple-500 to-violet-400",
    },
    rose: {
      colors: ["#f43f5e", "#fb7185", "#fda4af"],
      gradient: "from-rose-500 to-pink-400",
    },
    forest: {
      colors: ["#22c55e", "#4ade80", "#86efac"],
      gradient: "from-green-600 to-emerald-400",
    },
    gold: {
      colors: ["#eab308", "#facc15", "#fde047"],
      gradient: "from-yellow-500 to-amber-400",
    },
    matrix: {
      colors: ["#84cc16", "#a3e635", "#bef264"],
      gradient: "from-lime-500 to-green-400",
    },
    fire: {
      colors: ["#ef4444", "#f87171", "#fca5a5"],
      gradient: "from-red-500 to-orange-400",
    },
    ice: {
      colors: ["#0ea5e9", "#38bdf8", "#7dd3fc"],
      gradient: "from-sky-500 to-blue-400",
    },
    royal: {
      colors: ["#6366f1", "#818cf8", "#a5b4fc"],
      gradient: "from-indigo-500 to-purple-400",
    },
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        className={`border-${currentTheme.primary}/30 text-${currentTheme.primaryLight} bg-${currentTheme.primary}/5 hover:bg-${currentTheme.primary}/10 backdrop-blur-sm group transition-all duration-300 hover:scale-105`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Palette className="w-4 h-4 mr-2 group-hover:animate-spin" />
        <span className="hidden sm:inline">Tema</span>
        <span className="sm:hidden">{currentTheme.icon}</span>
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-4 min-w-[340px] max-h-[80vh] overflow-y-auto z-50 animate-fade-in shadow-2xl">
          <div className="space-y-4">
            {/* Header */}
            <div className="text-center pb-2 border-b border-zinc-800/50">
              <h3 className="text-white font-semibold text-lg flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                Escolha seu Tema
              </h3>
              <p className="text-zinc-400 text-sm mt-1">Personalize sua experiência</p>
            </div>

            {/* Themes Grid */}
            <div className="space-y-2 max-h-[400px] overflow-y-auto scrollbar-hide">
              {Object.entries(themes).map(([key, theme]) => {
                const visual = themeVisuals[key as keyof typeof themeVisuals]
                const isActive = themeName === key

                return (
                  <button
                    key={key}
                    onClick={() => {
                      setTheme(key)
                      setIsOpen(false)
                    }}
                    className={`group relative w-full p-3 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                      isActive
                        ? `bg-gradient-to-r ${visual.gradient} shadow-lg`
                        : "bg-zinc-800/50 hover:bg-zinc-800/80 border border-zinc-700/50 hover:border-zinc-600/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Color Circles */}
                      <div className="flex gap-1">
                        {visual.colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-4 h-4 rounded-full border border-white/20"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>

                      {/* Theme Info */}
                      <div className="flex-1 text-left">
                        <div className={`font-medium text-sm ${isActive ? "text-white" : "text-zinc-300"}`}>
                          {theme.name}
                        </div>
                        <div className={`text-xs ${isActive ? "text-white/80" : "text-zinc-500"}`}>
                          {theme.description}
                        </div>
                      </div>

                      {/* Preview Gradient */}
                      <div
                        className={`w-12 h-8 rounded-lg bg-gradient-to-r ${visual.gradient} shadow-inner border border-white/10`}
                      />

                      {/* Active Indicator */}
                      {isActive && <Check className="w-4 h-4 text-white absolute top-2 right-2" />}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Current Theme Info */}
            <div
              className={`p-3 rounded-xl bg-gradient-to-r ${currentTheme.gradient} bg-opacity-10 border border-${currentTheme.primary}/20`}
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">{currentTheme.icon}</div>
                <div>
                  <div className={`font-medium text-${currentTheme.primaryLight}`}>Tema Atual: {currentTheme.name}</div>
                  <div className="text-zinc-400 text-sm">{currentTheme.description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
