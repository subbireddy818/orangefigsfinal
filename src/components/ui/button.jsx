import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 active:scale-95",
    {
        variants: {
            variant: {
                default:
                    "bg-gray-900 text-white shadow-xl hover:bg-primary hover:shadow-primary/20",
                destructive:
                    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                    "border-2 border-gray-100 bg-white shadow-sm hover:border-primary hover:text-primary",
                secondary:
                    "bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                premium: "bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x text-white shadow-xl hover:scale-105"
            },
            size: {
                default: "h-14 px-8 py-2",
                sm: "h-10 rounded-xl px-4 text-xs",
                lg: "h-16 rounded-2xl px-10 text-base",
                icon: "h-11 w-11",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
        <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props} />
    );
})
Button.displayName = "Button"

export { Button, buttonVariants }
