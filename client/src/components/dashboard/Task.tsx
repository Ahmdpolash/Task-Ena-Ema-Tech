import React from "react";
import DashbHeaders from "./DashbHeaders";
import { FaEye, FaPlus } from "react-icons/fa";
import Link from "next/link";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const Task = () => {
  return (
    <div>
      <div className="py- px-2 md:px-4 lg:px-5">
        <DashbHeaders />

        <div className="mt-4">
          <div className="rounded-md lg:h-[83.8vh] pb-8 bg-white  w-full p-4">
            <div className="flex items-center justify-between">
              <select
                className="border outline-none border-slate-300 d px-3 py-[5px] bg-slate-100 rounded-md"
                name=""
              >
                <option selected>Filter</option>
                <option value="high">high</option>
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="completed">completed</option>
                <option value="pending">pending</option>
              </select>

              <button className="px-2 lg:px-4 py-2 bg-[#406BBF] text-white text-[1.1rem] rounded-full flex items-center gap-[10px]">
                Add Task <FaPlus className="text-[1rem]" />
              </button>
            </div>

            <div className="lg:w-full overflow-x-auto">
              <table className="lg:w-full mt-2  overflow-x-auto">
                <thead className="border-b  overflow-x-auto text-slate-700  border-slate-600 py-2 h-8 rounded-md">
                  <tr className="">
                    <th className="py-2 lg:px-2 px-8  font-semibold text-[15px] lg:text-[16px]">
                      No
                    </th>
                    <th className="py-2 lg:px-2 px-8  font-semibold text-[15px] lg:text-[16px]">
                      Task Name
                    </th>

                    <th className="py-2 font-semibold lg:px-2 px-10 text-[16px]">
                      Date
                    </th>
                    <th className="py-2 font-semibold lg:px-2 px-10 text-[16px]">
                      Priority
                    </th>
                    <th className="py-2 font-semibold lg:px-2 px-10 text-[16px]">
                      Tags
                    </th>
                    <th className="py-2 lg:px-2 px-10 font-semibold text-[16px]">
                      Action{" "}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center mx-auto">
                  <tr className=" border-slate-300  border-b">
                    <td className="whitespace-nowrap py-2  text-slate-700">
                      1
                    </td>
                    <td className="whitespace-nowrap py-2   text-slate-700">
                      home work
                    </td>
                    <td className="whitespace-nowrap py-2   text-slate-700">
                      20-15-20
                    </td>
                    <td className="whitespace-nowrap py-2 flex gap-2 items-center mx-auto justify-center text-slate-700">
                      high{" "}
                      <span className="h-2 w-2 mt-1 rounded-full bg-red-500"></span>{" "}
                    </td>
                    <td className="whitespace-nowrap py-2 text-blue-600  ">
                      #personal
                    </td>
                    <td className="flex items-center gap-x-3 justify-center">
                      <button className="h-7 w-7 rounded-md bg-green-600 mt-3">
                        <IoIosCheckmarkCircleOutline className="text-[20px] mx-auto relative  text-white mt-[1px] ml-[4px]" />
                      </button>

                      <button className="h-7 w-7 rounded-md bg-[#5082E8] mt-3">
                        <FaRegEdit className="text-[16px] mx-auto relative  text-white ml-[8px]" />
                      </button>

                      <button className="h-7 w-7 rounded-md bg-red-500 mt-3">
                        <AiOutlineDelete className="text-[19px] mx-auto relative  text-white ml-[4px]" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
