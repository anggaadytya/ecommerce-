import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full pt-[3.5rem] bg-neutral-800 scrollbar-hide ">{children}</div>
  );
};

export default Container;
