# API Skill — tRPC

## Overview

The API layer uses tRPC v11 with superjson for serialization. Routers are in `packages/api/src/routers/`.

## Adding a New Router

1. Create `packages/api/src/routers/<name>.ts`:

```typescript
import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "../trpc";

export const myRouter = router({
  list: protectedProcedure.query(async ({ ctx }) => {
    // ctx.db, ctx.userId available
    return [];
  }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // Create resource
    }),
});
```

2. Add to `packages/api/src/root.ts`:

```typescript
import { myRouter } from "./routers/my";

export const appRouter = router({
  // ...existing routers
  my: myRouter,
});
```

## Procedure Types

- `publicProcedure` — No auth required
- `protectedProcedure` — Requires authenticated user (`ctx.userId` guaranteed)

## Client Usage

```typescript
// Client component
"use client";
import { trpc } from "@/lib/trpc/client";

const { data } = trpc.user.me.useQuery();
const mutation = trpc.org.create.useMutation();

// Server component
import { createServerCaller } from "@/lib/trpc/server";

const caller = await createServerCaller();
const user = await caller.user.me();
```

## Context

Every procedure receives `ctx` with:
- `db` — Drizzle database instance
- `userId` — Clerk user ID (null for public procedures)
- `headers` — Request headers
