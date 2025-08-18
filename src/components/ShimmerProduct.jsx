// ShimmerProduct.jsx
import React from "react";

function ShimmerProduct({ index }) {
  // Same pastel backgrounds for shimmer image container
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
    <div className="transition flex flex-col animate-pulse">
      {/* Image shimmer container */}
      <div
        className={`${bgColor} flex justify-center items-center p-6 md:p-10`}
      >
        <div className="h-40 w-28 bg-gray-50 rounded"></div>
      </div>

      {/* Details shimmer section */}
      <div className="py-4 px-0 flex flex-col items-center text-center bg-white space-y-2 w-full">
        {/* Title shimmer */}
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>

        {/* Price/Login shimmer */}
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
}

export default ShimmerProduct;
