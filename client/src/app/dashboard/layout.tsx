import Sidebar from "@/components/dashboard/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="h-screen flex bg-[#E2E8F0]">
        {/* LEFT */}
        <div className="w-[14%] md:w-[8%] bg-white lg:w-[20%] xl:w-[18%] - border-r hidden lg:block  relative">
          <Sidebar />
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f3f5f7] overflow-scroll flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}
