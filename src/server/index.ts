import { publicProcedure, router } from './trpc';
 
const appRouter = router({
  getHello: publicProcedure.query(async () => {
    return 'Hello, world!';
  }),
});
 
export type AppRouter = typeof appRouter;
export { appRouter };