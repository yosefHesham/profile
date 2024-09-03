"use client";
import Image from "next/image";
import UserNav from "./userNav";
import { useState } from "react";

export default function Bio({ data, refresh }) {
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
          onClick={async () => {
            editable && (await refresh());
            setEditable(!editable);
          }}
          className={` ${
            editable ? "bg-lightGray" : "bg-jetBlack"
          } p-3 block md:hidden transition-all duration-100 ease-in-out hover:scale-110  self-end text-white font-bold rounded-lg `}
        >
          <div
            className={`flex items-center  gap-3 font-bold ${
              editable ? "text-black " : "text-white"
            } `}
          >
            {editable ? (
              <>
                <Image
                  src={require("../../public/save.png")}
                  alt="edit"
                  className="size-5"
                />
                <p className="text-xs">Save Edits</p>
              </>
            ) : (
              <>
                <Image
                  src={require("../../public/edit.png")}
                  alt="edit"
                  className="size-5"
                />
                <p className="text-xs">Edit Profile</p>
              </>
            )}
          </div>
        </button>
      </div>

      <div className="flex justify-between py-4 border-b mt-5  border-[#A2A1A833]">
        <div className="flex gap-3">
          <img src={data.image} alt="person" className="rounded-lg" />
          <div className="flex flex-col gap-2">
            <p className="text-raisinBlack font-semibold">{data.name}</p>
            <div className="flex items-center gap-2">
              <Image src={require("../../public/bag.png")} alt="bag" />
              <p className="text-[#16151C] font-light">{data.bio}</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={require("../../public/mail.png")} alt="email" />
              <p className="text-[#16151C] font-light">{data.email}</p>
            </div>
          </div>
        </div>
        <button
          type="submit"
          onClick={async () => {
            editable && (await refresh());
            setEditable(!editable);
          }}
          className={` ${
            editable ? "bg-lightGray" : "bg-jetBlack"
          } p-3 hidden md:block transition-all duration-100 ease-in-out hover:scale-110 mr-20 self-end text-white font-bold rounded-lg `}
        >
          <div
            className={`flex items-center  gap-3 font-bold ${
              editable ? "text-black " : "text-white"
            } `}
          >
            {editable ? (
              <>
                <Image
                  src={require("../../public/save.png")}
                  alt="edit"
                  className="size-7"
                />
                <p>Save Edits</p>
              </>
            ) : (
              <>
                <Image
                  src={require("../../public/edit.png")}
                  alt="edit"
                  className="size-7"
                />
                <p>Edit Profile</p>
              </>
            )}
          </div>
        </button>
      </div>

      <UserNav isEditable={editable} data={data} />
    </section>
  );
}
