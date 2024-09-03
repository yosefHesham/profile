"use client";
import SideBar from "@/components/sidebar";
import Image from "next/image";
import Bio from "./bio";
import TopBar from "./topBar";
import { fetchData } from "./fetchData";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { get } from "react-hook-form";

export default function Profile() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  async function getData() {
    try {
      const profileData = await fetchData();
      if (profileData.detail) {
        toast(profileData.detail);
      }
      setData(profileData);
    } catch (error) {
      setError("Failed to fetch data");
    }
  }

  useEffect(() => {
    getData();
  }, []);
  if (data?.error) {
    return <p>Error: {data.error}</p>;
  }

  if (!data || data.length === 0) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <main className="flex gap-10 md:pl-4  overflow-hidden  p-4 md:pr-8 md:p-10 w-full relative">
      <div className="hidden md:block  w-1/3 top-0 sticky">
        <SideBar />
      </div>

      <section className="w-full">
        <TopBar image={data.image} />
        <Bio data={data} refresh={getData} />
      </section>
    </main>
  );
}
