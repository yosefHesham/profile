"use client";
import Image from "next/image";
import { useState } from "react";

const sideData = [
  { title: "Dashboard", icon: require("../public/dashboard.png") },
  {
    title: "Employees",
    icon: require("../public/employees.png"),
    subMenu: [
      { title: "Profile", icon: require("../public/user.png") },
      { title: "Attendance", icon: require("../public/calendar.png") },
      { title: "Tasks", icon: require("../public/tasks.png") },
    ],
  },
  { title: "Payroll", icon: require("../public/coin.png") },
  { title: "Holidays", icon: require("../public/holidays.png"), subMenu: [] },
  { title: "Advanced Payment", icon: require("../public/wallet.png") },
];

export default function SideBar({ hideMenu }) {
  const [activeIndex, setActive] = useState(1);
  const [expand, setExpand] = useState({});

  const isActive = (index) => index === activeIndex;

  const handleExpand = (index) => {
    setExpand((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="rounded-2xl border border-[#A2A1A833]  bg-[#F9F9F9] w-full h-full p-4  font-primary">
      <Image
        src={require("../public/logo.png")}
        alt="logo"
        className="mx-auto"
        style={{ boxShadow: " 1px 1px 3px 0px #CACACA26" }}
      />

      <div className="mt-20 flex flex-col  gap-10 overflow-hidden ">
        {sideData.map((item, index) => (
          <div
            key={index}
            className="w-full overflow-hidden cursor-pointer"
            onClick={() => hideMenu && !item.subMenu && hideMenu()}
          >
            <div
              onClick={() => {
                item.subMenu && handleExpand(index);
                setActive(index);
              }}
              className={`relative flex items-center transition-all duration-100 ease-in-out justify-start ${
                isActive(index) ? "bg-[#F9EAEB]  rounded-r-lg py-2" : ""
              }`}
            >
              {isActive(index) && (
                <div className="absolute z-20 left-0 w-[5px] rounded-md h-full bg-[#EC232B]"></div>
              )}
              <div className="flex ml-[20%] gap-4 items-center">
                <Image src={item.icon} alt={item.title} />
                <p
                  className={`font-semibold ${
                    isActive(index) ? "text-[#EC232B]" : "text-onyx"
                  }`}
                >
                  {item.title}
                </p>
              </div>
              {item.subMenu && (
                <Image
                  src={require("../public/right-arrow.png")}
                  alt="right-arrow"
                  className={`absolute right-4 cursor-pointer transition-all transform duration-100 ease-in-out ${
                    expand[index] ? "rotate-90" : ""
                  }`}
                />
              )}
            </div>
            {item.subMenu && (
              <div
                className={`md:ml-32 ml-20 flex flex-col gap-4 mt-2     transition-all  duration-500 ease-in-out transform ${
                  expand[index]
                    ? "max-h-96 opacity-100 translate-y-0 mt-4"
                    : "max-h-0 opacity-0 -translate-y-4"
                } `}
              >
                {item.subMenu.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex gap-2"
                    onClick={() => hideMenu && hideMenu()}
                  >
                    <Image src={subItem.icon} alt={subItem.title} />
                    <p
                      className={`${
                        !subIndex ? "text-silverGray" : "text-[#16151C]"
                      }`}
                    >
                      {subItem.title}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
