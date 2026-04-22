/**
 * data-service.ts: Server-side JSON data loader with Zod validation
 *
 * Reads each portfolio JSON file from the /data directory, validates it
 * against a Zod schema, and returns typed data. All errors are caught and
 * re-thrown with descriptive messages so the calling page can handle them.
 *
 * This module runs exclusively on the server (Next.js App Router RSC).
 *
 * Dependencies: zod, fs/path (Node.js), all type definitions
 * Used by: app/page.tsx
 */

import fs from 'fs';
import path from 'path';
import { z } from 'zod';
import type { Profile, SkillsData, ContactInfo } from '@/types/portfolio';
import type { ExperienceData } from '@/types/experience';
import type { ProjectsData } from '@/types/project';
import type { EducationData } from '@/types/education';

// ─── Zod Schemas ─────────────────────────────────────────────────────────────

const ctaButtonSchema = z.object({
  text: z.string(),
  link: z.string(),
});

const profileSchema = z.object({
  name: z.string(),
  titles: z.array(z.string()),
  tagline: z.string(),
  profileImage: z.string().optional(),
  ctaButtons: z.array(ctaButtonSchema),
});

const skillCategorySchema = z.object({
  category: z.string(),
  skills: z.array(z.string()),
});

const skillsSchema = z.object({
  categories: z.array(skillCategorySchema),
});

const experienceSchema = z.object({
  id: z.string(),
  company: z.string(),
  position: z.string(),
  location: z.string().optional(),
  startDate: z.string(),
  endDate: z.string().nullable(),
  description: z.array(z.string()),
  technologies: z.array(z.string()),
});

const experienceDataSchema = z.object({
  experiences: z.array(experienceSchema),
});

const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  shortDescription: z.string(),
  fullDescription: z.string(),
  image: z.string(),
  technologies: z.array(z.string()),
  features: z.array(z.string()).optional(),
  challenges: z.string().optional(),
  githubUrl: z.string().optional(),
  liveUrl: z.string().optional(),
  featured: z.boolean(),
});

const projectsDataSchema = z.object({
  projects: z.array(projectSchema),
});

const educationSchema = z.object({
  id: z.string(),
  institution: z.string(),
  degree: z.string(),
  fieldOfStudy: z.string(),
  startYear: z.number(),
  endYear: z.number(),
  gpa: z.string().optional(),
  honors: z.string().optional(),
  relevantCoursework: z.array(z.string()).optional(),
});

const educationDataSchema = z.object({
  education: z.array(educationSchema),
});

const contactSchema = z.object({
  email: z.string().email(),
  phone: z.string().optional(),
  linkedin: z.string().url().optional(),
  github: z.string().url().optional(),
  twitter: z.string().url().optional(),
  portfolio: z.string().url().optional(),
  location: z.string().optional(),
});

// ─── Generic File Loader ──────────────────────────────────────────────────────

/**
 * Reads a JSON file from disk and parses it.
 *
 * @param relativePath - Path relative to the project root (e.g., "data/profile.json")
 * @returns Parsed JSON as unknown (caller is responsible for validation)
 * @throws Error if the file cannot be read or is not valid JSON
 */
function readJsonFile(relativePath: string): unknown {
  const absolutePath = path.join(process.cwd(), relativePath);
  const raw = fs.readFileSync(absolutePath, 'utf-8');
  return JSON.parse(raw);
}

// ─── Public Loader Functions ──────────────────────────────────────────────────

/**
 * Loads and validates the profile data from data/profile.json.
 *
 * @returns Validated Profile object
 * @throws Error with a descriptive message on failure
 */
export function loadProfile(): Profile {
  try {
    const raw = readJsonFile('data/profile.json');
    return profileSchema.parse(raw) as Profile;
  } catch (err) {
    throw new Error(`Failed to load profile data: ${(err as Error).message}`);
  }
}

/**
 * Loads and validates the skills data from data/skills.json.
 *
 * @returns Validated SkillsData object
 * @throws Error with a descriptive message on failure
 */
export function loadSkills(): SkillsData {
  try {
    const raw = readJsonFile('data/skills.json');
    return skillsSchema.parse(raw) as SkillsData;
  } catch (err) {
    throw new Error(`Failed to load skills data: ${(err as Error).message}`);
  }
}

/**
 * Loads and validates the experience data from data/experience.json.
 *
 * @returns Validated ExperienceData object
 * @throws Error with a descriptive message on failure
 */
export function loadExperience(): ExperienceData {
  try {
    const raw = readJsonFile('data/experience.json');
    return experienceDataSchema.parse(raw) as ExperienceData;
  } catch (err) {
    throw new Error(`Failed to load experience data: ${(err as Error).message}`);
  }
}

/**
 * Loads and validates the projects data from data/projects.json.
 * Featured projects are moved to the front of the list.
 *
 * @returns Validated ProjectsData object (featured projects first)
 * @throws Error with a descriptive message on failure
 */
export function loadProjects(): ProjectsData {
  try {
    const raw = readJsonFile('data/projects.json');
    const data = projectsDataSchema.parse(raw) as ProjectsData;
    // Sort: featured projects first
    data.projects.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    return data;
  } catch (err) {
    throw new Error(`Failed to load projects data: ${(err as Error).message}`);
  }
}

/**
 * Loads and validates the education data from data/education.json.
 *
 * @returns Validated EducationData object
 * @throws Error with a descriptive message on failure
 */
export function loadEducation(): EducationData {
  try {
    const raw = readJsonFile('data/education.json');
    return educationDataSchema.parse(raw) as EducationData;
  } catch (err) {
    throw new Error(`Failed to load education data: ${(err as Error).message}`);
  }
}

/**
 * Loads and validates the contact data from data/contact.json.
 *
 * @returns Validated ContactInfo object
 * @throws Error with a descriptive message on failure
 */
export function loadContact(): ContactInfo {
  try {
    const raw = readJsonFile('data/contact.json');
    return contactSchema.parse(raw) as ContactInfo;
  } catch (err) {
    throw new Error(`Failed to load contact data: ${(err as Error).message}`);
  }
}
