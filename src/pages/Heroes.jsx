import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Heroes() {
  return (
    <>
      <Navbar />
      <div className="bg-[#071506] h-full">
        <h1 className="px-4 py-4 text-white text-3xl ">Heroes Sponsored</h1>
        <div className=" flex flex-col space-y-4 mx-4 items-center md:grid grid-cols-3 ">
          <Hero />
          <Hero />
          <Hero />
          <Hero />
          <Hero />
          <Hero />
        </div>
      </div>
    </>
  );
}
