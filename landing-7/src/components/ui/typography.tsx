import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { inter, roboto_slab } from "@/lib/fonts";

const typographyVariants = cva("text-foreground text-start w-fit h-fit", {
  variants: {
    variant: {
      h1: `text-5xl ${roboto_slab.className} font-bold tracking-loose md:tracking-none lg::tracking-tight`,
      h2: ` font-semibold ${roboto_slab.className} first:mt-0 text-4xl`,
      h3: ` text-3xl ${roboto_slab.className} font-semibold tracking-tight`,
      h4: ` text-3xl ${roboto_slab.className} font-semibold sm:text-4xl md:text-3xl tracking-tight`,
      h5: ` text-2xl ${roboto_slab.className} font-semibold tracking-tight`,
      h6: ` text-base ${roboto_slab.className} font-semibold tracking-tight`,
      p: `leading-7 ${inter.className}`,
      blockquote: "mt-6 border-l-2 pl-6 italic",
      ul: "my-6 list-disc [&>li]:mt-2",
      inlineCode:
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-muted-foreground",
      largeText: "text-lg font-semibold",
      smallText: "text-sm font-medium leading-none",
      mutedText: "text-sm text-muted/50",
      subheading: "text-base/6 font-light  md:text-xl/7 lg:text-2xl/8",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

type VariantPropType = VariantProps<typeof typographyVariants>;

const variantElementMap: Record<
  NonNullable<VariantPropType["variant"]>,
  string
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  blockquote: "blockquote",
  inlineCode: "code",
  largeText: "div",
  smallText: "small",
  lead: "p",
  mutedText: "p",
  ul: "ul",
  subheading: "p",
};

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: string;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, asChild, ...props }, ref) => {
    const Comp = asChild
      ? Slot
      : as ?? (variant ? variantElementMap[variant] : undefined) ?? "div";
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };