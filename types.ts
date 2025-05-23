
export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  duration: string;
  descriptionPoints: string[];
  tags?: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors?: string; // Optional as some presentations might not list all authors in the same way
  venue: string;
  year: number;
  type: 'Paper Presentation' | 'Research Presentation' | 'Journal Paper' | 'Presentation';
  link?: string;
  pdfLink?: string;
  abstract?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Achievement {
  id: string;
  title: string;
  details: string; // e.g., "Graduate Research Award (2021-2026)" or "Award Recipient (2023)"
  year?: string | number; // Can be a range or single year
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}