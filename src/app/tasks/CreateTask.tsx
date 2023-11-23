"use client";
import { IoMdCloseCircle } from "react-icons/io";

import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

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
        className={`${!isOpen && "hidden"
          } fixed top-0 left-0 w-[100%] h-[100%] backdrop-blur-md`}
      >
        <div className="absolute top-[calc(50%-230px)] left-[calc(50%-170px)] w-[340px] h-[400px] border-2 rounded-lg shadow-lg bg-slate-50 flex justify-center items-center">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-slate-500 cursor-pointer"
          >
            <IoMdCloseCircle size="30px" />
          </div>
          <form className="mt-4 mx-3 flex flex-col gap-4">
            <div className="">
              <label>Title:</label>
              <input className="w-full h-10 border-2 border-red-300 rounded-lg p-2 focus:outline-none focus:ring-0" />
            </div>
            <div className="">
              <label>Description:</label>
              <textarea className="w-full border-2 border-red-300 rounded-md h-32 p-2 focus:outline-none focus:ring-0"></textarea>
            </div>
            <div className="flex flex-col">
              <label >Choose task status:</label>
              <select name="status" className="w-[150px] border-2 border-red-300 rounded-md p-1 text-red-400 bg-white focus:outline-none focus:ring-0">
                <option value="pending">pending</option>
                <option value="in progress">in progress</option>
                <option value="done">done</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button className="right-2 w-[100px] h-10 rounded-md bg-red-400 text-white hover:bg-red-500" type="submit">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
