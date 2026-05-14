import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [SearchParam, setSearchParam] = useSearchParams();

  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    Size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [pricerange, setpricerange] = useState([0, 100]);

  const category = ["Top Wear", "Bottom Wear"];

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
    " Fashionista",
    "ChicStyle",
  ];

  const genders = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...SearchParam]);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      Size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setpricerange([0, params.maxPrice || 100]);
  }, [SearchParam]);

  const handlefilterchange = (e) => {
    const { name, value, checked, type } = e.target;
    // console.log(name, value, checked, type);
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <label
          className="block text-gray-600 font-medium mb-2"
          htmlFor="category"
        >
          Category
        </label>
        {category.map((cat) => (
          <div key={cat} className="flex items-center mb-1">
            <input
              type="radio"
              id={cat} // Unique ID
              name="category"
              value={cat}
              onChange={handlefilterchange}
              className="mr-2 h-4 w-4 accent-blue-600"
            />
            {/* htmlFor links this label to the input with the matching ID */}
            <label htmlFor={cat} className="text-gray-700 cursor-pointer">
              {cat}
            </label>
          </div>
        ))}
      </div>
      {/* Gender Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              id={gender}
              name="gender" // Standard practice: keeps the radio buttons in a group
              value={gender}
              className="mr-2 h-4 w-4 accent-blue-600 cursor-pointer"
            />
            <label
              htmlFor={gender}
              className="text-gray-700 cursor-pointer select-none"
            >
              {gender}
            </label>
          </div>
        ))}
      </div>
      {/* Colour filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              id={color}
              value={color}
              onChange={handlefilterchange}
              className="w-8 h-8 rounded-full border-gray-300 cursor-pointer transition hover:scale-105"
              style={{ backgroundColor: color.toLocaleLowerCase() }}
            ></button>
          ))}
        </div>
      </div>
      {/* Size Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              id={size}
              onChange={handlefilterchange}
              value={size}
              className="mr-2 h-4 w-4 accent-blue-600 focus:ring-blue-400 border-gray-300 "
            />
            <label
              htmlFor={size}
              className="text-gray-600 cursor-pointer select-none"
            >
              {size}
            </label>
          </div>
        ))}
      </div>

      {/* Material Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map((materials) => (
          <div key={materials} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="materials"
              id={materials}
              value={materials}
              onChange={handlefilterchange}
              className="mr-2 h-4 w-4 accent-blue-600 focus:ring-blue-400 border-gray-300 "
            />
            <label
              htmlFor={materials}
              className="text-gray-600 cursor-pointer select-none"
            >
              {materials}
            </label>
          </div>
        ))}
      </div>
      {/* brands Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brands</label>
        {brands.map((brands) => (
          <div key={brands} className="flex items-center mb-0.5 space-y-2.5">
            <input
              type="checkbox"
              name="brands"
              id={brands}
              value={brands}
              onChange={handlefilterchange}
              className="mr-2 h-4 w-4 accent-blue-600 focus:ring-blue-400 border-gray-300 "
            />
            <label
              htmlFor={brands}
              className="text-gray-600 cursor-pointer select-none"
            >
              {brands}
            </label>
          </div>
        ))}
      </div>
      {/* Price Range */}
      <div className="mb-8">
        <label className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>
        <input
          type="range"
          name="pricerange"
          min={0}
          max={100}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-300 accent-blue-600"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>$0</span>
          <span>${pricerange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
