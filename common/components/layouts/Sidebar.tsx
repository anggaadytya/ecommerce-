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
    <aside className="w-[300px] h-[100vh] flex flex-col justify-between">
      <div>
        <h1 className="text-center py-4">Admin Panel</h1>
        <hr />
        <div className="flex flex-col">
          <h2 className="text-sm pt-2 px-3 text-neutral-400">Menu</h2>
          {MENU_SIDEBAR.map((menu, index) => (
            <Link
              key={index}
              href={menu.link}
              className={`relative rounded-md mx-4 p-2 mt-1 mb-3 hover:bg-neutral-100 transition-all ${
                path === menu.link ? "bg-blue-100 text-blue-400" : ""
              }`}
            >
              <div className="flex gap-2 items-center transition-all ease-in-out">
                <div className={`${path === menu.link ? "-rotate-12" : ""}`}>
                  {menu.icon}
                </div>
                <h3 className="">{menu.title}</h3>
                {path === menu.link && (
                  <div className="absolute right-0 rounded-r-md h-full w-2 bg-blue-400" />
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col py-4">
        <button
          className="flex items-center gap-2 mx-4 p-2 rounded-md hover:bg-neutral-100 transition-all"
          onClick={() => signOut()}
        >
          <FiArrowLeftCircle />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
