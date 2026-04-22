/**
 * experience-section.tsx: Work experience section
 *
 * Renders a full-width section containing a heading and a staggered list
 * of ExperienceCard components.
 *
 * Dependencies: @mui/material, FadeIn, StaggerContainer, ExperienceCard, app-constants
 * Used by: app/page.tsx
 */

'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import FadeIn from '@/components/animations/fade-in';
import StaggerContainer from '@/components/animations/stagger-container';
import ExperienceCard from '@/components/experience/experience-card';
import { SECTION_EXPERIENCE } from '@/constants/app-constants';
import type { ExperienceData } from '@/types/experience';

/** Props for the ExperienceSection component */
interface ExperienceSectionProps {
  /** Experience data loaded from experience.json */
  experienceData: ExperienceData;
}

/**
 * Renders the Experience section with a section heading and a staggered
 * list of ExperienceCard components.
 *
 * @param experienceData - ExperienceData object with experiences array
 */
export default function ExperienceSection({ experienceData }: ExperienceSectionProps) {
  return (
    <Box
      id={SECTION_EXPERIENCE}
      component="section"
      sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#FFFFFF' }}
    >
      <Container maxWidth="lg">
        {/* Section heading */}
        <FadeIn>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ color: '#2C3E50', fontWeight: 700, mb: 1.5 }}>
              Work Experience
            </Typography>
            <Box
              sx={{ width: 60, height: 4, backgroundColor: '#3498DB', mx: 'auto', borderRadius: 2 }}
            />
          </Box>
        </FadeIn>

        {/* Experience cards with stagger animation */}
        <Box sx={{ maxWidth: 860, mx: 'auto' }}>
          <StaggerContainer>
            {experienceData.experiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </StaggerContainer>
        </Box>
      </Container>
    </Box>
  );
}
