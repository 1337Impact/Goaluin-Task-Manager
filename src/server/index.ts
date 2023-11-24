import { publicProcedure, router } from "./trpc";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import z from "zod";
import { db } from "@/lib/db";

const appRouter = router({
  getHello: publicProcedure.query(async () => {
    const session = await getServerSession(authOptions);
    return { data: `Hello, ${session?.user?.name}!` };
  }),

  getTasks: publicProcedure.query(async () => {
    const session = await getServerSession(authOptions);
    const tasks = await db.task.findMany({
      where: {
        user: {
          name: session?.user?.name as string,
        }
      },
    });
    return tasks;
  }),

  createTask: publicProcedure.input(z.object({ title: z.string().min(10), description: z.string(), status: z.string() })).mutation(async (opts) => {
    const { input } = opts;
    const session = await getServerSession(authOptions);
    console.log("trpc server => ", input);
    try{
      let user = await db.user.findFirst({
        where: {
          name: session?.user?.name as string,
        }
      });
      if (!user){
        user = await db.user.create({
          data: {
            name: session?.user?.name as string,
          }
        });
      }
      const newTask = await db.task.create({
        data: {
          ...input,
          user: {
            connect: {
              id: user.id,
            }
          },
        },
      });
      return newTask;
    }
    catch(e){
      console.log("error => ", e);
    }
    return null;
  }),
});

export type AppRouter = typeof appRouter;
export { appRouter };
