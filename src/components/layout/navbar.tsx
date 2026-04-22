/**
 * navbar.tsx: Fixed top navigation bar
 *
 * Renders the portfolio navigation bar with smooth-scroll links, active section
 * highlighting, a shadow on scroll, and a hamburger menu on mobile screens.
 *
 * Dependencies: @mui/material, mobile-menu, scroll-utils, app-constants
 * Used by: app/layout.tsx
 */

'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { smoothScrollTo, getActiveSection } from '@/lib/utils/scroll-utils';
import {
  SECTION_HERO,
  SECTION_SKILLS,
  SECTION_EXPERIENCE,
  SECTION_PROJECTS,
  SECTION_EDUCATION,
  SECTION_CONTACT,
} from '@/constants/app-constants';
import MobileMenu from './mobile-menu';

/** Navigation link definitions */
const NAV_LINKS = [
  { label: 'About', sectionId: SECTION_HERO },
  { label: 'Skills', sectionId: SECTION_SKILLS },
  { label: 'Experience', sectionId: SECTION_EXPERIENCE },
  { label: 'Projects', sectionId: SECTION_PROJECTS },
  { label: 'Education', sectionId: SECTION_EDUCATION },
  { label: 'Contact', sectionId: SECTION_CONTACT },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.sectionId);

/**
 * Fixed navigation bar with desktop links and a mobile hamburger menu.
 * Adds a subtle shadow when the user scrolls and highlights the active section.
 */
export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Track scroll state for shadow and active section highlighting
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
    setActiveSection(getActiveSection(SECTION_IDS));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          backgroundColor: '#2C3E50',
          boxShadow: scrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 3 } }}>
          {/* Logo / Name */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700, cursor: 'pointer', letterSpacing: 0.5 }}
            onClick={() => smoothScrollTo(SECTION_HERO)}
          >
          </Typography>

          {/* Desktop navigation links */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              {NAV_LINKS.map(({ label, sectionId }) => {
                const isActive = activeSection === sectionId;
                return (
                  <Button
                    key={sectionId}
                    color="inherit"
                    onClick={() => smoothScrollTo(sectionId)}
                    aria-label={`Navigate to ${label} section`}
                    sx={{
                      fontWeight: isActive ? 700 : 400,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 4,
                        left: '50%',
                        transform: isActive ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                        width: '70%',
                        height: 2,
                        backgroundColor: '#1ABC9C',
                        transition: 'transform 0.3s ease',
                        transformOrigin: 'center',
                      },
                      '&:hover::after': {
                        transform: 'translateX(-50%) scaleX(1)',
                      },
                    }}
                  >
                    {label}
                  </Button>
                );
              })}
            </Box>
          )}

          {/* Mobile hamburger button */}
          {isMobile && (
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <MobileMenu
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        navLinks={NAV_LINKS}
        activeSection={activeSection}
      />
    </>
  );
}
