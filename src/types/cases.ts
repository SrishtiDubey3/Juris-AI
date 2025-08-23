export type CaseHit = {
  id: string;
  title: string;
  court: string;
  date: string;        // ISO date
  citation: string;    // e.g., (2017) 10 SCC 1
  link: string;        // URL to judgment
  summary: string;     // AI generated summary
  score?: number;      // 0..1 semantic relevance
  jurisdiction?: string;
};
