import React from "react";
import {
  HiBars3BottomRight,
  HiOutlineShoppingBag,
  HiOutlineUser,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div>
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="font-medium text-gray-700 hover:text-black uppercase text-sm"
          >
            Men
          </Link>
          <Link
            to="#"
            className="font-medium text-gray-700 hover:text-black uppercase text-sm"
          >
            Women
          </Link>
          <Link
            to="#"
            className="font-medium text-gray-700 hover:text-black uppercase text-sm"
          >
            Top wear
          </Link>
          <Link
            to="#"
            className="font-medium text-gray-700 hover:text-black uppercase text-sm"
          >
            Bottom wear
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-3.5">
          <Link to="#">
            <HiOutlineUser className="h-6 w-6 text-gray-700 hover:text-black" />
          </Link>
          <button className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700 hover:text-black" />
            <span className="px-2 py-0.5 bg-rabbit-red rounded-2xl text-white text-xs absolute -top-1">
              4
            </span>
          </button>
          <SearchBar />
          <button className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
