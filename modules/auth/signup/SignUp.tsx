"use client";
import ButtonAuth from "@/common/components/elements/ButtonAuth";
import Input from "@/common/components/elements/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { Bounce, toast } from "react-toastify";

const SignUp = () => {
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
    }
  };

  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const form = event.target as HTMLFormElement;
    const data = {
      fullname: form.fullname.value,
      email: form.email.value,
      password: form.password.value,
      phone: form.phone.value,
    };

    if (!data.fullname || !data.email || !data.password || !data.phone) {
      setIsLoading(false);
      toast.error("Please fill in all the fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      form.reset();
      setIsLoading(false);
      push("/auth/signin");
    } else {
      setIsLoading(false);
      toast.error("Email is already registered", {
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
      <h1 className="text-2xl mb-3 font-semibold">Sign Up</h1>
      <div className="w-[90%] lg:w-[40%] p-[20px] shadow-mini mb-[20px]">
        <form onSubmit={(event) => handleSignUp(event)}>
          <Input label="Fullname" type="text" name="fullname" />
          <Input label="Email" type="email" name="email" />
          <Input
            label="Password"
            type="password"
            name="password"
            showPassword={showPassword}
            hidePassword={handleHidePassword}
          />
          <Input label="Phone Number" type="text" name="phone" />
          <ButtonAuth type="submit">
            {isLoading ? "Loading..." : "Register"}
          </ButtonAuth>
        </form>
      </div>
      <p>
        Already have an account?{" "}
        <Link className="text-blue-500 font-semibold" href={"/auth/signin"}>
          Sign In
        </Link>{" "}
      </p>
    </div>
  );
};

export default SignUp;
