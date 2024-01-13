"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
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
        setError("Email or password is incorrect");
      }
    } catch (error) {
      setIsLoading(false);
      setError("Email or password is incorrect");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh]">
      <h1 className="text-2xl mb-3 font-semibold">Sign In</h1>
      {error && <p className="text-red-500 py-2">{error}</p>}
      <div className="w-[40%] p-[20px] shadow-mini mb-[20px]">
        <form onSubmit={handleSignIn}>
          <div className="flex flex-col mb-[20px]">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col mb-[20px]">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="border p-2 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white w-full p-2 text-base rounded-md"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <h1 className="text-center py-2">or</h1>
        <div>
          <button
            type="button"
            onClick={() =>
              signIn("google", { callbackUrl: "/", redirect: false })
            }
            className="bg-black text-white w-full p-2 text-base rounded-md flex items-center justify-center gap-x-2"
          >
            <FaGoogle />
            Login with Google
          </button>
        </div>
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
