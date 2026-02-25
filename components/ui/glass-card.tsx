"use client"

import { cn } from "@/lib/utils"
import { useTheme } from "@/hooks/use-theme"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  variant?: "default" | "intense" | "subtle" | "frosted"
  hover?: boolean
}

export function GlassCard({ children, className, variant = "default", hover = true }: GlassCardProps) {
  const { currentTheme } = useTheme()

  const variants = {
    default: "bg-white/10 backdrop-blur-md border border-white/20",
    intense: "bg-white/15 backdrop-blur-xl border border-white/30",
    subtle: "bg-white/5 backdrop-blur-sm border border-white/10",
    frosted: "bg-white/20 backdrop-blur-2xl border border-white/40",
  }

  const hoverEffects = hover
    ? `hover:bg-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-${currentTheme.primary}/20 hover:scale-[1.02]`
    : ""

  return (
    <div
      className={cn(
        variants[variant],
        "rounded-2xl shadow-xl transition-all duration-500 ease-out",
        "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500",
        hover && "hover:before:opacity-100 relative overflow-hidden",
        hoverEffects,
        className,
      )}
      style={{
        boxShadow: `0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.05)`,
      }}
    >
      {children}
    </div>
  )
}
