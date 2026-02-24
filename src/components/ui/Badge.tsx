import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "tech" | "outline";
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all duration-200",
        variant === "default" &&
          "bg-indigo-500/15 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/25",
        variant === "tech" &&
          "bg-white/5 text-zinc-300 border border-white/10 hover:bg-white/10 hover:scale-105",
        variant === "outline" &&
          "border border-white/20 text-zinc-300 hover:border-indigo-500/50 hover:text-indigo-300",
        className
      )}
      {...props}
    />
  );
}
