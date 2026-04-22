/**
 * page.tsx: Main portfolio page (Server Component)
 *
 * Loads all portfolio data from JSON files on the server using the data service,
 * then renders every section in order. Also renders the background shapes and
 * scroll-to-top button.
 *
 * This is a React Server Component — data fetching happens at build/request time
 * with no client-side loading states needed.
 *
 * Dependencies: data-service, all section components, layout components
 * Used by: Next.js App Router (root route "/")
 */

import React from 'react';
import HeroSection from '@/components/sections/hero-section';
import SkillsSection from '@/components/sections/skills-section';
import ExperienceSection from '@/components/sections/experience-section';
import ProjectsSection from '@/components/sections/projects-section';
import EducationSection from '@/components/sections/education-section';
import ContactSection from '@/components/sections/contact-section';
import BackgroundShapes from '@/components/layout/background-shapes';
import ScrollToTop from '@/components/layout/scroll-to-top';
import {
  loadProfile,
  loadSkills,
  loadExperience,
  loadProjects,
  loadEducation,
  loadContact,
} from '@/services/data-service';

/**
 * Main portfolio page component.
 * All data is loaded server-side and passed as props to section components.
 */
export default async function HomePage() {
  // Load all portfolio data from JSON files (server-side, validated with Zod)
  const [profile, skillsData, experienceData, projectsData, educationData, contact] =
    await Promise.all([
      loadProfile(),
      loadSkills(),
      loadExperience(),
      loadProjects(),
      loadEducation(),
      loadContact(),
    ]);

  return (
    <>
      {/* Decorative geometric background shapes */}
      <BackgroundShapes />

      {/* ── Portfolio Sections ── */}
      <HeroSection profile={profile} />
      <SkillsSection skillsData={skillsData} />
      <ExperienceSection experienceData={experienceData} />
      <ProjectsSection projectsData={projectsData} />
      <EducationSection educationData={educationData} />
      <ContactSection contact={contact} />

      {/* Floating scroll-to-top button */}
      <ScrollToTop />
    </>
  );
}
