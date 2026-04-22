/**
 * animation-variants.ts: Framer Motion animation variant definitions
 *
 * Centralises all animation configurations so that timings and easing can be
 * adjusted in one place. Components import these variants rather than defining
 * their own inline animation objects.
 *
 * Dependencies: framer-motion, app-constants
 * Used by: fade-in.tsx, slide-in.tsx, stagger-container.tsx, project-card.tsx
 */

import { Variants } from 'framer-motion';
import { ANIMATION_DURATION, STAGGER_DELAY } from '@/constants/app-constants';

/** Duration in seconds (Framer Motion uses seconds, not ms) */
const DURATION_S = ANIMATION_DURATION / 1000;
/** Stagger delay in seconds */
const STAGGER_S = STAGGER_DELAY / 1000;

/**
 * Fade-in variant: opacity 0 → 1.
 *
 * @example
 * <motion.div variants={fadeInVariants} initial="hidden" animate="visible" />
 */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION_S, ease: 'easeOut' },
  },
};

/**
 * Slide-up variant: translates from 50 px below with a fade-in.
 *
 * @example
 * <motion.div variants={slideUpVariants} initial="hidden" animate="visible" />
 */
export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION_S, ease: 'easeOut' },
  },
};

/**
 * Slide-in from the left variant.
 *
 * @example
 * <motion.div variants={slideInLeftVariants} initial="hidden" animate="visible" />
 */
export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION_S, ease: 'easeOut' },
  },
};

/**
 * Slide-in from the right variant.
 *
 * @example
 * <motion.div variants={slideInRightVariants} initial="hidden" animate="visible" />
 */
export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION_S, ease: 'easeOut' },
  },
};

/**
 * Scale-in variant: scales from 0.9 with a fade-in.
 *
 * @example
 * <motion.div variants={scaleInVariants} initial="hidden" animate="visible" />
 */
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION_S, ease: 'easeOut' },
  },
};

/**
 * Stagger container variant: orchestrates sequential child animations.
 * Children should use any of the item variants above.
 *
 * @example
 * <motion.div variants={staggerContainerVariants} initial="hidden" animate="visible">
 *   <motion.div variants={slideUpVariants} />
 * </motion.div>
 */
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER_S,
    },
  },
};

/**
 * Item variant for use inside a stagger container (slide-up style).
 */
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION_S, ease: 'easeOut' },
  },
};
