import { type TRPCContext, appRouter } from "@aac/api";
import { auth } from "@aac/auth/server";
import { createDb } from "@aac/db/client";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const createContext = async (opts: { req: Request }): Promise<TRPCContext> => {
  const { userId } = await auth();
  const db = createDb(process.env.DATABASE_URL!);

  return {
    db,
    userId,
    headers: opts.req.headers,
  };
};

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => createContext({ req }),
  });

export { handler as GET, handler as POST };
