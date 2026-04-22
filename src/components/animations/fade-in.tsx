/**
 * fade-in.tsx: Fade-in scroll-triggered animation wrapper
 *
 * Wraps its children in a Framer Motion element that fades in when the
 * component enters the viewport. Uses react-intersection-observer to detect
 * visibility and triggers the animation only once.
 *
 * Dependencies: framer-motion, react-intersection-observer, animation-variants
 * Used by: section components, contact section
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInVariants } from '@/lib/utils/animation-variants';

/** Props for the FadeIn wrapper component */
interface FadeInProps {
  /** Content to animate */
  children: React.ReactNode;
  /** Additional CSS class names */
  className?: string;
  /** Delay before animation starts (seconds) */
  delay?: number;
}

/**
 * Wraps children in a fade-in animation that triggers on scroll-into-view.
 * The animation fires only once per page load.
 *
 * @param children  - Child elements to animate
 * @param className - Optional extra CSS classes
 * @param delay     - Optional animation delay in seconds (default: 0)
 */
export default function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  // Trigger when 15% of the element is visible; only fire once
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeInVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
