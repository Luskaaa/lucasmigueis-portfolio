export type SkillGroup = {
  id: string;
  items: ReadonlyArray<string>;
};

export const skillGroups: ReadonlyArray<SkillGroup> = [
  {
    id: "frontend",
    items: [
      "TypeScript",
      "React",
      "Next.js 15",
      "Next.js 16",
      "React Native",
      "Tailwind CSS",
      "next-intl",
      "motion",
      "next-themes",
      "Auth.js",
      "TanStack Query",
      "HTML",
      "CSS",
      "Storybook",
    ],
  },
  {
    id: "backend",
    items: [".NET", "C#", "REST APIs", "SOAP"],
  },
  {
    id: "data",
    items: ["SQL Server", "MySQL", "PostgreSQL", "Supabase", "Prisma"],
  },
  {
    id: "infra",
    items: ["Docker", "Kubernetes", "CI/CD", "Git", "Keycloak", "SSO"],
  },
  {
    id: "tools",
    items: [
      "Jest",
      "Vitest",
      "Playwright",
      "SonarQube",
      "Microcks",
      "Figma",
      "GitHub Copilot",
      "Claude",
      "Vercel",
      "ESLint",
      "Prettier",
      "Agile / Scrum",
    ],
  },
];
