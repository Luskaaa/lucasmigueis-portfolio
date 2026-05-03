import { getTranslations } from "next-intl/server";
import { RevealOnView } from "@/components/motion/reveal-on-view";
import { cn } from "@/lib/cn";
import { experience } from "../data";

export async function Experience() {
  const t = await getTranslations("experience");

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8"
    >
      <RevealOnView>
        <header className="mb-10">
          <p className="text-syntax-tag font-mono text-sm">05.</p>
          <h2
            id="experience-title"
            className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {t("title")}
          </h2>
          <p className="text-muted-foreground mt-2 font-mono text-xs uppercase tracking-wider">
            └ {t("subtitle")}
          </p>
          <div className="bg-border mt-6 h-px" aria-hidden />
        </header>

        <ol className="flex flex-col">
          {experience.map((item, i) => {
            const role = t(
              `items.${item.id}.role` as "items.glintt-fs.role",
            );
            const location = t(
              `items.${item.id}.location` as "items.glintt-fs.location",
            );
            const description = t(
              `items.${item.id}.description` as "items.glintt-fs.description",
            );
            return (
              <li
                key={item.id}
                className={cn(
                  "grid grid-cols-1 gap-3 py-6 lg:grid-cols-[10rem_1fr] lg:gap-12 lg:py-8",
                  i > 0 && "border-border border-t",
                )}
              >
                <p className="text-muted-foreground font-mono text-sm tabular-nums">
                  {item.endYear === item.startYear
                    ? item.startYear
                    : `${item.startYear} — ${item.endYear ?? t("present")}`}
                </p>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-foreground text-lg font-semibold">{role}</h3>
                  <p className="text-sm">
                    <span className="text-syntax-tag font-medium">{item.company}</span>
                    <span className="text-muted-foreground"> · {location}</span>
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </RevealOnView>
    </section>
  );
}
