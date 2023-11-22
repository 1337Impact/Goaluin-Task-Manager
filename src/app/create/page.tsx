export default () => {
  return (
    <div className="h-screen w-full px-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-kranky text-center">Create a new task</h1>
      <form className="w-full">
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="border-2 border-theme-red rounded-md px-3 py-[2px] focus:outline-none focus:ring-2 focus:ring-theme-red"
          />
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className="border-2 border-theme-red rounded-md px-3 py-[2px] focus:outline-none focus:ring-2 focus:ring-theme-red"
          />
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            className="border-2 border-theme-red rounded-md px-3 py-[2px] focus:outline-none focus:ring-2 focus:ring-theme-red"
          >
            <option value="todo">To Do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div className="flex justify-end mt-3">
          <button className="border-2 rounded-md border-theme-red px-5 py-[2px] font-semibold text-theme-red hover:bg-theme-red hover:text-transparent">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};
