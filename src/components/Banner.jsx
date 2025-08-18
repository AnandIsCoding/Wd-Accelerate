import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center justify-center bg-white px-6 pt-2">
      <div className="max-w-3xl text-center">
        <h1 className="text-xl text-gray-700 md:text-4xl font-bold ">
          DISCOVER OUR PRODUCTS
        </h1>
        <p className="hidden md:block text-gray-600">
          Style isn’t just what you wear – it’s how you live. Discover
          trendsetting outfits, chic accessories, and timeless classics that
          redefine your wardrobe every season. With premium quality, exclusive
          collections, and everyday affordability.
        </p>
      </div>
    </div>
  );
};

export default Banner;
