import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const GetStartedOptions = ({ textBlack }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };
  const navigate = useNavigate();

  return (
    <div>
      <button
        className={`${
          showOptions && "hidden"
        } inline-flex items-center bg-[#000] border-0 py-2 px-4 text-white mt-4 md:mt-0`}
        onClick={handleToggleOptions}
      >
        Get Started
      </button>

      {showOptions && (
        <div className="mt-2">
          <button
            onClick={() => navigate("/impactor/signup")}
            className={`my-4 mx-2 px-4 py-2 border rounded  ${
              !textBlack ? "text-white" : "text-[#000]"
            } hover:text-[#000] hover:bg-[aqua]`}
          >
            Impactor
          </button>
          <button
            onClick={() => navigate("/hero/signup")}
            className={`border  ${
              textBlack ? "text-[#000]" : "text-white"
            } text-white font-bold py-2 px-4 rounded hover:bg-[#000] hover:text-white`}
          >
            Hero
          </button>
        </div>
      )}
    </div>
  );
};

export default GetStartedOptions;
