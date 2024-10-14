// Textarea.tsx

import * as React from "react";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className="p-2 border rounded-md w-full"
        {...props} // Ensure props like id, value, onChange, etc. are passed here
      />
    );
  }
);

Textarea.displayName = "Textarea";
