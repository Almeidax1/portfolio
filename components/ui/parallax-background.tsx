"use client"

import { useParallaxOffset } from "@/hooks/use-parallax"
import { useTheme } from "@/hooks/use-theme"

export function ParallaxBackground() {
  const { currentTheme } = useTheme()
  const offset1 = useParallaxOffset(0.1)
  const offset2 = useParallaxOffset(0.2)
  const offset3 = useParallaxOffset(0.3)

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Layer 1 - Mais lento */}
      <div
        className={`absolute w-96 h-96 bg-${currentTheme.primary}/5 rounded-full blur-3xl`}
        style={{
          transform: `translateY(${offset1}px)`,
          top: "10%",
          left: "10%",
        }}
      />

      {/* Layer 2 - Velocidade média */}
      <div
        className="absolute w-80 h-80 bg-blue-500/5 rounded-full blur-2xl"
        style={{
          transform: `translateY(${-offset2}px)`,
          top: "30%",
          right: "15%",
        }}
      />

      {/* Layer 3 - Mais rápido */}
      <div
        className="absolute w-64 h-64 bg-purple-500/5 rounded-full blur-xl"
        style={{
          transform: `translateY(${offset3}px)`,
          bottom: "20%",
          left: "20%",
        }}
      />

      {/* Pequenos elementos flutuantes */}
      <div
        className={`absolute w-4 h-4 bg-${currentTheme.primaryLight}/20 rounded-full`}
        style={{
          transform: `translateY(${-offset2 * 0.8}px)`,
          top: "15%",
          right: "25%",
        }}
      />

      <div
        className="absolute w-6 h-6 bg-blue-400/20 rounded-lg rotate-45"
        style={{
          transform: `translateY(${offset1 * 1.2}px)`,
          top: "60%",
          right: "10%",
        }}
      />
    </div>
  )
}
