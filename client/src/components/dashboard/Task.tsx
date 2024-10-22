"use client";

import DashbHeaders from "./DashbHeaders";

import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import { AiOutlineDelete } from "react-icons/ai";
import Modal from "./modal/Modal";
import UpdateModal from "./modal/UpdateModal";
import {
  useDeleteTasksMutation,
  useGetTasksQuery,
  useUpdateTasksCompletionMutation,
} from "@/redux/api/api";
import { TaskFormInputs } from "@/types";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import Swal from "sweetalert2";

const Task = () => {
  const [priority, setPriority] = useState("");

  const { data } = useGetTasksQuery(priority);
  const [updateStatus] = useUpdateTasksCompletionMutation();
  const [deleteTask] = useDeleteTasksMutation();

  const sortedTasks = data?.data
    ?.slice()
    .sort(
      (a: TaskFormInputs, b: TaskFormInputs) =>
        Number(a.isCompleted) - Number(b.isCompleted)
    );

  const handleDeleteTask = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteTask(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your Task has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const hanldeCompleteTask = async (id: string) => {
    await updateStatus(id);

    toast.success(`Congratulations ! you've completed your task`);
  };

  return (
    <div>
      <div className="py- px-2 md:px-4  lg:px-5">
        <DashbHeaders />

        <div className="mt-4">
          <div className="rounded-md lg:h-[83.8vh] pb-8 bg-white border-t border-l border-zinc-300  w-full p-4">
            <div className="flex items-center justify-between">
              <select
                onChange={(e) => setPriority(e.target.value)}
                className="border outline-none border-slate-300 d px-3 py-[5px] bg-slate-100 rounded-md"
                name="priority"
              >
                <option selected>Filter</option>
                <option value="high">high</option>
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="completed">completed</option>
                <option value="pending">pending</option>
              </select>

              <Modal />
            </div>

            {sortedTasks?.length ? (
              <div className="lg:w-full overflow-x-auto">
                <table className="lg:w-full mt-2  overflow-x-auto">
                  <thead className="border-b  overflow-x-auto text-slate-700  border-slate-600 py-2 h-8 rounded-md">
                    <tr className="">
                      <th className="py-2 lg:px-2 px-8  font-semibold text-[15px] lg:text-[16px]">
                        No
                      </th>
                      <th className="py-2 lg:px-2 px-8 whitespace-nowrap  font-semibold text-[15px] lg:text-[16px]">
                        Task Name
                      </th>

                      <th className="py-2 font-semibold whitespace-nowrap lg:px-2 px-10 text-[16px]">
                        Date
                      </th>
                      <th className="py-2 font-semibold whitespace-nowrap lg:px-2 px-10 text-[16px]">
                        Priority
                      </th>
                      <th className="py-2 font-semibold whitespace-nowrap lg:px-2 px-10 text-[16px]">
                        Category
                      </th>
                      <th className="py-2 lg:px-2 px-10 whitespace-nowrap font-semibold text-[16px]">
                        Action{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center mx-auto">
                    {sortedTasks?.map((task: TaskFormInputs, index: number) => (
                      <tr key={index} className=" border-slate-300  border-b">
                        <td className="whitespace-nowrap py-2  text-slate-700">
                          {index + 1}
                        </td>
                        <td
                          className={`whitespace-nowrap  relative py-2 flex gap-2 justify-center items-center  text-slate-700 ${
                            task?.isCompleted ? "line-through" : ""
                          }`}
                        >
                          {task?.taskName}

                          {task?.isCompleted && (
                            <div className="px-2 hidden lg:flex py-1 bg-[#ececec80] border border-[#d1d1d180] text-[#18c964] rounded-full text-[12px] absolute top-0 right-2  font-bold  items-center gap-2">
                              completed
                            </div>
                          )}
                        </td>
                        <td className="whitespace-nowrap py-2   text-slate-700">
                          {new Date(task?.date).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                        <td className="whitespace-nowrap  py-2 b-2 flex gap-2 items-center mx-auto justify-center text-slate-700">
                          {task?.priority}

                          <span
                            className={`h-2 w-2 mt-1 rounded-full ${
                              task?.priority === "low"
                                ? "bg-green-500"
                                : task?.priority === "medium"
                                ? "bg-yellow-500"
                                : task?.priority === "high"
                                ? "bg-red-500"
                                : ""
                            }`}
                          />
                        </td>

                        <td className="whitespace-nowrap py-2   ">
                          {task?.category}
                        </td>
                        <td className="flex items-center whitespace-nowrap gap-x-3 justify-center">
                          <button
                            onClick={() =>
                              hanldeCompleteTask(task?._id as string)
                            }
                            className={`h-7 w-7 rounded-md bg-green-600 mt-3 `}
                          >
                            <IoIosCheckmarkCircleOutline className="text-[20px] mx-auto relative  text-white mt-[1px] ml-[4px]" />
                          </button>

                          <UpdateModal id={task?._id as string} />

                          <button
                            onClick={() =>
                              handleDeleteTask(task?._id as string)
                            }
                            className="h-7 w-7 rounded-md bg-red-500 mt-3"
                          >
                            <AiOutlineDelete className="text-[19px] mx-auto relative  text-white ml-[4px]" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="flex justify-center items-center h-full">
                <h2 className="text-blue-600 font-semibold text-xl">
                  No task Available !!{" "}
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Task;
