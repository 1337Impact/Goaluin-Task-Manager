"use client";

import { trpc } from "@/app/_trpc/client";
import CreateTask from "./CreateTask";
import TaskCard from "./TaskCard";
import { useEffect, useState } from "react";

export default () => {
  const getTasks = trpc.getTasks.useQuery();
  const [refetch, setRefetch] = useState<boolean>(false);
  const tootleRefetch = () => setRefetch((prev) => !prev);

  useEffect(() => {
    getTasks.refetch();
  }, [refetch]);

  return (
    <main className="relative">
      <section
        id="tasks"
        className="mt-10 px-4"
      >
        <h1 className="text-gray-700 text-xl font-semibold">Pending Tasks:</h1>
        <div className="mt-2 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {getTasks.data?.map((item) => {
            if (item.status === "pending") {
              return (
                <TaskCard
                  task={item as Task}
                  refresh={tootleRefetch}
                  key={item.id}
                />
              );
            }
          })}
        </div>
      </section>
      <section
        id="tasks"
        className="mt-10 px-4"
      >
        <h1 className="text-gray-700 text-xl font-semibold">In Progress:</h1>
        <div className="mt-2 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {getTasks.data?.map((item) => {
            if (item.status === "in progress") {
              return (
                <TaskCard
                  task={item as Task}
                  refresh={tootleRefetch}
                  key={item.id}
                />
              );
            }
          })}
        </div>
      </section>
      <section
        id="tasks"
        className="mt-10 px-4"
      >
        <h1 className="text-gray-700 text-xl font-semibold">Completed:</h1>
        <div className="mt-2 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {getTasks.data?.map((item) => {
            if (item.status === "completed") {
              return (
                <TaskCard
                  task={item as Task}
                  refresh={tootleRefetch}
                  key={item.id}
                />
              );
            }
          })}
        </div>
      </section>
      <CreateTask onCreate={tootleRefetch} />
    </main>
  );
};
