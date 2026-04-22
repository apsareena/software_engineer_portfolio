/**
 * portfolio.ts: Core TypeScript interfaces for the portfolio application
 *
 * Defines the primary data structures used across the application.
 * Imported by components, services, and validation schemas.
 *
 * Dependencies: None
 * Used by: All components, data-service.ts, Zod schemas
 */

// ─── Profile ─────────────────────────────────────────────────────────────────

/** A call-to-action button in the hero section */
export interface CtaButton {
  /** Display text of the button */
  text: string;
  /** Section ID to scroll to (e.g., "#projects") */
  link: string;
}

/** Personal profile data for the hero section */
export interface Profile {
  /** Full name of the portfolio owner */
  name: string;
  /** Professional titles (e.g., "Software Engineer", "Full-Stack Developer") */
  titles: string[];
  /** Tagline about hobbies/interests */
  tagline: string;
  /** Optional path to profile image */
  profileImage?: string;
  /** Call-to-action buttons */
  ctaButtons: CtaButton[];
}

// ─── Skills ───────────────────────────────────────────────────────────────────

/** A grouped collection of skills */
export interface SkillCategory {
  /** Category label (e.g., "Programming Languages") */
  category: string;
  /** List of skill names in this category */
  skills: string[];
}

/** Root structure for skills data */
export interface SkillsData {
  categories: SkillCategory[];
}

// ─── Contact ─────────────────────────────────────────────────────────────────

/** Contact information */
export interface ContactInfo {
  /** Primary email address */
  email: string;
  /** Optional phone number */
  phone?: string;
  /** LinkedIn profile URL */
  linkedin?: string;
  /** GitHub profile URL */
  github?: string;
  /** Twitter/X profile URL */
  twitter?: string;
  /** Personal website URL */
  portfolio?: string;
  /** City/region location */
  location?: string;
}
