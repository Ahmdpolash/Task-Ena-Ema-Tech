"use client";
import { useAddTasksMutation } from "@/redux/api/api";
import { TaskFormInputs } from "@/types";
import React, { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaPlus } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Modal = () => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const [state, setState] = useState<TaskFormInputs>({
    taskName: "",
    description: "",
    date: "",
    priority: "",
    category: "",
  });

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

  const [addTask, { isLoading }] = useAddTasksMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const selectedDate = new Date(state.date);
    const currentDate = new Date();


    if (selectedDate <= currentDate) {
      toast.error("Please select a future date.");
      return;
    }
    addTask(state);
    setisModalOpen(false);
  };

  return (
    <div>
      <div className=" flex items-center gap-5 justify-center">
        <div className="w-full flex items-center justify-center">
          <button
            onClick={() => setisModalOpen(true)}
            className="px-2 lg:px-4 py-2 bg-[#406BBF] text-white text-[1.1rem] rounded-full flex items-center gap-[10px]"
          >
            Add Task <FaPlus className="text-[1rem]" />
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
              <h1 className="text-[1.5rem] font-bold">Add a new Task</h1>
              <RxCross1
                className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                onClick={() => setisModalOpen(false)}
              />
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4">
              <div>
                <label
                  htmlFor="email"
                  className="text-[1rem] font-[500] text-[#464646]"
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
                  required
                  className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="text-[1rem] font-[500] text-[#464646]"
                >
                  Description
                </label>
                <textarea
                  onChange={handleChange}
                  className="w-full p-2 border border-[#d1d1d1] rounded-md focus:outline-none mt-1 focus:border-[#3B9DF8]"
                  name="description"
                  id=""
                  placeholder="description"
                  value={state?.description}
                  cols={4}
                  rows={4}
                  required
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="priority"
                  className="text-[1rem] font-[500] text-[#464646]"
                >
                  Priority
                </label>

                <div>
                  <select
                    onChange={handleChange}
                    className="w-full mb-1 py-2 border border-[#d1d1d1] rounded-md focus:outline-none mt-1 focus:border-[#3B9DF8]"
                    name="priority"
                    value={state.priority}
                    id=""
                    required
                  >
                    <option className="text-slate-400" selected value="">
                      Select priority
                    </option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">Ligh</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="text-[1rem] font-[500] text-[#464646]"
                >
                  Due Date
                </label>
                <input
                  onChange={handleChange}
                  type="date"
                  name="date"
                  value={state.date}
                  id="date"
                  required
                  className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="text-[1rem] font-[500] text-[#464646]"
                >
                  Categories
                </label>

                <div>
                  <select
                    onChange={handleChange}
                    className="w-full mb-1 py-2 border border-[#d1d1d1] rounded-md focus:outline-none mt-1 focus:border-[#3B9DF8]"
                    name="category"
                    value={state.category}
                    required
                    id=""
                  >
                    <option className="text-slate-400" selected value="">
                      Select Categories
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

export default Modal;
