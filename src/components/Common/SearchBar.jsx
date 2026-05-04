import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [isOpen, setisOpen] = useState(false);

  const [SearchTerm, setSearchTerm] = useState("");

  const toggleSearch = () => {
    setisOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search", SearchTerm);
    setisOpen(!isOpen);
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "absolute top-0 left-0  bg-white h-24 z-50" : "w-auto"}`}
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
            {/* Searchicon */}

            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <HiMagnifyingGlass className="h-6 w-6" />
            </button>
          </div>

          {/* closebutton */}
          <button
            type="button"
            onClick={toggleSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
            <HiMiniXMark className="h-6 w-6" />
          </button>
        </form>
      ) : (
        <button onClick={toggleSearch}>
          <HiMagnifyingGlass className="h-6 w-6 text-gray-700 hover:text-black" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
