import React from "react";
import { IoMdClose } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi";
import Cartcontent from "../Cart/Cartcontent";
import { useNavigate, useNavigation } from "react-router-dom";

const CartDrawer = ({ drawerOpen, togglecartdrawer }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    togglecartdrawer();
    navigate("/checkout");
  };
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={togglecartdrawer}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-500
          ${drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full z-50 flex flex-col bg-white shadow-2xl
          w-full sm:w-96 md:w-105
          transition-transform duration-500 ease-in-out
          ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <div className="flex items-center gap-2">
            <HiShoppingBag className="h-5 w-5 text-gray-700" />
            <h2 className="text-lg font-semibold text-gray-900">Your Cart</h2>
          </div>
          <button
            onClick={togglecartdrawer}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Close cart"
          >
            <IoMdClose className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Scrollable Cart Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          <Cartcontent />
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t bg-white">
          <button
            className="w-full bg-black text-white py-3 rounded-lg font-semibold
                       hover:bg-gray-800 active:scale-95
                       transition-all duration-200"
            onClick={handleCheckout}
          >
            Checkout
          </button>
          <p className="text-xs text-gray-400 mt-3 text-center tracking-tight">
            Shipping, taxes, and discount codes calculated at checkout.
          </p>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
