import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginScreen() {
  const navigate = useNavigate();
  const clickHero = () => {
    return navigate("/hero/login");
  };
  const clickImapactor = () => {
    return navigate("/impactor/login");
  };
  return (
    <div className="flex flex-col mx-6 my-4 ">
      <form
        action=""
        className="flex text-white bg-[#413d5b] rounded flex-col space-y-6 p-4"
      >
        <h1 className="text-2xl uppercase text-center">Login</h1>

        <div className="flex flex-col space-x-3 mb-4">
          <label htmlFor="Id">Id</label>
          <input
            type="text"
            className="border border-[#000] px-4 py-2 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="border px-4 py-2 border-[#000] rounded"
          />
        </div>

        <div className="my-4 space-x-4 px-4 py-2 mb-3 flex justify-center">
          <button
            className="bg-[#1b192bd6] text-sm px-4 py-2 rounded"
            onClick={clickHero}
          >
            Hero Login
          </button>

          <button
            className="bg-[#071506eb] px-4 py-2 rounded"
            onClick={clickImapactor}
          >
            Impactor Login
          </button>
        </div>

        <style jsx>{`
          /* Responsive styles */
          @media (max-width: 767px) {
            /* Styles for mobile devices */
            .flex-col {
              flex-direction: column;
            }

            .space-y-6 > *:not(:last-child) {
              margin-bottom: 1.5rem;
            }

            .text-2xl {
              font-size: 1.5rem;
            }

            .text-center {
              text-align: center;
            }

            .space-x-4 {
              margin-bottom: 1rem;
            }
          }
        `}</style>
      </form>
    </div>
  );
}
