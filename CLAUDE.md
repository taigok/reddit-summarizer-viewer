# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Language Preference
Please respond in Japanese (日本語) when interacting with users in this repository.

## Project Overview

Reddit Summarizer Viewer is a Next.js application that displays summaries of Reddit posts along with outdoor/ultralight gear items mentioned in those posts. It uses SQLite for data storage and presents information in a tabular format with categorized gear badges.

## Essential Commands

```bash
# Development
npm run dev          # Start dev server with Turbopack on http://localhost:3000

# Build & Production
npm run build        # Create production build
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Architecture

### Data Flow
1. **Home page (SSR)** → Fetches from `/api/summaries` endpoint
2. **API Route** → Currently returns dummy data (TODO: connect to SQLite)
3. **SummariesTable** → Client component rendering the data with gear badges

### Key Components

- **`app/page.tsx`**: Server component fetching summaries data
- **`app/api/summaries/route.ts`**: API endpoint (needs SQLite connection)
- **`app/components/summaries-table.tsx`**: Main table component with 68 gear type categories

### Database
- SQLite database at `/data/summary.db`
- Uses `sqlite` package for async operations
- Schema includes summaries and associated gear/tools

## Important Implementation Details

### Gear Type System
The `SummariesTable` component contains a comprehensive mapping of 68 gear types, each with:
- Unique background color
- Emoji icon
- Category name

This is central to the app's functionality and should be preserved when modifying the component.

### API Response Structure
```typescript
{
  title: string
  summary: string
  tools: Array<{
    brand: string
    name: string
    type: string  // Must match one of 68 predefined categories
  }>
  url: string
}
```

### Development Notes
- Uses Next.js App Router with Server Components
- Tailwind CSS v4 with shadcn/ui components
- TypeScript with strict mode
- Path alias `@/*` configured for imports