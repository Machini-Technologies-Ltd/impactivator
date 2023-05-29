import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function ImpactorLoginScreen() {
  const navigate = useNavigate();
  const navigateToHero = () => {
    return navigate("/heroes");
  };
  const navigateToProjects = () => {
    return navigate("/projects");
  };
  return (
    <>
      <Navbar />
      <div className="bg-[#071506eb] h-full text-white w-[100%]">
        <h1 className="text-center py-2">Your Heroes</h1>
        <div className="flex flex-col md:w-56 ">
          <div className="flex flex-col space-y-2 mx-3">
            <button className="border px-4 py-2 " onClick={navigateToProjects}>
              Projects
            </button>
            <button className="border px-4 py-2 " onClick={navigateToHero}>
              Heroes
            </button>
            <button
              className="border px-4 py-2 "
              onClick={() => navigate("/country-manager")}
            >
              Country Manager
            </button>
          </div>

          <div className="flex flex-col mx-4 my-10 md:flex-row md:space-x-16">
            <div className="md:flex">
              <div className="flex flex-col space-y-4 md:ml-5">
                <h1>Chat</h1>
                <div className="md:w-80">
                  <Hero />
                </div>
                <div className="md:w-80">
                  <Hero />
                </div>
                <div className="md:w-80">
                  <Hero />
                </div>
                <div className="md:w-80">
                  <Hero />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4 md:ml-5">
              <h1>Courses completed</h1>

              <div className="md:flex flex-col space-y-4">
                {/* progress 1 */}
                <div class="w-12 h-12 rounded-full flex-shrink-0 bg-gray-300 relative">
                  <div
                    class="rounded-full h-full bg-blue-500"
                    style={{ width: "75%" }}
                  ></div>
                  <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                    <span class="text-white text-sm font-medium">75%</span>
                  </div>
                </div>
                {/* end progress */}
                {/* progress 2 */}
                <div class="w-12 h-12 rounded-full flex-shrink-0 bg-gray-300 relative">
                  <div
                    class="rounded-full h-full bg-blue-500"
                    style={{ width: "85%" }}
                  ></div>
                  <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                    <span class="text-white text-sm font-medium">85%</span>
                  </div>
                </div>
              </div>
              {/* end progress */}
            </div>

            <div className="h-24">
              <h1>Usdgs</h1>
            </div>
            <div className="h-24">
              <h1>Industry</h1>
            </div>
            <div className="h-24">
              <h1>Expertise</h1>
            </div>
            <div className="h-24">
              <h1>Price</h1>
            </div>
          </div>
        </div>

        <button className="my-4 mx-2 px-8 py-2 border rounded bg-[#413d5b] md:px-12 md:py-6">
          Wallet
        </button>
      </div>
    </>
  );
}
