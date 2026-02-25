"use client"

import { cn } from "@/lib/utils"
import { useTheme } from "@/hooks/use-theme"
import type { ReactNode, ButtonHTMLAttributes } from "react"

interface NeuroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "raised" | "pressed" | "flat" | "floating"
  size?: "sm" | "md" | "lg"
  active?: boolean
}

export function NeuroButton({
  children,
  className,
  variant = "raised",
  size = "md",
  active = false,
  ...props
}: NeuroButtonProps) {
  const { currentTheme } = useTheme()

  const sizes = {
    sm: "px-4 py-2 text-sm min-w-[100px]",
    md: "px-6 py-3 text-sm min-w-[140px]",
    lg: "px-8 py-4 text-base min-w-[160px]",
  }

  const variants = {
    raised: `
      shadow-[8px_8px_16px_rgba(0,0,0,0.3),-8px_-8px_16px_rgba(255,255,255,0.1)]
      hover:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.1)]
      active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.1)]
    `,
    pressed: `
      shadow-[inset_8px_8px_16px_rgba(0,0,0,0.3),inset_-8px_-8px_16px_rgba(255,255,255,0.1)]
      hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]
    `,
    flat: `
      shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_8px_rgba(255,255,255,0.05)]
      hover:shadow-[6px_6px_12px_rgba(0,0,0,0.2),-6px_-6px_12px_rgba(255,255,255,0.05)]
    `,
    floating: `
      shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.1)]
      hover:shadow-[0_12px_48px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.2)]
      hover:translate-y-[-2px]
    `,
  }

  return (
    <button
      className={cn(
        "relative rounded-xl bg-zinc-900 border-0 font-medium transition-all duration-300 ease-out",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900",
        "hover:scale-105 active:scale-95",
        `focus:ring-${currentTheme.primary}/50`,
        sizes[size],
        variants[variant],
        active && variant === "raised" && variants.pressed,
        className,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${currentTheme.primary}/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100`}
      />
    </button>
  )
}
