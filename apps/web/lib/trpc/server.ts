import { type TRPCContext, appRouter, createCallerFactory } from "@aac/api";
import { auth } from "@aac/auth/server";
import { createDb } from "@aac/db/client";
import { headers } from "next/headers";

const createCaller = createCallerFactory(appRouter);

export async function createServerCaller() {
  const { userId } = await auth();
  const db = createDb(process.env.DATABASE_URL!);
  const hdrs = await headers();

  const ctx: TRPCContext = {
    db,
    userId,
    headers: hdrs,
  };

  return createCaller(ctx);
}
