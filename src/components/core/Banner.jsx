import React from "react";

export default function Banner() {
  return (
    <div className="hero relative  md:p-16 ">
      <div className="absolute mt-3 md:top-1/4 p-3 left-4  bg-slate-500 w-1/2 h-auto">
        <h1 className="text-white text-4xl">Empowering Social Enterpreneurs</h1>
        <p className="m-4 text-white">
          An opportunity to have funding to develop yourself and your project
          through the Heroes Academy social entrepreneurship course with
          mentoring, through a combination of webinars , peer to peer learning
          and self reflection to grow your ideas and sell your expertise through
          the impactivator online marketplace.
        </p>
      </div>
    </div>
  );
}
