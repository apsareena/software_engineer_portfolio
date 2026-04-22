/**
 * mobile-menu.tsx: Hamburger mobile navigation drawer
 *
 * Renders a slide-in Drawer containing all navigation links for small screens.
 * Opened by the hamburger icon in the Navbar and closed by clicking any link
 * or the close icon.
 *
 * Dependencies: @mui/material, scroll-utils, app-constants
 * Used by: navbar.tsx
 */

'use client';

import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { smoothScrollTo } from '@/lib/utils/scroll-utils';
import { APP_NAME } from '@/constants/app-constants';

/** A single navigation link entry */
interface NavLink {
  label: string;
  sectionId: string;
}

/** Props for the MobileMenu component */
interface MobileMenuProps {
  /** Whether the drawer is currently open */
  open: boolean;
  /** Callback to close the drawer */
  onClose: () => void;
  /** Navigation links to render */
  navLinks: NavLink[];
  /** ID of the currently active section */
  activeSection: string | null;
}

/**
 * Mobile navigation drawer that slides in from the right.
 * Clicking a link scrolls to the target section and closes the drawer.
 *
 * @param open          - Controls drawer visibility
 * @param onClose       - Called when the user requests the drawer to close
 * @param navLinks      - Array of {label, sectionId} objects
 * @param activeSection - Currently active section ID for highlighting
 */
export default function MobileMenu({
  open,
  onClose,
  navLinks,
  activeSection,
}: MobileMenuProps) {
  /**
   * Handles clicking a nav link: scrolls to the section, then closes drawer.
   *
   * @param sectionId - Target section element ID
   */
  function handleLinkClick(sectionId: string) {
    onClose();
    // Small timeout so the drawer close animation starts before scrolling
    setTimeout(() => smoothScrollTo(sectionId), 50);
  }

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      {/* Drawer header */}
      <Box
        sx={{
          width: 260,
          px: 2,
          py: 1.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#2C3E50',
          color: '#fff',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {APP_NAME}
        </Typography>
        <IconButton onClick={onClose} aria-label="Close navigation menu" sx={{ color: '#fff' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      {/* Navigation links */}
      <List sx={{ pt: 1 }}>
        {navLinks.map(({ label, sectionId }) => {
          const isActive = activeSection === sectionId;
          return (
            <ListItem key={sectionId} disablePadding>
              <ListItemButton
                onClick={() => handleLinkClick(sectionId)}
                sx={{
                  px: 3,
                  py: 1.5,
                  borderLeft: isActive ? '3px solid #1ABC9C' : '3px solid transparent',
                  color: isActive ? '#1ABC9C' : 'inherit',
                }}
              >
                <ListItemText
                  primary={label}
                  slotProps={{ primary: { sx: { fontWeight: isActive ? 700 : 400 } } }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}
