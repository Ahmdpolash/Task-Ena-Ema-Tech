"use client";

import React, { useState } from "react";
import logo from "@/assest/logo.png";
import logo2 from "@/assest//logo-efd74f61.svg";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { BsCartCheck } from "react-icons/bs";
import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import NavBtn from "./btn/NavBtn";
import NavBtn2 from "./btn/NavBtn2";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { isSignedIn } = useUser();

  const toggleMenu = () => {
    setOpen(!open);
  };

  const navList = (
    <>
      <Link href="/" className="lg:ml-4">
        Home
      </Link>
      <Link href="/about-us" className="lg:ml-4">
        About US
      </Link>
      <Link href="/support" className="lg:ml-4">
        Support
      </Link>
      <Link href="/dashboard" className="lg:ml-4">
        Dashboard
      </Link>
    </>
  );

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`fixed duration-200 ${
          !open ? "invisible" : "visible"
        } w-screen h-screen backdrop-blur-sm top-0 left-0 z-10`}
      ></div>
      <Container>
        <div className="flex justify-between items-center">
          <div className="logo">
            <Link href={"/"}>
              <Image src={logo2} width={140} height={40} alt="logo" />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:mr-10 lg:block">
            <ul className="lg:flex font-medium uppercase text-[#406BBF] lg:gap-4">
              {navList}
            </ul>
          </div>

          {/* Mobile menu */}
          <div
            className={`${
              open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            } lg:hidden transition-all fixed z-50 duration-500 border border-gray-200 shadow-lg backdrop-blur-sm transform h-screen w-[350px] bg-white text-black top-0 left-0`}
          >
            <button
              className="px-4 py-2 text-3xl font-semibold flex absolute right-0 mt-2"
              onClick={() => setOpen(false)}
            >
              <RxCross1 />
            </button>

            <ul className="flex  flex-col p-5 gap-5 text-[18px]">{navList}</ul>
          </div>

          <div className="flex items-center">
            {isSignedIn ? (
              <div className="flex gap-3">
                <NavBtn2 />
                <UserButton />
              </div>
            ) : (
              <>
                <SignInButton forceRedirectUrl={"/dashboard"}>
                  <NavBtn />
                </SignInButton>
                <IoMdMenu
                  className="text-2xl cursor-pointer lg:hidden ml-4"
                  onClick={toggleMenu}
                />
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
