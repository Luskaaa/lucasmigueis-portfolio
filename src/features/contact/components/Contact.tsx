import { getTranslations } from "next-intl/server";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/social";
import { RevealOnView } from "@/components/motion/reveal-on-view";
import { siteConfig } from "@/data/site-config";

const PRIMARY_BUTTON =
  "bg-syntax-tag text-syntax-tag-foreground inline-flex min-h-11 items-center gap-2 rounded-full px-5 font-medium transition-opacity hover:opacity-90 motion-reduce:transition-none";
const OUTLINE_BUTTON =
  "border-border text-foreground inline-flex min-h-11 items-center gap-2 rounded-full border px-5 font-medium transition-colors hover:bg-accent motion-reduce:transition-none";

export async function Contact() {
  const t = await getTranslations("contact");
  const title = t("title");

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8 lg:py-40"
    >
      <RevealOnView>
        <p className="text-syntax-tag font-mono text-sm uppercase tracking-wider">
          06. {title}
        </p>
        <h2
          id="contact-title"
          className="text-hero-name mt-6 font-bold leading-none tracking-tight"
        >
          {title}
          <span className="text-syntax-tag">.</span>
        </h2>
        <p className="text-muted-foreground mx-auto mt-8 max-w-xl text-pretty text-base sm:text-lg">
          {t("description")}
        </p>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <li>
            <a href={`mailto:${siteConfig.email}`} className={PRIMARY_BUTTON}>
              <Mail className="size-4" aria-hidden />
              <span className="sr-only">{t("emailLabel")}: </span>
              {siteConfig.email}
            </a>
          </li>
          <li>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className={OUTLINE_BUTTON}
            >
              <LinkedinIcon className="size-4" />
              {t("linkedinLabel")}
            </a>
          </li>
          <li>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className={OUTLINE_BUTTON}
            >
              <GithubIcon className="size-4" />
              {t("githubLabel")}
            </a>
          </li>
        </ul>
      </RevealOnView>
    </section>
  );
}
