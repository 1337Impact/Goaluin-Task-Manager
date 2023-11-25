"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { RiCloseCircleFill, RiLogoutBoxLine } from "react-icons/ri";

export default ({ img }: { img: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (
    <div className="relative flex flex-col items-center cursor-pointer">
      <img
        src={img}
        alt="profile"
        className="h-[40px] w-[40px] rounded-full"
        onClick={open}
      />
      <div
        className={`${
          !isOpen && "hidden"
        } absolute h-[100px] w-[110px] top-[60px] right-0 border-2 shadow-lg border-slate-700 rounded-lg px-3 py-1 bg-slate-100 text-red-500 z-10`}
      >
        <RiCloseCircleFill
          className="absolute text-slate-500 top-2 right-1 hover:text-black"
          size="24px"
          onClick={close}
        />
        <div className="mt-[28px]">
          <Link href="/tasks">
            <p className="text-md text-gray-700 font-medium text-center hover:text-gray-900">
              tasks
            </p>
          </Link>
          <div className=" pt-1 border-t-[1px] border-slate-700 hover:text-black flex items-center justify-center gap-2">
            <RiLogoutBoxLine />
            <p
              className="text-md font-medium"
              onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
            >
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
