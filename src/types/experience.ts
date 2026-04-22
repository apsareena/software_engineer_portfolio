/**
 * experience.ts: TypeScript interfaces for the Experience section
 *
 * Defines the data shape for work experience entries and the collection.
 *
 * Dependencies: None
 * Used by: experience components, data-service.ts
 */

/** A single work experience entry */
export interface Experience {
  /** Unique identifier */
  id: string;
  /** Company or organisation name */
  company: string;
  /** Job title / position */
  position: string;
  /** Optional location (city, state, or "Remote") */
  location?: string;
  /** Start date in "YYYY-MM" format */
  startDate: string;
  /** End date in "YYYY-MM" format, or null when still employed */
  endDate: string | null;
  /** Bullet-point descriptions of responsibilities / achievements */
  description: string[];
  /** Technologies used in this role */
  technologies: string[];
}

/** Root structure for experience data */
export interface ExperienceData {
  experiences: Experience[];
}
