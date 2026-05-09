import Script from "next/script";
import { env } from "@/env";
import { siteConfig } from "@/data/site-config";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    url: env.NEXT_PUBLIC_APP_URL,
    email: `mailto:${siteConfig.email}`,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  };

  return (
    <Script
      id="person-jsonld"
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(data)}
    </Script>
  );
}
