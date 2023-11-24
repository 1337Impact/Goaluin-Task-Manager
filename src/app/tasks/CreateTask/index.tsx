"use client";
import { IoMdCloseCircle } from "react-icons/io";

import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import TaskForm from "./TaskForm";

export default () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="top-0 left-0">
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="fixed right-4 bottom-10 text-red-400 hover:text-red-500"
      >
        <IoMdAddCircle className="" size="60px" />
      </button>
      <div
        className={`${
          !isOpen && "hidden"
        } fixed top-0 left-0 w-[100%] h-[100%] backdrop-blur-md`}
      >
        <div className="absolute top-[calc(50%-230px)] left-[calc(50%-170px)] w-[340px] h-[400px] border-2 rounded-lg shadow-lg bg-slate-50 flex justify-center items-center">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-slate-500 cursor-pointer"
          >
            <IoMdCloseCircle size="30px" />
          </div>
          <TaskForm />
        </div>
      </div>
    </div>
  );
};
