"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";

export type NavItem = {
  href: `#${string}`;
  label: string;
  sectionId: string;
};

export function NavLinks({ items }: { items: ReadonlyArray<NavItem> }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.sectionId))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const topmost = items.find((item) => visible.has(item.sectionId));
        setActiveId(topmost?.sectionId ?? null);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  // Sync URL hash with the section currently in view (no scroll, no history push).
  useEffect(() => {
    const target = activeId ? `#${activeId}` : "";
    if (window.location.hash === target) return;
    const url = `${window.location.pathname}${window.location.search}${target}`;
    window.history.replaceState(null, "", url);
  }, [activeId]);

  return (
    <ul className="flex items-center gap-5 text-sm">
      {items.map((item) => {
        const isActive = activeId === item.sectionId;
        return (
          <li key={item.href} className="relative">
            <a
              href={item.href}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "relative inline-block py-1 transition-colors motion-reduce:transition-none",
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
              {isActive ? (
                <motion.span
                  layoutId="active-nav-underline"
                  className="bg-foreground absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              ) : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
