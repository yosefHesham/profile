"use client";

import SideBar from "@/components/sidebar";
import Image from "next/image";
import { useState } from "react";

export default function TopBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between md:justify-end md:gap-5">
        <Image
          src={require("../../public/menu.png")}
          alt="menu"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className="size-7 md:hidden cursor-pointer"
        />
        <div className="flex gap-5 items-center">
          <Image
            src={require("../../public/notification.png")}
            alt="notification"
            className="size-10"
          />
          <Image
            src={require("../../public/person.png")}
            alt="notification"
            className="rounded-full size-16"
          />
        </div>
      </div>
      {showMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-50"
          onClick={() => setShowMenu(false)}
        >
          <div
            className="w-11/12 sticky top-10"
            onClick={(e) => e.stopPropagation()}
          >
            <SideBar hideMenu={() => setShowMenu(false)} />
          </div>
        </div>
      )}
    </>
  );
}
