import * as React from "react"
import { cn } from "../../lib/utils"

// Note: I'm not using cva here to keep it simple without installing another dep (class-variance-authority), 
// unless I install it. Wait, I didn't install cva. I should implement a simple switch or object mapping.
// Actually, I'll stick to 'cn' and standard props to avoid extra deps if possible, 
// OR I can quickly add cva if I want robust variants. 
// Standard robust way without cva:

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "accent" | "outline" | "ghost" | "link"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        // Base styles
        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition-transform duration-150"

        // Variants
        const variants = {
            default: "bg-primary text-white hover:bg-primary-dark/90",
            accent: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20",
            outline: "border border-input bg-background hover:bg-slate-100 hover:text-primary",
            ghost: "hover:bg-slate-100 hover:text-primary",
            link: "text-primary underline-offset-4 hover:underline",
        }

        // Sizes
        const sizes = {
            default: "h-11 px-6 py-2", // Minimum 44px+ for accessibility, 48px ideal for touch
            sm: "h-9 rounded-md px-3",
            lg: "h-12 rounded-md px-8 text-base",
            icon: "h-10 w-10",
        }

        return (
            <button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, type ButtonProps }
