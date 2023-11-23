import { RiDeleteBin6Line } from "react-icons/ri";
export default ({ task }: { task: Task }) => {
  return (
    <div className="relative border-2 border-red-300 rounded-md p-3">
      <h1 className="text-gray-700 text-xl font-semibold">{task.title}</h1>
      <p className="text-sm text-gray-500">{task.description}</p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-500">{task.status}</p>
        <div className="flex gap-3">
          <button className="border-2 rounded-md border-red-300 px-3 py-[1px] font-semibold text-red-300 hover:bg-red-300 hover:text-transparent">
            Start
          </button>
          <button className="border-2 rounded-md border-green-600 px-3 py-[1px] font-semibold text-green-600 hover:bg-green-600 hover:text-transparent">
            Done
          </button>
        </div>
      </div>
      <button className="absolute top-3 right-3">
        <RiDeleteBin6Line className="text-red-300" size="20px" />
      </button>
    </div>
  );
};
