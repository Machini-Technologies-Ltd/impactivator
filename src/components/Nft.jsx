import React, { useState } from "react";
import { FaInfoCircle, FaStar } from "react-icons/fa";
import NftDetail from "./NftDetail";
import Avatar from "../assets/Pov/Hero.png";
export default function Nft() {
  const [showDetails, setShowDetails] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="bg-white py-4 px-6 rounded md:w-3/4 flex flex-col justify-center shadow">
      <div className="flex items-center justify-between md:mb-3">
        <button className="text-red-500" onClick={toggleFavorite}>
          <FaStar className={isFavorited ? "text-red-500" : "text-gray-500"} />
        </button>
        <button
          className="flex items-center text-blue-500"
          onClick={toggleDetails}
        >
          <FaInfoCircle className="mr-2" />
          {/* {showDetails ? "Hide Details" : "Show Details"} */}
        </button>
      </div>
      <img src={Avatar} alt="" srcSet="" className="h-64 rounded" />

      {showDetails && <NftDetail toggleDetails={toggleDetails} />}
    </div>
  );
}
