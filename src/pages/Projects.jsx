import React from "react";
import Project from "../components/Project";
import Navbar from "../components/Navbar";
import ProjectSearchBar from "../components/ProjectSearchBar";
import CategoryProjectFilter from "../components/CategoryProjectFilter";

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="bg-[#071506] h-full">
        <ProjectSearchBar />

        <div>
          <div>
            <CategoryProjectFilter />
          </div>
          <div className=" flex flex-col space-y-4 mx-4 items-center  ">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
        </div>
      </div>
    </>
  );
}
