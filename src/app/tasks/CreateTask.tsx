"use client";

import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

export default () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="absolute top-0 left-0">
      <button className="absolute right-4 bottom-10">
        <IoMdAddCircle className="text-theme-red" size="60px" />
      </button>
      <div className="aboslute top-0 left-6 w-[300px] h-[400px] bg-red-300"></div>
    </div>
  );
};
