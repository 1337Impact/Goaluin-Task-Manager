import { publicProcedure, router } from "./trpc";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import z from "zod";
import { db } from "@/lib/db";
import { title } from "process";

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
          id: session?.user?.id,
        },
      },
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return tasks;
  }),

  createTask: publicProcedure
    .input(
      z.object({
        title: z.string().min(10).max(100),
        description: z.string().max(300),
        status: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;
      const session = await getServerSession(authOptions);
      try {
        const newTask = await db.task.create({
          data: {
            ...input,
            user: {
              connect: {
                id: session?.user?.id,
              },
            },
          },
          select: {
            id: true,
            title: true,
            description: true,
            status: true,
          },
        });
        return newTask;
      } catch (e) {
        console.log("error => ", e);
      }
      return null;
    }),

  deleteTask: publicProcedure.input(z.string()).mutation(async (opts) => {
    const { input } = opts;
    const session = await getServerSession(authOptions);
    try {
      const deletedTask = await db.task.delete({
        where: {
          id: input,
          userId: session?.user?.id,
        },
        select: {
          id: true,
          title: true,
          description: true,
          status: true,
        },
      });
      return deletedTask;
    } catch (e) {
      console.log("error => ", e);
    }
    return null;
  }),

  updateTaskStatus: publicProcedure
    .input(z.object({ id: z.string(), status: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      const session = await getServerSession(authOptions);
      try {
        const updatedTask = await db.task.update({
          where: {
            id: input.id,
            userId: session?.user?.id,
          },
          data: {
            status: input.status,
          },
          select: {
            id: true,
            title: true,
            description: true,
            status: true,
          },
        });
        return updatedTask;
      } catch (e) {
        console.log("error => ", e);
      }
      return null;
    }),
});

export type AppRouter = typeof appRouter;
export { appRouter };
