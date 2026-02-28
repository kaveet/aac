import { router } from "./trpc";
import { orgRouter } from "./routers/org";
import { userRouter } from "./routers/user";

export const appRouter = router({
  user: userRouter,
  org: orgRouter,
});

export type AppRouter = typeof appRouter;
