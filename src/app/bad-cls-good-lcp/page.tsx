"use client";

import React, { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";

const TestPage: NextPage = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Lazy-loaded content at the top */}
      <div className="bg-gray-200 p-8 rounded mt-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Lazy Content (LCP + CLS)</h2>
        <LazyContent />
        <p className="text-gray-600 mt-2">
        Ten obraz jest mały z opóźnionym ładowaniem i nie posiada placeholdera. Poniżej jest duży obraz liczony jako LCP.
        </p>
      </div>

      <h1 className="text-3xl font-bold mb-4">Test Page</h1>
      <label className="flex flex-col mb-4">
        <span className="mb-1">Test Input:</span>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="border border-gray-300 rounded px-3 py-2"
        />
      </label>
      <br />
      <br />
      <div style={{ width: "100%", height: "400px", position: "relative" }}>
            <Image
              src="https://img.freepik.com/darmowe-zdjecie/lotnicze-piekne-zdjecia-wybrzeza-ze-wzgorzami-na-tle-o-zachodzie-slonca_181624-24143.jpg?w=3918"
              fill={true}
              quality={100}
              placeholder="empty"
              className="rounded next-image"
              alt="Picture of the cls"
            />
          </div>
    </div>
  );
};

const LazyContent = () => {
  const [showContent, setShowContent] = useState(false);

  // Simulating lazy loading
  setTimeout(() => {
    setShowContent(true);
  }, 2000);

  return (
    <>
      {showContent && (
        <>
          <div style={{ width: "100%", height: "200px", position: "relative" }}>
            <Image
              src="https://img.freepik.com/darmowe-zdjecie/lotnicze-piekne-zdjecia-wybrzeza-ze-wzgorzami-na-tle-o-zachodzie-slonca_181624-24143.jpg?w=3918"
              fill={true}
              quality={100}
              placeholder="empty"
              className="rounded next-image"
              alt="Picture of the cls"
            />
          </div>
        </>
      )}
    </>
  );
};

export default TestPage;
