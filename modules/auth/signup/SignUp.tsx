"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Bounce, toast } from "react-toastify";
import { authServices } from "@/common/services/axios";
import ButtonAuth from "@/modules/auth/components/ButtonAuth";
import Input from "@/common/components/elements/Input";
import ButtonHide from "../components/ButtonHide";
import LayoutAuth from "../components/LayoutAuth";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { push } = useRouter();

  const handleHidePassword = () => {
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement;
    if (passwordInput.type === "password") {
      setShowPassword(true);
      passwordInput.type = "text";
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

    const result = await authServices.registerAccount(data);

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
    <LayoutAuth
      title="Sign Up"
      link="/auth/signin"
      linkTitle="Sign In"
      linkText="Already have an account?"
    >
      <form onSubmit={(event) => handleSignUp(event)}>
        <Input label="Fullname" type="text" name="fullname" />
        <Input label="Email" type="email" name="email" />
        <Input label="Password" type="password" name="password" />
        <Input label="Phone Number" type="text" name="phone" />
        <ButtonAuth
          type="submit"
          className="bg-blue-500 text-white shadow-mini"
        >
          {isLoading ? "Loading..." : "Register"}
        </ButtonAuth>
      </form>
      <ButtonHide
        showPassword={showPassword}
        handleHidePassword={handleHidePassword}
        className="top-[54%] right-8"
      />
    </LayoutAuth>
  );
};

export default SignUp;
