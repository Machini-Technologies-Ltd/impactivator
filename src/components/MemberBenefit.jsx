import React from "react";
import { FaCheck } from "react-icons/fa";
export default function MemberBenefit({ content }) {
  return (
    <div className=" p-2 rounded shadow my-3">
      <h2 className=" border-b-2 my-2 text-xl pb-2">{content.title}</h2>
      <ul className="flex flex-col space-y-4">
        {content.items.map((item) => (
          <li className="  flex  items-center">
            <span className="mr-2">
              <FaCheck className="text-[green]" />
            </span>{" "}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
