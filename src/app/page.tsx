"use client";
import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession();
  console.log("data ", session, "status ", status);
  return (
    <main className="w-full h-[80vh] m-auto flex flex-col items-center justify-center gap-4">
      <h1 className="text-5xl text-gray-900 font-bold text-center lg:text-6xl">Manage Your Tasks Like A Pro</h1>
      <p className="w-[70%] max-w-2xl text-center text-xl text-gray-600 font-medium xl:text-2xl">GoaluinTM is a simple task management app, buit using the latest technologies</p>
      <button className="border-2 border-red-400 rounded-3xl p-3 px-5 text-red-400 font-bold cursor-pointer hover:text-slate-100 hover:border-slate-100 hover:bg-red-400 lg:text-xl">Sing In with Google</button>
    </main>
  )
}
