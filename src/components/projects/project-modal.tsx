/**
 * project-modal.tsx: Project detail modal dialog
 *
 * Renders a full-detail view of a project inside a MUI Dialog.
 * Shows the project image, full description, key features, challenges,
 * technologies, and links to GitHub and the live demo.
 *
 * Dependencies: @mui/material
 * Used by: projects-section.tsx
 */

'use client';

import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
  Chip,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import type { Project } from '@/types/project';

/** Props for the ProjectModal component */
interface ProjectModalProps {
  /** The project to display, or null when the modal is closed */
  project: Project | null;
  /** Callback to close the modal */
  onClose: () => void;
}

/**
 * Full-detail project modal with scrollable content.
 * Closes on X button, ESC key, or clicking the backdrop.
 *
 * @param project - Project data (null = modal closed)
 * @param onClose - Called when the user requests the modal to close
 */
export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog
      open={!!project}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
      aria-labelledby="project-modal-title"
    >
      {/* Header */}
      <DialogTitle id="project-modal-title" sx={{ pr: 6, color: '#2C3E50', fontWeight: 700 }}>
        {project.title}
        <IconButton
          aria-label="Close project details"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: '#6C757D' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        {/* Project image */}
        <Box
          component="img"
          src={project.image}
          alt={`${project.title} screenshot`}
          sx={{
            width: '100%',
            maxHeight: 350,
            objectFit: 'cover',
            borderRadius: 2,
            mb: 3,
            backgroundColor: '#E0E0E0',
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />

        {/* Full description */}
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          {project.fullDescription}
        </Typography>

        {/* Key features */}
        {project.features && project.features.length > 0 && (
          <>
            <Typography variant="h6" sx={{ color: '#2C3E50', fontWeight: 700, mb: 1 }}>
              Key Features
            </Typography>
            <List dense disablePadding sx={{ mb: 2 }}>
              {project.features.map((feature, idx) => (
                <ListItem key={idx} disableGutters sx={{ py: 0.25 }}>
                  <ListItemText
                    primary={`✓  ${feature}`}
                    slotProps={{ primary: { variant: 'body2', sx: { color: '#212529' } } }}
                  />
                </ListItem>
              ))}
            </List>
          </>
        )}

        {/* Challenges */}
        {project.challenges && (
          <>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" sx={{ color: '#2C3E50', fontWeight: 700, mb: 1 }}>
              Challenges & Solutions
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7, color: '#6C757D' }}>
              {project.challenges}
            </Typography>
          </>
        )}

        <Divider sx={{ my: 2 }} />

        {/* Technologies */}
        <Typography variant="h6" sx={{ color: '#2C3E50', fontWeight: 700, mb: 1 }}>
          Technologies Used
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
          {project.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              variant="outlined"
              sx={{ borderColor: '#3498DB', color: '#2C3E50', fontWeight: 500 }}
            />
          ))}
        </Box>
      </DialogContent>

      {/* Footer actions */}
      <DialogActions sx={{ p: 2, gap: 1 }}>
        {project.githubUrl && (
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code on GitHub"
            sx={{ borderColor: '#2C3E50', color: '#2C3E50' }}
          >
            GitHub
          </Button>
        )}
        {project.liveUrl && (
          <Button
            variant="contained"
            startIcon={<OpenInNewIcon />}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View live demo"
            sx={{ backgroundColor: '#1ABC9C', '&:hover': { backgroundColor: '#16a085' } }}
          >
            Live Demo
          </Button>
        )}
        <Button onClick={onClose} sx={{ color: '#6C757D' }}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
