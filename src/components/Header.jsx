import React, { useState } from "react";
import {
  FiHeart,
  FiMenu,
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiX,
} from "react-icons/fi";
import { TiInfinityOutline } from "react-icons/ti";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full  bg-white sticky top-0 z-[999]">
        <div className="container mx-auto px-2 md:px-4 py-3 flex items-center justify-between">
          {/* Left side: Hamburger + Brand */}
          <div className="flex items-center space-x-3">
            {/* Hamburger Menu (always visible on mobile) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden focus:outline-none cursor-pointer"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Brand Icon */}
            <TiInfinityOutline size={28} />
          </div>

          {/* Center Logo */}
          <div className="text-xl font-bold md:ml-60">LOGO</div>

          {/* Right Side (Mobile + Desktop) */}
          <div className="flex items-center mr-[-10px] md:mr-0 space-x-3 md:space-x-5">
            <FiSearch className="w-5 h-5 cursor-pointer" />
            <FiHeart className="w-5 h-5 cursor-pointer" />
            <FiShoppingBag className="w-5 h-5 cursor-pointer" />

            {/* Desktop-only icons */}
            <div className="hidden md:flex items-center space-x-5">
              <FiUser className="w-5 h-5 cursor-pointer" />
              {/* Language Selector */}
              <div className="flex items-center justify-center">
                <select className="bg-white border-0  text-gray-700 text-sm rounded-xl px-4 py-2  cursor-pointer transition">
                  <option className="text-gray-700">ENG</option>
                  <option className="text-gray-700">Hindi</option>
                  <option className="text-gray-700">Bhojpuri</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Side Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-50 border-b uppercase px-4 py-4 flex justify-between">
            <a href="#" className="text-sm font-medium ">
              Shop
            </a>
            <a href="#" className="text-sm font-medium ">
              Skills
            </a>
            <a href="#" className="text-sm font-medium ">
              Stories
            </a>
            <a href="#" className="text-sm font-medium">
              About
            </a>
            <a href="#" className="text-sm font-medium">
              Contact US
            </a>
          </div>
        )}
      </header>
      <div className="mt-3 border-b-2 border-gray-200 uppercase px-4 py-4 hidden md:flex justify-center gap-[8%] font-semibold">
        <a href="#">Shop</a>
        <a href="#">Skills</a>
        <a href="#">Stories</a>
        <a href="#">About</a>
        <a href="#">Contact US</a>
      </div>
    </>
  );
}
