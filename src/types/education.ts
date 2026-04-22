/**
 * education.ts: TypeScript interfaces for the Education section
 *
 * Defines the data shape for education entries and the collection.
 *
 * Dependencies: None
 * Used by: education components, data-service.ts
 */

/** A single education entry */
export interface Education {
  /** Unique identifier */
  id: string;
  /** Institution / university name */
  institution: string;
  /** Degree type (e.g., "Bachelor of Science") */
  degree: string;
  /** Field of study (e.g., "Computer Science") */
  fieldOfStudy: string;
  /** Enrollment start year */
  startYear: number;
  /** Graduation year */
  endYear: number;
  /** Optional GPA string (e.g., "3.8/4.0") */
  gpa?: string;
  /** Optional honours / distinction */
  honors?: string;
  /** Optional list of relevant courses */
  relevantCoursework?: string[];
}

/** Root structure for education data */
export interface EducationData {
  education: Education[];
}
