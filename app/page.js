"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

  const router = useRouter();
  const onSubmit = (e) => {
    router.push("/profile");
  };

  const [isVisible, setIsVisible] = useState(false);
  return (
    <main className="flex flex-col items-center mt-24 font-primary">
      <Image src={require("../public/logo.png")} alt="logo" />

      <section
        className="rounded-md p-4  mt-7 border border-lightGray w-[90%] md:w-[50%] lg:[30%] mx-auto"
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

          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-jetBlack text-sm font-semibold mb-1"
            >
              Password
            </label>
            <input
              type={isVisible ? "text" : "password"}
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
            <div
              className="cursor-pointer absolute  top-9 right-2 size-5"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? (
                <Image src={require("../public/eye.png")} alt="eye" />
              ) : (
                <Image src={require("../public/eye-slash.png")} alt="eye" />
              )}
            </div>
            {errors.password && (
              <p className="text-red-500"> {errors.password.message} </p>
            )}
          </div>

          <button
            type="submit"
            className="w-[80%] mx-auto transition-all duration-100  ease-in-out hover:scale-110 bg-jetBlack text-white font-bold rounded-md p-3"
          >
            Login
          </button>
        </form>
      </section>
    </main>
  );
}
