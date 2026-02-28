# AAC - B2C SaaS Boilerplate

## Project Overview

AAC is a production-ready B2C SaaS boilerplate built as a monorepo with Turborepo and pnpm. It supports multi-tenant, multi-org, role-based access with strong fullstack typing.

## Quick Start

```bash
mise setup        # Install all dependencies
mise run docker:up  # Start local PostgreSQL + Redis
mise run dev      # Start all dev servers
```

## Project Structure

```
apps/
  web/        — Next.js 15 (App Router) web application
  mobile/     — Expo mobile app
  storybook/  — Component design system
packages/
  ui/         — shadcn/ui components + Tailwind CSS v4
  db/         — Drizzle ORM schema, migrations, client
  auth/       — Clerk authentication + metadata RBAC
  api/        — tRPC routers + context
  logger/     — Pino structured logging
  audit/      — DB-backed audit logging
  i18n/       — next-intl internationalization
  rate-limit/ — Upstash Redis rate limiting
  analytics/  — PostHog analytics
  config/     — Shared TypeScript configs
```

## Key Commands

| Command | Description |
|---------|-------------|
| `mise run dev` | Start all dev servers |
| `mise run build` | Build all packages |
| `mise run test` | Run all tests |
| `mise run lint` | Lint all packages |
| `mise run typecheck` | Type-check all packages |
| `mise run db:generate` | Generate Drizzle migrations |
| `mise run db:migrate` | Run Drizzle migrations |
| `mise run db:studio` | Open Drizzle Studio |
| `mise run docker:up` | Start Docker services |
| `mise run docker:down` | Stop Docker services |
| `mise run storybook` | Start Storybook |

## Coding Conventions

- **TypeScript strict mode** everywhere
- **Biome** for linting and formatting (not ESLint/Prettier)
- **Conventional commits** (`feat:`, `fix:`, `chore:`, `docs:`)
- **Zod** for runtime validation (API inputs, env vars, forms)
- **Server components** by default; add `"use client"` only when needed
- Import from package names (`@aac/ui`, `@aac/db`) not relative paths
- Use barrel exports from package `index.ts`

## Skills

Detailed guides for working with specific parts of the codebase:

- [Auth](.claude/skills/auth.md) — Clerk setup, RBAC patterns
- [UI](.claude/skills/ui.md) — shadcn components, Storybook
- [Database](.claude/skills/db.md) — Drizzle schema, migrations
- [API](.claude/skills/api.md) — tRPC routers, endpoints
- [Testing](.claude/skills/testing.md) — Vitest, Playwright

## Architecture Decisions

1. **Metadata RBAC over Clerk Organizations** — stays in free tier, more control
2. **Turborepo over Nx** — simpler, better Vercel integration
3. **Drizzle over Prisma** — better serverless perf, SQL-like API
4. **Biome over ESLint+Prettier** — single tool, faster
5. **Pino over Winston** — fastest Node.js logger, structured JSON
