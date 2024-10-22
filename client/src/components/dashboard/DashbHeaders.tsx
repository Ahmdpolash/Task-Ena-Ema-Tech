import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import logo2 from "@/assest/logo-efd74f61.svg";

const DashbHeaders = () => {
  return (
    <div>
      {/*--------------------- here header section start here---------------- */}
      <div className="header bg-white shadow-md  mt-2  w-full rounded-md mb-2">
        <div className="flex justify-between items-center p-3">
          <div>
            <input
              type="text"
              placeholder="search by tags &  name"
              className="outline-none hidden lg:block border border-gray-300 rounded-md shadow-sm w-11/12 py-2 px-3"
            />

            <Link className="block lg:hidden" href={"/"}>
              <Image src={logo2} width={120} height={40} alt="logo" />
            </Link>
          </div>

          <div className="">
            <div className="flex  items-center gap-4">
              <UserButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashbHeaders;
