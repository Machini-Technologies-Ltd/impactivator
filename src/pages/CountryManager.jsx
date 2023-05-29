import React from "react";
import Avatar from "../components/Avatar";
import Navbar from "../components/Navbar";

export default function CountryManager() {
  return (
    <>
      <Navbar />
      <div className="bg-[#071506eb] h-screen">
        <h1 className="text-center text-white text-3xl py-2 ">
          Country Manager
        </h1>

        <div className="flex flex-col ">
          <div className="flex flex-col md:space-x-16">
            <div className="flex flex-row space-x-4 items-center md:space-x-16">
              <Avatar />

              <div className="flex flex-col space-y-2 justify-center items-center">
                <h1 className="text-white">Nigeria</h1>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Nigeria_%28state%29.svg/1920px-Flag_of_Nigeria_%28state%29.svg.png"
                  alt=""
                  srcset=""
                  className="rounded-full w-20 h-8"
                />
              </div>

              <h1 className="text-white">Paid $100</h1>
            </div>
          </div>
        </div>
        <div className="my-4">
          <button className="mx-2 bg-[#413d5b] px-4 py-2 rounded text-white">
            Wallet
          </button>
        </div>
      </div>
    </>
  );
}
