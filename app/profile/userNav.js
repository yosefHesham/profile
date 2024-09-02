"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import TextInput from "./TextInput";

const navItems = [
  {
    title: "Personal Information",
    icon: require("../../public/active-user.png"),
  },
  {
    title: "Professional Information",
    icon: require("../../public/bag.png"),
  },
  {
    title: "Documents",
    icon: require("../../public/document.png"),
  },
  {
    title: "Account Access",
    icon: require("../../public/lock.png"),
  },
];
export default function UserNav({ isEditable }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "Mariam",
      lastName: "Aly",
      phone: "",
      dob: "",
      gender: "",
      address: "",
      state: "Cairo",
      workHours: "180 h",
      email: "mariam@gmail.com",
      maritalStatus: "",
      nationality: "",
      city: "",
      zipCode: "41555",
      salary: "300 EGP",
    },
  });

  const onSubmit = (e) => {
    console.log(e);
  };
  return (
    <section className="w-full mt-10">
      <div className="flex w-full gap-10 border-b border-[#A2A1A833] font-primary ">
        {navItems.map((item, index) => {
          return (
            <div
              key={index}
              className={` pb-3  items-center flex gap-3 ${
                !index ? "  border-b-4   border-[#EC232B]" : ""
              }`}
            >
              <Image src={item.icon} alt={item.title} />
              <p
                className={`${
                  !index
                    ? "text-[#EC232B] font-semibold"
                    : "text-[#16151C] font-light"
                }  `}
              >
                {item.title}
              </p>
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="pr-10 mt-7">
        <div className="grid grid-cols-2 items-center gap-10">
          <div>
            <TextInput
              register={register("firstName", { required: true })}
              name="firstName"
              label="First Name"
              editable={isEditable}
              errorMessage={errors.firstName?.message}
            />

            <TextInput
              register={register("phone", { required: true })}
              name="phone"
              label="Mobile Number"
              editable={isEditable}
              errorMessage={errors.phone?.message}
            />
            <TextInput
              editable={isEditable}
              register={register("dob", { required: true })}
              name="dob"
              label="Date of Birth"
              errorMessage={errors.dob?.message}
            />
            <TextInput
              register={register("gender", { required: true })}
              name="gender"
              label="Gender"
              errorMessage={errors.gender?.message}
            />

            <TextInput
              editable={isEditable}
              register={register("address", { required: true })}
              name="address"
              label="Address"
              errorMessage={errors.address?.message}
            />
          </div>
          <div>
            <TextInput
              editable={isEditable}
              register={register("lastName", { required: true })}
              name="lastName"
              label="Last Name"
              errorMessage={errors.lastName?.message}
            />

            <TextInput
              editable={isEditable}
              register={register("email", { required: true })}
              name="email"
              label="Email Address"
              errorMessage={errors.email?.message}
            />
            <TextInput
              editable={isEditable}
              register={register("maritalStatus", { required: true })}
              name="maritaulStatus"
              label="Marital Status"
              errorMessage={errors.maritalStatus?.message}
            />
            <TextInput
              editable={isEditable}
              register={register("nationality", { required: true })}
              name="nationality"
              label="Nationality"
              errorMessage={errors.nationality?.message}
            />

            <TextInput
              editable={isEditable}
              register={register("city", { required: true })}
              name="city"
              label="City"
              errorMessage={errors.city?.message}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div>
            <TextInput
              editable={false}
              register={register("state", { required: true })}
              name="state"
              label="State"
              border={false}
              errorMessage={errors.state?.message}
            />
            <TextInput
              editable={false}
              register={register("workHours", { required: true })}
              name="workHours"
              label="Work`s Hours"
              border={false}
              errorMessage={errors.workHours?.message}
            />
          </div>
          <div>
            <TextInput
              editable={false}
              register={register("zipCode", { required: true })}
              name="zip"
              label="Zip Code"
              border={false}
              errorMessage={errors.zipCode?.message}
            />
            <TextInput
              editable={false}
              register={register("salary", { required: true })}
              name="salary"
              label="Salary/hour"
              border={false}
              errorMessage={errors.workHours?.message}
            />
          </div>
          <div className={`flex flex-col mb-5 self-end font-primary `}>
            <label className="text-red-500 font-light mb-2">Total Salary</label>
            <p>54000EGP</p>
          </div>
        </div>
      </form>
    </section>
  );
}
