import type { ExperienceItem } from "./types";

// Translatable fields (role, location, description) live in
// messages/{en,pt-PT}.json under experience.items.{id}.
export const experience: ReadonlyArray<ExperienceItem> = [
  {
    id: "glintt-fs",
    company: "Glintt Global",
    startYear: 2025,
  },
  {
    id: "glintt-net",
    company: "Glintt Global",
    startYear: 2021,
    endYear: 2025,
  },
  {
    id: "thinkfuture",
    company: "ThinkFuture",
    startYear: 2021,
    endYear: 2021,
  },
];
