import React from "react";

const DashbHeaders = () => {
  return (
    <div>
      {/*--------------------- here header section start here---------------- */}
      <div className="header bg-white  mt-2  w-full rounded-md mb-2">
        <div className="flex justify-between items-center p-3">
          <div>
            <input
              type="text"
              placeholder="Search.."
              className="outline-none hidden lg:block border border-gray-300 rounded-md shadow-sm w-11/12 py-2 px-3"
            />
          </div>

          <div className="">
            <div className="flex  items-center gap-4">
              <div className="sellerInfo">
                <h1 className="font-semibold">Polash Ahmed</h1>

                <p className="text-right text-[14px] font-medium  text-slate-700">
                  Admin
                </p>
              </div>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3g0kIKYCB-w9U0l4Srnvq3s7KLnR6JnArw&usqp=CAU"
                  alt="user image"
                  className="w-[50px] sellerImg h-[50px] rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashbHeaders;
