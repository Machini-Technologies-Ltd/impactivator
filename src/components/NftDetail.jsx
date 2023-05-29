import React from "react";

export default function NftDetail({ toggleDetails }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white p-6 rounded-lg">
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={toggleDetails}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-2xl mb-4 text-center border-b-2 pb-3">
          Nft Details
        </h1>
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000"
          alt=""
          srcSet=""
          className="h-64 rounded"
        />
        <div>
          <h2 className="text-xl font-medium">NFT Name</h2>
          <p className="text-gray-600">Example NFT Name</p>
        </div>
        <div className="mt-2">
          <h2 className="text-xl font-medium">Description</h2>
          <p className="text-gray-600">Example NFT Description</p>
        </div>
        <div className="mt-2">
          <h2 className="text-xl font-medium">Owner</h2>
          <p className="text-gray-600">Example Owner</p>
        </div>

        <div>
          <div className="mt-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              //   onClick={handleBuyNFT}
            >
              Buy NFT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
