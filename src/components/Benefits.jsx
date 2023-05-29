import React, { useState } from "react";
import MemberBenefit from "./MemberBenefit";

export default function Benefits() {
  const [content, setContent] = useState([
    {
      title: "SOCIAL ENTREPRENEUR",
      items: [
        "Funding for the first Mile (Learn to Earn)",
        "Flexible Online Training ",
        "Prevention from Exploitation  via  their 3D Avatar Twin",
        "Helping local communities measurably thrive ",
        "Supportive Framework",
        "Mentorship",
        "Being of part of network ",
      ],
    },
    {
      title: "BUSINESS",
      items: [
        "Transparency through regular updates",
        "Access to uptodate Expertise High Quality Data from new  Territories' ",
        "Positive Stories about Empowerment",
        "Opportunity to get to know  the social entrepreneur before full donation of interested project",
        "Higher likelihood of successful project outcome ",
        "Exclusive access to digital twin avatar asset at any time ",
        "Digital assets owned and tradeable back into the marketplace",
      ],
    },
  ]);
  return (
    <div className=" ">
      <div className="my-3">
        <h2 className="capitalize text-center mr-4 text-3xl">What we Offer</h2>
        <h1 className="text-center font-bold mr-4 text-2xl">Our Benefits</h1>
      </div>
      <div className="flex flex-col mx-4 mb-4 md:mx-24 space-y-2 md:grid grid-cols-2 md:space-x-3">
        {content.map((content) => (
          <MemberBenefit content={content} />
        ))}
      </div>
    </div>
  );
}
