import SideBar from "@/components/sidebar";
import Image from "next/image";
import Bio from "./bio";

export default function Hello() {
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
        <Bio />
      </section>
    </main>
  );
}
