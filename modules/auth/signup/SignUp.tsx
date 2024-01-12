"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();

  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.target as HTMLFormElement;
    const data = {
      fullname: form.fullname.value,
      email: form.email.value,
      password: form.password.value,
      phone: form.phone.value,
    };

    if (!data.fullname || !data.email || !data.password || !data.phone) {
      setIsLoading(false);
      setError("Please fill in all the fields");
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
      setError("Email is already registered");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh]">
      <h1 className="text-2xl mb-3 font-semibold">Sign Up</h1>
      {error && <p className="text-red-500 py-2">{error}</p>}
      <div className="w-[40%] p-[20px] shadow-mini mb-[20px]">
        <form onSubmit={(event) => handleSignUp(event)}>
          <div className="flex flex-col mb-[20px]">
            <label htmlFor="">Fullname</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="border p-2 rounded-md"
            />
          </div>
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
          <div className="flex flex-col mb-[20px]">
            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="border p-2 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white w-full p-2 text-base rounded-md"
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
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
