"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

const disableNavbar = ["auth", "admin"];

const Navbar = () => {
  const { data } = useSession();
  const path = usePathname();
  return (
    <>
      {!disableNavbar.includes(path.split("/")[1]) && (
        <div className="fixed flex items-center justify-between px-10 py-2 bg-slate-500 w-full">
          <h1 className="text-white font-bold">Shopping-Car</h1>
          <button
            className="bg-slate-700 text-white px-4 py-2 rounded-md"
            onClick={() => {
              data ? signOut() : signIn();
            }}
          >
            {data ? "Sign Out" : "Sign In"}
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
