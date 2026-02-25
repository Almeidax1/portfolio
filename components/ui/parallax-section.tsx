"use client"

import { useParallaxTransform } from "@/hooks/use-parallax"
import { useEffect, useRef, type ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  direction?: "vertical" | "horizontal" | "diagonal" | "rotate" | "scale"
  className?: string
}

export function ParallaxSection({
  children,
  speed = 0.5,
  direction = "vertical",
  className = "",
}: ParallaxSectionProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const getTransform = useParallaxTransform(speed, direction)

  useEffect(() => {
    const updateTransform = () => {
      if (elementRef.current) {
        elementRef.current.style.transform = getTransform()
      }
    }

    const handleScroll = () => {
      requestAnimationFrame(updateTransform)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    updateTransform()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [getTransform])

  return (
    <div ref={elementRef} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  )
}
