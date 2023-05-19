import React from "react";

export default function RoadMapItem() {
  return (
    <div>
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          class="w-24 h-24 rounded-full mx-auto"
          src="https://cdn.plainconcepts.com/wp-content/uploads/2022/05/nft-blockchain-metaverse.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 text-center space-y-4">
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              Impactivator B2B SAAS APP
            </div>
            <div class="text-slate-700 dark:text-slate-500">Q2 2023</div>
          </figcaption>
          <p class="text-lg font-medium">
            Impactivator is a Social Impact Business Platform which gives
            businesses an opportunity to support underserved social
            entrepreneurs in developing countries. The platform gives social
            entrepreneurs an opportunity to sell their high quality expertise in
            an online international marketplace hosted on blockchain technology.
          </p>
        </div>
      </figure>
    </div>
  );
}
