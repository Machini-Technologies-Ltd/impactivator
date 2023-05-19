import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between  p-2 items-center text-white bg-[#11243bb1]">
        <ul>
          <li>Impactivator</li>
        </ul>
        <ul className="flex space-x-14 ">
          <li>Hero</li>
          <li>About</li>
          <li>Learn</li>
          <li>Help</li>
        </ul>
        <ul className="flex items-center p-2">
          <li>Get Started {">>"}</li>
        </ul>
      </nav>
    </div>
  );
}
