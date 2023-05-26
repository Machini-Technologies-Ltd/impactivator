import React from "react";
import Navbar from "../components/Navbar";
import Avatar from "../components/Avatar";
import Actions from "../components/Actions";

export default function CreateMint() {
  return (
    <>
      <Navbar />
      <div className="bg-[#071506] h-screen">
        <h1 className="text-center text-white py-4 text-3xl ">
          Your Digital Twin asset
        </h1>

        <div className="flex flex-col mx-4 space-y-6 md:grid grid-cols-2">
          <div className="h-full w-20">
            <Avatar />
          </div>

          <div className="flex  items-center text-white">
            <ul className="space-y-7 uppercase cursor-pointer md:flex flex-row md:space-x-8 md:space-y-0 ">
              <li>Profile</li>
              <li>Project</li>
              <li>Category</li>
              <li>Sdgs</li>
              <li>Progress</li>
            </ul>
          </div>
          <div className="text-white md:my-8">
            <Actions />
          </div>
        </div>
      </div>
    </>
  );
}
