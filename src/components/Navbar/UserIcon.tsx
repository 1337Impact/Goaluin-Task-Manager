"use client";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { RiCloseCircleFill, RiLogoutBoxLine } from "react-icons/ri";

export default ({ img }: { img: string }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    return (
        <div className="flex flex-col items-center cursor-pointer">
            <img src={img} alt="profile" className="h-[40px] w-[40px] rounded-full" onClick={open}/>
            <div className={`${!isOpen && "hidden"} absolute w-[110px] top-[70px] right-4 border-2 shadow-lg border-slate-700 rounded-lg px-3 py-1 bg-slate-100 text-red-500 z-10`}>
                <div className="absolute text-slate-500 top-1 right-1 hover:text-black" onClick={close}>
                    <RiCloseCircleFill size="24px" />
                </div>
                <br className="break-2"/>
                <div className="mt-2 pt-1 border-t-[1px] border-slate-700 hover:text-black flex items-center justify-center gap-2">
                    <RiLogoutBoxLine />
                    <p className="text-md font-mediu" onClick={() => signOut({redirect: true, callbackUrl: "/"})}>Logout</p>
                </div>
            </div>
        </div>
    );
};