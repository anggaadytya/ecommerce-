"use client";
import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import Input from "@/common/components/elements/Input";
import ButtonAuth from "@/modules/auth/components/ButtonAuth";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonHide from "../components/ButtonHide";
import LayoutAuth from "../components/LayoutAuth";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { push } = useRouter();

  const handleHidePassword = () => {
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement;

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      setShowPassword(true);
    } else {
      passwordInput.type = "password";
      setShowPassword(!showPassword);
    }
  };

  const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email.value,
        password: form.password.value,
        // callbackUrl: "/",
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
    <LayoutAuth title="Sign In" link="/auth/signup" linkTitle="Sign Up" linkText="Don't have an account?">
      <form onSubmit={handleSignIn}>
        <Input label="Email" type="email" name="email" />
        <Input label="Password" type="password" name="password" />
        <ButtonAuth
          type="submit"
          className="bg-blue-500 text-white shadow-mini"
        >
          {isLoading ? "Loading..." : "Login"}
        </ButtonAuth>
      </form>
      <ButtonHide
        showPassword={showPassword}
        handleHidePassword={handleHidePassword}
        className="top-[43%] right-8"
      />
      <h1 className="text-center py-2">or</h1>
      <ButtonAuth
        type="button"
        onClick={() => signIn("google", { callbackUrl: "/", redirect: false })}
        className="bg-white text-black shadow-mini"
      >
        <FaGoogle />
        Sign in with Google
      </ButtonAuth>
    </LayoutAuth>
  );
};

export default SignIn;
