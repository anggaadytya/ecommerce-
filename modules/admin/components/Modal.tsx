import React from "react";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed w-[100vw] h-[100vh] z-10 bg-neutral-800/50 flex items-center justify-center left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
      <div className="bg-white w-[50%] h-[50%] p-5 max-h-[80%] rounded-md relative">
        {children}
      </div>
    </div>
  );
};

export default Modal;
