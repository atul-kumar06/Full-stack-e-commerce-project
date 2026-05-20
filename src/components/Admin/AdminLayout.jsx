import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import AdminSideBar from "./AdminSideBar";
import { Outlet, useLocation } from "react-router-dom"; // 👈 Added useLocation

const AdminLayout = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const location = useLocation(); // 👈 Track the route location

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  // 👈 Automatically close the mobile sidebar whenever the user changes pages
  useEffect(() => {
    setIsSideBarOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative bg-gray-50">
      {/* Mobile Toggle Navbar Banner */}
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-20 items-center">
        <button onClick={toggleSidebar} className="p-1">
          <FaBars size={24} />
        </button>
        <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
      </div>

      {/* Overlay Backdrop for mobile side bar */}
      {isSideBarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* SideBar Drawer Wrapper */}
      <div
        className={`bg-gray-900 w-64 text-white transition-transform duration-300 z-30
          fixed top-0 bottom-0 left-0 h-screen md:sticky md:top-0 md:translate-x-0 md:block
          ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <AdminSideBar />
      </div>

      {/* Main Content Area Container */}
      <div className="grow p-4 sm:p-6 overflow-auto min-w-0">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
