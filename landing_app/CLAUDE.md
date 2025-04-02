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