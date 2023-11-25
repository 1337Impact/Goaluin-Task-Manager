"use client";

import { useState } from "react";
import { trpc } from "@/app/_trpc/client";

const TaskForm = ({ setIsOpen, onCreate }: any) => {
  const [errors, setErrors] = useState("");
  const [formData, setFormData] = useState<Task>({
    title: "",
    description: "",
    status: "pending",
  });
  const createTask = trpc.createTask.useMutation({onSettled: ()=>onCreate()});

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
    if (title.trim().length < 10 || title.trim().length > 100) {
      setErrors("Title must be between 10 and 100 characters");
      return;
    }
    if (description.trim().length > 300) {
      setErrors("Description must be less than 300 characters");
      return;
    }
    createTask.mutate(formData);
    setFormData({
      title: "",
      description: "",
      status: "pending",
    });
    setErrors("");
    setIsOpen(false);
  };

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="">
        <label className="text-gray-700">Title:</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full h-10 border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-0"
        />
      </div>
      <div className="">
        <label className="text-gray-700">Details:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border-2 border-gray-300 rounded-md h-32 p-2 focus:outline-none focus:ring-0"
        ></textarea>
      </div>
      <div className="flex flex-col">
        <label className="text-gray-700">Choose task status:</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-[150px] border-2 border-gray-300 rounded-md p-1 text-gray-400 bg-white focus:outline-none focus:ring-0"
        >
          <option value="pending">pending</option>
          <option value="in progress">in progress</option>
          <option value="completed">completed</option>
        </select>
      </div>
      <div className="text-sm text-red-400">{errors}</div>
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

export default TaskForm;