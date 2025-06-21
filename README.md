# TechRix Website Rebuild

A complete rebuild of the TechRix website using modern web technologies with a focus on performance, maintainability, and visual parity with the original design.

## 🎯 Project Goals

- **Visual parity** 1-to-1 with the old 400k DKK site
- **Radical simplification** - no runtime dependencies, minimal build tools
- **Micro-service architecture** for component isolation and maintainability
- **Static hosting** on global CDN for sub-second load times

## 🏗️ Architecture

```
repo-root/
├── apps/
│   └── web/           # Astro site (static output)
├── packages/          # Micro-services (pure HTML/CSS/JS per section)
│   ├── hero/
│   ├── navigation/
│   ├── services/
│   ├── about/
│   ├── contact/
│   └── footer/
├── docs/              # MkDocs site for internal documentation
└── .github/           # CI (lint, build, lighthouse)
```

## 🛠�� Technology Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Node.js | 20.11.x LTS | Runtime environment |
| Astro | 4.x | Static site generator |
| MkDocs | ≥1.6 | Documentation |
| ESLint | 9.x | Code linting |
| Prettier | 3.x | Code formatting |

## 🚀 Quick Start

### Prerequisites

- Node.js 20.11.x or higher
- npm 10.x or higher
- Python 3.12.x (for documentation)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd techrix-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:4321`

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format

# Start documentation server
npm run docs:dev

# Build documentation
npm run docs:build
```

## 🎨 Design System

The design system is inspired by obsidianagency.com and uses CSS custom properties for consistent theming. All design tokens are defined in `apps/web/src/styles/design-tokens.css`.

### Key Design Tokens

- **Primary Color**: `#5247e2` (Deep Violet)
- **Typography**: Plus Jakarta Sans, Inter
- **Spacing Scale**: 4px base unit
- **Border Radius**: 6px (small), 24px (large)

## 🧩 Component Architecture

Each component is a micro-service that exports a `render()` function returning pre-computed HTML with inline CSS. This ensures:

- ✅ No shared global state
- ✅ Easy testing and isolation
- ✅ Predictable output
- ✅ No runtime dependencies

### Example Component

```javascript
// packages/hero/src/index.js
export function render({ title, highlights = [] } = {}) {
  return `
    <section class="hero">
      <h1>${title}</h1>
      <!-- Component HTML with inline CSS -->
      <style>
        .hero { /* Component styles */ }
      </style>
    </section>
  `;
}
```

## 📊 Quality Gates

- **Performance**: FCP < 1s (3G), LCP < 2.5s
- **Accessibility**: WCAG 2.1 AA, axe-score ≥ 90
- **SEO**: Lighthouse SEO ≥ 90
- **Code Health**: ESLint 0 errors

## 🔄 CI/CD Pipeline

The project uses GitHub Actions for continuous integration:

- **Linting**: ESLint checks on all code
- **Building**: Astro build verification
- **Testing**: Lighthouse CI for performance
- **Documentation**: MkDocs build verification

## 📚 Documentation

Comprehensive documentation is available at `/docs` and includes:

- Architecture decisions (ADRs)
- Component specifications
- Development guidelines
- API documentation

To start the documentation server:

```bash
npm run docs:dev
```

## 🚀 Deployment

The site is designed for static hosting on:

- Cloudflare Pages
- Vercel
- Netlify
- Any static hosting provider

Build output is generated in `apps/web/dist/`.

## 🤝 Contributing

1. Follow the "No Code Before Blueprint" principle
2. All components must be micro-services
3. Use design tokens for styling
4. Write comprehensive documentation
5. Ensure all quality gates pass

## 📝 License

MIT License - see LICENSE file for details.

## 🆘 Support

For questions or issues:

1. Check the [documentation](docs/)
2. Review existing [ADRs](docs/docs/adrs/)
3. Create an issue in the repository

---

**Built with ❤️ by the TechRix Team**