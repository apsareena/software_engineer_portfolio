/**
 * project-card.tsx: Project card component
 *
 * Renders a single project as a Material-UI Card with a project image,
 * title, short description, technology chips, and GitHub/live links.
 * Clicking the card triggers the onOpen callback to open the detail modal.
 *
 * Dependencies: @mui/material, framer-motion, animation-variants
 * Used by: project-grid.tsx
 */

'use client';

import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { motion } from 'framer-motion';
import { staggerItemVariants } from '@/lib/utils/animation-variants';
import type { Project } from '@/types/project';

/** Props for the ProjectCard component */
interface ProjectCardProps {
  /** Project data to display */
  project: Project;
  /** Callback to open the project detail modal */
  onOpen: (project: Project) => void;
}

/**
 * Renders a responsive project card.
 * Clicking the card body opens the detail modal; icon buttons open external links.
 *
 * @param project - Project data object
 * @param onOpen  - Called with the project when the user clicks the card body
 */
export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.div variants={staggerItemVariants} style={{ height: '100%' }}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 2,
          '&:hover': {
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
            transform: 'translateY(-4px)',
          },
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        {/* Clickable area: opens the modal */}
        <CardActionArea
          onClick={() => onOpen(project)}
          aria-label={`View details for ${project.title}`}
          sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
        >
          {/* Project image */}
          <CardMedia
            component="img"
            image={project.image}
            alt={`${project.title} screenshot`}
            sx={{
              aspectRatio: '16/9',
              objectFit: 'cover',
              backgroundColor: '#E0E0E0',
            }}
            // Fallback gradient when image is missing
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />

          {/* Fallback placeholder shown when image fails */}
          <Box
            sx={{
              display: 'none',
              aspectRatio: '16/9',
              background: 'linear-gradient(135deg, #2C3E50 0%, #3498DB 100%)',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />

          <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
            {/* Featured badge */}
            {project.featured && (
              <Chip
                label="Featured"
                size="small"
                sx={{ mb: 1, backgroundColor: '#1ABC9C', color: '#fff', fontWeight: 600, fontSize: '0.7rem' }}
              />
            )}

            {/* Title */}
            <Typography variant="h6" sx={{ color: '#2C3E50', fontWeight: 700, mb: 1 }}>
              {project.title}
            </Typography>

            {/* Short description */}
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
              {project.shortDescription}
            </Typography>

            {/* Technology chips */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {project.technologies.slice(0, 5).map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  variant="outlined"
                  sx={{ borderColor: '#3498DB', color: '#2C3E50', fontSize: '0.7rem', fontWeight: 500 }}
                />
              ))}
              {project.technologies.length > 5 && (
                <Chip
                  label={`+${project.technologies.length - 5}`}
                  size="small"
                  sx={{ fontSize: '0.7rem', color: '#6C757D' }}
                />
              )}
            </Box>
          </CardContent>
        </CardActionArea>

        {/* External link buttons (outside ActionArea to avoid nested buttons) */}
        <Box sx={{ display: 'flex', gap: 0.5, px: 2, pb: 2 }}>
          {project.githubUrl && (
            <Tooltip title="View on GitHub">
              <IconButton
                size="small"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                onClick={(e) => e.stopPropagation()}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
          {project.liveUrl && (
            <Tooltip title="View live demo">
              <IconButton
                size="small"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live demo`}
                onClick={(e) => e.stopPropagation()}
              >
                <OpenInNewIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Card>
    </motion.div>
  );
}
