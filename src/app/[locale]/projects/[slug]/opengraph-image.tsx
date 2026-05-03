import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/data/site-config";
import { projects } from "@/features/projects";

export const alt = "Project case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ProjectOpengraphImage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const t = await getTranslations("projects");
  const description = t(
    `items.${project.slug}.description` as "items.chave-movel-digital.description",
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
          color: "#fafafa",
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "20px",
            color: "#a3a3a3",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "9999px",
              background: "#22c55e",
            }}
          />
          Case study · {siteConfig.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "88px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            {project.name}
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#a3a3a3",
              maxWidth: "900px",
              lineHeight: 1.35,
            }}
          >
            {description}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            fontSize: "20px",
            color: "#737373",
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "6px 14px",
                border: "1px solid #404040",
                borderRadius: "9999px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
