import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

const Main = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [selected, setSelected] = useState("Recommended");

  const dropdownRef = useRef(null);

  const handleSortChange = (val) => {
    setShowSort(false);
    setSelected(val);
    console.log("Sort selected --->> ", selected);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSort(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="w-full pt-3 border-y-2 border-zinc-50 mt-2 py-3 px-14 flex justify-between relative">
        {/* Left side: product length & filter toggle */}
        <div className="flex gap-10">
          <span className="hidden md:block">Product length</span>
          <span
            className="hidden md:block cursor-pointer text-gray-500"
            onClick={() => setCollapsed((prev) => !prev)}
          >
            {collapsed ? "Show Filter >" : "< Hide Filter"}
          </span>
        </div>

        {/* Right side: sort dropdown */}
        <div className="relative inline-block" ref={dropdownRef}>
          {/* Trigger */}
          <button
            onClick={() => setShowSort((prev) => !prev)}
            className="flex items-center justify-between w-40 px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            {selected}
            <span className="ml-2">
              {showSort ? <FaAngleUp /> : <FaAngleDown />}
            </span>
          </button>

          {/* Dropdown */}
          {showSort && (
            <div className="absolute top-full right-0 mt-2 py-5 px-2 w-56 bg-white shadow-lg rounded-md z-50 text-sm text-gray-700">
              <span onClick={() => handleSortChange("Recommended")} className="flex justify-between">
                <p className="p-2 hover:bg-gray-100 cursor-pointer">
                  Recommended
                </p>
                {selected === "Recommended" && (
                  <FaCheck size={20} color="blue" />
                )}
              </span>
              <span className="flex justify-between" onClick={() => handleSortChange("Low to High")}>
                <p
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  Sort by Price: Low to High
                </p>
                {selected === "Low to High" && (
                  <FaCheck size={20} color="blue" />
                )}
              </span>

              <span className="flex justify-between" onClick={() => handleSortChange("High to Low")}>
                <p
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  Sort by Price: High to Low
                </p>
                {selected === "High to Low" && (
                  <FaCheck size={20} color="blue" />
                )}
              </span>

              <p className="p-2 hover:bg-gray-100 cursor-pointer">
                Sort by Newest
              </p>
              <p className="p-2 hover:bg-gray-100 cursor-pointer">
                Sort by Popularity
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar and Content */}
      <div className="pt-5">
        <div className="flex w-full">
          {/* Sidebar */}
          <div
            className={`hidden md:block h-full transition-all duration-300 ease-in-out ${
              collapsed ? "w-0 overflow-hidden" : "w-64"
            }`}
          >
            {!collapsed && (
              <div className="p-4">
                <Sidebar />
              </div>
            )}
          </div>

          {/* Main content */}
          <div
            className={`flex-1 transition-all duration-300 ease-in-out ${
              collapsed ? "" : "md:block"
            }`}
          >
            <div className="p-4">Main Content Area</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

// firebase initfirebase ini
