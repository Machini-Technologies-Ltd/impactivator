import React from "react";
import Manager from "../assets/Pov/Manager.png";
export default function Project() {
  const projectData = {
    description:
      "Access to clean and safe water is a fundamental human right, yet millions of people in Nigeria lack this basic necessity. Our water project aims to address this critical issue by providing sustainable and reliable water sources to communities in need. By implementing innovative water purification systems and infrastructure, we will ensure that individuals and families have access to clean drinking water, improving their health and overall quality of life.",
    budget: "$100,000",
    fundingTarget: "$200,000",
    launchDate: "July 15, 2023",
  };

  return (
    <div className="bg-white py-8 px-6 rounded md:w-3/4 mx-10 my-4 flex flex-col items-center md:flex-row md:gap-28">
      <div>
        <h2 className="text-2xl font-bold mb-4">Project Details</h2>
        <p className="text-gray-600 mb-4 ">{projectData.description}</p>
        <div className="flex items-center mb-4">
          <span className="font-bold mr-2">Budget:</span>
          <span>{projectData.budget}</span>
        </div>
        <div className="flex items-center mb-4">
          <span className="font-bold mr-2">Funding Target:</span>
          <span>{projectData.fundingTarget}</span>
        </div>
        <div className="flex items-center mb-4">
          <span className="font-bold mr-2">Launch Date:</span>
          <span>{projectData.launchDate}</span>
        </div>
      </div>

      <div>
        <h1 className="my-2 text-3xl md:hidden">Impactor</h1>
        <img src={Manager} className="w-" alt="" srcset="" />
      </div>
    </div>
  );
}
