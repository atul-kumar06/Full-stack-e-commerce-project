import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false); // New: Track animation state

  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    name: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [pricerange, setpricerange] = useState([0, 100]);

  const categoryOptions = ["Top Wear", "Bottom Wear"];
  const colors = ["Red", "Blue", "Green", "Black", "Pink"];
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const materials = [
    "Cotton",
    "Polyester",
    "Wool",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];
  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];
  const genders = ["Men", "Women"];

  // Sync state from URL on load or URL change
  useEffect(() => {
    const params = Object.fromEntries([...searchParam]);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      name: params.name || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: Number(params.minPrice) || 0,
      maxPrice: Number(params.maxPrice) || 100,
    });

    setpricerange([
      Number(params.minPrice) || 0,
      Number(params.maxPrice) || 100,
    ]);

    // Fake a tiny delay or resolve instantly when the URL finishes updating
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading animation
    }, 300);

    return () => clearTimeout(timer);
  }, [searchParam]);

  const handlefilterchange = (e) => {
    setIsLoading(true); // Start loading animation immediately on click
    const { name, value, checked, type } = e.target;
    const newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }

    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();

    Object.keys(newFilters).forEach((key) => {
      const value = newFilters[key];

      if (Array.isArray(value) && value.length > 0) {
        params.append(key, value.join(","));
      } else if (value && !Array.isArray(value)) {
        params.append(key, value);
      }
    });

    setSearchParam(params);
  };

  const handlePriceChange = (e) => {
    setIsLoading(true);
    const value = Number(e.target.value);
    setpricerange([0, value]);

    const newFilters = { ...filters, maxPrice: value };
    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  return (
    <div className="p-4 border-r border-gray-100 max-w-xs bg-white relative transition-all duration-300">
      {/* Top Header Row with dynamic spinning loader */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-800 tracking-tight">
          Filter
        </h3>
        {isLoading && (
          <div className="flex items-center gap-1.5 text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-md animate-fade-in">
            {/* Spinning SVG Circle */}
            <svg
              className="animate-spin h-3.5 w-3.5 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Updating...
          </div>
        )}
      </div>

      {/* Main Filter Wrapper Container - subtle blur & opacity drop when loading */}
      <div
        className={`transition-all duration-300 ${isLoading ? "opacity-60 pointer-events-none blur-[0.5px]" : "opacity-100"}`}
      >
        {/* Category Filter */}
        <div className="mb-6 bg-gray-50/50 p-3 rounded-xl border border-gray-100/60 hover:shadow-sm transition-all">
          <label className="block text-gray-700 font-medium text-sm mb-2.5">
            Category
          </label>
          {categoryOptions.map((cat) => (
            <div key={cat} className="flex items-center mb-2 last:mb-0 group">
              <input
                type="radio"
                id={cat}
                name="category"
                value={cat}
                checked={filters.category === cat}
                onChange={handlefilterchange}
                className="mr-2.5 h-4 w-4 accent-blue-600 cursor-pointer transition-transform group-hover:scale-105"
              />
              <label
                htmlFor={cat}
                className="text-sm text-gray-600 cursor-pointer select-none group-hover:text-gray-900 transition-colors"
              >
                {cat}
              </label>
            </div>
          ))}
        </div>

        {/* Gender Filter */}
        <div className="mb-6 bg-gray-50/50 p-3 rounded-xl border border-gray-100/60 hover:shadow-sm transition-all">
          <label className="block text-gray-700 font-medium text-sm mb-2.5">
            Gender
          </label>
          {genders.map((gender) => (
            <div
              key={gender}
              className="flex items-center mb-2 last:mb-0 group"
            >
              <input
                type="radio"
                id={gender}
                name="gender"
                value={gender}
                checked={filters.gender === gender}
                onChange={handlefilterchange}
                className="mr-2.5 h-4 w-4 accent-blue-600 cursor-pointer transition-transform group-hover:scale-105"
              />
              <label
                htmlFor={gender}
                className="text-sm text-gray-600 cursor-pointer select-none group-hover:text-gray-900 transition-colors"
              >
                {gender}
              </label>
            </div>
          ))}
        </div>

        {/* Color Filter */}
        <div className="mb-6 p-1">
          <label className="block text-gray-700 font-medium text-sm mb-2.5">
            Color
          </label>
          <div className="flex flex-wrap gap-2.5">
            {colors.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => {
                  setIsLoading(true);
                  const newFilters = {
                    ...filters,
                    color: filters.color === color ? "" : color,
                  };
                  setFilters(newFilters);
                  updateURLParams(newFilters);
                }}
                className={`w-7 h-7 rounded-full cursor-pointer transition-all duration-200 hover:scale-110 shadow-sm border-2 ${
                  filters.color === color
                    ? "border-blue-600 ring-2 ring-blue-100 scale-110"
                    : "border-white ring-1 ring-gray-200"
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              ></button>
            ))}
          </div>
        </div>

        {/* Size Filter */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium text-sm mb-2">
            Size
          </label>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <label
                key={size}
                htmlFor={size}
                className={`flex items-center justify-center border rounded-lg p-2 text-xs font-medium cursor-pointer transition-all select-none ${
                  filters.size.includes(size)
                    ? "border-blue-600 bg-blue-50/50 text-blue-700 font-semibold"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300"
                }`}
              >
                <input
                  type="checkbox"
                  name="size"
                  id={size}
                  onChange={handlefilterchange}
                  value={size}
                  checked={filters.size.includes(size)}
                  className="hidden" // Hiding structural checkbox to style custom responsive button tiles
                />
                {size}
              </label>
            ))}
          </div>
        </div>

        {/* Material Filter */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium text-sm mb-2">
            Material
          </label>
          <div className="max-h-36 overflow-y-auto pr-1 space-y-1.5 scrollbar-thin">
            {materials.map((mat) => (
              <div key={mat} className="flex items-center group">
                <input
                  type="checkbox"
                  name="material"
                  id={mat}
                  value={mat}
                  onChange={handlefilterchange}
                  checked={filters.material.includes(mat)}
                  className="mr-2 h-4 w-4 rounded text-blue-600 border-gray-300 accent-blue-600 cursor-pointer transition-transform group-hover:scale-105"
                />
                <label
                  htmlFor={mat}
                  className="text-sm text-gray-600 cursor-pointer select-none group-hover:text-gray-900 transition-colors"
                >
                  {mat}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Brands Filter */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium text-sm mb-2">
            Brands
          </label>
          <div className="max-h-36 overflow-y-auto pr-1 space-y-1.5 scrollbar-thin">
            {brands.map((br) => (
              <div key={br} className="flex items-center group">
                <input
                  type="checkbox"
                  name="brand"
                  id={br}
                  value={br}
                  onChange={handlefilterchange}
                  checked={filters.brand.includes(br)}
                  className="mr-2 h-4 w-4 rounded text-blue-600 border-gray-300 accent-blue-600 cursor-pointer transition-transform group-hover:scale-105"
                />
                <label
                  htmlFor={br}
                  className="text-sm text-gray-600 cursor-pointer select-none group-hover:text-gray-900 transition-colors"
                >
                  {br}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <label className="text-gray-700 font-medium text-sm">
              Price Range
            </label>
            <span className="text-xs font-semibold px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full transition-all">
              $0 - ${pricerange[1]}
            </span>
          </div>
          <input
            type="range"
            name="maxPrice"
            min={0}
            max={100}
            value={pricerange[1]}
            onChange={handlePriceChange}
            className="w-full h-1.5 rounded-lg appearance-none cursor-pointer bg-gray-200 accent-blue-600 transition-all hover:bg-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
