export type ProjectAccent = "green" | "blue" | "amber" | "violet" | "orange";

export type ProjectStat = {
  id: string;
  highlight?: boolean;
};

export type Project = {
  slug: string;
  name: string;
  startYear: number;
  endYear: number;
  accent: ProjectAccent;
  tags: ReadonlyArray<string>;
  stats: ReadonlyArray<ProjectStat>;
  hasCaseStudy: boolean;
  hasImpact: boolean;
  liveUrl?: string;
  sourceUrl?: string;
  previewImage?: string;
};
