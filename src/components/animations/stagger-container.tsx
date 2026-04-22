/**
 * stagger-container.tsx: Stagger animation container wrapper
 *
 * Wraps a list of children so that each child animates in sequentially.
 * Children should be wrapped in motion elements that use a stagger-item variant
 * (e.g., staggerItemVariants from animation-variants.ts).
 *
 * Dependencies: framer-motion, react-intersection-observer, animation-variants
 * Used by: skills-grid.tsx, project-grid.tsx
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { staggerContainerVariants } from '@/lib/utils/animation-variants';

/** Props for the StaggerContainer wrapper */
interface StaggerContainerProps {
  /** Child elements to stagger-animate */
  children: React.ReactNode;
  /** Additional CSS class names applied to the container div */
  className?: string;
}

/**
 * Container that triggers staggered child animations on scroll-into-view.
 * Each direct child should use `staggerItemVariants` (or a compatible variant)
 * as its `variants` prop.
 *
 * @param children  - Child motion elements with stagger-item variants
 * @param className - Optional extra CSS classes for the container
 */
export default function StaggerContainer({ children, className }: StaggerContainerProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}
