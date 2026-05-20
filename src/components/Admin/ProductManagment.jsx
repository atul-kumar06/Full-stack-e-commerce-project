import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    _id: 123,
    name: "Premium Cotton Shirt",
    price: 110,
    sku: "123123123",
  },
  {
    _id: 124,
    name: "Minimalist Leather Watch",
    price: 189,
    sku: "456456456",
  },
  {
    _id: 125,
    name: "Classic Denim Jacket",
    price: 145,
    sku: "789789789",
  },
];

const ProductManagement = () => {
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      console.log("Delete product with id:", id);
    }
  };

  return (
    // Added animate-fade-in or a simple entry feel via standard utility combos if custom keyframes aren't set up
    <div className="max-w-7xl mx-auto p-6 transition-all duration-500 ease-out opacity-100 translate-y-0">
      {/* Header section with a clean layout and subtle border line */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Product Management
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage your inventory, update details, and monitor stock.
          </p>
        </div>
        <button className="bg-indigo-600 text-white font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-indigo-700 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-sm">
          + Add New Product
        </button>
      </div>

      {/* Table Container with enhanced shadow and rounded borders */}
      <div className="overflow-hidden bg-white shadow-xl rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-600 text-left">
            <thead className="bg-gray-50/70 text-xs font-semibold uppercase text-gray-500 tracking-wider">
              <tr>
                <th className="py-4 px-6">Name</th>
                <th className="py-4 px-6">Price</th>
                <th className="py-4 px-6">SKU</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {products.length > 0 ? (
                products.map((product) => (
                  <tr
                    key={product._id}
                    // Added slick row hover animations and a subtle slide-in style feel
                    className="group transition-all duration-200 hover:bg-slate-50/80"
                  >
                    <td className="py-4 px-6 font-semibold text-gray-900 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        {/* Fake thumbnail placeholder for a modern dashboard look */}
                        <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400 group-hover:scale-105 transition-transform duration-200">
                          {product.name.charAt(0)}
                        </div>
                        <span className="group-hover:text-indigo-600 transition-colors duration-200">
                          {product.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-medium text-gray-900">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="py-4 px-6 text-gray-400 font-mono text-xs tracking-wider">
                      {product.sku}
                    </td>
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <div className="inline-flex gap-2 items-center justify-end">
                        <Link
                          to={`/admin/products/${product._id}/edit`}
                          className="inline-flex items-center bg-amber-50 text-amber-700 font-medium px-3 py-1.5 text-xs rounded-md border border-amber-200/60 hover:bg-amber-500 hover:text-white hover:border-transparent transition-all duration-200 transform hover:-translate-y-0.5"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="inline-flex items-center bg-rose-50 text-rose-600 font-medium px-3 py-1.5 text-xs rounded-md border border-rose-200/60 hover:bg-rose-600 hover:text-white hover:border-transparent transition-all duration-200 transform hover:-translate-y-0.5"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="py-12 px-6 text-center text-gray-400"
                  >
                    <div className="flex flex-col items-center justify-center gap-2">
                      <span className="text-2xl">📦</span>
                      <p className="font-medium text-gray-500">
                        No Products Found
                      </p>
                      <p className="text-xs text-gray-400">
                        Your inventory is currently empty.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
