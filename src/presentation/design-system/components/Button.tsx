import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          {
            'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 rounded-xl': variant === 'default',
            'border-[var(--color-border-subtle)] border-dashed bg-transparent hover:bg-[var(--color-surface-elevated)] text-[var(--text-muted)] rounded-full': variant === 'outline',
            'hover:bg-[var(--color-surface-elevated)]': variant === 'ghost',
            'h-12 px-4 py-2 text-[var(--font-base)]': size === 'default',
            'w-12 h-12': size === 'icon',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
