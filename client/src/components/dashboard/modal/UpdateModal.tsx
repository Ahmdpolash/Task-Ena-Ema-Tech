"use client";
import {
  useGetSingleTasksQuery,
  useUpdateTasksMutation,
} from "@/redux/api/api";
import { TaskFormInputs } from "@/types";
import React, { FormEvent, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const UpdateModal = ({ id }: { id: string }) => {
  const { data } = useGetSingleTasksQuery(id);
  const [updateTask, { isSuccess }] = useUpdateTasksMutation();
  const [isModalOpen, setisModalOpen] = useState(false);

  const [state, setState] = useState<TaskFormInputs>({
    taskName: "",
    description: "",
    date: "",
    priority: "",
    category: "",
  });

  useEffect(() => {
    if (data) {
      setState({
        taskName: data?.data?.taskName,
        description: data?.data?.description,
        date: data?.data?.date.split("T")[0],
        priority: data?.data?.priority,
        category: data?.data?.category,
      });
    }
  }, [data]);

  const handleChange = (e: FormEvent) => {
    const { name, value } = e.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    const updatedTask = {
      id,
      ...state,
    };
    await updateTask(updatedTask);
    setisModalOpen(false);

    toast.success(`Task updated successfully`);
  };

  return (
    <div>
      <div className=" flex items-center gap-5 justify-center">
        <div className="w-full flex items-center justify-center">
          <button
            onClick={() => setisModalOpen(true)}
            className="h-7 w-7 rounded-md bg-[#5082E8] mt-3"
          >
            <FaRegEdit className="text-[16px] mx-auto relative  text-white ml-[8px]" />
          </button>
        </div>

        <div
          className={`${
            isModalOpen ? " visible" : " invisible"
          } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] transition-all duration-300 flex items-center justify-center`}
        >
          <div
            className={`${
              isModalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
            } w-[90%] md:w-[80%] lg:w-[35%] bg-[#fff] rounded-lg transition-all duration-300 mx-auto mt-8`}
          >
            <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
              <h1 className="text-[1.5rem] font-bold">Edit Task</h1>
              <RxCross1
                className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                onClick={() => setisModalOpen(false)}
              />
            </div>

            <form onSubmit={handleUpdate} className="flex flex-col gap-2 p-4">
              <div className="flex flex-col justify-start">
                <label
                  htmlFor="taskName"
                  className="text-[1rem] text-start font-[500] text-[#464646]"
                >
                  Task Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  value={state?.taskName}
                  name="taskName"
                  id="taskName"
                  placeholder="task name"
                  className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="description"
                  className="text-[1rem] text-start font-[500] text-[#464646]"
                >
                  Description
                </label>
                <textarea
                  onChange={handleChange}
                  className="w-full p-2 border border-[#d1d1d1] rounded-md focus:outline-none mt-1 focus:border-[#3B9DF8]"
                  value={state?.description}
                  name="description"
                  id="description"
                  placeholder="description"
                  cols={4}
                  rows={4}
                ></textarea>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="priority"
                  className="text-[1rem] text-start font-[500] text-[#464646]"
                >
                  Priority
                </label>

                <div className="">
                  <select
                    onChange={handleChange}
                    className="w-full mb-1 py-2 border border-[#d1d1d1] rounded-md focus:outline-none mt-1 focus:border-[#3B9DF8]"
                    value={state?.priority}
                    name="priority"
                    id="priority"
                  >
                    <option className="text-slate-400 " selected value="">
                      Select priority
                    </option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">Ligh</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="date"
                  className="text-[1rem] text-start font-[500] text-[#464646]"
                >
                  Due Date
                </label>
                <input
                  onChange={handleChange}
                  value={state.date}
                  type="date"
                  name="date"
                  id="date"
                  className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="category"
                  className="text-[1rem] text-start font-[500] text-[#464646]"
                >
                  Category
                </label>

                <div>
                  <select
                    onChange={handleChange}
                    className="w-full mb-1 py-2 border border-[#d1d1d1] rounded-md focus:outline-none mt-1 focus:border-[#3B9DF8]"
                    value={state?.category}
                    name="category"
                    id="category"
                  >
                    <option className="text-slate-400" selected value="">
                      Select Category
                    </option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="py-2 px-4 w-full bg-[#3B9DF8] text-[#fff] rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default UpdateModal;
