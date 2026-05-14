import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa6";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPages = () => {
  const [Products, setProducts] = useState([]);

  const sidebarRef = useRef(null); // Ref to my side button

  const buttonRef = useRef(null); // Ref to button

  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setisSidebarOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setisSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: "1",
          price: 120,
          name: "Product-1",
          images: [
            {
              url: "https://picsum.photos/500/500?random=12",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          _id: "2",
          price: 120,
          name: "Product-2",
          images: [
            {
              url: "https://picsum.photos/500/500?random=13",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          _id: "3",
          name: "Product-3",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=14",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          _id: "4",
          name: "Product-4",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=15",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          _id: "4",
          name: "Product-4",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=16",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          _id: "4",
          name: "Product-4",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=17",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          _id: "4",
          name: "Product-4",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=18",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          _id: "4",
          name: "Product-4",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=19",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          _id: "4",
          name: "Product-4",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=20",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          _id: "4",
          name: "Product-4",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=21",
              altText: "Stylish Jacket",
            },
          ],
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);


  
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter Button */}
      <button
        ref={buttonRef}
        className="lg:hidden border p-2 flex justify-center items-center"
        onClick={toggleSidebar}
      >
        <FaFilter className="mr-2" />
        Filter
      </button>

      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-20 left-0 w-64 bg-white shadow-lg transition-transform duration-300 lg:translate-x-0 lg:static lg:shadow-none`}
      >
        <FilterSidebar />
      </div>
      <div className="grow p-4">
        <h2 className="text-2xl uppercase mb-4 ">All Collection</h2>
        {/* Sortoption */}
        <SortOptions />
        {/* Product-grid */}
        <ProductGrid products={Products} />
      </div>
    </div>
  );
};

export default CollectionPages;
