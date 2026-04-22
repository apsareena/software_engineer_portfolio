/**
 * app-constants.ts: Application-wide constants
 *
 * Centralizes all configuration values used throughout the portfolio.
 * Avoids hardcoded values in components by providing named constants for
 * UI sizing, breakpoints, animation timings, section IDs, and file paths.
 *
 * Dependencies: None
 * Used by: All components and utilities
 */

// ─── Application Metadata ────────────────────────────────────────────────────
export const APP_NAME = 'Portfolio';
export const APP_DESCRIPTION = 'Software Engineer Portfolio';

// ─── Data File Paths ─────────────────────────────────────────────────────────
export const DATA_DIR = 'data';
export const PROFILE_JSON = `${DATA_DIR}/profile.json`;
export const SKILLS_JSON = `${DATA_DIR}/skills.json`;
export const EXPERIENCE_JSON = `${DATA_DIR}/experience.json`;
export const PROJECTS_JSON = `${DATA_DIR}/projects.json`;
export const EDUCATION_JSON = `${DATA_DIR}/education.json`;
export const CONTACT_JSON = `${DATA_DIR}/contact.json`;

// ─── Section IDs (used for smooth scroll navigation) ─────────────────────────
export const SECTION_HERO = 'hero';
export const SECTION_SKILLS = 'skills';
export const SECTION_EXPERIENCE = 'experience';
export const SECTION_PROJECTS = 'projects';
export const SECTION_EDUCATION = 'education';
export const SECTION_CONTACT = 'contact';

// ─── UI Configuration ─────────────────────────────────────────────────────────
/** Height of the fixed navbar in pixels (desktop) */
export const NAVBAR_HEIGHT = 64;
/** Height of the fixed navbar in pixels (mobile) */
export const NAVBAR_HEIGHT_MOBILE = 56;
/** Vertical padding for sections on desktop */
export const SECTION_PADDING_DESKTOP = 80;
/** Vertical padding for sections on mobile */
export const SECTION_PADDING_MOBILE = 48;
/** Maximum width of page content */
export const MAX_CONTENT_WIDTH = 1200;
/** Border radius for cards */
export const CARD_BORDER_RADIUS = 8;
/** Scroll position (px) at which the scroll-to-top button appears */
export const SCROLL_TO_TOP_THRESHOLD = 300;

// ─── Animation Durations ──────────────────────────────────────────────────────
/** Base animation duration in milliseconds */
export const ANIMATION_DURATION = 600;
/** Stagger delay between items in a list/grid (ms) */
export const STAGGER_DELAY = 100;
/** Hover transition duration (ms) */
export const HOVER_TRANSITION = 300;

// ─── Responsive Breakpoints ───────────────────────────────────────────────────
/** Minimum width for tablet layout (px) */
export const BREAKPOINT_MOBILE = 600;
/** Minimum width for desktop layout (px) */
export const BREAKPOINT_TABLET = 960;

// ─── Grid Columns ─────────────────────────────────────────────────────────────
export const GRID_COLUMNS_DESKTOP = 3;
export const GRID_COLUMNS_TABLET = 2;
export const GRID_COLUMNS_MOBILE = 1;

// ─── Copy Notification ────────────────────────────────────────────────────────
export const COPY_SUCCESS_MESSAGE = 'Copied to clipboard!';
/** Duration (ms) the copy success Snackbar is shown */
export const COPY_SUCCESS_DURATION = 2000;

// ─── Color Palette ────────────────────────────────────────────────────────────
export const COLOR_PRIMARY = '#2C3E50';
export const COLOR_SECONDARY = '#3498DB';
export const COLOR_ACCENT = '#1ABC9C';
export const COLOR_BACKGROUND = '#FFFFFF';
export const COLOR_SURFACE = '#F8F9FA';
export const COLOR_BORDER = '#E0E0E0';
export const COLOR_TEXT_PRIMARY = '#212529';
export const COLOR_TEXT_SECONDARY = '#6C757D';
export const COLOR_TEXT_MUTED = '#ADB5BD';
export const COLOR_SHAPE_BLUE = 'rgba(52, 152, 219, 0.1)';
export const COLOR_SHAPE_TEAL = 'rgba(26, 188, 156, 0.1)';
export const COLOR_SHAPE_PURPLE = 'rgba(155, 89, 182, 0.1)';
export const COLOR_SHAPE_PINK = 'rgba(231, 76, 60, 0.08)';
