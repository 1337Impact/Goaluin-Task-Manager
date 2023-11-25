"use client";
import { signIn, useSession } from "next-auth/react";

export default function LoginButton () {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return <p>Signed in</p>;
  }

  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/tasks" })}
      className="border-2 rounded-2xl border-theme-red px-5 py-1 font-semibold text-theme-red hover:bg-theme-red hover:text-white"
    >
      Login
    </button>
  );
};

export const SingInWithGoogle = () => {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/tasks" })}
      className="border-2 border-red-400 rounded-3xl p-3 px-5 text-red-400 font-bold cursor-pointer hover:text-slate-100 hover:bg-red-400 lg:text-xl"
    >
      Sing In with Google
    </button>
  );
};
