import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full border-b-2 border-primary rounded-t bg-background px-3 py-2 text-sm file:border file:border-solid file:border-primary file:bg-white file:rounded-md file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground placeholder:opacity-70 focus-visible:outline-none focus-visible:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
