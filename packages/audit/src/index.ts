import type { Database } from "@aac/db/client";
import { auditLogs } from "@aac/db/schema";
import { createLogger } from "@aac/logger";

const logger = createLogger("audit");

export interface AuditLogEntry {
  actorId: string | null;
  action: string;
  resource: string;
  resourceId?: string;
  orgId?: string;
  metadata?: Record<string, unknown>;
  ipAddress?: string;
  userAgent?: string;
}

export async function logAudit(db: Database, entry: AuditLogEntry) {
  try {
    await db.insert(auditLogs).values({
      actorId: entry.actorId,
      action: entry.action,
      resource: entry.resource,
      resourceId: entry.resourceId,
      orgId: entry.orgId,
      metadata: entry.metadata,
      ipAddress: entry.ipAddress,
      userAgent: entry.userAgent,
    });
    logger.debug({ action: entry.action, resource: entry.resource }, "Audit log created");
  } catch (error) {
    logger.error({ error, entry }, "Failed to create audit log");
  }
}
