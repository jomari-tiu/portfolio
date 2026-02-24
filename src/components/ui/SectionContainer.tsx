import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type SectionContainerProps = HTMLAttributes<HTMLElement> & {
  id?: string;
  as?: "section" | "div";
};

export function SectionContainer({
  id,
  as: Tag = "section",
  className,
  children,
  ...props
}: SectionContainerProps) {
  return (
    <Tag
      id={id}
      className={cn("w-full py-20 px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </Tag>
  );
}

type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  label: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ label, title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-16", className)}>
      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-3 block">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
      {subtitle && (
        <p className="text-zinc-400 max-w-xl mx-auto text-base">{subtitle}</p>
      )}
    </div>
  );
}
