import axios from "axios";
import React, { useEffect,useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaAngleDown, FaAngleUp, FaCheck } from "react-icons/fa6";

import Product from "./Product";
import ShimmerProduct from "./ShimmerProduct";
import Sidebar from "./Sidebar";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [selected, setSelected] = useState("Recommended");
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleSortChange = (val) => {
    setShowSort(false);
    setSelected(val);

    if (val === "Recommended") {
      setFiltered(products);
    } else if (val === "Low to High") {
      setFiltered([...filtered].sort((a, b) => a.price - b.price));
    } else if (val === "High to Low") {
      setFiltered([...filtered].sort((a, b) => b.price - a.price));
    }
  };

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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
        setFiltered(res.data);
        setSelected("Recommended");
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="w-full relative">
      {/* Top Bar */}
      <div className="w-full pt-3 border-y-2 border-zinc-50 mt-2 py-3 px-4 md:px-14 flex justify-between items-center">
        <div className="flex gap-4 md:gap-10 items-center">
          <span className="hidden md:block text-zinc-600">{filtered.length} Products</span>
          <span
            className="hidden md:block cursor-pointer text-gray-500"
            onClick={() => setCollapsed((prev) => !prev)}
          >
            {collapsed ? "Show Filter >" : "< Hide Filter"}
          </span>

          {/* Mobile Filter Button */}
          <button
            className="md:hidden px-3 py-1  text-black "
            onClick={() => setIsMobileOpen(true)}
          >
            Filters
          </button>
        </div>

        {/* Sort Dropdown */}
        <div className="relative inline-block" ref={dropdownRef}>
          <button
            onClick={() => setShowSort((prev) => !prev)}
            className="flex items-center justify-between w-40 px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            {selected}
            <span className="ml-2">{showSort ? <FaAngleUp /> : <FaAngleDown />}</span>
          </button>

          {showSort && (
            <div className="absolute top-full right-0 mt-2 py-2 px-2 w-56 bg-white shadow-lg rounded-md z-50 text-sm text-gray-700">
              {["Recommended", "Low to High", "High to Low"].map((option) => (
                <span
                  key={option}
                  className="flex justify-between hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortChange(option)}
                >
                  <p className="p-2">
                    {option === "Low to High" && "Sort by Price: Low to High"}
                    {option === "High to Low" && "Sort by Price: High to Low"}
                    {option === "Recommended" && "Recommended"}
                  </p>
                  {selected === option && <FaCheck size={20} color="blue" />}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sidebar and Content */}
      <div className="pt-5 flex w-full">
        {/* Desktop Sidebar */}
        <div
          className={`hidden md:block h-full transition-all duration-300 ${
            collapsed ? "w-0 overflow-hidden" : "w-64"
          }`}
        >
          {!collapsed && (
            <div className="p-4">
              <Sidebar
                products={products}
                filtered={filtered}
                setFiltered={setFiltered}
                isMobileOpen={isMobileOpen}
                setIsMobileOpen={setIsMobileOpen}
              />
            </div>
          )}
        </div>

        {/* Product Grid */}
        <div className={`flex-1 transition-all duration-300 ease-in-out`}>
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ${
              collapsed ? "lg:grid-cols-6" : "lg:grid-cols-5"
            } gap-2`}
          >
            {loading
              ? Array.from({ length: 20 }).map((_, index) => (
                  <ShimmerProduct key={index} index={index} />
                ))
              : filtered.map((product, index) => (
                  <Product key={index} product={product} index={index} />
                ))}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="fixed inset-0 z-50 flex pointer-events-none">
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
            isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          }`}
          onClick={() => setIsMobileOpen(false)}
        ></div>

        {/* Slide-in panel */}
        <div
          className={`relative bg-white w-1/2 sm:w-3/4 h-full shadow-lg z-50 p-4 overflow-y-auto transform transition-transform duration-300 ${
            isMobileOpen ? "translate-x-0 pointer-events-auto" : "-translate-x-full"
          }`}
        >
          {/* Close button */}
          <button
            className="absolute top-18 right-3 text-gray-600"
            onClick={() => setIsMobileOpen(false)}
          >
            <FaTimes size={20} />
          </button>

          <Sidebar
            products={products}
            filtered={filtered}
            setFiltered={setFiltered}
            isMobileOpen={isMobileOpen}
            setIsMobileOpen={setIsMobileOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
