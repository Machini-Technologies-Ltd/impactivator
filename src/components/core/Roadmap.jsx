import React from "react";
import RoadMapItem from "./RoadMapItem";

export default function Roadmap() {
  return (
    <div className="my-7 mx-10">
      <div>
        <h1 className=" text-3xl my-4 capitalize">Our Roadmaps</h1>
      </div>
      <div className="flex justify-between items-center">
        <RoadMapItem />
        <RoadMapItem />
        <RoadMapItem />
      </div>
    </div>
  );
}
