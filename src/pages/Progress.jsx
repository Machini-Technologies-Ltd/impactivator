import React from "react";
import { useNavigate } from "react-router-dom";

export default function Progress() {
  const navigate = useNavigate();
  const taskNavigate = () => {
    return navigate("/task");
  };
  return (
    <div className="bg-[#071506eb] h-screen">
      <h1 className="uppercase text-white text-center py-2 md:text-3xl md:mb-5">
        Your Progress
      </h1>

      <div className="flex flex-row md:items-center md:justify-center  md:gap-28 my-5">
        <div className="flex flex-col justify-center">
          <div className="flex flex-row  space-x-3 items-center md:space-x-10">
            <button
              className="my-4 mx-2 px-4 py-2 border rounded bg-[aqua]"
              onClick={taskNavigate}
            >
              Task 1
            </button>
            <div class="w-12 h-12 rounded-full flex-shrink-0 bg-gray-300 relative flex justify-center items-center">
              <div
                class="rounded-full h-full bg-blue-500"
                style={{ width: "100%" }}
              ></div>
              <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <span class="text-white text-sm font-medium">100%</span>
              </div>
            </div>
            <div class="md:w-12 md:h-12 ">
              <h1 className="text-white">Paid $100</h1>
            </div>
          </div>
          <div className="flex flex-row  space-x-3 items-center md:space-x-10">
            <button
              className="my-4 mx-2 px-4 py-2 border rounded bg-[aqua]"
              onClick={taskNavigate}
            >
              Task 2
            </button>
            <div class="w-12 h-12 rounded-full flex-shrink-0 bg-gray-300 relative flex justify-center items-center">
              <div
                class="rounded-full h-full bg-blue-500"
                style={{ width: "70%" }}
              ></div>
              <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <span class="text-white text-sm font-medium">70%</span>
              </div>
            </div>
            <div class="md:w-12 md:h-12 ">
              <h1 className="text-white">Not Paid $100</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 mr-2">
          <h1 className="uppercase text-[#413d5b]">DATE COMPLETED</h1>

          <h3 className="uppercese text-white">24th APRIL 2023</h3>
        </div>
      </div>
      <div className="">
        <button className="mx-2 bg-[#413d5b] px-4 py-2 rounded text-white">
          Wallet
        </button>
      </div>
    </div>
  );
}
