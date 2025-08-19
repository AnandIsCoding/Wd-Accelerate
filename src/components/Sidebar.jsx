import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";

const Sidebar = ({ products, setFiltered, isMobileOpen, setIsMobileOpen }) => {
  const [categories, setCategories] = useState([]);
  const [openSection, setOpenSection] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(["All"]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products/categories");
        setCategories(res.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

 const handleCategoryClick = (category) => {
  let updated;

  if (category === "All") {
    // Reset everything
    updated = ["All"];
    setFiltered(products);
  } else if (selectedCategories.includes(category)) {
    updated = selectedCategories.filter((c) => c !== category);
    if (updated.length === 0) {
      updated = ["All"];
      setFiltered(products);
    } else {
      setFiltered(products.filter((p) => updated.includes(p.category)));
    }
  } else {
    updated = [...selectedCategories.filter((c) => c !== "All"), category];
    setFiltered(products.filter((p) => updated.includes(p.category)));
  }

  setSelectedCategories(updated);

  // if (isMobileOpen) setIsMobileOpen(false); // close mobile sidebar
};


  return (
    <div className="w-full text-sm">
      {/* Category Section */}
      <div className="mb-4 mt-14 md:mt-0">
        <h2 className="font-semibold text-gray-800 mb-8 md:mb-2">BY CATEGORY</h2>
        <div className="flex flex-wrap gap-2 md:flex-col">
          <button
            onClick={() => handleCategoryClick("All")}
            className={`px-5 py-2 border text-xs cursor-pointer w-full ${
              selectedCategories?.includes("All") ? "bg-black text-white" : "hover:bg-gray-100"
            }`}
          >
            All
          </button>
          {categories?.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-5 py-2 border text-xs capitalize w-full cursor-pointer ${
                selectedCategories?.includes(cat) ? "bg-black text-white" : "hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Example Expandable Filters */}
      {["Occasion", "Work", "Fabric", "Segment", "Suitable for", "Raw Materials", "Patterns"].map(
        (filter, i) => (
          <div key={i} className="border-b border-gray-200">
            <button
              onClick={() => toggleSection(filter)}
              className="w-full flex justify-between cursor-pointer items-center py-3 text-gray-800 font-medium"
            >
              {filter.toUpperCase()}
              {openSection === filter ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
            </button>
            {openSection === filter && (
              <div className="pb-3 pl-2 text-gray-600 text-sm space-y-1">
                <p className="cursor-pointer hover:text-black">All</p>
                <p className="cursor-pointer hover:text-black">Option 1</p>
                <p className="cursor-pointer hover:text-black">Option 2</p>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Sidebar;
