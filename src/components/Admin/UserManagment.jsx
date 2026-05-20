import React, { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi2"; // Premium look trash bin icon

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      name: "Johan Doe",
      email: "Atul@gmail.com",
      role: "admin",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      role: "customer",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();

    // Prevent adding a duplicate email to protect our delete reference key
    if (
      users.some(
        (user) => user.email.toLowerCase() === formData.email.toLowerCase(),
      )
    ) {
      alert("A user with this email address already exists!");
      return;
    }

    setUsers([
      ...users,
      {
        name: formData.name,
        email: formData.email,
        role: formData.role,
      },
    ]);

    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer",
    });
  };

  // 🔴 The Delete Handler function
  const handleDeleteUser = (userEmail) => {
    // Keep only the users whose email DOES NOT match the one we want to remove
    const updatedUsers = users.filter((user) => user.email !== userEmail);
    setUsers(updatedUsers);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          User Management
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Create, monitor, and assign permissions to system profiles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Side: Add New User Form Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm lg:col-span-1">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Add New User</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                System Permission Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3.5 py-2 border border-gray-200 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm cursor-pointer text-gray-700"
              >
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl shadow-sm shadow-blue-600/10 transition-all duration-200 active:scale-[0.98] mt-2 text-sm"
            >
              Create Account
            </button>
          </form>
        </div>

        {/* Right Side: Active Users Table with Delete Option */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden lg:col-span-2">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
            <h3 className="font-bold text-gray-800">
              Active Directory ({users.length})
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/70 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                  <th className="py-3 px-6">User Details</th>
                  <th className="py-3 px-6">System Role</th>
                  <th className="py-3 px-6 text-right">Actions</th>{" "}
                  {/* 👈 Added column */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-sm">
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr
                      key={user.email}
                      className="hover:bg-gray-50/40 transition-colors group"
                    >
                      <td className="py-4 px-6">
                        <div className="font-semibold text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5">
                          {user.email}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide border ${
                            user.role === "admin"
                              ? "bg-purple-50 text-purple-700 border-purple-100"
                              : "bg-blue-50 text-blue-700 border-blue-100"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        {/* 🔴 Delete Trigger Button */}
                        <button
                          onClick={() => handleDeleteUser(user.email)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 active:scale-90"
                          title={`Delete ${user.name}`}
                        >
                          <HiOutlineTrash size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={3}
                      className="py-12 text-center text-gray-400 italic"
                    >
                      No active accounts found in directory.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
