import { getLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Download } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { HeroStagger, HeroStaggerItem } from "@/components/motion/hero-stagger";
import { ClassTip } from "./ClassTip";
import { CodePanel } from "./CodePanel";

const STATUS_PILL_CLASSES =
  "border-border bg-background/50 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium";
const CTA_PRIMARY_CLASSES =
  "bg-syntax-tag text-syntax-tag-foreground inline-flex min-h-11 items-center rounded-md px-5 font-medium";
const CTA_SECONDARY_CLASSES =
  "border-border text-foreground inline-flex min-h-11 items-center rounded-md border px-5 font-medium";
const CTA_GHOST_CLASSES =
  "text-muted-foreground hover:text-foreground inline-flex min-h-11 items-center gap-2 rounded-md px-3 font-medium";
const HEADING_CLASSES =
  "text-hero-name font-semibold leading-none tracking-tight";

export async function Hero() {
  const [t, locale] = await Promise.all([getTranslations("hero"), getLocale()]);
  const cvPath = siteConfig.cvPaths[locale as (typeof routing.locales)[number]];

  return (
    <section
      id="hero"
      className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <HeroStagger className="flex flex-col items-start gap-6">
          {siteConfig.available ? (
            <HeroStaggerItem>
              <ClassTip classes={STATUS_PILL_CLASSES}>
                <span className={STATUS_PILL_CLASSES}>
                  <span className="relative inline-flex">
                    <span className="bg-success absolute inline-flex size-2 animate-ping rounded-full opacity-75 motion-reduce:hidden" />
                    <span className="bg-success relative inline-flex size-2 rounded-full" />
                  </span>
                  {t("statusAvailable")}
                </span>
              </ClassTip>
            </HeroStaggerItem>
          ) : null}

          <HeroStaggerItem>
            <p className="text-muted-foreground font-mono text-sm">
              <span className="text-syntax-tag">{"// "}</span>
              {t("codeGreeting")}
            </p>
          </HeroStaggerItem>

          <HeroStaggerItem>
            <ClassTip classes={HEADING_CLASSES} block>
              <h1 className={HEADING_CLASSES}>{siteConfig.name}</h1>
            </ClassTip>
          </HeroStaggerItem>

          <HeroStaggerItem className="flex flex-wrap items-center gap-3">
            <p className="text-muted-foreground text-lg sm:text-xl">
              {t("role")}
            </p>
            <span className="border-border text-syntax-tag inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xs">
              v4.2
            </span>
          </HeroStaggerItem>

          <HeroStaggerItem>
            <p className="text-muted-foreground max-w-xl text-pretty">
              {t("tagline")}
            </p>
          </HeroStaggerItem>

          <HeroStaggerItem className="flex flex-wrap gap-3">
            <ClassTip classes={CTA_PRIMARY_CLASSES}>
              <a
                href="#projects"
                className={`${CTA_PRIMARY_CLASSES} transition-opacity hover:opacity-90 motion-reduce:transition-none`}
              >
                {t("ctaProjects")}
              </a>
            </ClassTip>
            <ClassTip classes={CTA_SECONDARY_CLASSES}>
              <a
                href="#contact"
                className={`${CTA_SECONDARY_CLASSES} transition-colors hover:bg-accent motion-reduce:transition-none`}
              >
                {t("ctaContact")}
              </a>
            </ClassTip>
            <ClassTip classes={CTA_GHOST_CLASSES}>
              <a
                href={cvPath}
                download
                aria-label={t("resumeAriaLabel", { name: siteConfig.name })}
                className={`${CTA_GHOST_CLASSES} transition-colors motion-reduce:transition-none`}
              >
                <Download className="size-4" aria-hidden />
                {t("ctaResume")}
              </a>
            </ClassTip>
          </HeroStaggerItem>

          <HeroStaggerItem>
            <p className="text-muted-foreground hidden font-mono text-xs lg:block">
              {t("classTipHint")}
            </p>
          </HeroStaggerItem>
        </HeroStagger>

        <div className="hidden lg:block">
          <CodePanel />
        </div>
      </div>
    </section>
  );
}
