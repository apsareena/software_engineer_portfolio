/**
 * scroll-to-top.tsx: Floating scroll-to-top button
 *
 * Renders a circular Fab button that appears after the user has scrolled
 * more than SCROLL_TO_TOP_THRESHOLD pixels down the page. Clicking it
 * smoothly scrolls back to the top.
 *
 * Dependencies: @mui/material, framer-motion, scroll-utils, app-constants
 * Used by: app/page.tsx
 */

'use client';

import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { AnimatePresence, motion } from 'framer-motion';
import { scrollToTop } from '@/lib/utils/scroll-utils';
import { SCROLL_TO_TOP_THRESHOLD } from '@/constants/app-constants';

/**
 * A floating action button that appears when the user scrolls down and
 * returns them to the top of the page on click.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // Show/hide the button based on scroll position
  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > SCROLL_TO_TOP_THRESHOLD);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 1000 }}
        >
          <Fab
            color="primary"
            size="medium"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            sx={{
              backgroundColor: '#1ABC9C',
              '&:hover': { backgroundColor: '#16a085' },
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
