"use client";

import {trpc} from "@/app/_trpc/client";
import CreateTask from "./CreateTask";
import TaskCard from "./TaskCard";
import { get } from "http";

export default () => {
  const  getTasks = trpc.getTasks.useQuery();
  const { data } = getTasks;

  const useDelete = trpc.deleteTask.useMutation();
  const deleteTask = (taskId : string) => {
    useDelete.mutateAsync(taskId);
    getTasks.refetch();
  };

  const refreshTasks = () => getTasks.refetch();

  return (
    <main className="relative">
      <section id="tasks" className="mt-10 px-4 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {data?.map((item) => (
          <TaskCard task={item as Task} refresh={refreshTasks} key={item.id} />
        ))}
      </section>
      <CreateTask onCreate={refreshTasks} />
    </main>
  );
};
