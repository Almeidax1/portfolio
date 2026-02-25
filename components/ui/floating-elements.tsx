"use client"

import { useParallaxTransform } from "@/hooks/use-parallax"
import { useTheme } from "@/hooks/use-theme"
import { useEffect, useRef } from "react"

export function FloatingElements() {
  const { currentTheme } = useTheme()
  const elementsRef = useRef<HTMLDivElement>(null)

  const transforms = [
    useParallaxTransform(0.8, "vertical"),
    useParallaxTransform(0.6, "diagonal"),
    useParallaxTransform(0.4, "horizontal"),
    useParallaxTransform(0.7, "rotate"),
    useParallaxTransform(0.5, "scale"),
    useParallaxTransform(0.9, "vertical"),
  ]

  useEffect(() => {
    const updateElements = () => {
      if (!elementsRef.current) return

      const elements = elementsRef.current.children
      transforms.forEach((transform, index) => {
        if (elements[index]) {
          ;(elements[index] as HTMLElement).style.transform = transform()
        }
      })
    }

    const handleScroll = () => {
      requestAnimationFrame(updateElements)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    updateElements()

    return () => window.removeEventListener("scroll", handleScroll)
  }, []) // Removed transforms from the dependency array

  return (
    <div ref={elementsRef} className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {/* Elemento 1 - Hexágono grande */}
      <div
        className={`absolute w-20 h-20 border-2 border-${currentTheme.primaryLight}/30`}
        style={{
          top: "10%",
          right: "15%",
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          willChange: "transform",
        }}
      />

      {/* Elemento 2 - Triângulo */}
      <div
        className="absolute w-16 h-16 border-2 border-blue-400/25"
        style={{
          top: "30%",
          left: "10%",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          willChange: "transform",
        }}
      />

      {/* Elemento 3 - Círculo com anel */}
      <div
        className={`absolute w-12 h-12 border-4 border-${currentTheme.primaryLight}/20 rounded-full`}
        style={{
          top: "50%",
          right: "30%",
          willChange: "transform",
        }}
      >
        <div className={`absolute inset-2 bg-${currentTheme.primary}/10 rounded-full`} />
      </div>

      {/* Elemento 4 - Losango */}
      <div
        className="absolute w-14 h-14 bg-gradient-to-br from-purple-400/20 to-pink-400/15 rotate-45"
        style={{
          bottom: "30%",
          left: "20%",
          willChange: "transform",
        }}
      />

      {/* Elemento 5 - Estrela */}
      <div
        className={`absolute w-10 h-10 bg-${currentTheme.primaryLight}/25`}
        style={{
          top: "70%",
          right: "40%",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          willChange: "transform",
        }}
      />

      {/* Elemento 6 - Plus */}
      <div
        className="absolute w-8 h-8 bg-cyan-400/20"
        style={{
          bottom: "15%",
          right: "20%",
          clipPath:
            "polygon(40% 0%, 60% 0%, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0% 60%, 0% 40%, 40% 40%)",
          willChange: "transform",
        }}
      />
    </div>
  )
}
