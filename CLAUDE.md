# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DailyHub is a directory/listing template built with Nuxt 3, featuring a content management system through Nuxt Content and Nuxt Studio. It's designed for creating listing websites, directories, and blogs with responsive layouts and optimized performance.

## Development Commands

```bash
# Install dependencies (use pnpm preferentially based on lock file)
pnpm install

# Start development server on http://localhost:3000
pnpm run dev

# Build for production
pnpm run build

# Generate static site
pnpm run generate

# Preview production build locally
pnpm run preview
```

## Architecture & Key Patterns

### Stack
- **Framework**: Nuxt 3.10.3 with Vue 3.4.21
- **Styling**: TailwindCSS 3.4.1 with custom color system defined in `tailwind.config.js`
- **UI Components**: Headless UI (prefixed as `Headless*`)
- **Content Management**: Nuxt Content with Nuxt Studio integration
- **Icons**: nuxt-icon module
- **Images**: @nuxt/image with optimized formats

### Project Structure

The application follows a content-driven architecture:

1. **Content Pages** (`content/*.md`): Markdown files define pages with frontmatter for SEO and custom components
2. **Dynamic Routing** (`pages/[...slug].vue`): Catch-all route renders content from markdown files
3. **Component System**: Modular Vue components in `components/` are auto-imported and can be used directly in markdown via custom MDC syntax

### State Management

Global state is managed via `useState` composables in `app.vue`:
- `searchDialogOpen`: Controls search modal visibility
- `submitDialogOpen`: Controls submission form modal  
- `sidebarOpen`: Controls mobile sidebar visibility

### Configuration

**`app.config.ts`**: Runtime application configuration including:
- Site metadata
- Navigation menus structure
- Feature toggles (search, submit dialog, buy button)
- Component configurations

**`nuxt.config.ts`**: Build-time configuration for modules and compilation

### Styling System

Custom color tokens based on alpha transparency system:
- `alpha-*`: White with varying opacity
- `black-*`: Black with varying opacity  
- `brand-*`: Orange brand colors (#FF4800 primary)
- Semantic usage: `bg-primary`, `text-primary`, `border-alpha-5`, `hover:bg-hover`

### Content Rendering

The `[...slug].vue` page uses ContentRenderer with custom component mappings:
- MDC components in markdown map to Vue components
- Dynamic component registration allows content authors to use components like `<page-wrapper>`, `<card>`, etc. directly in markdown
- SEO metadata is extracted from frontmatter

### Key UI Patterns

1. **Responsive Sidebar**: Desktop persistent, mobile overlay with Headless UI transitions
2. **Dialog Components**: SearchDialog and SubmitDialog controlled via global state
3. **Card-based Layouts**: FeaturedCard, HighlightCard, PricingCard for content presentation
4. **Section Components**: PageWrapper, Section, InfoSection for consistent page structure

## Deployment

Static generation is recommended (`pnpm run generate`). Output is in `.output/public/` suitable for any static hosting service (Vercel, Netlify, etc.).