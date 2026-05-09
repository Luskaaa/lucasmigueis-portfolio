import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/data/site-config";
import { ThemeToggle } from "./theme-toggle";
import { LocaleSwitcher } from "./locale-switcher";
import { NavLinks, type NavItem } from "./nav-links";

export async function SiteHeader() {
  const [t, tCommon] = await Promise.all([
    getTranslations("nav"),
    getTranslations("common"),
  ]);

  const items: ReadonlyArray<NavItem> = [
    { href: "#about", label: t("about"), sectionId: "about" },
    { href: "#projects", label: t("projects"), sectionId: "projects" },
    { href: "#skills", label: t("skills"), sectionId: "skills" },
    { href: "#experience", label: t("experience"), sectionId: "experience" },
    { href: "#contact", label: t("contact"), sectionId: "contact" },
  ];

  return (
    <header className="border-border bg-background/80 sticky top-0 z-10 border-b backdrop-blur">
      <a
        href="#main"
        className="bg-primary text-primary-foreground sr-only rounded-md px-3 py-2 focus:not-sr-only focus:absolute focus:left-4 focus:top-2"
      >
        {tCommon("skipToContent")}
      </a>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col leading-tight">
          <Link href="/" className="font-semibold tracking-tight">
            {siteConfig.name}
          </Link>
          <Link
            href="/now"
            className="text-muted-foreground hover:text-foreground text-xs transition-colors motion-reduce:transition-none"
          >
            {t("whatNow")}
          </Link>
        </div>
        <nav aria-label="Primary" className="hidden sm:block">
          <NavLinks items={items} />
        </nav>
        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
