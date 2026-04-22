/**
 * experience-card.tsx: Individual work experience card component
 *
 * Renders a single work experience entry as a styled card with company name,
 * job title, date range, location, description bullets, and technology chips.
 *
 * Dependencies: @mui/material, format-utils, framer-motion, animation-variants
 * Used by: experience-section.tsx
 */

'use client';

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { motion } from 'framer-motion';
import { staggerItemVariants } from '@/lib/utils/animation-variants';
import { formatDateRange } from '@/lib/utils/format-utils';
import type { Experience } from '@/types/experience';

/** Props for the ExperienceCard component */
interface ExperienceCardProps {
  /** The experience entry to render */
  experience: Experience;
}

/**
 * Renders a work experience entry with full details.
 * Wrapped in a motion.div so it can participate in stagger animations.
 *
 * @param experience - Experience data object
 */
export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const dateRange = formatDateRange(experience.startDate, experience.endDate);
  const isCurrent = experience.endDate === null;

  return (
    <motion.div variants={staggerItemVariants}>
      <Card
        sx={{
          mb: 3,
          borderLeft: isCurrent ? '4px solid #1ABC9C' : '4px solid #3498DB',
          borderRadius: 2,
          '&:hover': { boxShadow: '0 4px 16px rgba(0,0,0,0.12)' },
        }}
      >
        <CardContent sx={{ p: 3 }}>
          {/* Header: position and company */}
          <Box sx={{ mb: 1 }}>
            <Typography variant="h5" sx={{ color: '#2C3E50', fontWeight: 700, mb: 0.5 }}>
              {experience.position}
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
              {/* Company */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#6C757D' }}>
                <BusinessIcon fontSize="small" />
                <Typography variant="body1" sx={{ fontWeight: 600, color: '#3498DB' }}>
                  {experience.company}
                </Typography>
              </Box>

              {/* Location */}
              {experience.location && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#6C757D' }}>
                  <LocationOnIcon fontSize="small" />
                  <Typography variant="body2">{experience.location}</Typography>
                </Box>
              )}

              {/* Date range */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#6C757D' }}>
                <CalendarTodayIcon fontSize="small" />
                <Typography variant="body2">{dateRange}</Typography>
              </Box>

              {/* "Current" badge */}
              {isCurrent && (
                <Chip
                  label="Current"
                  size="small"
                  sx={{ backgroundColor: '#1ABC9C', color: '#fff', fontWeight: 600 }}
                />
              )}
            </Box>
          </Box>

          <Divider sx={{ my: 1.5 }} />

          {/* Description bullet points */}
          <List dense disablePadding sx={{ mb: 1.5 }}>
            {experience.description.map((point, idx) => (
              <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start', py: 0.25 }}>
                <ListItemText
                  primary={`• ${point}`}
                  slotProps={{ primary: { variant: 'body2', sx: { color: '#212529' } } }}
                />
              </ListItem>
            ))}
          </List>

          {/* Technology chips */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
            {experience.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                variant="outlined"
                sx={{
                  borderColor: '#3498DB',
                  color: '#2C3E50',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
