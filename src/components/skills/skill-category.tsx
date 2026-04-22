/**
 * skill-category.tsx: Skill category group component
 *
 * Displays a named category heading and a wrapped row of SkillChip components
 * for each skill in the category.
 *
 * Dependencies: @mui/material, skill-chip
 * Used by: skills-grid.tsx
 */

import React from 'react';
import { Box, Typography } from '@mui/material';
import SkillChip from './skill-chip';
import type { SkillCategory as SkillCategoryType } from '@/types/portfolio';

/** Props for the SkillCategory component */
interface SkillCategoryProps {
  /** The skill category data to render */
  category: SkillCategoryType;
}

/**
 * Renders a skill category card with its heading and a list of skill chips.
 *
 * @param category - SkillCategory object containing category name and skills array
 */
export default function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <Box
      sx={{
        backgroundColor: '#F8F9FA',
        borderRadius: 2,
        p: 3,
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        height: '100%',
      }}
    >
      {/* Category heading */}
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: '#2C3E50', fontWeight: 600, mb: 2 }}
      >
        {category.category}
      </Typography>

      {/* Skill chips */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {category.skills.map((skill) => (
          <SkillChip key={skill} label={skill} />
        ))}
      </Box>
    </Box>
  );
}
