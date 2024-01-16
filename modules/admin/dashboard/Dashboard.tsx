"use client";
import Image from "next/image";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col gap-5">
      <section className="bg-white p-5 rounded-md">
        <div className="flex items-center justify-between px-5">
          <div>
            <input
              type="text"
              className="border border-neutral-300 p-1 outline-none rounded-md"
            />
          </div>

          <Dropdown>
            <DropdownTrigger>
              <div className="border border-neutral-400 rounded-full w-12 h-12 cursor-pointer">
                <Image
                  src={session?.user?.image || ""}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="bg-cover w-full h-full rounded-full"
                />
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem>Profile</DropdownItem>
              <DropdownItem onClick={() => signOut()}>Logout</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </section>
      <section className="bg-white p-5 rounded-md">
        <h1>Dashboard Admin Page</h1>
      </section>
    </div>
  );
};

export default Dashboard;
