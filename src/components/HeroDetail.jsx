import React from "react";
import HeroAvatar from "../assets/Pov/Hero.png";
import { useNavigate } from "react-router-dom";
export default function HeroDetail({ toggleDetails }) {
  const navigate = useNavigate();
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
          Hero Details
        </h1>
        <img src={HeroAvatar} alt="" srcSet="" className="h-64 rounded" />
        <div>
          <h2 className="text-xl font-medium">Name</h2>
          <p className="text-gray-600">Joseph Muchene</p>
        </div>
        <div className="mt-2">
          <h2 className="text-xl font-medium">Ideal Esg Project</h2>
          <p className="text-gray-600">Sustainable Communities Initiative</p>
        </div>
        <div className="mt-2">
          <h2 className="text-xl font-medium">Country</h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Nigeria_%28state%29.svg/1920px-Flag_of_Nigeria_%28state%29.svg.png"
            alt=""
            srcset=""
            className="rounded-full w-20 h-8"
          />
        </div>

        <div>
          <div className="mt-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate("/hero")}
            >
              Show Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
