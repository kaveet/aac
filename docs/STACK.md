# Technology Stack

## Overview

Every technology in this stack was chosen to fit within free tiers for initial development while providing a clear upgrade path for growth.

---

## Framework — Next.js 15

- **Why**: App Router, React Server Components, built-in optimizations, excellent DX
- **Free tier**: Self-hosted or Vercel Hobby (1 project, 100GB bandwidth)
- **Docs**: https://nextjs.org/docs
- **Upgrade path**: Vercel Pro ($20/mo) for teams, or self-host on any Node.js platform

## Monorepo — Turborepo + pnpm

- **Why**: Simpler than Nx, better Vercel integration, minimal config, fast caching
- **Free tier**: Open source
- **Docs**: https://turbo.build/repo/docs
- **pnpm docs**: https://pnpm.io

## Auth — Clerk

- **Why**: Drop-in auth with excellent DX, hosted UI, webhooks, metadata storage
- **Free tier**: 50,000 MAU, 100 organizations
- **Docs**: https://clerk.com/docs
- **Upgrade path**: Pro plan ($25/mo) for custom domains, advanced features
- **Note**: Using metadata-based RBAC instead of Clerk's built-in org roles to stay in free tier

## Database — Drizzle ORM + Neon PostgreSQL

- **Why Drizzle**: Better serverless performance than Prisma, SQL-like API, smaller bundle, type-safe
- **Why Neon**: Serverless PostgreSQL, scales to zero, branching for dev
- **Free tier**: 0.5 GB storage, 1 project, 190 compute hours/month
- **Drizzle docs**: https://orm.drizzle.team
- **Neon docs**: https://neon.tech/docs
- **Upgrade path**: Neon Launch ($19/mo) for 10 GB, more compute

## UI — shadcn/ui + Tailwind CSS v4

- **Why**: Copy-paste components, full ownership, accessible (Radix), beautiful defaults
- **Free tier**: Open source
- **shadcn docs**: https://ui.shadcn.com
- **Tailwind docs**: https://tailwindcss.com/docs

## API — tRPC

- **Why**: End-to-end type safety, no code generation, works with React Query
- **Free tier**: Open source
- **Docs**: https://trpc.io/docs
- **Note**: Using v11 with superjson for serialization

## Mobile — Expo

- **Why**: Best React Native DX, OTA updates, EAS Build
- **Free tier**: Open source SDK, EAS Build (30 builds/month)
- **Docs**: https://docs.expo.dev
- **Upgrade path**: EAS Production ($99/mo) for priority builds

## Storybook

- **Why**: Component development in isolation, visual testing, documentation
- **Free tier**: Open source
- **Docs**: https://storybook.js.org/docs

## Testing — Vitest + Playwright

- **Why Vitest**: Fast, Vite-native, Jest-compatible API
- **Why Playwright**: Cross-browser E2E, reliable, great DX
- **Free tier**: Open source
- **Vitest docs**: https://vitest.dev
- **Playwright docs**: https://playwright.dev

## Lint/Format — Biome

- **Why**: Single tool replacing ESLint + Prettier, 10-100x faster, less config
- **Free tier**: Open source
- **Docs**: https://biomejs.dev

## Forms — React Hook Form + Zod

- **Why RHF**: Minimal re-renders, uncontrolled by default, great performance
- **Why Zod**: Runtime type validation that integrates with TypeScript
- **Free tier**: Open source
- **RHF docs**: https://react-hook-form.com
- **Zod docs**: https://zod.dev

## i18n — next-intl

- **Why**: Built for App Router, tiny bundle (2KB), type-safe messages
- **Free tier**: Open source
- **Docs**: https://next-intl-docs.vercel.app

## Logging — Pino

- **Why**: Fastest Node.js logger, structured JSON output, low overhead
- **Free tier**: Open source
- **Docs**: https://getpino.io

## Audit Log — DB-backed (Drizzle)

- **Why**: Zero vendor dependency, uses existing Neon database
- **Free tier**: Via Neon free tier (0.5 GB)
- **Upgrade path**: If volume grows, consider dedicated audit service

## Rate Limiting — Upstash Redis

- **Why**: Serverless Redis, no connection management, simple API
- **Free tier**: 10,000 commands/day, 256 MB
- **Docs**: https://upstash.com/docs/redis
- **Upgrade path**: Pay-as-you-go ($0.2 per 100K commands)

## Analytics — PostHog

- **Why**: Open source, product analytics, feature flags, session replay
- **Free tier**: 1M events/month, 5K session recordings
- **Docs**: https://posthog.com/docs
- **Upgrade path**: Pay-as-you-go after free tier

## Blog — MDX

- **Why**: Version controlled, developer-friendly, zero vendor dependency
- **Free tier**: Open source
- **Note**: Using next-mdx-remote for rendering, gray-matter for frontmatter

## CI/CD — GitHub Actions

- **Why**: Native GitHub integration, extensive marketplace
- **Free tier**: 2,000 minutes/month for public repos
- **Docs**: https://docs.github.com/actions

## Dev Tooling

### mise
- **Why**: Polyglot tool version manager, task runner
- **Docs**: https://mise.jdx.dev

### lefthook
- **Why**: Fast git hooks, YAML config, no shell scripts
- **Docs**: https://github.com/evilmartians/lefthook

### Docker
- **Why**: Local development parity (PostgreSQL, Redis)
- **Docs**: https://docs.docker.com

---

## Free Tier Summary

| Service | Free Tier Limit | When to Upgrade |
|---------|----------------|-----------------|
| Clerk | 50K MAU, 100 orgs | >50K users |
| Neon | 0.5 GB, 190 compute hrs | >0.5 GB data |
| Upstash | 10K commands/day | >10K daily commands |
| PostHog | 1M events/month | >1M monthly events |
| Vercel | 1 project, 100GB BW | Team deployment |
| GitHub Actions | 2,000 min/month | >2K CI minutes |
| Expo EAS | 30 builds/month | >30 monthly builds |
