# Database Skill — Drizzle ORM + Neon PostgreSQL

## Overview

Database uses Drizzle ORM with Neon serverless PostgreSQL. Schema is in `packages/db/src/schema/`.

## Adding a New Table

1. Create `packages/db/src/schema/<table>.ts`:

```typescript
import { pgTable, varchar, timestamp, uuid } from "drizzle-orm/pg-core";

export const myTable = pgTable("my_table", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type MyTable = typeof myTable.$inferSelect;
export type NewMyTable = typeof myTable.$inferInsert;
```

2. Export from `packages/db/src/schema/index.ts`
3. Generate migration: `mise run db:generate`
4. Apply migration: `mise run db:migrate`

## Key Commands

- `mise run db:generate` — Generate SQL migration from schema changes
- `mise run db:migrate` — Apply migrations
- `mise run db:push` — Push schema directly (dev only)
- `mise run db:studio` — Open Drizzle Studio GUI

## Querying

```typescript
import { createDb } from "@aac/db/client";
import { users } from "@aac/db/schema";
import { eq } from "drizzle-orm";

const db = createDb(process.env.DATABASE_URL!);

// Select
const user = await db.query.users.findFirst({
  where: eq(users.id, "user_123"),
});

// Insert
await db.insert(users).values({ id: "user_123", email: "test@example.com" });

// Update
await db.update(users).set({ firstName: "Jane" }).where(eq(users.id, "user_123"));
```

## Local Development

Use Docker: `mise run docker:up` starts PostgreSQL locally.
Connection string: `postgresql://aac:aac_dev_password@localhost:5432/aac`
