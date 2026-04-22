/**
 * project.ts: TypeScript interfaces for the Projects section
 *
 * Defines the data shape for individual projects and the projects collection.
 *
 * Dependencies: None
 * Used by: projects components, data-service.ts
 */

/** A single portfolio project */
export interface Project {
  /** Unique identifier */
  id: string;
  /** Display title */
  title: string;
  /** Brief description shown on the card (2–3 sentences) */
  shortDescription: string;
  /** Full description shown in the detail modal */
  fullDescription: string;
  /** Path to the project screenshot image */
  image: string;
  /** Technologies / libraries used */
  technologies: string[];
  /** Key features list (shown in modal) */
  features?: string[];
  /** Challenges encountered and how they were solved (shown in modal) */
  challenges?: string;
  /** GitHub repository URL */
  githubUrl?: string;
  /** Live demo URL */
  liveUrl?: string;
  /** If true, the project is shown first in the grid */
  featured: boolean;
}

/** Root structure for projects data */
export interface ProjectsData {
  projects: Project[];
}
