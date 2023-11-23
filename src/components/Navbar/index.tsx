"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import LoginButton from "../LoginButton";
import Link from "next/link";

export default () => {
    const { data: session, status } = useSession();
    console.log(session?.user);
    return (
        <nav className="h-[70px]  w-full flex items-center justify-between px-4">
            <Link href="/">
                <h1 className="text-2xl font-kranky">GoaluinTM</h1>
            </Link>
            {
                status === "authenticated" ? (
                    <div className="flex items-center" onClick={()=>signOut()}>
                        <img src={session.user?.image as string} alt="profile" className="h-[40px] w-[40px] rounded-full" />
                    </div>
                ) :
                (<LoginButton />)
            }
        </nav>
    );
}