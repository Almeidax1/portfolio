"use client"

import { cn } from "@/lib/utils"
import { useTheme } from "@/hooks/use-theme"
import type { ReactNode, ButtonHTMLAttributes } from "react"

interface ModernButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  icon?: ReactNode
}

export function ModernButton({
  children,
  className,
  variant = "primary",
  size = "md",
  icon,
  ...props
}: ModernButtonProps) {
  const { currentTheme } = useTheme()

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  }

  const variants = {
    primary: `bg-gradient-to-r ${currentTheme.gradient} text-white hover:opacity-90 shadow-lg hover:shadow-xl`,
    outline: `border border-zinc-600 text-zinc-300 bg-transparent hover:bg-zinc-800 hover:border-zinc-500`,
    ghost: `text-zinc-400 hover:text-white hover:bg-zinc-800/50`,
  }

  return (
    <button
      className={cn(
        "relative rounded-lg font-medium transition-all duration-200 ease-out",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900",
        "hover:scale-[1.02] active:scale-[0.98]",
        "flex items-center justify-center gap-2",
        `focus:ring-${currentTheme.primary}/50`,
        sizes[size],
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
      {icon && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </button>
  )
}
