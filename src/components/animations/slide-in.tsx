/**
 * slide-in.tsx: Slide-in scroll-triggered animation wrapper
 *
 * Wraps children in a Framer Motion element that slides in from a specified
 * direction when the component enters the viewport. Triggers once per page load.
 *
 * Dependencies: framer-motion, react-intersection-observer, animation-variants
 * Used by: experience-card.tsx, education-card.tsx, section headings
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  slideUpVariants,
  slideInLeftVariants,
  slideInRightVariants,
} from '@/lib/utils/animation-variants';

/** Supported slide directions */
type SlideDirection = 'up' | 'left' | 'right';

/** Props for the SlideIn wrapper component */
interface SlideInProps {
  /** Content to animate */
  children: React.ReactNode;
  /** Direction from which the element slides in (default: 'up') */
  direction?: SlideDirection;
  /** Additional CSS class names */
  className?: string;
  /** Delay before animation starts (seconds) */
  delay?: number;
}

/** Maps a direction string to the corresponding animation variant */
const variantMap = {
  up: slideUpVariants,
  left: slideInLeftVariants,
  right: slideInRightVariants,
};

/**
 * Wraps children in a directional slide-in animation triggered on scroll.
 *
 * @param children  - Child elements to animate
 * @param direction - 'up' | 'left' | 'right' (default: 'up')
 * @param className - Optional extra CSS classes
 * @param delay     - Optional animation delay in seconds (default: 0)
 */
export default function SlideIn({
  children,
  direction = 'up',
  className,
  delay = 0,
}: SlideInProps) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const variants = variantMap[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
