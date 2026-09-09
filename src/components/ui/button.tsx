import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes, type Ref } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-[opacity,transform,background-color,color] duration-150 ease-out active:not-disabled:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-merlot disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-merlot text-ivory hover:bg-merlot-hover",
        ivory: "bg-ivory text-ink hover:opacity-90",
        ghost:
          "bg-transparent text-ink hover:bg-ink/6 border border-line",
        night:
          "bg-transparent text-ivory hover:bg-ivory/10 border border-line-night",
      },
      size: {
        md: "h-11 px-5 text-sm",
        sm: "h-9 px-3.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild,
  ref,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    ref?: Ref<HTMLButtonElement>;
  }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
