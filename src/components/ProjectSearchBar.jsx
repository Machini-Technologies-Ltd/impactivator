import React from "react";

export default function ProjectSearchBar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center pt-4 mb-2 space-y-2">
      <input
        type="text"
        className="border border-gray-300 rounded px-4 py-2"
        placeholder="Search Project..."
      />
      <button className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Search
      </button>
    </div>
  );
}
