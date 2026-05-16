import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Available options with human-readable labels
  const options = [
    { value: "", label: "Featured / Default" },
    { value: "priceAsc", label: "Price: Low to High" },
    { value: "priceDesc", label: "Price: High to Low" }, // Fixed label typo (High to Low)
    { value: "popularity", label: "Popularity" },
  ];

  // Get current value from URL (lowercased to avoid case-sensitivity bugs)
  const currentSortValue = searchParams.get("sortBy") || "";
  const currentOption =
    options.find((opt) => opt.value === currentSortValue) || options[0];

  const handleSortChange = (value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set("sortBy", value); // Kept key as 'sortBy' for clean backend queries
    } else {
      newParams.delete("sortBy"); // Cleans up the URL if default is selected
    }
    setSearchParams(newParams);
    setIsOpen(false); // Smoothly close dropdown after selection
  };

  // Close dropdown instantly if user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="mb-4 flex items-center justify-end font-sans">
      <div className="relative inline-block text-left w-56" ref={dropdownRef}>
        {/* Label description */}
        <span className="absolute -top-2 left-3 px-1.5 bg-white text-[10px] font-semibold tracking-wider text-gray-400 uppercase z-10">
          Sort By
        </span>

        {/* Premium Trigger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between bg-white text-gray-700 font-medium text-sm px-4 py-3 border rounded-xl shadow-sm transition-all duration-300 ease-out cursor-pointer hover:border-gray-400 hover:shadow-md focus:outline-none ${
            isOpen
              ? "border-black ring-4 ring-gray-100 scale-[0.99]"
              : "border-gray-200"
          }`}
        >
          <span className="truncate text-gray-800 font-medium">
            {currentOption.label}
          </span>

          {/* Animated Arrow Icon */}
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform duration-300 ease-out ${
              isOpen ? "rotate-180 text-black" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Floating Animated Dropdown Menu */}
        <div
          className={`absolute right-0 mt-2 w-full origin-top-right bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 transition-all duration-200 ease-out ${
            isOpen
              ? "opacity-100 translate-y-0 scale-100 visible"
              : "opacity-0 -translate-y-2 scale-95 invisible pointer-events-none"
          }`}
        >
          <div className="py-1.5 bg-white divide-y divide-gray-50">
            {options.map((option) => {
              const isSelected = option.value === currentSortValue;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSortChange(option.value)}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-all duration-150 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? "bg-gray-50 text-black font-semibold"
                      : "text-gray-600 hover:bg-gray-50/80 hover:text-black hover:pl-5"
                  }`}
                >
                  <span>
                    {option.value === "" && currentSortValue === ""
                      ? "Default"
                      : option.label}
                  </span>

                  {/* Subtle active checkmark Indicator */}
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortOptions;
