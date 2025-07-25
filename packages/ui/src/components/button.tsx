import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { LoadingDots } from "@ui/components/loading-dots";
import { cn } from "@ui/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap gap-2 rounded-md text-sm font-medium ring-offset-background transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "border border-destructive bg-destructive/5 text-destructive hover:bg-destructive/20",
        outline:
          "border-2 border-primary bg-background hover:bg-secondary hover:text-secondary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-primary/90 hover:bg-muted hover:text-primary",
        link: "text-accent underline underline-offset-4 hover:text-accent/90 dark:text-accent-contrast dark:hover:text-accent-contrast/90",
        muted: "bg-accent-contrast/10 text-accent-contrast hover:bg-accent-contrast/15",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90",
        nav: "text-muted-foreground hover:text-primary",
        active: "bg-accent/5 text-accent",
        staticBlack: "bg-black/90 text-white hover:bg-black/80",
        staticGhost: "text-white hover:bg-white/10",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-7 rounded-3xl px-2.5 text-xs",
        sm: "h-9 rounded-3xl px-3",
        lg: "h-11 rounded-3xl px-8",
        xl: "h-14 rounded-3xl px-10",
        icon: "size-10",
        auto: "h-auto p-0",
        square: "size-12 rounded-md p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

function Button({
  className,
  variant,
  size,
  isLoading,
  children,
  disabled,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? <LoadingDots variant={variant} size={size} /> : children}
    </Comp>
  );
}

export { Button, buttonVariants, type ButtonProps };
