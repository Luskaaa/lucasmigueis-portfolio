"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { m } from "motion/react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/cn";

const localeLabels: Record<(typeof routing.locales)[number], string> = {
  en: "EN",
  "pt-PT": "PT",
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const { replace } = useRouter();
  const t = useTranslations("common");
  const [pending, startTransition] = useTransition();

  function onChange(next: (typeof routing.locales)[number]) {
    if (next === locale) return;
    startTransition(() => {
      replace(pathname, { locale: next });
    });
  }

  return (
    <div
      role="group"
      aria-label={t("switchLanguage")}
      className="border-border relative inline-flex h-10 items-center gap-0.5 rounded-md border p-0.5"
    >
      {routing.locales.map((l) => {
        const isActive = l === locale;
        return (
          <m.button
            key={l}
            type="button"
            onClick={() => onChange(l)}
            disabled={pending || isActive}
            aria-current={isActive ? "true" : undefined}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            className={cn(
              "relative inline-flex h-full items-center justify-center rounded-sm px-2.5 text-xs font-semibold transition-colors motion-reduce:transition-none",
              isActive ? "text-background" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {isActive ? (
              <m.span
                layoutId="locale-active-pill"
                className="bg-foreground absolute inset-0 rounded-sm"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            ) : null}
            <span className="relative">{localeLabels[l]}</span>
          </m.button>
        );
      })}
    </div>
  );
}
