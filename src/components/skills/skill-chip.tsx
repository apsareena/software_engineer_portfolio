/**
 * skill-chip.tsx: Individual skill badge component
 *
 * Renders a single skill as a Material-UI Chip with consistent styling.
 *
 * Dependencies: @mui/material
 * Used by: skill-category.tsx
 */

import React from 'react';
import { Chip } from '@mui/material';

/** Props for the SkillChip component */
interface SkillChipProps {
  /** Name of the skill to display */
  label: string;
}

/**
 * Displays a single skill as a styled pill-shaped chip.
 *
 * @param label - Skill name text
 */
export default function SkillChip({ label }: SkillChipProps) {
  return (
    <Chip
      label={label}
      variant="outlined"
      size="small"
      sx={{
        borderRadius: '16px',
        fontWeight: 500,
        fontSize: '0.8rem',
        px: 1,
        borderColor: '#3498DB',
        color: '#2C3E50',
        backgroundColor: '#F8F9FA',
        '&:hover': {
          backgroundColor: 'rgba(52, 152, 219, 0.08)',
          borderColor: '#2980b9',
        },
      }}
    />
  );
}
