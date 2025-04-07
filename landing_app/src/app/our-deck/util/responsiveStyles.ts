/**
 * Responsive Styles Utility
 *
 * This file provides consistent responsive styling for all slides
 * to ensure proper scaling between normal and fullscreen modes.
 */

// Base responsive text sizes using container queries and fluid typography
export const useTextStyles = () => {
  return {
    title: {
      fontSize: "clamp(1.5rem, 3cqi + 0.5rem, 3rem)",
      lineHeight: "1.1",
      fontWeight: "700",
      letterSpacing: "-0.01em",
    },
    subtitle: {
      fontSize: "clamp(1.125rem, 1.5cqi + 0.25rem, 1.75rem)",
      lineHeight: "1.3",
      fontWeight: "600",
      letterSpacing: "-0.005em",
    },
    body: {
      fontSize: "clamp(0.875rem, 0.75cqi + 0.5rem, 1.125rem)",
      lineHeight: "1.5",
    },
    small: {
      fontSize: "clamp(0.75rem, 0.5cqi + 0.5rem, 0.875rem)",
      lineHeight: "1.4",
    },
    tiny: {
      fontSize: "clamp(0.625rem, 0.25cqi + 0.5rem, 0.75rem)",
      lineHeight: "1.3",
    },
  };
};

// Spacing utilities for consistent padding/margins
export const getSpacing = {
  // Main container padding for all slides
  container: {
    padding: "var(--slide-padding-base)",
  },
  // Grid gap and flex spacing - more adaptive
  gap: {
    small: { gap: "clamp(0.25rem, 0.5cqi, 0.75rem)" },
    medium: { gap: "clamp(0.5rem, 1cqi, 1.5rem)" },
    large: { gap: "clamp(1rem, 1.5cqi, 2rem)" },
  },
  // Element padding - more adaptive
  padding: {
    small: { padding: "clamp(0.375rem, 0.5cqi, 0.75rem)" },
    medium: { padding: "clamp(0.75rem, 1cqi, 1.25rem)" },
    large: { padding: "clamp(1rem, 1.5cqi, 2rem)" },
  },
  // Margins - more adaptive
  margin: {
    small: { margin: "clamp(0.375rem, 0.5cqi, 0.75rem)" },
    medium: { margin: "clamp(0.75rem, 1cqi, 1.25rem)" },
    large: { margin: "clamp(1rem, 1.5cqi, 2rem)" },
  },
};

// Responsive icon sizing - CSS-based approach to avoid hydration errors
export const getIconSize = (baseSize: number) => {
  // Return the base size without any client-side calculations
  // This ensures the same value is used on both server and client
  return baseSize;
};

// CSS class for responsive icon sizing - using class approach to avoid hydration errors
export const getIconClass = (baseSize: number) => {
  // Return a CSS class name that can be used in the className prop
  return `icon-size-${baseSize}`;
};

// Element size utilities - more fluid and adaptive
export const getElementSize = {
  // For visual elements like blobs, circles, etc.
  circle: (baseSize: string) => ({
    width: `clamp(calc(${baseSize} * 0.8), ${baseSize} + 1cqi, calc(${baseSize} * 1.5))`,
    height: `clamp(calc(${baseSize} * 0.8), ${baseSize} + 1cqi, calc(${baseSize} * 1.5))`,
  }),
  // Max width constraints that scale with container
  maxWidth: {
    small: { maxWidth: "clamp(16rem, 16rem + 5cqi, 24rem)" },
    medium: { maxWidth: "clamp(24rem, 24rem + 8cqi, 32rem)" },
    large: { maxWidth: "clamp(32rem, 32rem + 10cqi, 42rem)" },
    full: { maxWidth: "100%" },
  },
  // Responsive heights
  height: {
    small: { height: "clamp(8rem, 8rem + 5cqi, 12rem)" },
    medium: { height: "clamp(12rem, 12rem + 8cqi, 20rem)" },
    large: { height: "clamp(20rem, 20rem + 10cqi, 32rem)" },
    auto: { height: "auto" },
  },
};

// Animation variants for consistent motion
export const motionVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  slideIn: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7 },
  },
};

// Responsive grid configuration - enhanced for better adaptability
export const getGridConfig = {
  twoColumns: {
    className: "grid grid-cols-1 sm:grid-cols-2",
    style: { ...getSpacing.gap.medium },
  },
  threeColumns: {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    style: { ...getSpacing.gap.medium },
  },
  fourColumns: {
    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    style: { ...getSpacing.gap.medium },
  },
  // For dashboard layouts, with different column proportions
  asymmetric: {
    className: "grid grid-cols-1 lg:grid-cols-3",
    leftColumnClass: "lg:col-span-2",
    rightColumnClass: "lg:col-span-1",
    style: { ...getSpacing.gap.medium },
  },
};
