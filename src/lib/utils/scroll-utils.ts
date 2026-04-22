/**
 * scroll-utils.ts: Smooth scroll utility functions
 *
 * Provides helpers for scrolling to named sections, tracking scroll position,
 * and determining the active navigation section. All calculations account for
 * the fixed navbar height.
 *
 * Dependencies: app-constants
 * Used by: navbar.tsx, mobile-menu.tsx, scroll-to-top.tsx, hero-section.tsx
 */

import { NAVBAR_HEIGHT } from '@/constants/app-constants';

/**
 * Smoothly scrolls the page to the element with the given ID.
 * Offsets the scroll position by the navbar height to prevent the navbar
 * from overlapping the section heading.
 *
 * @param targetId - The element ID to scroll to (without the leading '#')
 * @param offset   - Additional px offset (defaults to NAVBAR_HEIGHT)
 * @returns void
 *
 * @example
 * smoothScrollTo('projects'); // scrolls to #projects
 */
export function smoothScrollTo(targetId: string, offset: number = NAVBAR_HEIGHT): void {
  // Strip a leading '#' if the caller included it
  const id = targetId.startsWith('#') ? targetId.slice(1) : targetId;
  const element = document.getElementById(id);

  if (!element) return;

  const elementTop = element.getBoundingClientRect().top + window.scrollY;
  const scrollTarget = elementTop - offset;

  window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
}

/**
 * Returns the ID of the section currently most visible in the viewport.
 * Used to highlight the active link in the navbar.
 *
 * @param sectionIds - Ordered list of section element IDs to check
 * @returns The ID of the active section, or null if none found
 *
 * @example
 * const active = getActiveSection(['hero', 'skills', 'projects']);
 */
export function getActiveSection(sectionIds: string[]): string | null {
  const scrollY = window.scrollY + NAVBAR_HEIGHT + 50; // small look-ahead offset

  let activeId: string | null = null;

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;

    const top = el.offsetTop;
    const bottom = top + el.offsetHeight;

    // The section is active if the viewport is within its vertical range
    if (scrollY >= top && scrollY < bottom) {
      activeId = id;
      break;
    }
  }

  return activeId;
}

/**
 * Scrolls the page smoothly back to the very top.
 *
 * @returns void
 *
 * @example
 * scrollToTop();
 */
export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
