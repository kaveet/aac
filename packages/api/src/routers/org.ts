import { orgMembers, organizations } from "@aac/db/schema";
import { TRPCError } from "@trpc/server";
import { and, eq } from "drizzle-orm";
import { z } from "zod";
import { protectedProcedure, router } from "../trpc";

export const orgRouter = router({
  list: protectedProcedure.query(async ({ ctx }) => {
    const memberships = await ctx.db.query.orgMembers.findMany({
      where: eq(orgMembers.userId, ctx.userId),
    });
    if (memberships.length === 0) return [];

    const orgIds = memberships.map((m) => m.orgId);
    const orgs = await ctx.db.query.organizations.findMany({
      where: (orgs, { inArray }) => inArray(orgs.id, orgIds),
    });

    return orgs.map((org) => ({
      ...org,
      role: memberships.find((m) => m.orgId === org.id)?.role ?? "member",
    }));
  }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1).max(256),
        slug: z
          .string()
          .min(1)
          .max(256)
          .regex(/^[a-z0-9-]+$/),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const [org] = await ctx.db
        .insert(organizations)
        .values({
          name: input.name,
          slug: input.slug,
        })
        .returning();

      await ctx.db.insert(orgMembers).values({
        orgId: org.id,
        userId: ctx.userId,
        role: "owner",
      });

      return org;
    }),

  getMembers: protectedProcedure
    .input(z.object({ orgId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const membership = await ctx.db.query.orgMembers.findFirst({
        where: and(eq(orgMembers.orgId, input.orgId), eq(orgMembers.userId, ctx.userId)),
      });

      if (!membership) {
        throw new TRPCError({ code: "FORBIDDEN", message: "Not a member of this organization" });
      }

      return ctx.db.query.orgMembers.findMany({
        where: eq(orgMembers.orgId, input.orgId),
      });
    }),
});
