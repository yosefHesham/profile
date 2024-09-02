import SideBar from "@/components/sidebar";
import Image from "next/image";
import Bio from "./bio";

async function fetchData() {
  try {
    const response = await fetch("http://localhost:4000/user");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  } catch (error) {
    return { error: error.message };
  }
}

export default async function Hello() {
  const data = await fetchData();

  if (data.error) {
    return <p>Error: {data.error}</p>;
  }

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <main className="flex gap-10 pl-4 pr-8 p-10 w-full relative">
      <SideBar />

      <section className="w-full">
        <div className="flex items-center justify-end gap-5 ml-auto">
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
        <Bio data={data} />
      </section>
    </main>
  );
}
