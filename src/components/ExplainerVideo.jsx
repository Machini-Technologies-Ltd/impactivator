import React from "react";

export default function ExplainerVideo() {
  return (
    <div className=" rounded-lg overflow-hidden mx-10 mt-6">
      <h1 className="text-3xl my-4 capitalize">Impactivator Explainer Video</h1>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full"
          height="500"
          src="https://www.youtube.com/embed/q8alazqxEFQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
