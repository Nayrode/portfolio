import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                "border-border/50 placeholder:text-muted-foreground focus-visible:border-primary/50 aria-invalid:border-destructive bg-background/50 backdrop-blur-sm flex field-sizing-content min-h-32 w-full rounded-lg border-2 px-4 py-3 text-base shadow-lg transition-all outline-none focus-visible:bg-background/70 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm hover:border-border hover:bg-background/60",
                className,
            )}
            {...props}
        />
    );
}

export { Textarea };
