"use client";
import Image from "next/image";
import UserNav from "./userNav";
import { useState } from "react";

export default function Bio() {
  const [editable, setEditable] = useState(false);
  return (
    <section className="font-primary w-full mt-10">
      <div className="flex items-center gap-2 text-raisinBlack font-semibold">
        <p>Employees</p>
        <Image
          src={require("../../public/right-arrow.png")}
          alt="arrow"
          className="h-4 w-3"
        />
        <p>Profile</p>
      </div>

      <div className="flex justify-between py-4 border-b mt-5 border-[#A2A1A8]">
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
          className="  bg-jetBlack p-4  mr-20 self-end text-white font-bold rounded-md "
        >
          <div className="flex  gap-3 font-bold text-white">
            <Image src={require("../../public/edit.png")} alt="edit" />
            <p>Edit Profile</p>
          </div>
        </button>
      </div>

      <UserNav isEditable={editable} />
    </section>
  );
}
