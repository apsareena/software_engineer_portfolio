/**
 * theme-config.ts: Material-UI theme configuration
 *
 * Creates and exports the MUI theme with the portfolio's professional neutral
 * colour palette, typography settings, and component overrides.
 *
 * Dependencies: @mui/material
 * Used by: app/layout.tsx (ThemeProvider)
 */

'use client';

import { createTheme } from '@mui/material/styles';
import {
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_ACCENT,
  COLOR_BACKGROUND,
  COLOR_SURFACE,
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
  BREAKPOINT_MOBILE,
  BREAKPOINT_TABLET,
} from '@/constants/app-constants';

/**
 * Portfolio MUI theme.
 * Applies the professional neutral palette, Inter body font, and
 * Roboto Slab heading font across all MUI components.
 */
const theme = createTheme({
  // ─── Colour Palette ──────────────────────────────────────────────────────
  palette: {
    primary: {
      main: COLOR_PRIMARY,
    },
    secondary: {
      main: COLOR_SECONDARY,
    },
    background: {
      default: COLOR_BACKGROUND,
      paper: COLOR_SURFACE,
    },
    text: {
      primary: COLOR_TEXT_PRIMARY,
      secondary: COLOR_TEXT_SECONDARY,
    },
  },

  // ─── Typography ───────────────────────────────────────────────────────────
  typography: {
    fontFamily: '"Inter", "Open Sans", sans-serif',
    h1: {
      fontFamily: '"Roboto Slab", "Playfair Display", serif',
      fontWeight: 700,
      fontSize: '3rem',
    },
    h2: {
      fontFamily: '"Roboto Slab", "Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2.25rem',
    },
    h3: {
      fontFamily: '"Roboto Slab", "Playfair Display", serif',
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h4: {
      fontFamily: '"Roboto Slab", "Playfair Display", serif',
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h5: {
      fontFamily: '"Roboto Slab", "Playfair Display", serif',
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontFamily: '"Roboto Slab", "Playfair Display", serif',
      fontWeight: 500,
      fontSize: '1.1rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },

  // ─── Responsive Breakpoints ───────────────────────────────────────────────
  breakpoints: {
    values: {
      xs: 0,
      sm: BREAKPOINT_MOBILE,
      md: BREAKPOINT_TABLET,
      lg: 1280,
      xl: 1920,
    },
  },

  // ─── Component Overrides ─────────────────────────────────────────────────
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
          '&:active': {
            transform: 'scale(0.98)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: COLOR_PRIMARY,
        },
      },
    },
  },
});

export default theme;
