import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SectionTitle({
  index,
  id,
  children,
  className,
}: {
  index: string;
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-8 flex items-center gap-4", className)}>
      <h2 id={id} className="flex items-baseline gap-3 text-3xl font-semibold tracking-tight">
        <span className="text-success font-mono text-base font-medium">{index}.</span>
        {children}
      </h2>
      <div className="bg-border h-px flex-1" aria-hidden />
    </div>
  );
}
