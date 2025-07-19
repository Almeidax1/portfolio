"use client"

import { useParallaxTransform } from "@/hooks/use-parallax"
import { useTheme } from "@/hooks/use-theme"
import { useEffect, useRef } from "react"

export function DynamicParallax() {
  const { currentTheme } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)

  // Diferentes transformações para cada elemento
  const layer1Transform = useParallaxTransform(0.1, "vertical")
  const layer2Transform = useParallaxTransform(0.3, "diagonal")
  const layer3Transform = useParallaxTransform(0.5, "horizontal")
  const layer4Transform = useParallaxTransform(0.2, "rotate")
  const layer5Transform = useParallaxTransform(0.4, "scale")

  useEffect(() => {
    const updateTransforms = () => {
      if (!containerRef.current) return

      const elements = containerRef.current.children
      if (elements.length >= 5) {
        ;(elements[0] as HTMLElement).style.transform = layer1Transform()
        ;(elements[1] as HTMLElement).style.transform = layer2Transform()
        ;(elements[2] as HTMLElement).style.transform = layer3Transform()
        ;(elements[3] as HTMLElement).style.transform = layer4Transform()
        ;(elements[4] as HTMLElement).style.transform = layer5Transform()
      }
    }

    const handleScroll = () => {
      requestAnimationFrame(updateTransforms)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    updateTransforms() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [layer1Transform, layer2Transform, layer3Transform, layer4Transform, layer5Transform])

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Layer 1 - Grandes círculos de fundo */}
      <div className="absolute inset-0">
        <div
          className={`absolute w-[800px] h-[800px] bg-gradient-to-br from-${currentTheme.primary}/10 via-${currentTheme.primary}/5 to-transparent rounded-full blur-3xl`}
          style={{
            top: "-20%",
            left: "-10%",
            willChange: "transform",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-blue-500/8 via-purple-500/6 to-transparent rounded-full blur-2xl"
          style={{
            top: "30%",
            right: "-15%",
            willChange: "transform",
          }}
        />
        <div
          className="absolute w-[700px] h-[700px] bg-gradient-to-br from-purple-500/6 via-pink-500/4 to-transparent rounded-full blur-3xl"
          style={{
            bottom: "-10%",
            left: "20%",
            willChange: "transform",
          }}
        />
      </div>

      {/* Layer 2 - Formas geométricas médias */}
      <div className="absolute inset-0">
        <div
          className={`absolute w-32 h-32 bg-gradient-to-br from-${currentTheme.primaryLight}/20 to-blue-400/15 rounded-3xl`}
          style={{
            top: "15%",
            right: "20%",
            willChange: "transform",
          }}
        />
        <div
          className="absolute w-24 h-24 bg-gradient-to-br from-purple-400/15 to-pink-400/10 rounded-2xl rotate-45"
          style={{
            top: "60%",
            left: "15%",
            willChange: "transform",
          }}
        />
        <div
          className="absolute w-40 h-40 bg-gradient-to-br from-cyan-400/12 to-blue-500/8 rounded-full"
          style={{
            bottom: "25%",
            right: "25%",
            willChange: "transform",
          }}
        />
      </div>

      {/* Layer 3 - Elementos lineares */}
      <div className="absolute inset-0">
        <div
          className={`absolute w-1 h-64 bg-gradient-to-b from-${currentTheme.primaryLight}/30 via-${currentTheme.primaryLight}/10 to-transparent`}
          style={{
            top: "10%",
            left: "30%",
            willChange: "transform",
          }}
        />
        <div
          className="absolute w-48 h-1 bg-gradient-to-r from-blue-400/20 via-purple-400/15 to-transparent"
          style={{
            top: "40%",
            right: "10%",
            willChange: "transform",
          }}
        />
        <div
          className="absolute w-1 h-32 bg-gradient-to-b from-pink-400/25 to-transparent rotate-12"
          style={{
            bottom: "30%",
            left: "60%",
            willChange: "transform",
          }}
        />
      </div>

      {/* Layer 4 - Partículas pequenas */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-${currentTheme.primaryLight}/40 rounded-full`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              willChange: "transform",
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Layer 5 - Gradientes dinâmicos */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 opacity-30"
          style={{
            background: `radial-gradient(circle, ${currentTheme.glowColor} 0%, transparent 70%)`,
            top: "20%",
            left: "40%",
            willChange: "transform",
          }}
        />
        <div
          className="absolute w-80 h-80 opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
            bottom: "20%",
            right: "30%",
            willChange: "transform",
          }}
        />
      </div>
    </div>
  )
}
