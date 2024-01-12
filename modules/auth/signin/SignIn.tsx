import React, { FormEvent } from "react";

const SignIn = () => {

  const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = {
      email: form.email.value,
      password: form.password.value,
    };
    const result = await fetch("/api/register", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (result.status === 200) {
      form.reset();
      window.location.href = "/";
    } else {
      alert("Something went wrong");
      console.log({ result });
    }
  }
  return (
    <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh]">
      <h1 className="text-2xl mb-3 font-semibold">Sign In</h1>
      <div className="w-[40%] p-[20px] shadow-mini mb-[20px]">
        <form>
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
