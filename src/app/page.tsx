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
      <LazyContent />

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
      <Image
        src="/images/cls.jpg"
        width={300}
        height={100}
        className="rounded next-image"
        alt="Picture of the cls"
        priority
      />
    </div>
  );
};

const LazyContent = () => {
  const [showContent, setShowContent] = useState(false);

  // Simulating lazy loading
  setTimeout(() => {
    setShowContent(true);
  }, 500);

  return (
    <>
      {showContent && (
        <div className="bg-gray-200 p-8 rounded mt-4 mb-4">
          <h2 className="text-xl font-bold mb-2">Lazy Content (LCP + CLS)</h2>
          <Image
            src="/images/cls.jpg"
            width={300}
            height={100}
            className="rounded next-image"
            alt="Picture of the cls"
            priority
          />
          <p className="text-gray-600 mt-2">
            This is a large lazy-loaded image for LCP testing.
          </p>
        </div>
      )}
    </>
  );
};

export default TestPage;
