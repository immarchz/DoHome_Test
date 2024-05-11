"use client";

import React, { useState, useEffect } from "react";
import { Rating } from "@material-tailwind/react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  discountedPrice: string;
}

export default function Category() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        const newData = data.products.map((item: Product) => {
          const newPrice =
            item.price - (item.price * item.discountPercentage) / 100;

          return { ...item, discountedPrice: newPrice || 0 };
        });

        setProducts(newData);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="rounded overflow-hidden border relative flex flex-col justify-between h-[500px]"
        >
          <div className="h-1/2  flex justify-center items-center">
            <img className="w-full h-full " src={product.thumbnail} alt={""} />
          </div>

          <div className="px-6 py-4 h-1/2 flex flex-col text-sm">
            <div className="mb-2">
              <span className="mr-1 ">{product.brand}</span>
              <span>{product.title}</span>
            </div>
            <div>
              <p className="text-gray-700 text-sm">{product.description}</p>
            </div>
            <div className="w-1">
              <Rating
                value={Math.floor(product.rating)}
                readonly
                style={{
                  fontSize: "24px",
                }}
              />
            </div>

            <div className="mt-2">
              <p className="text-gray-700">
                <span className="mr-1 text-red-400">
                  ${parseInt(product.discountedPrice)}
                </span>
                <span className="text-gray-400 line-through">
                  ${product.price}
                </span>
                <span className="text-gray-400">/ชิ้น</span>
              </p>
            </div>
            <div className="flex items-end ">
              <svg
                className="h-4 w-4 text-red-500 mt-8 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
