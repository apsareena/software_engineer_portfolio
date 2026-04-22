/**
 * education-card.tsx: Individual education entry card component
 *
 * Renders a single education record including institution, degree, field of
 * study, years, optional GPA/honours, and optional relevant coursework list.
 *
 * Dependencies: @mui/material, framer-motion, animation-variants
 * Used by: education-section.tsx
 */

'use client';

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Divider,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { motion } from 'framer-motion';
import { staggerItemVariants } from '@/lib/utils/animation-variants';
import type { Education } from '@/types/education';

/** Props for the EducationCard component */
interface EducationCardProps {
  /** The education entry to render */
  education: Education;
}

/**
 * Renders a card for a single education entry.
 * Wrapped in a motion.div to participate in stagger animations.
 *
 * @param education - Education data object
 */
export default function EducationCard({ education }: EducationCardProps) {
  return (
    <motion.div variants={staggerItemVariants}>
      <Card
        sx={{
          mb: 3,
          borderLeft: '4px solid #1ABC9C',
          borderRadius: 2,
          '&:hover': { boxShadow: '0 4px 16px rgba(0,0,0,0.12)' },
        }}
      >
        <CardContent sx={{ p: 3 }}>
          {/* Institution and degree header */}
          <Box sx={{ mb: 1 }}>
            <Typography variant="h5" sx={{ color: '#2C3E50', fontWeight: 700, mb: 0.5 }}>
              {education.degree}
            </Typography>
            <Typography variant="h6" sx={{ color: '#3498DB', fontWeight: 600, mb: 0.5 }}>
              {education.fieldOfStudy}
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
              {/* Institution */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#6C757D' }}>
                <SchoolIcon fontSize="small" />
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {education.institution}
                </Typography>
              </Box>

              {/* Years */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#6C757D' }}>
                <CalendarTodayIcon fontSize="small" />
                <Typography variant="body2">
                  {education.startYear} – {education.endYear}
                </Typography>
              </Box>

              {/* Honors badge */}
              {education.honors && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#6C757D' }}>
                  <EmojiEventsIcon fontSize="small" sx={{ color: '#f39c12' }} />
                  <Typography variant="body2" sx={{ color: '#f39c12', fontWeight: 600 }}>
                    {education.honors}
                  </Typography>
                </Box>
              )}

              {/* GPA */}
              {education.gpa && (
                <Chip
                  label={`GPA: ${education.gpa}`}
                  size="small"
                  sx={{ backgroundColor: '#e8f5e9', color: '#27AE60', fontWeight: 600 }}
                />
              )}
            </Box>
          </Box>

          {/* Relevant coursework */}
          {education.relevantCoursework && education.relevantCoursework.length > 0 && (
            <>
              <Divider sx={{ my: 1.5 }} />
              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600, mb: 1 }}>
                Relevant Coursework
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {education.relevantCoursework.map((course) => (
                  <Chip
                    key={course}
                    label={course}
                    size="small"
                    variant="outlined"
                    sx={{
                      borderColor: '#1ABC9C',
                      color: '#2C3E50',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>
            </>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
