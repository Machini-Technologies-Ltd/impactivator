import React from "react";

export default function Impact() {
  return (
    <div className="bg-slate-500 mt-4 flex p-4  h-40 items-center mx-2">
      <div className="w-1/2 mx-3">
        <h1 className="md:text-3xl uppercase text-white">
          How Do you want to make an Impact
        </h1>
      </div>
      <div className="flex  space-x-4">
        <button className="bg-white text-gray px-4 py-2 rounded">Hero</button>
        <button className="bg-[#42ac4b] text-white px-4 py-2 rounded">
          Impactor
        </button>
      </div>
    </div>
  );
}
