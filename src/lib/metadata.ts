import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

type Locale = (typeof routing.locales)[number];

function pathFor(locale: Locale, path: string): string {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  const cleaned = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${prefix}${cleaned}` || "/";
}

export function buildAlternates(
  path: string,
  currentLocale: Locale,
): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = pathFor(locale, path);
  }
  languages["x-default"] = pathFor(routing.defaultLocale, path);
  return {
    canonical: pathFor(currentLocale, path),
    languages,
  };
}
