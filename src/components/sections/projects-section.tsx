/**
 * projects-section.tsx: Projects showcase section
 *
 * Renders a full-width section with a heading and a responsive ProjectGrid.
 * Project data is passed in as props from the server-side data loader.
 *
 * Dependencies: @mui/material, FadeIn, ProjectGrid, app-constants
 * Used by: app/page.tsx
 */

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import FadeIn from '@/components/animations/fade-in';
import ProjectGrid from '@/components/projects/project-grid';
import { SECTION_PROJECTS } from '@/constants/app-constants';
import type { ProjectsData } from '@/types/project';

/** Props for the ProjectsSection component */
interface ProjectsSectionProps {
  /** Projects data loaded from projects.json */
  projectsData: ProjectsData;
}

/**
 * Renders the Projects section with a heading and a responsive project grid.
 *
 * @param projectsData - ProjectsData object with projects array
 */
export default function ProjectsSection({ projectsData }: ProjectsSectionProps) {
  return (
    <Box
      id={SECTION_PROJECTS}
      component="section"
      sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#F8F9FA' }}
    >
      <Container maxWidth="lg">
        {/* Section heading */}
        <FadeIn>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ color: '#2C3E50', fontWeight: 700, mb: 1.5 }}>
              Projects
            </Typography>
            <Box
              sx={{ width: 60, height: 4, backgroundColor: '#1ABC9C', mx: 'auto', borderRadius: 2 }}
            />
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 500, mx: 'auto' }}>
              A selection of projects I&apos;ve built — click any card for full details.
            </Typography>
          </Box>
        </FadeIn>

        {/* Responsive project grid */}
        <ProjectGrid projects={projectsData.projects} />
      </Container>
    </Box>
  );
}
