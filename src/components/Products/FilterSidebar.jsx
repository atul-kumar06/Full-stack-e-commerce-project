import { color } from "framer-motion";
import React, { useEffect, useState } from "react";
import { SiZebpay } from "react-icons/si";
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
  const colors = ["Red", "Blue", "Green", "Black", "White"];
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

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category Filter */}
      <label className="block text-gray-600 font-medium mb-2">Category</label>
      {category.map((cat) => (
        <div key={cat} className="flex items-center mb-2">
          <input
            type="checkbox"
            id={cat}
            checked={filters.category === cat}
            onChange={() => {
              setFilters((prev) => ({
                ...prev,
                category: prev.category === cat ? "" : cat,
              }));
            }}
          />
          <label htmlFor={cat} className="ml-2 text-gray-600">
            {cat}
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterSidebar;
