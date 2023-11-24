"use client";

import { useState } from "react";
import trpc from "@/lib/trpc";

export default () => {
  const [errors, setErrors] = useState("");
  const [formData, setFormData] = useState<Task>({
    title: "",
    description: "",
    status: "todo",
  });

  const handleChange = (
    e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
    ) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { title, description } = formData;
      console.log(title, description);
      if (!title.trim().length || !description.trim().length) {
        setErrors("Title and description are required");
        return;
      }
      console.log(formData);
      trpc.createTask.mutate(formData);
      setFormData({
        title: "",
        description: "",
        status: "todo",
      });
      setErrors("");
    };
    
  return (
    <form className="mt-4 mx-3 flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="">
        <label>Title:</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full h-10 border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-0"
        />
      </div>
      <div className="">
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border-2 border-gray-300 rounded-md h-32 p-2 focus:outline-none focus:ring-0"
        ></textarea>
      </div>
      <div className="flex flex-col">
        <label>Choose task status:</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-[150px] border-2 border-gray-300 rounded-md p-1 text-gray-400 bg-white focus:outline-none focus:ring-0"
        >
          <option value="todo">todo</option>
          <option value="in progress">in progress</option>
          <option value="done">done</option>
        </select>
      </div>
      <div className="text-red-400">{errors}</div>
      <div className="flex justify-end">
        <button
          className="right-2 w-[100px] h-10 rounded-md bg-red-400 text-white hover:bg-red-500"
          type="submit"
        >
          Create
        </button>
      </div>
    </form>
  );
};
