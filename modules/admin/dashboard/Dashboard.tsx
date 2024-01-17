"use client";
import Image from "next/image";
import React from "react";
import { useSession, signOut } from "next-auth/react";

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

       
        </div>
      </section>
      <section className="bg-white p-5 rounded-md">
        <h1>Dashboard Admin Page</h1>
      </section>
    </div>
  );
};

export default Dashboard;
