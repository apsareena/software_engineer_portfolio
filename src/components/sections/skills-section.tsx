/**
 * skills-section.tsx: Skills and technologies section
 *
 * Renders a full-width section containing a heading and the SkillsGrid.
 * Fades in on scroll using the FadeIn animation wrapper.
 *
 * Dependencies: @mui/material, FadeIn, SkillsGrid, app-constants
 * Used by: app/page.tsx
 */

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import FadeIn from '@/components/animations/fade-in';
import SkillsGrid from '@/components/skills/skills-grid';
import { SECTION_SKILLS } from '@/constants/app-constants';
import type { SkillsData } from '@/types/portfolio';

/** Props for the SkillsSection component */
interface SkillsSectionProps {
  /** Skills data loaded from skills.json */
  skillsData: SkillsData;
}

/**
 * Renders the Skills section with a section heading and categorised skill grid.
 *
 * @param skillsData - SkillsData object containing category arrays
 */
export default function SkillsSection({ skillsData }: SkillsSectionProps) {
  return (
    <Box
      id={SECTION_SKILLS}
      component="section"
      sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#F8F9FA' }}
    >
      <Container maxWidth="lg">
        {/* Section heading */}
        <FadeIn>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ color: '#2C3E50', fontWeight: 700, mb: 1.5 }}>
              Skills & Technologies
            </Typography>
            <Box
              sx={{ width: 60, height: 4, backgroundColor: '#1ABC9C', mx: 'auto', borderRadius: 2 }}
            />
          </Box>
        </FadeIn>

        {/* Skills grid */}
        <SkillsGrid categories={skillsData.categories} />
      </Container>
    </Box>
  );
}
