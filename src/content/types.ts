export const filters = [
  "All",
  "Applications",
  "Data",
  "Cloud",
  "Automation",
  "AI",
] as const;

export type Filter = (typeof filters)[number];
export type Capability = Exclude<Filter, "All">;

export type ProjectLink = {
  label: string;
  href: string;
};

export type StackNote = {
  name: string;
  why: string;
};

export type Project = {
  id: string;
  name: string;
  status: string;
  live: boolean;
  sentence: string;
  problem: string;
  does: string;
  contribution: string;
  capabilities: Capability[];
  stack: StackNote[];
  flow?: string[];
  decisions: string[];
  implemented: string[];
  links: ProjectLink[];
};

export type ScriptNote = {
  id: string;
  name: string;
  sentence: string;
  href: string;
};

export type Role = {
  id: string;
  title: string;
  org: string;
  when: string;
  place?: string;
  summary: string;
  points?: string[];
  more?: string[];
};
