"use client";

import React, { useState } from "react";
import { NextPage } from "next";
import BigImage from "@/components/images/BigImage";
import SmallestImage from "@/components/images/SmallestImage";
import SmallestImagePlaceholder from "@/components/images/SmallestImagePlaceholder";
import logPageReload from "@/helpers/console/logPageReload";
import { usePathname } from "next/navigation";

const Page: NextPage = () => {
  logPageReload(usePathname());
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Server rendering</h1>
      <BigImage />

      <div className="bg-gray-200 p-8 rounded mt-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Lazy (Good CLS i LCP)</h2>
        <LazyContent />
      </div>

      <div className="bg-gray-200 p-8 rounded mt-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Wnioski z podstrony</h2>
        <p className="text-gray-600 mt-2">
          - lazy load: 4s; placeholder: tak; największy content: nie;
        </p>
        <p className="text-gray-600 mt-2">
          - Duży content w viewporcie powinien zostać wczytany jak najszybciej, a lazy load
          musi mieć placeholder.
        </p>
        <p className="text-gray-600 mt-2">
          - Viewport będzie się zmieniać w zależności od urządzenia, scrolla, pozycji startowej, więc trzeba zadbać o wszystkie potencjalne viewporty.
        </p>
        <p className="text-gray-600 mt-2">
          - W każdym potencjalnym viewporcie długi lazy content nie powinien być największym contentem.
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

  return <>{showContent ? <SmallestImage /> : <SmallestImagePlaceholder />}</>;
};

export default Page;
