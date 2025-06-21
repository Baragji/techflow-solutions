# TechRix Website Documentation

Welcome to the internal documentation for the TechRix website rebuild project.

## Project Overview

This project is a complete rebuild of the TechRix website following a micro-service architecture with the following goals:

- **Visual parity** 1-to-1 with the old 400k DKK site
- **Radical simplification** - no runtime dependencies, minimal build tools
- **Micro-service/component isolation** for easy maintenance
- **Static hosting** on global CDN for sub-second load times

## Architecture

The project follows a monorepo structure with:

```
repo-root/
├── apps/web/           # Astro site (static output)
├── packages/           # Micro-services (pure HTML/CSS/JS per section)
├── docs/              # MkDocs site for internal documentation
└── .github/           # CI (lint, build, lighthouse)
```

## Technology Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Node.js | 20.11.x LTS | Runtime |
| Astro | 4.x | Static site generator |
| MkDocs | ≥1.6 | Documentation |
| ESLint | 9.x | Linting |
| Prettier | 3.x | Code formatting |

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Start documentation:**
   ```bash
   npm run docs:dev
   ```

## Design System

The design system is inspired by obsidianagency.com and uses CSS custom properties for consistent theming. All design tokens are defined in `apps/web/src/styles/design-tokens.css`.

## Component Architecture

Each component is a micro-service that exports a `render()` function returning pre-computed HTML with inline CSS. This ensures:

- No shared global state
- Easy testing and isolation
- Predictable output
- No runtime dependencies

## Quality Gates

- **Performance**: FCP < 1s (3G), LCP < 2.5s
- **Accessibility**: WCAG 2.1 AA, axe-score ≥ 90
- **SEO**: Lighthouse SEO ≥ 90
- **Code Health**: ESLint 0 errors

## Next Steps

1. Review the [Architecture Overview](architecture/overview.md)
2. Check out the [Component Documentation](components/hero.md)
3. Read the [ADRs](adrs/001-architecture-decision.md) for design decisions