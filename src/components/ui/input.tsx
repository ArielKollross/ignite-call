import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				"file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
				"selection:bg-input selection:text-primary-foreground",
				"disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
				"placeholder:text-muted-foreground",
				"dark:bg-input/30",
				"border-input flex w-full min-w-0 rounded-md bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm",
				"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
				"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
				"bg-input text-gray-300 py-3 px-4 h-12",
				className,
			)}
			{...props}
		/>
	);
}

export { Input };
