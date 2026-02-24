import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground bg-background/50 backdrop-blur-sm border-border/50 h-10 w-full min-w-0 rounded-lg border-2 px-4 py-2 text-base shadow-lg transition-all outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                "focus-visible:border-primary/50 focus-visible:bg-background/70",
                "aria-invalid:border-destructive",
                "hover:border-border hover:bg-background/60",
                className,
            )}
            {...props}
        />
    );
}

export { Input };
