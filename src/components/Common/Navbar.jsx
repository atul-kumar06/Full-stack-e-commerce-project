import React, { useState } from "react";

import {
  HiBars3BottomRight,
  HiOutlineShoppingBag,
  HiOutlineUser,
} from "react-icons/hi2";

import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [drawerOpen, setdrawerOpen] = useState(false);
  const [isnavDrawer, setisnavDrawer] = useState(false);

  const togglenavdrawer = () => {
    setisnavDrawer(!isnavDrawer);
  };

  const togglecartdrawer = () => {
    setdrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="smooth-click-animation">
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="font-medium text-gray-700 hover:text-black uppercase text-sm smooth-click-animation"
          >
            Men
          </Link>
          <Link
            to="#"
            className="font-medium text-gray-700 hover:text-black uppercase text-sm smooth-click-animation"
          >
            Women
          </Link>
          <Link
            to="#"
            className="font-medium text-gray-700 hover:text-black uppercase text-sm smooth-click-animation"
          >
            Top wear
          </Link>
          <Link
            to="#"
            className="font-medium text-gray-700 hover:text-black uppercase text-sm smooth-click-animation"
          >
            Bottom wear
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-3.5 ">
          <Link to="#">
            <HiOutlineUser className="h-6 w-6 text-gray-700 hover:text-black" />
          </Link>
          <button
            className="relative hover:text-black active:scale-95 cursor-pointer"
            onClick={togglecartdrawer}
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700 hover:text-black" />
            <span className="px-2 py-0.5 bg-rabbit-red rounded-2xl text-white text-xs absolute -top-1">
              4
            </span>
          </button>
          <SearchBar />
          <button
            className="md:hidden smooth-click-animation"
            onClick={togglenavdrawer}
          >
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} togglecartdrawer={togglecartdrawer} />

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-2/4 sm:w-1/2 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${isnavDrawer ? "translate-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={togglenavdrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600 cursor-pointer" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-3">
            <Link
              to="#"
              onClick={togglenavdrawer}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to="#"
              onClick={togglenavdrawer}
              className="block text-gray-600 hover:text-black"
            >
              Women
            </Link>
            <Link
              to="#"
              onClick={togglenavdrawer}
              className="block text-gray-600 hover:text-black"
            >
              Top Wear
            </Link>
            <Link
              to="#"
              onClick={togglenavdrawer}
              className="block text-gray-600 hover:text-black"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
