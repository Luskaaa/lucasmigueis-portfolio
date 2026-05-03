import { getTranslations } from "next-intl/server";
import { RevealOnView } from "@/components/motion/reveal-on-view";
import { cn } from "@/lib/cn";
import { skillGroups } from "../data";

export async function Skills() {
  const t = await getTranslations("skills");

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8"
    >
      <RevealOnView>
        <header className="mb-10">
          <p className="text-syntax-tag font-mono text-sm">03.</p>
          <h2
            id="skills-title"
            className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {t("title")}
          </h2>
          <p className="text-muted-foreground mt-2 font-mono text-xs uppercase tracking-wider">
            └ {t("subtitle")}
          </p>
          <div className="bg-border mt-6 h-px" aria-hidden />
        </header>

        <ul className="flex flex-col">
          {skillGroups.map((group, i) => (
            <li
              key={group.id}
              className={cn(
                "grid grid-cols-1 gap-4 py-6 lg:grid-cols-[12rem_1fr] lg:gap-10 lg:py-8",
                i > 0 && "border-border border-t",
              )}
            >
              <div>
                <p className="text-muted-foreground font-mono text-xs">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-foreground mt-1 text-base font-semibold">
                  {t(`groups.${group.id}` as "groups.frontend")}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-border text-foreground inline-flex items-center rounded-full border px-3.5 py-1.5 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </RevealOnView>
    </section>
  );
}
