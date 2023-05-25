import React from "react";

export default function Imapact() {
  return (
    <div className="flex flex-col  items-center space-x-16 p-4  bg-[#74708f]  ">
      <div className="text-xl my-3 ">
        <h1 className="text-white">How do you want to make an Imapact</h1>
      </div>

      <div className="space-x-3 w-[100%] mt-4 justify-center items-center">
        <button className=" bg-[#1b192bd6] text-sm px-4 py-2 rounded text-white">
          Hero
        </button>
        <button className="bg-[#071506eb] px-4 py-2 rounded text-white">
          Impactor
        </button>
      </div>
    </div>
  );
}
