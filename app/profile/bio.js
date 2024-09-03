"use client";
import Image from "next/image";
import UserNav from "./userNav";
import { useState } from "react";

export default function Bio({ data }) {
  const [editable, setEditable] = useState(false);
  return (
    <section className="font-primary w-full mt-10">
      <div className="flex items-center gap-10 justify-between w-full text-raisinBlack font-semibold">
        <div className="flex items-center gap-2">
          <p className="text-sm md:text-base">Employees</p>
          <Image
            src={require("../../public/right-arrow.png")}
            alt="arrow"
            className="md:h-4 md:w-3 h-3 w-2"
          />
          <p className="text-sm md:text-base">Profile</p>
        </div>
        <button
          type="submit"
          onClick={() => setEditable(true)}
          className="  bg-jetBlack p-2 ml-auto  md:hidden transition-all duration-100 ease-in-out hover:scale-110  self-end text-white font-semibold rounded-md "
        >
          <div className="flex items-center  gap-3 font-bold text-white">
            <Image
              src={require("../../public/edit.png")}
              alt="edit"
              className="size-5"
            />
            <p className="text-xs">Edit Profile</p>
          </div>
        </button>
      </div>

      <div className="flex justify-between py-4 border-b mt-5  border-[#A2A1A833]">
        <div className="flex gap-3">
          <Image src={require("../../public/person.png")} alt="person" />
          <div className="flex flex-col gap-2">
            <p className="text-raisinBlack font-semibold">Mariam Aly</p>
            <div className="flex gap-2">
              <Image src={require("../../public/bag.png")} alt="bag" />
              <p className="text-[#16151C] font-light">UX/UI Designer</p>
            </div>
            <div className="flex gap-2">
              <Image src={require("../../public/mail.png")} alt="email" />
              <p className="text-[#16151C] font-light">mariam@gmail.com</p>
            </div>
          </div>
        </div>
        <button
          type="submit"
          onClick={() => setEditable(true)}
          className="  bg-jetBlack p-3 hidden md:block transition-all duration-100 ease-in-out hover:scale-110 mr-20 self-end text-white font-bold rounded-lg "
        >
          <div className="flex  gap-3 font-bold text-white">
            <Image src={require("../../public/edit.png")} alt="edit" />
            <p>Edit Profile</p>
          </div>
        </button>
      </div>

      <UserNav isEditable={editable} data={data} />
    </section>
  );
}
