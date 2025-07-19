"use client"

import { useState, useEffect, useCallback } from "react"

export function useParallax() {
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detectar se é mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Throttle scroll para melhor performance
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return { scrollY, isMobile }
}

export function useParallaxOffset(speed = 0.5) {
  const { scrollY, isMobile } = useParallax()

  // Reduzir efeito parallax em mobile para melhor performance
  const adjustedSpeed = isMobile ? speed * 0.2 : speed

  return scrollY * adjustedSpeed
}

export function useParallaxTransform(speed = 0.5, direction = "vertical") {
  const { scrollY, isMobile } = useParallax()

  return useCallback(() => {
    // Reduzir efeito em mobile
    const adjustedSpeed = isMobile ? speed * 0.1 : speed
    const offset = scrollY * adjustedSpeed

    switch (direction) {
      case "vertical":
        return `translateY(${-offset}px)`
      case "horizontal":
        return `translateX(${offset * 0.5}px)`
      case "diagonal":
        return `translate(${offset * 0.3}px, ${-offset * 0.7}px)`
      case "rotate":
        return `rotate(${offset * 0.05}deg)`
      case "scale":
        const scale = 1 + offset * 0.0001
        return `scale(${Math.max(0.8, Math.min(1.2, scale))})`
      default:
        return `translateY(${-offset}px)`
    }
  }, [scrollY, speed, direction, isMobile])
}
