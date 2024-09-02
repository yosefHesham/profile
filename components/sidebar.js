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

export default function SideBar() {
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
    <section className="rounded-2xl w-1/3 p-4 h-screen top-0 sticky shadow-md font-primary">
      <Image
        src={require("../public/logo.png")}
        alt="logo"
        className="mx-auto"
      />

      <div className="mt-14 flex flex-col gap-4 overflow-hidden ">
        {sideData.map((item, index) => (
          <div key={index} className="w-full overflow-hidden cursor-pointer">
            <div
              onClick={() => setActive(index)}
              className={`relative flex items-center transition-all duration-100 ease-in-out justify-center ${
                isActive(index)
                  ? "bg-[#F9EAEB] rounded-r-lg p-2 border-l-2 border-[#EC232B]"
                  : ""
              }`}
            >
              <div className="flex gap-4 items-center">
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
                  onClick={(e) => {
                    handleExpand(index);
                  }}
                />
              )}
            </div>
            {item.subMenu && (
              <div
                className={`ml-32 flex flex-col gap-4 mt-2     transition-all  duration-500 ease-in-out transform ${
                  expand[index]
                    ? "max-h-96 opacity-100 translate-y-0 mt-4"
                    : "max-h-0 opacity-0 -translate-y-4"
                } `}
              >
                {item.subMenu.map((subItem, subIndex) => (
                  <div key={subIndex} className="flex gap-2">
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
