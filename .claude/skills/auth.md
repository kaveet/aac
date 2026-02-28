# Auth Skill — Clerk + Metadata RBAC

## Overview

Authentication uses Clerk with metadata-based RBAC. User roles are stored in Clerk's `publicMetadata.orgs` array.

## Package: `@aac/auth`

### Imports

```typescript
// Client components
import { ClerkProvider, SignedIn, SignedOut, UserButton, useAuth } from "@aac/auth/client";

// Server components/actions
import { auth, currentUser } from "@aac/auth/server";

// RBAC utilities
import { hasRole, requireRole, getUserOrgs, addUserToOrg, removeUserFromOrg } from "@aac/auth";
import type { Role, OrgMembership } from "@aac/auth";
```

### Role Hierarchy

- `owner` (level 3) — Full access, can manage all members
- `admin` (level 2) — Can manage members, modify org settings
- `member` (level 1) — Basic access

### Adding a New Role

1. Add to `ROLES` array in `packages/auth/src/rbac.ts`
2. Add to `orgRoleEnum` in `packages/db/src/schema/organizations.ts`
3. Generate migration: `mise run db:generate`
4. Update role hierarchy in `hasRole()`

### Protecting Routes

Routes are protected via Clerk middleware in `apps/web/middleware.ts`. Add patterns to `isProtectedRoute` matcher.

### Webhook Sync

User creation/updates are synced to the DB via the Clerk webhook at `/api/webhooks/clerk`. Configure the webhook URL in Clerk Dashboard.

## Environment Variables

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` — Clerk publishable key
- `CLERK_SECRET_KEY` — Clerk secret key
- `CLERK_WEBHOOK_SECRET` — Webhook signing secret
