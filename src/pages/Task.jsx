import React from "react";

export default function Task() {
  return (
    <div className="bg-[#071506eb] h-screen">
      <h1 className="text-center text-white text-3xl py-2">Your Tasks</h1>

      <div className="flex flex-col ">
        <div className="flex flex-col md:space-x-16">
          <div className="flex flex-row space-x-4 items-center">
            <button className="my-4 mx-2 px-4 py-2 border rounded bg-[aqua]">
              Task 1
            </button>
            <div class="w-12 h-12 rounded-full flex-shrink-0 bg-gray-300 relative">
              <div
                class="rounded-full h-full bg-blue-500"
                style={{ width: "100%" }}
              ></div>
              <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <span class="text-white text-sm font-medium">100%</span>
              </div>
            </div>

            <h1 className="text-white">Paid $100</h1>
          </div>

          <div className="md:grid grid-cols-2 gap-20">
            {/* others */}
            <div className="flex flex-col space-y-3">
              <button className=" my-4 mx-2 px-4 py-2 border rounded bg-[aqua]">
                Community Insights
              </button>
              <button className=" my-4 mx-2 px-4 py-2 border rounded bg-[aqua]">
                Report Updates
              </button>
              <button className=" my-4 mx-2 px-4 py-2 border rounded bg-[aqua]">
                Photo Gallery
              </button>
            </div>

            <div className="flex flex-col space-y-2 my-4  mx-4 md:my-0">
              <h1 className="uppercase text-[#7e73c2]">DATE COMPLETED</h1>

              <h3 className="uppercese text-white">24th APRIL 2023</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4">
        <button className="mx-2 bg-[#413d5b] px-4 py-2 rounded text-white">
          Wallet
        </button>
      </div>
    </div>
  );
}
