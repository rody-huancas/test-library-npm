import { forwardRef, HTMLAttributes } from "react";
import { cn } from "../utils/utils";

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  col?: boolean;
  spacing: number;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>((propsStack, ref) => {
  const { children, col, spacing, className, ...props } = propsStack;

  return (
    <div
      className={cn("flex gap4 flex-wrap", col && "flex-col", spacing && `gap-${spacing}`, className)}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  );
});
