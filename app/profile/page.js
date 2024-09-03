import SideBar from "@/components/sidebar";
import Image from "next/image";
import Bio from "./bio";
import TopBar from "./topBar";

async function fetchData() {
  try {
    const response = await fetch(
      "https://json-server-sigma-smoky.vercel.app/user",
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  } catch (error) {
    return { error: error.message };
  }
}

export default async function Profile() {
  const data = await fetchData();

  if (data.error) {
    return <p>Error: {data.error}</p>;
  }

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <main className="flex gap-10 md:pl-4  overflow-hidden  p-4 md:pr-8 md:p-10 w-full relative">
      <div className="hidden md:block  w-1/3 top-0 sticky">
        <SideBar />
      </div>

      <section className="w-full">
        <TopBar />
        <Bio data={data} />
      </section>
    </main>
  );
}
