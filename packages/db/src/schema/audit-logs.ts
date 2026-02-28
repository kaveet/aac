import { jsonb, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { users } from "./users";

export const auditLogs = pgTable("audit_logs", {
  id: uuid("id").defaultRandom().primaryKey(),
  actorId: varchar("actor_id", { length: 256 }).references(() => users.id, {
    onDelete: "set null",
  }),
  action: varchar("action", { length: 256 }).notNull(),
  resource: varchar("resource", { length: 256 }).notNull(),
  resourceId: varchar("resource_id", { length: 256 }),
  orgId: uuid("org_id"),
  metadata: jsonb("metadata").$type<Record<string, unknown>>(),
  ipAddress: varchar("ip_address", { length: 45 }),
  userAgent: text("user_agent"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type AuditLog = typeof auditLogs.$inferSelect;
export type NewAuditLog = typeof auditLogs.$inferInsert;
