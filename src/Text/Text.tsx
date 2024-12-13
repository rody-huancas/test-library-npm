import { VariantProps, cva } from "class-variance-authority";
import { ElementType, forwardRef, ReactElement, ForwardedRef } from "react";
import { PolymorphicComponentPropsWithRef } from "../utils/polmorphicsTypes";
import { cn } from "../utils/utils";

const textStyles = cva("w-full", {
  variants: {
    emphasis: {
      low: "text-gray-600 font-light",
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    italic: {
      true: "italic",
    },
    underline: {
      true: "underline underline-offset-2",
    },
  },
  defaultVariants: {
    size: "base",
    align: "left",
  },
});

type TextVariantProps = VariantProps<typeof textStyles>;

type TextProps<C extends ElementType> = PolymorphicComponentPropsWithRef<C, TextVariantProps>;

type TextComponent = <C extends ElementType = "p">(props: TextProps<C>) => ReactElement | null;

const TextRender = <C extends ElementType = "p">(
  { as, children, emphasis, size, weight, align, italic, underline, className, ...props }: TextProps<C>,
  ref: ForwardedRef<any>
) => {
  const Component = as || "p";

  return (
    <Component
      ref={ref}
      className={cn(
        textStyles({ emphasis, size, weight, align, italic, underline }),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Text = forwardRef(TextRender) as TextComponent;
