import React from "react";
import Image from "../assets/Pov/banner.jpg";
export default function Banner() {
  return (
    <div className="">
      <img
        src={Image}
        alt=""
        className="bg-center pb-2 bg-cover md:h-1/2 md:w-full"
      />
    </div>
  );
}
