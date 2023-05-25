import React from "react";

export default function ImpactorSignUp() {
  return (
    <div className="text-center bg-[#0e1a0e] h-screen text-white relative">
      <h1 className="py-2 md:text-3xl  border-b-4 md:py-4">Your Profile</h1>

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
          <h1 className="text-lg mt-4">Please Us Own fields Not Google form</h1>
        </div>
      </form>
      <div className=" flex flex-row my-4 items-center border-t-2 py-2 md:space-x-0 md:grid grid-cols-2">
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
    </div>
  );
}
