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
    <div className=" transition flex flex-col">
      {/* Image Container with background */}
      <div className={`${bgColor} flex justify-center items-center p-6 md:p-10 `}>
        <img
          src={product?.image}
          alt={product?.title}
          className="h-58 w-auto object-contain"
        />
      </div>

      {/* Details Section (no background) */}
      <div className="py-4 px-0 flex flex-col items-center text-center bg-white ">
        {/* Product Name */}
        <h2 className="text-sm font-semibold text-gray-900">
          {product?.title.slice(0,30)+'...' || "PRODUCT NAME"}
        </h2>

        {/* Price / Login Note */}
        <p className="text-xs text-gray-600 mt-1 flex gap-1">
          <span className="text-gray-500">Sign in</span> or Create an account to see pricing &nbsp;
          <GoHeart size={14}/>
        </p>

        {/* Favorite Icon */}
        
      </div>
    </div>
  );
}

export default Product;
