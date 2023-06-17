"use client";

import React, { useState } from "react";
import { NextPage } from "next";
import BigImage from "@/components/images/BigImage";
import SmallImage from "@/components/images/SmallImage";

const Page: NextPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-200 p-8 rounded mt-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Lazy (Bad CLS i LCP)</h2>
        <LazyContent />
      </div>

      <h1 className="text-3xl font-bold mb-4">Server rendering</h1>
      <SmallImage />

      <div className="bg-gray-200 p-8 rounded mt-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Wnioski z podstrony</h2>
        <p className="text-gray-600 mt-2">
          - lazy load: 4s; placeholder: nie; największy content: tak;
        </p>
        <p className="text-gray-600 mt-2">
          - Występuje przy lazy loadowaniu dużego contentu bez placeholdera w{" "}
          <b>viewporcie usera</b>.
        </p>
        <p className="text-gray-600 mt-2">
          - Viewport będzie różny dla mobile, desktop, tabletu pionowo i tabletu
          poziomo. Scroll wpływa na viewport.
        </p>
      </div>
    </div>
  );
};

const LazyContent = () => {
  const [showContent, setShowContent] = useState(false);

  // Simulating lazy loading
  setTimeout(() => {
    setShowContent(true);
  }, 4000);

  return <>{showContent && <BigImage />}</>;
};

export default Page;
