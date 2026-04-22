/**
 * skills-grid.tsx: Responsive grid of skill categories
 *
 * Renders all SkillCategory components in a responsive MUI Grid layout.
 * Animates each category card using the stagger container pattern.
 *
 * Dependencies: @mui/material, framer-motion, stagger-container, skill-category
 * Used by: skills-section.tsx
 */

'use client';

import React from 'react';
import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import StaggerContainer from '@/components/animations/stagger-container';
import SkillCategory from './skill-category';
import { staggerItemVariants } from '@/lib/utils/animation-variants';
import type { SkillCategory as SkillCategoryType } from '@/types/portfolio';

/** Props for the SkillsGrid component */
interface SkillsGridProps {
  /** List of skill categories to display */
  categories: SkillCategoryType[];
}

/**
 * Responsive grid that renders one SkillCategory card per category,
 * with a stagger entrance animation.
 *
 * @param categories - Array of skill category objects
 */
export default function SkillsGrid({ categories }: SkillsGridProps) {
  return (
    <StaggerContainer>
      <Grid container spacing={3}>
        {categories.map((cat) => (
          <Grid key={cat.category} size={{ xs: 12, sm: 6, md: 3 }}>
            <motion.div variants={staggerItemVariants} style={{ height: '100%' }}>
              <SkillCategory category={cat} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </StaggerContainer>
  );
}
