import React, { useState } from "react";
import Nft from "../components/Nft";
import Navbar from "../components/Navbar";

export default function MarketPlace() {
  return (
    <>
      <Navbar />
      <div className="bg-[#071506] h-full">
        <h1 className="text-center text-white py-3 capitalize text-4xl">
          Nft Marketplace
        </h1>
        <div className="flex flex-col space-y-4 mx-4 items-center md:grid grid-cols-3 ">
          <Nft />
          <Nft />
          <Nft />
          <Nft />
          <Nft />
          <Nft />
          <Nft />
          <Nft />
          <Nft />
        </div>
      </div>
    </>
  );
}
