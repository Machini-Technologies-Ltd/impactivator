import React from "react";
import Marquee from "react-fast-marquee";
function Media() {
  return (
    <div className="p-6 mx-4 md:mx-16">
      <h1 className="text-center capitalize text-4xl my-4 ">Media Sponsors</h1>
      <Marquee>
        <div className="p-5 items-center">
          <img
            className="md:h-40 h-32 mr-4 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvw0weSGajjA6MTAIVR5olptDeidqLHq5q3A&usqp=CAU"
            alt="BBC Logo"
          />
        </div>
        <div className="p-5">
          <img
            className="h-40 mr-4 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAEPFq3b-qxVoe59yH262_qmYGBIZ7xAtQog&usqp=CAU"
            alt="BBC Logo"
          />
        </div>
        <div className="p-5">
          <img
            className="h-40 mr-4 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkbzhiugNPRgcOJH-6fGHB60Hz3C35eHhwA&usqp=CAU"
          />
        </div>
        <div className="p-5">
          <img
            className="h-40 mr-4 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDAFXyPSN0kYbK6gR24ezBtN1w94yimJuntw&usqp=CAU"
            alt="BBC Logo"
          />
        </div>
      </Marquee>
    </div>
  );
}

export default Media;
