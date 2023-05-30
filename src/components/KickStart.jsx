import React from "react";
import GetStartedOptions from "./GetStartedOptions";

export default function KickStart() {
  return (
    <div className="m-3 relative flex flex-col md:flex-row md:mx-auto md:w-1/2 md:mt-[30px] rounded border shadow-lg mx-2">
      <div className="bg-slate-800 text-white p-3 text-3xl leading">
        <h1>Kickstart hero sponsorship </h1>
        <h2>ownership Digital asset 6 months rolling</h2>
      </div>
      <div className="bg-[#fff] p-3 mt-4">
        <p>
          20% of transactions will be paid to mpowa impact to run the training
          academy and operate the marketplace.
        </p>
        <GetStartedOptions textBlack={true} />
      </div>
    </div>
  );
}
