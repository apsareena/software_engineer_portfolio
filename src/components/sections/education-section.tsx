/**
 * education-section.tsx: Education section
 *
 * Renders a full-width section with a heading and a staggered list of
 * EducationCard components.
 *
 * Dependencies: @mui/material, FadeIn, StaggerContainer, EducationCard, app-constants
 * Used by: app/page.tsx
 */

'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import FadeIn from '@/components/animations/fade-in';
import StaggerContainer from '@/components/animations/stagger-container';
import EducationCard from '@/components/education/education-card';
import { SECTION_EDUCATION } from '@/constants/app-constants';
import type { EducationData } from '@/types/education';

/** Props for the EducationSection component */
interface EducationSectionProps {
  /** Education data loaded from education.json */
  educationData: EducationData;
}

/**
 * Renders the Education section with a heading and staggered education cards.
 *
 * @param educationData - EducationData object with education array
 */
export default function EducationSection({ educationData }: EducationSectionProps) {
  return (
    <Box
      id={SECTION_EDUCATION}
      component="section"
      sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#FFFFFF' }}
    >
      <Container maxWidth="lg">
        {/* Section heading */}
        <FadeIn>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ color: '#2C3E50', fontWeight: 700, mb: 1.5 }}>
              Education
            </Typography>
            <Box
              sx={{ width: 60, height: 4, backgroundColor: '#1ABC9C', mx: 'auto', borderRadius: 2 }}
            />
          </Box>
        </FadeIn>

        {/* Education cards */}
        <Box sx={{ maxWidth: 860, mx: 'auto' }}>
          <StaggerContainer>
            {educationData.education.map((edu) => (
              <EducationCard key={edu.id} education={edu} />
            ))}
          </StaggerContainer>
        </Box>
      </Container>
    </Box>
  );
}
