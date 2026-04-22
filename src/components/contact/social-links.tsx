/**
 * social-links.tsx: Social media icon link buttons
 *
 * Renders clickable icon buttons for each provided social link (LinkedIn,
 * GitHub, Twitter/X). All links open in a new tab.
 *
 * Dependencies: @mui/material, @mui/icons-material
 * Used by: contact-section.tsx
 */

import React from 'react';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import type { ContactInfo } from '@/types/portfolio';

/** Props for the SocialLinks component */
interface SocialLinksProps {
  /** Contact info containing optional social URLs */
  contact: ContactInfo;
}

/**
 * Renders social media icon buttons for all provided links in ContactInfo.
 * Skips any link that is not provided.
 *
 * @param contact - ContactInfo object (only social fields are used here)
 */
export default function SocialLinks({ contact }: SocialLinksProps) {
  const links = [
    contact.linkedin && {
      label: 'LinkedIn',
      url: contact.linkedin,
      icon: <LinkedInIcon />,
      color: '#0A66C2',
    },
    contact.github && {
      label: 'GitHub',
      url: contact.github,
      icon: <GitHubIcon />,
      color: '#333',
    },
    contact.twitter && {
      label: 'Twitter / X',
      url: contact.twitter,
      icon: <TwitterIcon />,
      color: '#1DA1F2',
    },
  ].filter(Boolean) as { label: string; url: string; icon: React.ReactNode; color: string }[];

  if (links.length === 0) return null;

  return (
    <Box>
      <Typography variant="h6" sx={{ color: '#2C3E50', fontWeight: 600, mb: 2 }}>
        Connect With Me
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        {links.map(({ label, url, icon, color }) => (
          <Tooltip key={label} title={label}>
            <IconButton
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${label} profile`}
              sx={{
                color: '#6C757D',
                '&:hover': { color, transform: 'scale(1.2)' },
                transition: 'color 0.3s ease, transform 0.3s ease',
              }}
            >
              {icon}
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
}
