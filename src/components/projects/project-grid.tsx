/**
 * project-grid.tsx: Responsive project grid with modal integration
 *
 * Renders all project cards in a responsive MUI Grid using a stagger animation.
 * Manages the selected project state to open/close the ProjectModal.
 *
 * Dependencies: @mui/material, stagger-container, project-card, project-modal
 * Used by: projects-section.tsx
 */

'use client';

import React, { useState } from 'react';
import { Grid } from '@mui/material';
import StaggerContainer from '@/components/animations/stagger-container';
import ProjectCard from './project-card';
import ProjectModal from './project-modal';
import type { Project } from '@/types/project';

/** Props for the ProjectGrid component */
interface ProjectGridProps {
  /** Array of projects to display in the grid */
  projects: Project[];
}

/**
 * Responsive grid of ProjectCard components.
 * Handles opening and closing the ProjectModal on card click.
 *
 * @param projects - Array of project objects
 */
export default function ProjectGrid({ projects }: ProjectGridProps) {
  // Tracks which project's modal is currently open (null = closed)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <StaggerContainer>
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <ProjectCard project={project} onOpen={setSelectedProject} />
            </Grid>
          ))}
        </Grid>
      </StaggerContainer>

      {/* Detail modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
