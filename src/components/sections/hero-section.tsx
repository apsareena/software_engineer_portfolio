/**
 * hero-section.tsx: Portfolio hero / introduction section
 *
 * Displays the owner's name with an animated title cycle, tagline, and
 * call-to-action buttons. Includes a scroll-down indicator arrow and
 * decorative geometric shape accents.
 *
 * Dependencies: @mui/material, framer-motion, scroll-utils, app-constants
 * Used by: app/page.tsx
 */

'use client';

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion, AnimatePresence } from 'framer-motion';
import { smoothScrollTo } from '@/lib/utils/scroll-utils';
import { SECTION_HERO, NAVBAR_HEIGHT } from '@/constants/app-constants';
import type { Profile } from '@/types/portfolio';

/** Props for the HeroSection component */
interface HeroSectionProps {
  /** Profile data loaded from profile.json */
  profile: Profile;
}

/**
 * Full-viewport hero section with animated title rotation and CTA buttons.
 *
 * @param profile - Profile data containing name, titles, tagline, and CTA buttons
 */
export default function HeroSection({ profile }: HeroSectionProps) {
  // Index of the currently displayed title from the titles array
  const [titleIndex, setTitleIndex] = useState(0);

  // Cycle through titles every 2.5 seconds
  useEffect(() => {
    if (profile.titles.length <= 1) return;
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % profile.titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [profile.titles.length]);

  /**
   * Handles a CTA button click, smoothly scrolling to the target section.
   *
   * @param link - Section link from the CTA button (e.g., "#projects")
   */
  function handleCtaClick(link: string) {
    const id = link.startsWith('#') ? link.slice(1) : link;
    smoothScrollTo(id);
  }

  return (
    <Box
      id={SECTION_HERO}
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: `${NAVBAR_HEIGHT}px`,
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 700 }}>
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Typography variant="h1" sx={{ color: '#2C3E50', mb: 1, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              Hi! I am{' '}
              <Box component="span" sx={{ color: '#1ABC9C' }}>
                {profile.name}
              </Box>
              !
            </Typography>
          </motion.div>

          {/* Animated title */}
          <Box sx={{ height: { xs: '2.2rem', md: '2.75rem' }, mb: 2, overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={titleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Typography
                  variant="h3"
                  sx={{ color: '#3498DB', fontWeight: 500, fontSize: { xs: '1.5rem', md: '2rem' } }}
                >
                  {profile.titles[titleIndex]}
                </Typography>
              </motion.div>
            </AnimatePresence>
          </Box>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Typography
              variant="body1"
              sx={{ color: '#6C757D', mb: 4, fontSize: '1.1rem', lineHeight: 1.8, maxWidth: 560 }}
            >
              {profile.tagline}
            </Typography>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              {profile.ctaButtons.map(({ text, link }) => (
                <Button
                  key={text}
                  variant="contained"
                  size="large"
                  onClick={() => handleCtaClick(link)}
                  sx={{
                    backgroundColor: '#1ABC9C',
                    color: '#fff',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    '&:hover': { backgroundColor: '#16a085' },
                  }}
                >
                  {text}
                </Button>
              ))}
            </Stack>
          </motion.div>
        </Box>
      </Container>

      {/* Scroll-down indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <KeyboardArrowDownIcon sx={{ color: '#ADB5BD', fontSize: 40 }} />
        </motion.div>
      </Box>
    </Box>
  );
}
