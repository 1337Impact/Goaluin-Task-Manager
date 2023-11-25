import LoginButton from "../LoginButton";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Link from "next/link";
import UserIcon from "./UserIcon";

export default async function Navbar () {
    const session = await getServerSession(authOptions);
    return (
        <nav className="h-[70px] mx-auto w-full flex items-center justify-between px-4">
            <Link href="/">
                <h1 className="text-2xl font-kranky cursor-pointer hover:text-gray-700">GoaluinTM</h1>
            </Link>
            {
                session ? (
                    <UserIcon img={session.user?.image || ""} />
                ) :
                (<LoginButton />)
            }
        </nav>
    );
}