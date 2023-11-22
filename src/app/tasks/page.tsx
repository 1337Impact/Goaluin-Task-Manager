import CreateTask from "./CreateTask";
import TaskCard from "./TaskCard";

const data: Task[] = [
  {
    id: 1,
    title: "do homework",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel semper arcu. Nulla facilisi.",
    status: "pending",
  },
  {
    id: 1,
    title: "check email",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel semper arcu. Nulla facilisi.",
    status: "in progress",
  },
  {
    id: 1,
    title: "send kids to school",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel semper arcu. Nulla facilisi.",
    status: "done",
  },
];

export default () => {
  return (
    <main className="relative">
      <section id="tasks" className="mt-10 px-4 grid grid-cols-1 gap-3">
        {data.map((item) => (
          <TaskCard task={item} key={item.id} />
        ))}
      </section>
      <CreateTask />
    </main>
  );
};
