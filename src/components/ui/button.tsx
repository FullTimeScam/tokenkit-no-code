import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-mono font-bold ring-offset-background transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-transparent border border-foreground text-foreground hover:border-glow-orange hover:text-primary hover:shadow-glow",
        destructive: "bg-transparent border border-destructive text-destructive hover:shadow-glow",
        outline: "border border-foreground bg-transparent hover:border-glow-orange hover:text-primary hover:shadow-glow",
        secondary: "bg-transparent border border-secondary text-secondary hover:border-glow-yellow hover:shadow-yellow-glow",
        ghost: "hover:bg-muted/20 hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline hover:text-glow-orange",
        terminal: "bg-transparent border border-foreground text-foreground hover:border-glow-orange hover:text-primary hover:shadow-glow font-mono",
        danger: "bg-transparent border border-destructive text-destructive hover:border-glow-orange hover:shadow-glow",
        success: "bg-transparent border border-success text-success hover:border-glow-green hover:shadow-green-glow",
        accent: "bg-transparent border border-accent text-accent hover:border-glow-green hover:shadow-green-glow",
        hero: "bg-primary border border-primary text-primary-foreground hover:shadow-glow hover:bg-primary/90 font-bold",
        gradient: "bg-gradient-primary border border-primary text-primary-foreground hover:shadow-glow hover:opacity-90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
