"use client";
import { SignInButton, SignOutButton, useAuth, useUser } from "@clerk/nextjs";

import Image from "next/image";
import React from "react";
import { BiTask } from "react-icons/bi";
import { MdTurnLeft } from "react-icons/md";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();

  const { user } = useUser();
  const { sessionId } = useAuth();
  if (!sessionId) {
    return <SignInButton />;
  }

  return (
    <div>
      <div className="relative">
        <div className="flex flex-col justify-center ">
          <div className="border-b p-4 border-slate-400">
            <div className="space-y-2  ">
              <Image
                className="h-[70px] w-[70px] rounded-full mx-auto"
                src={user?.imageUrl ?? ""}
                height={80}
                width={80}
                alt="user-image"
              />
              <h2 className="text-zinc-800 text-center text-[1.5em] font-semibold">
                {user?.firstName} {user?.lastName}
              </h2>
            </div>
          </div>
          <div className="lg:mt-16 ">
            <ul className="flex flex-col gap-y-2">
              <li className="hover:ml-2 transition-all  duration-300">
                <Link
                  className={`${
                    pathname === "/dashboard" ? "bg-slate-300 " : ""
                  }flex items-center p-2 rounded-r-md cursor-pointer bg-slate-100 text-[18px] font-medium gap-2`}
                  href={"/dashboard"}
                >
                  {" "}
                  <BiTask size={22} />
                  Dashboard
                </Link>
              </li>
              <li className="hover:ml-2 transition-all  duration-300">
                <Link
                  className={`${
                    pathname === "/dashboard/all-tasks" ? "bg-slate-300 " : ""
                  }flex items-center p-2 rounded-r-md bg-slate-100 cursor-pointer text-[18px] font-medium gap-2`}
                  href={"/dashboard/all-tasks"}
                >
                  {" "}
                  <BiTask size={22} />
                  All Tasks
                </Link>
              </li>
              <li className="hover:ml-2 transition-all  duration-300">
                <Link
                  className={`${
                    pathname === "/" ? "bg-slate-300 " : ""
                  }flex items-center p-2 rounded-r-md bg-slate-100 cursor-pointer text-[18px] font-medium gap-2`}
                  href={"/"}
                >
                  {" "}
                  <MdTurnLeft size={22} />
                  Go Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute lg:ml-16 bottom-4 mx-auto flex justify-center items-center ">
        <SignOutButton>
          <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md border-2 dark:border-[#656fe2] border-[#394481]  font-medium">
            <div className="inline-flex h-10 translate-y-0 items-center justify-center px-6  bg-gradient-to-r dark:from-[#406BBF] dark:to-[#345699] dark:text-white text-black transition duration-500 group-hover:-translate-y-[150%] tracking-wide">
              Sign Out
            </div>
            <div className="absolute inline-flex h-10 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
              <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-[#394481] dark:bg-[#656fe2] transition duration-500 group-hover:translate-y-0 group-hover:scale-150 tracking-wide"></span>
              <span className="z-10">Sign Out</span>
            </div>
          </button>
        </SignOutButton>
      </div>
    </div>
  );
};

export default Sidebar;
