"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiLogOut } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const HomeSidebar = ({ close }: { close: () => void }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      <motion.div
        ref={sidebarRef}
        initial={{ x: -200, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            type: "spring",
          },
        }}
        className="h-full w-[18em] lg:w-[22em] fixed bg-neutral-800 z-[999]"
      >
        <div className="h-full w-full px-4 py-10 relative">
          <div className="flex justify-between">
            <Image
              src={
                "https://res.cloudinary.com/ddugt5n5v/image/upload/v1705471052/Group_282_1_b22nd0.svg"
              }
              alt="logo"
              width={150}
              height={150}
            />
            <Button
              aria-label="Close"
              onClick={close}
              size="icon"
              className="bg-white rounded-xl text-neutral-800"
            >
              <FiLogOut />
            </Button>
          </div>
          <Separator className="my-4" />
          <div className="flex flex-col gap-y-4">
            <Link href="/" className="text-white">
              Products
            </Link>
            <Link href="/posts" className="text-white">
              About
            </Link>
          </div>
          <Separator className="my-4" />
          <div className="flex flex-col gap-y-4 ">
            <Button size="sm" className="bg-white text-neutral-800">
              Sign In
            </Button>
            <Button size="sm" className="bg-white text-neutral-800">
              Sign Up
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HomeSidebar;
