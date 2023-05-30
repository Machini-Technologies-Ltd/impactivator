import React from "react";
import Navbar from "../components/Navbar";
import TaskDetail from "../components/TaskDetail";

export default function Task() {
  return (
    <>
      <Navbar />
      <div className="bg-[#071506eb] h-full">
        <h1 className="text-center text-white text-3xl py-2">Your Tasks</h1>
        <div className="my-4 relative">
          <button className="absolute right-3 mx-2 top-[-16px] bg-[#413d5b] px-4 py-2 rounded text-white">
            Wallet
          </button>
        </div>
        <div className="flex flex-col mx-16">
          <TaskDetail />
          <TaskDetail />
          <TaskDetail />
          <TaskDetail />
        </div>
      </div>
    </>
  );
}
