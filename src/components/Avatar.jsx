import React from "react";
import HeroAvatar from "../assets/Pov/Hero.png";
export default function Avatar() {
  return (
    <div className=" mx-2 bg-white rounded-full ">
      <img src={HeroAvatar} alt="" srcset="" className=" w-20 md:w-28" />
    </div>
  );
}
