"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (e) => {
    console.log(e);
  };

  return (
    <main className="flex flex-col items-center mt-24 font-primary">
      <Image src={require("../public/logo.png")} alt="logo" />

      <section
        className="rounded-md p-4  mt-7 border border-lightGray w-[35%] mx-auto"
        style={{ boxShadow: " 0px 4px 4px 0px #9D9D9D33" }}
      >
        <form
          className="p-2 mt-10 ml-2 flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block  text-jetBlack text-sm font-semibold mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Enter your email"
              className="w-full p-2 border  rounded-md shadow-sm focus:outline-none  focus:border-onyx"
            />
            {errors.email && (
              <p className="text-red-500"> {errors.email.message} </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-jetBlack text-sm font-semibold mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="***********"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              className="w-full p-2  border rounded-md shadow-sm focus:outline-none  focus:border-onyx"
            />
            {errors.password && (
              <p className="text-red-500"> {errors.password.message} </p>
            )}
          </div>

          <button
            type="submit"
            className="w-[80%] mx-auto bg-jetBlack text-white font-bold rounded-md p-3"
          >
            Login
          </button>
        </form>
      </section>
    </main>
  );
}
