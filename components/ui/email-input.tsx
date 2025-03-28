import * as React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type EmailInputProps = React.ComponentProps<"input"> & {
  onChange?: (value: string) => void;
};

const EmailInput = React.forwardRef<HTMLInputElement, EmailInputProps>(
  ({ className, onChange, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        className={cn("flex", className)}
        placeholder="Enter your email"
        onChange={(e) => onChange?.(e.target.value)}
        {...props}
      />
    );
  }
);
EmailInput.displayName = "EmailInput";

export { EmailInput };
