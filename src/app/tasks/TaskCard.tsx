import { RiDeleteBin6Line } from "react-icons/ri";
import { trpc } from "../_trpc/client";
export default ({ task, refresh }: { task: Task, refresh: any }) => {

  const useDelete = trpc.deleteTask.useMutation();
  const deleteTask = () => {
    useDelete.mutateAsync(task.id as string);
    refresh();
  };
  return (
    <div className="relative flex flex-col justify-between  border-2 border-red-300 rounded-md p-3 min-h-[140px]">
      <h1 className="text-gray-700 text-xl font-semibold">{task.title}</h1>
      <p className="text-sm text-gray-500">{task.description}</p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-500">{task.status}</p>
        <div className="flex gap-3">
          {task.status == "todo" && <button className="border-2 rounded-md border-red-300 px-3 py-[1px] font-semibold text-red-300 hover:bg-red-300 hover:text-white">
            Start
          </button>}
          {task.status != "done" && <button className="border-2 rounded-md border-green-600 px-3 py-[1px] font-semibold text-green-600 hover:bg-green-600 hover:text-white">
            Done
          </button>}
        </div>
      </div>
      <button className="absolute top-3 right-3" onClick={() => deleteTask()}>
        <RiDeleteBin6Line className="text-red-300 hover:text-red-500" size="20px" />
      </button>
    </div>
  );
};
