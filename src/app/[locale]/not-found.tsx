import { getTranslations } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { NotFoundArt } from "@/components/not-found-art";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default async function NotFound() {
  const t = await getTranslations("common");

  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-4 py-20 sm:px-6 lg:px-8">
        <NotFoundArt />
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("notFoundTitle")}
          </h1>
          <p className="text-muted-foreground max-w-xl text-pretty leading-relaxed">
            {t("notFoundDescription")}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="bg-primary text-primary-foreground inline-flex min-h-11 items-center gap-2 rounded-md px-4 font-medium transition-opacity hover:opacity-90 motion-reduce:transition-none"
          >
            <ArrowLeft className="size-4" aria-hidden />
            {t("backHome")}
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
