import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pt-PT"],
  defaultLocale: "pt-PT",
  localePrefix: "as-needed",
});
