import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-40">
          <ul>
            <li>UK</li>
            <li>KENYA</li>
            <li>MALAWI</li>
            <li>CONGO</li>
            <li>SOUTH AFRICA</li>
          </ul>

          <ul>
            <li>UK_INFO@MPOWAJO</li>
            <li>KENYA_INFO@MPOWAJO</li>
            <li>MALAWI_INFO@MPOWAJO</li>
            <li>CONGO_INFO@MPOWAJO</li>
            <li>SOUTHAFRICA_INFO@MPOWAJO</li>
          </ul>
        </div>
        <div className="flex items-center justify-center mt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
