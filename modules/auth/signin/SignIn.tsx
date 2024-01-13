"use client";
import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import Input from "@/common/components/elements/Input";
import ButtonAuth from "@/common/components/elements/ButtonAuth";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();

  const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email.value,
        password: form.password.value,
        callbackUrl: "/",
      });
      if (res?.ok) {
        setIsLoading(false);
        form.reset();
        push("/");
      } else {
        setIsLoading(false);
        toast.error("Email or password is incorrect", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Email or password is incorrect", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh]">
      <h1 className="text-2xl mb-3 font-semibold">Sign In</h1>
      <div className="w-[90%] lg:w-[40%] p-[20px] shadow-mini mb-[20px]">
        <form onSubmit={handleSignIn}>
          <Input label="Email" type="email" name="email" />
          <Input label="Password" type="password" name="password" />
          <ButtonAuth type="submit" className="bg-blue-500 shadow-mini">
            {isLoading ? "Loading..." : "Login"}
          </ButtonAuth>
        </form>
        <h1 className="text-center py-2">or</h1>
        <ButtonAuth
          type="button"
          onClick={() =>
            signIn("google", { callbackUrl: "/", redirect: false })
          }
          className="bg-white text-black shadow-mini"
        >
          <FaGoogle />
          Sign in with Google
        </ButtonAuth>
      </div>
      <p>
        Don`t have an account?{" "}
        <Link className="text-blue-500 font-semibold" href={"/auth/signup"}>
          Sign Up
        </Link>{" "}
      </p>
    </div>
  );
};

export default SignIn;
