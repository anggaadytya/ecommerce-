"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MENU_SIDEBAR } from "@/common/constant/menu";
import { FiArrowLeftCircle } from "react-icons/fi";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const path = usePathname();
  return (
    <div className="bg-slate-500 w-[300px] h-[100vh] flex flex-col justify-between">
      <div>
        <h1 className="text-center py-4 text-white">Admin Panel</h1>
        <div className="flex flex-col gap-4">
          {MENU_SIDEBAR.map((menu, index) => (
            <Link
              key={index}
              href={menu.link}
              className={`${
                path === menu.link ? "bg-neutral-600 text-white" : ""
              }text-white rounded-md mx-4 p-2 hover:bg-neutral-600 transition-all`}
            >
              <div className="flex gap-2 items-center transition-all duration-300 ease-in-out">
                <div
                  className={`${
                    path === menu.link ? "-rotate-12" : ""
                  } text-white`}
                >
                  {menu.icon}
                </div>
                <h2 className="text-white">{menu.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col py-4">
        <button
          className="flex items-center gap-2 text-white mx-4 p-2 rounded-md hover:bg-neutral-600 transition-all"
          onClick={() => signOut()}
        >
          <FiArrowLeftCircle />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
