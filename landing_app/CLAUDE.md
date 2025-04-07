# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- Build: `npm run build`
- Dev: `npm run dev --turbopack`
- Start: `npm run start`
- Lint: `npm run lint`

## Code Style Guidelines

- Use TypeScript with strict type checking
- Use React functional components with arrow functions
- Use "use client" directive at the top of client components
- Prefer absolute imports with '@/' alias over relative paths
- Follow import order: React first, third-party libs next, local imports last
- Camel case for file names (e.g., hero_background.tsx)
- PascalCase for component names (e.g., HeroBackground)
- Use ExtendedCSSProperties for vendor-prefixed CSS properties
- Organize CSS using a styles object at the bottom of component files
- Use Tailwind classes with the 'cn()' utility for combining classes
- Include cross-browser compatibility with vendor prefixes
- Use proper performance optimizations (useMemo, useCallback)
- Use descriptive, semantic variable and function names
- Keep components focused on a single responsibility

# Payce Landing App - Codebase Analysis

## Overview

This repository contains a Next.js 15-based landing page application for Payce, a fintech company focusing on enterprise software automation, particularly in the order-to-cash process. The application serves as a company website with information about their products, team, and investment deck.

## Tech Stack

- **Framework**: Next.js 15.2.3 with App Router
- **React**: React 19.0.0
- **TypeScript**: Strict typing throughout the application
- **Styling**: Tailwind CSS 4.x with custom utilities
- **UI Components**: Mix of custom components and libraries:
  - @headlessui/react - For accessible UI components
  - Lucide React - For icons
  - Framer Motion - For animations
- **Linting**: ESLint with Next.js config
- **Environment**: Node.js 18+

## Project Structure

```
landing_app/
├── .gitignore                 # Git ignore file
├── CLAUDE.md                  # Guidance for Claude AI when working with the codebase
├── README.md                  # Basic Next.js README
├── eslint.config.mjs          # ESLint configuration
├── next.config.ts             # Next.js configuration (TypeScript)
├── package.json               # Dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration for Tailwind
├── public/                    # Static assets
├── src/
│   ├── app/                   # App Router pages and components
│   │   ├── components/        # Shared components
│   │   │   ├── footer/        # Footer component
│   │   │   ├── hero_section/  # Hero section components
│   │   │   ├── infosection/   # Information section components
│   │   │   ├── nav_bar/       # Navigation bar component
│   │   │   └── ui/            # UI component library
│   │   ├── globals.css        # Global CSS
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── our-deck/          # Investor deck pages and components
│   │   ├── our-products/      # Product pages and components
│   │   └── our-team/          # Team page
│   └── lib/                   # Utility functions and type definitions
├── tsconfig.json              # TypeScript configuration
```

## Key Components

### 1. App Structure

The application uses Next.js App Router with various pages:

- Home page (`/src/app/page.tsx`)
- Our Products page (`/src/app/our-products/page.tsx` and subdirectories)
- Our Deck page (`/src/app/our-deck/page.tsx` and subdirectories)
- Our Team page (`/src/app/our-team/page.tsx`)

### 2. Core Components

#### Navigation and Layout

- **NavBar** (`/src/app/components/nav_bar/nav_bar.tsx`): Navigation bar with links to main sections
- **Layout** (`/src/app/layout.tsx`): Root layout with font loading and metadata

#### Home Page Components

- **HeroBackground** (`/src/app/components/hero_section/hero_background.tsx`): Animated hero section with motion effects
- **EnterpriseHeader** (`/src/app/components/infosection/enterpriseHeader.tsx`): Mission statement section
- **Footer** (`/src/app/components/footer/footerSection.tsx`): Footer with links and copyright

#### Product Page Components

- **LiveDataPointsComponent** (`/src/app/our-products/order-to-cash/components/liveDataPoints.tsx`): Animated visualization showing order tracking
- **TwoWayDashboardSection** (`/src/app/our-products/order-to-cash/components/TwoWayDashboardSection.tsx`): Dual-view dashboard demonstration
- **AccountingAutomationSection** (`/src/app/our-products/order-to-cash/components/AccountingAutomationSection.tsx`): Features for accounting automation

#### Investor Deck Components

- **SlideContainer** and **SlideNavigation** in `/src/app/our-deck/components/`: Controls for the slides
- Multiple slide components in `/src/app/our-deck/slides/`: Each representing a slide in the presentation

### 3. Styling Approach

The application uses a combination of:

- Tailwind CSS for utility-based styling
- CSS variables for theming and dark mode support (see `globals.css`)
- Custom utility functions for class merging (`cn()` in `/src/lib/utils.ts`)
- Inline styles for component-specific styling

### 4. State Management

The application primarily uses React's built-in state management:

- `useState` for component state
- `useEffect` for side effects
- No global state management solution is implemented (no Redux, Zustand, etc.)

## TypeScript Usage

The application uses TypeScript throughout with strict typings:

- Custom type definitions for extended CSS properties (`src/lib/cssTypes.ts`)
- Proper typing for component props
- Strict null checks and proper type assertions

## Data Handling

- Static data for slides and content sections
- No API integration visible in the current codebase
- Data is structured within component files or in separate data files (e.g., `/src/app/our-deck/slides/01-intro/data.ts`)

## Animation and Interaction

The application uses Framer Motion extensively for animations:

- Entrance/exit animations for components
- Interactive elements with hover effects
- Scroll-based animations
- Sequenced animations with staggering effects

## Areas for Improvement

1. **Component Organization**:

   - Some components are quite large and could be refactored into smaller, more focused components
   - Inconsistent naming conventions (e.g., `hero_background.tsx` vs `enterpriseHeader.tsx`)

2. **State Management**:

   - For more complex data flows, consider implementing a more structured state management approach

3. **Responsive Design**:

   - Some components may need better mobile optimization
   - Ensure consistent responsive behavior across all components

4. **Code Duplication**:

   - Some styling patterns and animation logic are repeated across components
   - Could be abstracted into shared utilities or hooks

5. **Accessibility**:

   - Add ARIA attributes where missing
   - Improve keyboard navigation
   - Check color contrast on text elements

6. **Performance Optimization**:

   - Reduce unnecessary re-renders with memo, useMemo, and useCallback
   - Optimize animations for performance

7. **Testing**:

   - No testing setup is visible in the codebase
   - Consider adding Jest, React Testing Library, or Cypress for testing

8. **Documentation**:

   - More comprehensive component documentation would be helpful
   - Add JSDoc comments for functions and components

9. **Dynamic Content**:

   - Consider integrating with a CMS or API for more dynamic content management

10. **Routing Organization**:
    - The App Router structure could be optimized for better organization

## Getting Started

### Setup

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev --turbopack
```

3. Open [http://localhost:3000](http://localhost:3000) to view the application.

### Development Commands

- Build: `npm run build`
- Start (production): `npm run start`
- Lint: `npm run lint`

## Conclusion

This landing page application for Payce provides a solid foundation with modern React and Next.js practices. The codebase is well-structured and uses TypeScript for type safety. With some refactoring for better component organization, enhanced state management, and improved accessibility, this could become an excellent showcase for the company.

When working with this codebase in Cursor, focus on maintaining the existing architectural patterns while improving code quality and user experience.
