"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("common");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      role="alert"
      className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-4 p-6 text-center"
    >
      <h2 className="text-2xl font-semibold">{t("somethingWrong")}</h2>
      <button
        type="button"
        onClick={reset}
        className="bg-primary text-primary-foreground min-h-11 rounded-md px-4 py-2 font-medium"
      >
        {t("tryAgain")}
      </button>
    </main>
  );
}
