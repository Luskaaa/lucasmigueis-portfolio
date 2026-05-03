import { siteConfig } from "@/data/site-config";

export function SiteFooter() {
  return (
    <footer className="border-border mt-8 border-t">
      <div className="text-muted-foreground mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm sm:px-6 lg:px-8">
        <p>© 2026 {siteConfig.name}</p>
      </div>
    </footer>
  );
}
