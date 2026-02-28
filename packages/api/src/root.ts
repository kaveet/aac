import { orgRouter } from "./routers/org";
import { userRouter } from "./routers/user";
import { router } from "./trpc";

export const appRouter = router({
  user: userRouter,
  org: orgRouter,
});

export type AppRouter = typeof appRouter;
