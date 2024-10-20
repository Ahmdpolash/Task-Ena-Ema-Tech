import Navbar from "@/components/Navbar";
import React from "react";

const Support = () => {
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center h-[calc(100vh_-_70px)] w-full">
        <h3 className="">
          Contact me for any support
          <a href="mailto:asfakahmed680@gmail.com" className="font-bold">
            {" "}
            ahmedpolash732@gmail.com
          </a>
        </h3>
      </div>
    </>
  );
};

export default Support;
