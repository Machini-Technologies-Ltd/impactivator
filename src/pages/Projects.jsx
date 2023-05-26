import React from "react";
import Project from "../components/Project";
import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="bg-[#071506] h-full">
        <h1 className="px-4 py-4 text-white text-3xl text-center">
          My projects
        </h1>
        <div className=" flex flex-col space-y-4 mx-4 items-center  ">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </>
  );
}
