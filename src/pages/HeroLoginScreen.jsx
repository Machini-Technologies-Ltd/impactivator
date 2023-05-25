import React from "react";
import Courses from "../assets/Pov/courses.jpg";
export default function HeroLoginScreen() {
  return (
    <div className="relative">
      <div className="flex  flex-col items-center bg-[#071506eb]  h-screen">
        <h1 className="text-3xl text-white mx-4 my-4 uppercase">
          Hero Academy
        </h1>
        <img src={Courses} alt="" srcset="" className="mx-3 w-80 md:w-1/2" />
        <div className="relative w-screen">
          <button className="uppercase text-white left-6 absolute top-8 border px-8 py-2 bg-[#413d5b] rounded">
            Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
