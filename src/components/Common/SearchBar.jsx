import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // 👈 new
  const [SearchTerm, setSearchTerm] = useState("");

  const toggleSearch = () => {
    setIsOpen(true);
  };

  const closeSearch = () => {
    // 👈 new close handler
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      setSearchTerm("");
    }, 300); // must match duration-300
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search", SearchTerm);
    closeSearch(); // 👈 use closeSearch instead
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300
        ${
          isOpen
            ? `absolute top-0 left-0 bg-white h-24 z-50 ${isClosing ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"}`
            : "w-auto"
        }`}
    >
      {isOpen ? (
        <form
          className="relative flex items-center justify-center w-full"
          onSubmit={handleSearch}
        >
          <div className="relative w-1/2 flex justify-between items-center">
            <input
              type="text"
              placeholder="Search"
              value={SearchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 cursor-pointer"
            >
              <HiMagnifyingGlass className="h-6 w-6" />
            </button>
          </div>

          <button
            type="button"
            onClick={closeSearch} // 👈 use closeSearch instead
            className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
            <HiMiniXMark className="h-6 w-6" />
          </button>
        </form>
      ) : (
        <button onClick={toggleSearch} className="cursor-pointer">
          <HiMagnifyingGlass className="h-6 w-6 text-gray-700 hover:text-black" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
