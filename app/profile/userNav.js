"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import TextInput from "./TextInput";
import { useCallback } from "react";
import debounce from "lodash.debounce";

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

export default function UserNav({ isEditable, data }) {
  const defaultValues = data
    ? {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        dob: data.dob,
        gender: data.gender,
        address: data.address,
        state: data.state,
        workHours: data.workHours,
        email: data.email,
        maritalStatus: data.maritalStatus,
        nationality: data.nationality,
        city: data.city,
        zipCode: data.zipCode,
        salary: data.salary,
      }
    : {
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
      };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: defaultValues,
  });

  const patchData = useCallback(async (data) => {
    try {
      const response = await fetch(
        "https://json-server-sigma-smoky.vercel.app/user",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            dob: data.dob,
            gender: data.gender,
            address: data.address,
            state: data.state,
            workHours: data.workHours,
            email: data.email,
            maritalStatus: data.maritalStatus,
            nationality: data.nationality,
            city: data.city,
            zipCode: data.zipCode,
            salary: data.salary,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update data");
      }

      const result = await response.json();
    } catch (error) {}
  }, []);

  const debouncedPatchData = useCallback(debounce(patchData, 500), [patchData]);

  const handleChange = (event) => {
    console.log(getValues());
    debouncedPatchData(getValues());
  };

  const onSubmit = (data) => {
    console.log("Form submitted", data);
  };

  return (
    <section className="w-full mt-10">
      <div className="flex  overflow-x-scroll scrollbar-hide   w-full gap-10 border-b border-[#A2A1A833] font-primary ">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`pb-3 items-center flex gap-3 ${
              !index ? "border-b-4 border-[#EC232B]" : ""
            }`}
          >
            <Image src={item.icon} alt={item.title} />
            <p
              className={`text-xs md:text-base  ${
                !index
                  ? "text-[#EC232B]  font-semibold"
                  : "text-[#16151C] font-light"
              }`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <form
        onChange={handleChange}
        onSubmit={handleSubmit(onSubmit)}
        className="md:pr-10 px-2 mt-7"
      >
        <div className="grid md:grid-cols-2  justify-items-center items-center  md:gap-10">
          <div className="w-full">
            <TextInput
              register={register("firstName", {
                required: "This field is required",
              })}
              name="firstName"
              label="First Name"
              editable={isEditable}
              errorMessage={errors.firstName?.message}
            />

            <TextInput
              register={register("phone", {
                required: "This field is required",
              })}
              name="phone"
              label="Mobile Number"
              editable={isEditable}
              errorMessage={errors.phone?.message}
            />

            <TextInput
              register={register("dob", { required: "This field is required" })}
              name="dob"
              label="Date of Birth"
              editable={isEditable}
              errorMessage={errors.dob?.message}
            />

            <TextInput
              register={register("gender", {
                required: "This field is required",
              })}
              name="gender"
              label="Gender"
              errorMessage={errors.gender?.message}
            />

            <TextInput
              register={register("address", {
                required: "This field is required",
              })}
              name="address"
              label="Address"
              editable={isEditable}
              errorMessage={errors.address?.message}
            />
          </div>
          <div className="w-full">
            <TextInput
              register={register("lastName", {
                required: "This field is required",
              })}
              name="lastName"
              label="Last Name"
              editable={isEditable}
              errorMessage={errors.lastName?.message}
            />

            <TextInput
              register={register("email", {
                required: "This field is required",
              })}
              name="email"
              label="Email Address"
              editable={isEditable}
              errorMessage={errors.email?.message}
            />

            <TextInput
              register={register("maritalStatus", {
                required: "This field is required",
              })}
              name="maritalStatus"
              label="Marital Status"
              editable={isEditable}
              errorMessage={errors.maritalStatus?.message}
            />

            <TextInput
              register={register("nationality", {
                required: "This field is required",
              })}
              name="nationality"
              label="Nationality"
              editable={isEditable}
              errorMessage={errors.nationality?.message}
            />

            <TextInput
              register={register("city", {
                required: "This field is required",
              })}
              name="city"
              label="City"
              editable={isEditable}
              errorMessage={errors.city?.message}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div>
            <TextInput
              register={register("state", {
                required: "This field is required",
              })}
              name="state"
              label="State"
              editable={false}
              border={false}
              errorMessage={errors.state?.message}
            />

            <TextInput
              register={register("workHours", {
                required: "This field is required",
              })}
              name="workHours"
              label="Work`s Hours"
              editable={false}
              border={false}
              errorMessage={errors.workHours?.message}
            />
          </div>
          <div className=" md:col-span-2 flex flex-col md:items-end">
            <TextInput
              register={register("zipCode", {
                required: "This field is required",
              })}
              name="zipCode"
              label="Zip Code"
              editable={false}
              border={false}
              errorMessage={errors.zipCode?.message}
            />

            <TextInput
              register={register("salary", {
                required: "This field is required",
              })}
              name="salary"
              label="Salary/hour"
              editable={false}
              border={false}
              errorMessage={errors.salary?.message}
            />
          </div>
          <div className={`flex flex-col mb-5 self-end font-primary`}>
            <label className="text-red-500 font-light mb-2">Total Salary</label>
            <p>54000EGP</p>
          </div>
        </div>
      </form>
    </section>
  );
}
