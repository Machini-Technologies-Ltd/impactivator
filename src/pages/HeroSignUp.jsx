import React from "react";
import AvatarCreator from "../components/AvatarCreator";
import Navbar from "../components/Navbar";

export default function HeroSignUp() {
  return (
    <>
      <Navbar />
      <div className="bg-[#071506eb] h-full ">
        <div className=" text-center bg-[#071506eb] h-screen text-white">
          <h1 className=" border-b-2 py-2">Heroes Academy application</h1>

          <form className="mx-auto md:flex-col space-y-10 md:w-full my-4">
            <div className="relative ">
              <label className="block md:absolute left-20">
                Company Esg Initiatives
              </label>
              <input
                type="text"
                className=" border px-4 py-2 rounded mt-2 md:w-1/2"
              />
            </div>
            <div className="relative ">
              <label className="block md:absolute left-20 ">
                Ideal Esg Project
              </label>
              <input
                type="text"
                className=" border px-4 py-2 rounded mt-2  md:w-1/2  "
              />
            </div>
            <div className="relative">
              <label className="block md:absolute left-20">
                Most Important Un Sdgs
              </label>
              <input
                type="text"
                className="border px-4 py-2 rounded mt-2  md:w-1/2"
              />
            </div>

            <div>
              <h1 className="text-lg mt-4">
                Please Us Own fields Not Google form
              </h1>
            </div>
          </form>
          <div className=" flex flex-row my-4 items-center  py-2 md:space-x-0 md:grid grid-cols-2">
            <div className=" ">
              <button className="mx-2 bg-[#413d5b] px-4 py-2 rounded text-white">
                Wallet
              </button>
            </div>
            <div>
              <div className="space-y-2">
                <p className="">
                  <span>Agree To terms and Conditions</span>
                  <input type="checkbox" />
                </p>

                <p className="space-x-3">
                  <span>privacy policy</span> <input type="checkbox" />
                </p>

                <button className=" mx-2 bg-[#413d5b] px-4 py-2 rounded text-white">
                  submit
                </button>
              </div>
            </div>
          </div>
          <div className="mb-4 h-full">
            <AvatarCreator />
          </div>
        </div>
      </div>
    </>
  );
}
