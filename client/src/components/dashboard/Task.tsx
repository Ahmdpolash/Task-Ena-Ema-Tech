import React from "react";
import DashbHeaders from "./DashbHeaders";
import { FaPlus } from "react-icons/fa";

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

              <button className="px-4 py-2 bg-[#406BBF] text-white text-[1.1rem] rounded-full flex items-center gap-[10px]">
                Add Task <FaPlus className="text-[1rem]" />
              </button>
            </div>

            <div
              id="allSellers"
              className="lg:w-full md:w-[700px] w-[365px] overflow-x-auto"
            >
              <table className="lg:w-full mt-2  overflow-x-auto">
                <thead className="border-b  overflow-x-auto text-slate-700  border-slate-600 py-2 h-8 rounded-md">
                  <tr className="">
                    <th className="py-2 lg:px-2 px-4 font-semibold text-[15px] lg:text-[16px]">
                      No
                    </th>
                    <th className="py-2 lg:px-4 px-8 font-semibold text-[15px] lg:text-[16px]">
                      Image
                    </th>
                    <th className="py-2 lg:px-2 px-8  font-semibold text-[15px] lg:text-[16px]">
                      Name
                    </th>
                    <th
                      className="py-2 lg:px-2 px-
                   lg:pl-0 pl-10 font-semibold text-[15px] lg:text-[16px]"
                    >
                      Email
                    </th>
                    <th className="py-2 whitespace-nowrap lg:px-0 px-10 font-semibold text-[15px] lg:text-[16px]">
                      Payment Status
                    </th>
                    <th className="py-2 lg:px-2 px-5 font-semibold text-[15px] lg:text-[16px]">
                      Division
                    </th>
                    <th className="py-2 font-semibold lg:px-2 px-10 text-[16px]">
                      District{" "}
                    </th>
                    <th className="py-2 lg:px-2 px-10 font-semibold text-[16px]">
                      Action{" "}
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
