"use cache";

import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { RevealOnView } from "@/components/motion/reveal-on-view";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { buildAlternates } from "@/lib/metadata";
import { cn } from "@/lib/cn";
import { nowItemIds, nowLastUpdated } from "@/features/now/data";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  setRequestLocale(locale);
  const t = await getTranslations("now");
  const title = t("title");
  const description = t("description");
  return {
    title,
    description,
    alternates: buildAlternates("/now", locale),
    openGraph: { title, description, type: "website" },
  };
}

export default async function NowPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations("now");
  const tProjects = await getTranslations("projects");
  const format = await getFormatter();
  const formattedDate = format.dateTime(new Date(nowLastUpdated), { dateStyle: "long" });

  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <RevealOnView>
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors motion-reduce:transition-none"
          >
            <ArrowLeft className="size-4" aria-hidden />
            {tProjects("backToHome")}
          </Link>

          <header className="mb-10">
            <p className="text-syntax-tag font-mono text-sm">NOW.</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
              {t("title")}
            </h1>
            <p className="text-muted-foreground mt-2 font-mono text-xs uppercase tracking-wider">
              └ {t("subtitle")}
            </p>
            <div className="bg-border mt-6 h-px" aria-hidden />
          </header>

          <p className="text-muted-foreground mb-8 max-w-2xl text-pretty">
            {t("description")}
          </p>

          <ul className="flex flex-col">
            {nowItemIds.map((id, i) => {
              const category = t(
                `items.${id}.category` as "items.working-on.category",
              );
              const body = t(`items.${id}.body` as "items.working-on.body");
              return (
                <li
                  key={id}
                  className={cn(
                    "grid grid-cols-1 gap-4 py-6 lg:grid-cols-[12rem_1fr] lg:gap-10 lg:py-8",
                    i > 0 && "border-border border-t",
                  )}
                >
                  <div>
                    <p className="text-muted-foreground font-mono text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="text-foreground mt-1 text-base font-semibold">
                      {category}
                    </h2>
                  </div>
                  <p className="text-foreground text-pretty leading-relaxed">{body}</p>
                </li>
              );
            })}
          </ul>

          <p className="text-muted-foreground mt-12 font-mono text-xs uppercase tracking-wider">
            {t("lastUpdated")}: <time dateTime={nowLastUpdated}>{formattedDate}</time>
          </p>
        </RevealOnView>
      </main>
      <SiteFooter />
    </>
  );
}
