"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello , {status === "authenticated" && session?.user?.email}</h1>
      <Image
        src={session?.user?.image || ""}
        alt={session?.user?.name || ""}
        width={200}
        height={200}
      />
      <button onClick={() => signOut()}>
        logOut
      </button>
    </main>
  );
}
