import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assest/logo-efd74f61.svg";
import { useUser } from "@clerk/nextjs";
import Sidebar from "@/components/dashboard/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="h-screen flex">
        {/* LEFT */}
        <div className="w-[14%] md:w-[8%] lg:w-[20%] xl:w-[18%] - border-r hidden lg:block  relative">
          <Sidebar />
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}
