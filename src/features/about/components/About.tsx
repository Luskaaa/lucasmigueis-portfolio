import { getTranslations } from "next-intl/server";
import { RevealOnView } from "@/components/motion/reveal-on-view";
import { siteConfig } from "@/data/site-config";
import Image from "next/image";

export async function About() {
  const t = await getTranslations("about");

  const stats = [
    { label: t("stats.yearsLabel"), value: siteConfig.stats.years },
    { label: t("stats.usersLabel"), value: siteConfig.stats.users },
    { label: t("stats.basedLabel"), value: siteConfig.stats.based },
  ] as const;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8"
    >
      <RevealOnView>
        <header className="mb-10">
          <p className="text-syntax-tag font-mono text-sm">01.</p>
          <h2
            id="about-title"
            className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {t("title")}
          </h2>
          <p className="text-muted-foreground mt-2 font-mono text-xs uppercase tracking-wider">
            └ {t("subtitle")}
          </p>
          <div className="bg-border mt-6 h-px" aria-hidden />
        </header>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Portrait
            label={t("portraitLabel")}
            alt={t("portraitAlt", { name: siteConfig.name })}
          />

          <div className="flex flex-col gap-10">
            <p className="text-foreground text-pretty text-lg leading-relaxed">
              {t("body")}
            </p>

            <dl className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-muted-foreground font-mono text-xs uppercase tracking-wider">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-3xl font-bold sm:text-4xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex items-baseline gap-3">
              <p className="text-muted-foreground font-mono text-xs uppercase tracking-wider">
                {t("languagesLabel")}
              </p>
              <p className="text-foreground font-mono text-sm">
                {siteConfig.languages.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </RevealOnView>
    </section>
  );
}

function Portrait({ label, alt }: { label: string; alt: string }) {
  return (
    <div className="border-border bg-muted relative aspect-portrait overflow-hidden rounded-xl border">
      <Image
        src="/portrait.jpeg"
        alt={alt}
        fill
        priority
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
      <span
        aria-hidden
        className="text-foreground/70 bg-background/40 absolute bottom-3 left-3 rounded-md px-1.5 py-0.5 font-mono text-xs backdrop-blur-sm"
      >
        {label}
      </span>
    </div>
  );
}
