"use client";

import React, { useState } from "react";
import { NextPage } from "next";
import SmallImage from "@/components/images/SmallImage";
import BigImage from "@/components/images/BigImage";
import BigImagePlaceholder from "@/components/images/BigImagePlaceholder";

const Page: NextPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-200 p-8 rounded mt-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Lazy (Good CLS + Bad LCP)</h2>
        <LazyContent />
      </div>

      <h1 className="text-3xl font-bold mb-4">Server rendering</h1>
      <SmallImage />

      <div className="bg-gray-200 p-8 rounded mt-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Wnioski z podstrony</h2>
        <p className="text-gray-600 mt-2">
          - lazy load: tak; placeholder: tak; największy content: tak;
        </p>
        <p className="text-gray-600 mt-2">
          - Występuje gdy lazy loady posiadają placeholdery, ale duży content
          ładuje się zbyt długo.
        </p>
        <p className="text-gray-600 mt-2">
          - Na urządzeniu z małym ekranem, gdy viewport znajduje się na dole
          strony największym contentem będzie zdjęcie z Server rendering (a LCP
          będzie bardzo dobre).
        </p>
        <p className="text-gray-600 mt-2">
          - W efekcie ta sama strona na tym samym urządzeniu
          <b> może mieć różny wynik web vitalsów</b> z powodu różnej akcji
          usera.
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

  return <>{showContent ? <BigImage /> : <BigImagePlaceholder />}</>;
};

export default Page;
