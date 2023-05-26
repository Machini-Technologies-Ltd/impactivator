import React from "react";

export default function Actions() {
  return (
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
  );
}
