# Testing Skill — Vitest + Playwright

## Overview

Unit/integration tests use Vitest. E2E tests use Playwright.

## Running Tests

```bash
mise run test          # Run all tests
pnpm --filter web test # Run tests for a specific package
```

## Writing Unit Tests (Vitest)

Create `*.test.ts` files next to source files or in `__tests__/` directories:

```typescript
import { describe, it, expect } from "vitest";

describe("myFunction", () => {
  it("should return expected value", () => {
    expect(myFunction("input")).toBe("output");
  });
});
```

## Writing E2E Tests (Playwright)

Create tests in `apps/web/e2e/`:

```typescript
import { test, expect } from "@playwright/test";

test("home page loads", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "AAC" })).toBeVisible();
});
```

## Testing Patterns

- **API routes**: Use tRPC caller factory for testing routers directly
- **Components**: Use Vitest + React Testing Library
- **Database**: Use a test database with migrations
- **Auth**: Mock Clerk in tests using `@clerk/testing`

## Configuration

Vitest config should be added per-package as needed. Playwright config
goes in `apps/web/playwright.config.ts`.
