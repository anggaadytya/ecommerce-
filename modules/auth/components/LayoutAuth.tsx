import { layoutAuthType } from "@/common/types/auth";
import Link from "next/link";
import React from "react";

const LayoutAuth = ({
  title,
  children,
  link,
  linkTitle,
  linkText,
}: layoutAuthType) => {
  return (
    <section className="flex flex-col items-center justify-center w-[100vw] h-[100vh]">
      <h1 className="text-2xl mb-3 font-semibold">{title}</h1>
      <div className="w-[90%] lg:w-[30%] p-[20px] shadow-mini mb-[20px] relative rounded-lg">
        {children}
      </div>
      <p>
        {linkText}
        <Link className="text-blue-500 font-semibold" href={link}>
          {linkTitle}
        </Link>{" "}
      </p>
    </section>
  );
};

export default LayoutAuth;
