import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:font-medium [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 md:[&_svg]:size-6",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-accent",
        secondary: "bg-secondary text-secondary-foreground hover:bg-primary",
        link: "text-primary underline-offset-4 hover:underline",
        outline:
          "border border-input bg-input-background text-foreground hover:bg-input",
        carousel: "bg-secondary text-foreground",
        jobOrder:
          "bg-input-background text-foreground hover:bg-secondary-foreground",

        // ...other button variants
      },
      size: {
        default: "h-12 px-9 py-4",
        lg: "h-11 px-6 py-2 md:h-16 md:px-9 md:py-6",
        icon: "size-12",
        // ...other button sizes
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
    // we can use asChild prop to forward button classes for example to a Link
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
