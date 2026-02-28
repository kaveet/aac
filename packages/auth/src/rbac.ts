import { auth, clerkClient } from "@clerk/nextjs/server";

export const ROLES = ["owner", "admin", "member"] as const;
export type Role = (typeof ROLES)[number];

export interface OrgMembership {
  orgId: string;
  role: Role;
}

export interface UserPublicMetadata {
  orgs?: OrgMembership[];
}

export function getUserOrgs(metadata: UserPublicMetadata): OrgMembership[] {
  return metadata.orgs ?? [];
}

export function getUserRole(metadata: UserPublicMetadata, orgId: string): Role | null {
  const membership = getUserOrgs(metadata).find((org) => org.orgId === orgId);
  return membership?.role ?? null;
}

export function hasRole(metadata: UserPublicMetadata, orgId: string, role: Role): boolean {
  const userRole = getUserRole(metadata, orgId);
  if (!userRole) return false;

  const roleHierarchy: Record<Role, number> = {
    owner: 3,
    admin: 2,
    member: 1,
  };

  return roleHierarchy[userRole] >= roleHierarchy[role];
}

export async function requireRole(orgId: string, requiredRole: Role): Promise<void> {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized: not signed in");
  }

  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const metadata = user.publicMetadata as UserPublicMetadata;

  if (!hasRole(metadata, orgId, requiredRole)) {
    throw new Error(`Unauthorized: requires ${requiredRole} role or higher`);
  }
}

export async function addUserToOrg(userId: string, orgId: string, role: Role): Promise<void> {
  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const metadata = user.publicMetadata as UserPublicMetadata;
  const orgs = getUserOrgs(metadata).filter((org) => org.orgId !== orgId);
  orgs.push({ orgId, role });

  await client.users.updateUserMetadata(userId, {
    publicMetadata: { orgs },
  });
}

export async function removeUserFromOrg(userId: string, orgId: string): Promise<void> {
  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const metadata = user.publicMetadata as UserPublicMetadata;
  const orgs = getUserOrgs(metadata).filter((org) => org.orgId !== orgId);

  await client.users.updateUserMetadata(userId, {
    publicMetadata: { orgs },
  });
}
