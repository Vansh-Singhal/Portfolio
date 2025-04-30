import { Variants } from "motion/react";

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export const slideInFromLeft: Variants = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
};

export const slideInFromRight: Variants = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 100, opacity: 0 },
};

export const defaultTransition = {
  duration: 0.6,
  ease: "easeOut",
};

export const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const navLinkAnimation = {
  initial: { rotate: 0, y: 0 },
  clicked: {
    rotate: [0, 100, 80, 95, 85, 85, 85, 60, 60],
    y: [0, 0, 400],
    opacity: [1, 1, 1, 0],
    transition: {
      duration: 1.2,
      times: [0, 0.25, 1],
      ease: "easeInOut",
    },
  },
  normal: {
    rotate: 0,
    y: 0,
    opacity: 1,
    transition: springTransition,
  },
};

export const scrollReveal: Variants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};
