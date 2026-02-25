"use client"

import { cn } from "@/lib/utils"
import { useTheme } from "@/hooks/use-theme"
import type { ReactNode } from "react"

interface NeuroCardProps {
  children: ReactNode
  className?: string
  variant?: "raised" | "pressed" | "floating"
  interactive?: boolean
}

export function NeuroCard({ children, className, variant = "raised", interactive = false }: NeuroCardProps) {
  const { currentTheme } = useTheme()

  const variants = {
    raised: `
      shadow-[12px_12px_24px_rgba(0,0,0,0.4),-12px_-12px_24px_rgba(255,255,255,0.1)]
      ${interactive ? "hover:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.1)] hover:scale-[0.98]" : ""}
    `,
    pressed: `
      shadow-[inset_12px_12px_24px_rgba(0,0,0,0.4),inset_-12px_-12px_24px_rgba(255,255,255,0.1)]
    `,
    floating: `
      shadow-[0_16px_64px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.1)]
      ${interactive ? "hover:shadow-[0_24px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.2)] hover:translate-y-[-4px]" : ""}
    `,
  }

  return (
    <div
      className={cn(
        "relative rounded-3xl bg-zinc-900 transition-all duration-500 ease-out",
        variants[variant],
        interactive && "cursor-pointer",
        className,
      )}
    >
      {children}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-${currentTheme.primary}/10 to-transparent opacity-0 transition-opacity duration-500 ${interactive ? "hover:opacity-100" : ""}`}
      />
    </div>
  )
}
