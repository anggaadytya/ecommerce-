"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS } from "@/common/constant/home";
import { usePathname } from "next/navigation";

const disableNavbar = ["auth", "admin"];

const Footer = () => {
  const path = usePathname();

  return (
    <>
      {!disableNavbar.includes(path.split("/")[1]) && (
        <footer className="flex flex-col text-black-100  border-t border-gray-100 text-white bg-neutral-800">
          <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-5">
            <div className="flex flex-col justify-start items-start gap-6">
              <Image
                src="https://res.cloudinary.com/ddugt5n5v/image/upload/v1705471052/Group_282_1_b22nd0.svg"
                alt="logo"
                width={118}
                height={18}
                className="object-contain"
              />
              <p className="text-base">
                Shopping Car 2024 <br />
                All rights reserved &copy;
              </p>
              <div className="flex flex-col justify-start items-start gap-2">
                <h1>Download Mobile App on :</h1>
                <Image
                  src={
                    "https://res.cloudinary.com/ddugt5n5v/image/upload/v1705471052/Group_282_1_b22nd0.svg"
                  }
                  alt="playstore"
                  width={118}
                  height={18}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
              {FOOTER_LINKS.map((link) => (
                <div
                  key={link.title}
                  className="flex flex-col gap-6 text-base min-w-[170px]"
                >
                  <h3 className="font-bold">{link.title}</h3>
                  {link.links.map((item) => (
                    <Link href={item.url} className="" key={item.title}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center flex-wrap  border-t border-gray-100 sm:px-16 px-6 py-5">
            <p>© 2024 Shopping Car. All Rights Reserved</p>
            <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
              <Link href="/" className="">
                Privacy Policy
              </Link>
              <Link href="/" className="">
                Terms of Use
              </Link>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
