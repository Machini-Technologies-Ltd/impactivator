import React from "react";
import Nft from "../assets/Pov/Nft2.jpg";
export default function MarketPlace() {
  return (
    <div className="bg-[#071506] h-full">
      <h1 className="text-center text-white py-3">kickstart</h1>
      <div className="flex flex-col space-y-4 mx-3 items-center">
        <div className="bg-white py-8 px-6 rounded">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000"
            alt=""
            srcset=""
            className="h-64 rounded"
          />
        </div>
        <div className="bg-white py-8 px-6 rounded">
          <img src={Nft} alt="" srcset="" className="h-64 rounded" />
        </div>
        <div className="bg-white py-8 px-6 rounded">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000"
            alt=""
            srcset=""
            className="h-64 rounded"
          />
        </div>
      </div>
    </div>
  );
}
