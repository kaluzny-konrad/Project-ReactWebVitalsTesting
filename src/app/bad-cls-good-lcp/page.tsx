"use client";

import React, { useState } from "react";
import { NextPage } from "next";
import BigImage from "@/components/images/BigImage";
import SmallImage from "@/components/images/SmallImage";

const Page: NextPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-200 p-8 rounded mt-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Lazy (Bad CLS + Good LCP)</h2>
        <LazyContent />
      </div>

      <h1 className="text-3xl font-bold mb-4">Server rendering</h1>
      <BigImage />

      <div className="bg-gray-200 p-8 rounded mt-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Wnioski z podstrony</h2>
        <p className="text-gray-600 mt-2">
          - lazy load: tak; placeholder: nie; największy content: nie;
        </p>
        <p className="text-gray-600 mt-2">
          - Występuje gdy lazy loadujemy mały content bez placeholdera.
        </p>
        <p className="text-gray-600 mt-2">
          - Aby uzyskać ten stan w viewporcie usera musi pokazać się duży
          content bez lazy loada (lub załadować się szybko) - inaczej LCP
          również będzie złe.
        </p>
        <p className="text-gray-600 mt-2">
          - Jeżeli user nie ma w viewPorcie contentu bez placeholdera, to nie
          odczuje skoku strony - CLS będzie dobry.
        </p>
        <p className="text-gray-600 mt-2">
          - Na podstronie da się to uzyskać scrollując się w dół, zanim obrazek
          się doładuje.
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

  return <>{showContent && <SmallImage />}</>;
};

export default Page;
