import { RiDeleteBin6Line } from "react-icons/ri";
import { trpc } from "../_trpc/client";
import { useState } from "react";

export default ({ task, refresh }: { task: Task; refresh: any }) => {
  const [status, setStatus] = useState<string>(task.status);
  const useDelete = trpc.deleteTask.useMutation({onSettled: ()=>refresh()});
  const deleteTask = () => {
    useDelete.mutateAsync(task.id as string);
    refresh();
  };

  const useUpdateStatus = trpc.updateTaskStatus.useMutation({onSettled: ()=>refresh()});
  const handleChange = (event: any) => {
    const newStatus = event.target.value;
    setStatus(newStatus);
    useUpdateStatus.mutateAsync({ id: task.id!, status: newStatus });
  };

  return (
    <div className="relative bg-red-200 flex flex-col justify-between gap-2 border-2 border-gray-500 rounded-md p-3 min-h-[140px]">
      <h1 className="text-gray-700 text-xl font-semibold pr-4">{task.title}</h1>
      <p className="relative text-sm text-gray-500 pr-4">{task.description}</p>
      <div className="w-full">
        <select
          name="status"
          value={status}
          onChange={handleChange}
          className="float-right w-[125px] border-2 border-gray-500 rounded-md p-1 px-2 text-gray-500 bg-red-200 cursor-pointer focus:outline-none focus:ring-0"
        >
          <option value="pending">pending</option>
          <option value="in progress">in progress</option>
          <option value="completed">completed</option>
        </select>
      </div>
      <button className="absolute top-3 right-3" onClick={() => deleteTask()}>
        <RiDeleteBin6Line
          className="text-red-500 hover:text-red-600"
          size="20px"
        />
      </button>
    </div>
  );
};
