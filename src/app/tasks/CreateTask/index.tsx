"use client";
import { IoMdCloseCircle } from "react-icons/io";

import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import TaskForm from "./TaskForm";

const CreateTask = ({ onCreate }: { onCreate: () => any }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="">
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="fixed right-4 bottom-10 text-red-400 hover:text-red-500 md:static md:float-right md:mt-10 md:mr-4"
      >
        <IoMdAddCircle className="" size="60px" />
      </button>
      <div
        className={`${
          !isOpen && "hidden"
        } fixed top-0 left-0 w-[100%] h-[100%] backdrop-blur-md`}
      >
        <div className="absolute top-[calc(50%-230px)] left-[calc(50%-170px)] w-[340px] pt-10 p-3 border-2 rounded-xl shadow-lg bg-red-50 flex justify-center items-center md:w-[500px] md:left-[calc(50%-250px)] md:p-5 md:pt-10">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-slate-500 cursor-pointer"
          >
            <IoMdCloseCircle size="30px" />
          </div>
          <TaskForm setIsOpen={setIsOpen} onCreate={onCreate} />
        </div>
      </div>
    </div>
  );
};

export default CreateTask;