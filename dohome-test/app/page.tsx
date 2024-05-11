"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16 flex flex-wrap justify-center items-center">
      <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden m-4">
        <img
          className="w-full h-48 object-cover object-center"
          src="image1.png"
          alt="Card image"
        />
        <div className="p-4">
          <div className="text-center">
            <Link href={"/test1"}>
              <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Go to Test 1
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden m-4">
        <img
          className="w-full h-48 object-cover object-center"
          src="image2.png"
          alt="Card image"
        />
        <div className="p-4">
          <div className="text-center">
            <Link href={"/shop"}>
              <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Go to Test 2
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
