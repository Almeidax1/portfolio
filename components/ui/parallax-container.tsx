"use client"

import { useParallaxOffset } from "@/hooks/use-parallax"
import type { ReactNode } from "react"

interface ParallaxContainerProps {
  children: ReactNode
  speed?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
}

export function ParallaxContainer({ children, speed = 0.5, className = "", direction = "up" }: ParallaxContainerProps) {
  const offset = useParallaxOffset(speed)

  const getTransform = () => {
    switch (direction) {
      case "up":
        return `translateY(${-offset}px)`
      case "down":
        return `translateY(${offset}px)`
      case "left":
        return `translateX(${-offset}px)`
      case "right":
        return `translateX(${offset}px)`
      default:
        return `translateY(${-offset}px)`
    }
  }

  return (
    <div
      className={className}
      style={{
        transform: getTransform(),
        willChange: "transform",
      }}
    >
      {children}
    </div>
  )
}
