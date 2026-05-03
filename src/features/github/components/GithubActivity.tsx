import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/social";
import { RevealOnView } from "@/components/motion/reveal-on-view";
import { siteConfig } from "@/data/site-config";

const COLOR_PRIMARY = "3b82f6";

export async function GithubActivity() {
  const t = await getTranslations("github");
  const username = siteConfig.github.username;

  const graphUrl = `https://ghchart.rshah.org/${COLOR_PRIMARY}/${username}`;

  return (
    <section
      id="github"
      aria-labelledby="github-title"
      className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8"
    >
      <RevealOnView>
        <header className="mb-10">
          <p className="text-syntax-tag font-mono text-sm">04.</p>
          <h2
            id="github-title"
            className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {t("title")}
          </h2>
          <p className="text-muted-foreground mt-2 font-mono text-xs uppercase tracking-wider">
            └ {t("subtitle")}
          </p>
          <div className="bg-border mt-6 h-px" aria-hidden />
        </header>

        <p className="text-muted-foreground mb-8 max-w-xl text-pretty">{t("description")}</p>

        <div className="border-border overflow-hidden rounded-lg border p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={graphUrl}
            alt={t("graphAlt", { username })}
            loading="lazy"
            className="w-full"
          />
        </div>

        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer noopener"
          className="text-foreground group/gh mt-6 inline-flex items-center gap-2 text-sm font-medium hover:underline focus-visible:underline"
        >
          <GithubIcon className="size-4" />
          {t("viewProfile")}
          <ArrowRight className="size-4 transition-transform group-hover/gh:translate-x-0.5 motion-reduce:transition-none" aria-hidden />
        </a>
      </RevealOnView>
    </section>
  );
}
