"use client";
import { signIn, useSession } from "next-auth/react";

export default () => {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    console.log(session);
    return (<p>Signed in</p>);
  }

  return (
      <button onClick={() => signIn("google", { callbackUrl: "/tasks" })} className="border-2 rounded-md border-theme-red px-5 py-[2px] font-semibold text-theme-red hover:bg-theme-red hover:text-transparent">
        Login
      </button>
  );
};
