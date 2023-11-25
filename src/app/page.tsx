import { SingInWithGoogle } from "@/components/LoginButton";

export default function Home() {
  return (
    <main className="w-full h-[80vh] m-auto flex flex-col items-center justify-center gap-5">
      <h1 className="text-5xl text-gray-900 font-bold text-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text lg:text-6xl">
        Manage Your Tasks Like A Pro
      </h1>
      <p className="w-[70%] max-w-2xl text-center text-xl text-gray-600 font-medium xl:text-2xl">
        GoaluinTM is a simple task management app, buit using the latest
        technologies
      </p>
      <SingInWithGoogle />
    </main>
  );
}
