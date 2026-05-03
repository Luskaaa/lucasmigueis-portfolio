import { getTranslations } from "next-intl/server";

export default async function Loading() {
  const t = await getTranslations("common");
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-screen items-center justify-center p-6"
    >
      <span className="sr-only">{t("loading")}</span>
      <div className="border-border border-t-foreground size-8 animate-spin rounded-full border-2 motion-reduce:animate-none" />
    </div>
  );
}
