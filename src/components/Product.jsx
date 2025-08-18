import React from "react";
import { GoHeart } from "react-icons/go";

function Product({ product, index }) {
  // Mild pastel backgrounds only for IMAGE section
  const colors = [
    "bg-red-50",
    "bg-blue-50",
    "bg-green-50",
    "bg-yellow-50",
    "bg-purple-50",
    "bg-pink-50",
    "bg-indigo-50",
  ];
  const bgColor = colors[index % colors.length];

  return (
    <div className="transition flex flex-col">
      {/* Image Container with background */}
      <div
        className={`${bgColor} flex justify-center items-center p-6 md:p-10`}
      >
        <img
          src={product?.image}
          alt={product?.title.slice(0, 30) + "..."}
          className="h-58 w-auto object-contain"
        />
      </div>

      {/* Details Section */}
      <div className="py-4 px-2 flex flex-col items-center text-center bg-white">
        {/* Product Name */}
        <h2 className="text-sm font-semibold text-gray-900">
          {product?.title.slice(0, 25) + "..." || "PRODUCT NAME"}
        </h2>

        {/* Price / Login Note */}
        <div className="mt-2 flex items-center justify-center flex-wrap gap-1 text-xs text-gray-600">
          <p className="text-gray-500 whitespace-nowrap">Sign in</p>
          <span className="sm:inline">or</span>
          <p className="whitespace-nowrap">Create an account</p>
          <span className="hidden sm:inline">to see pricing</span>
          <GoHeart size={14} className="ml-1 text-gray-500" />
        </div>
      </div>
    </div>
  );
}

export default Product;
