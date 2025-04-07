/*
 * Fullscreen Optimization Guidelines for All Slides
 * ------------------------------------------------
 *
 * This presentation now uses a consistent approach to ensure proper scaling
 * between fullscreen and normal modes. All slides should:
 *
 * 1. Import utilities from the central responsiveStyles.ts file:
 *    ```
 *    import {
 *      useTextStyles,
 *      getSpacing,
 *      getIconClass,
 *      motionVariants,
 *      getGridConfig
 *    } from "../../util/responsiveStyles";
 *    ```
 *
 * 2. Use the text styling utility for consistent typography:
 *    ```
 *    const textStyles = useTextStyles();
 *    // Then in your JSX:
 *    <h1 style={textStyles.title}>Heading</h1>
 *    <p style={textStyles.body}>Body text</p>
 *    ```
 *
 * 3. Use consistent spacing utilities:
 *    ```
 *    // For container padding:
 *    <div style={getSpacing.container}>
 *
 *    // For flexible gaps and margins:
 *    <div style={getSpacing.gap.medium}>
 *    <div style={getSpacing.padding.large}>
 *    ```
 *
 * 4. Use CSS classes for responsive icon sizing (to avoid hydration errors):
 *    ```
 *    <GetIcon
 *      name="IconName"
 *      size={24}
 *      className={`${getIconClass(24)} mr-2 text-blue-500`}
 *    />
 *    ```
 *    Note: The `size` prop and `getIconClass()` should use the SAME number
 *    to avoid hydration mismatches. The actual sizing will be handled by CSS.
 *
 * 5. Use pre-configured grid layouts:
 *    ```
 *    <div
 *      className={getGridConfig.twoColumns.className}
 *      style={getGridConfig.twoColumns.style}
 *    >
 *    ```
 *
 * 6. Use consistent animation variants:
 *    ```
 *    <motion.div {...motionVariants.fadeIn}>
 *    <motion.div {...motionVariants.slideUp}>
 *    ```
 *
 * These patterns have been implemented in the Intro slide (01), Problem slide (02),
 * and Financials slide (10) as examples. All other slides should be updated following
 * the same approach for consistent scaling behavior.
 */

import { default as IntroSlide } from "./01-intro/Slide";
import { default as ProblemSlide } from "./02-problem/Slide";
import { default as SolutionSlide } from "./03-solution/Slide";
import { default as MarketSlide } from "./04-market/Slide";
import { default as TechnologySlide } from "./05-technology/Slide";
import { default as BusinessModelSlide } from "./06-business-model/Slide";
import { default as GoToMarketSlide } from "./07-go-to-market/Slide";
import { default as CompetitionSlide } from "./08-competition/Slide";
import { default as TeamSlide } from "./09-team/Slide";
import { default as FinancialsSlide } from "./10-financials/Slide";

// Define metadata for each slide
export const slidesMetadata = [
  {
    id: "intro",
    title: "Payce: Reimagining Enterprise Software",
    description: "An introduction to our vision and mission.",
  },
  {
    id: "problem",
    title: "The Problem",
    description:
      "The messy, manual processes that slow down business operations.",
  },
  {
    id: "solution",
    title: "Our Solution",
    description:
      "How Payce is transforming enterprise software through automation.",
  },
  {
    id: "market",
    title: "Market Opportunity",
    description: "Analysis of our target market and growth potential.",
  },
  {
    id: "technology",
    title: "Technology",
    description: "Our innovative approach and technical advantages.",
  },
  {
    id: "business-model",
    title: "Business Model",
    description: "How we monetize our solution and create value.",
  },
  {
    id: "go-to-market",
    title: "Go-to-Market Strategy",
    description: "Our plan for customer acquisition and growth.",
  },
  {
    id: "competition",
    title: "Competition",
    description: "Competitive landscape analysis and our unique positioning.",
  },
  {
    id: "team",
    title: "Team",
    description: "Introduction to our leadership and key team members.",
  },
  {
    id: "financials",
    title: "Financials & Fundraising",
    description: "Financial projections and investment opportunity.",
  },
];

// Export an array of slide components in order
export const slides = [
  IntroSlide,
  ProblemSlide,
  SolutionSlide,
  MarketSlide,
  TechnologySlide,
  BusinessModelSlide,
  GoToMarketSlide,
  CompetitionSlide,
  TeamSlide,
  FinancialsSlide,
];
