import React from "react";

const orders = [
  {
    _id: 123321,
    user: { name: "Johan Doe", email: "johan@example.com" },
    totalPrice: 110,
    status: "Processing",
  },
  {
    _id: 123322,
    user: { name: "Jane Smith", email: "jane@example.com" },
    totalPrice: 245,
    status: "Shipped",
  },
  {
    _id: 123323,
    user: { name: "Alex Johnson", email: "alex@example.com" },
    totalPrice: 89,
    status: "Delivered",
  },
  {
    _id: 123324,
    user: { name: "Sarah Lee", email: "sarah@example.com" },
    totalPrice: 195,
    status: "Cancelled",
  },
];

const handleStatusChange = (orderId, status) => {
  //   console.log({ id: orderId, status });
};

// Helper function to dynamically color-code status badges and select borders
const getStatusStyles = (status) => {
  switch (status) {
    case "Processing":
      return "bg-amber-50 text-amber-700 border-amber-200 focus:ring-amber-100";
    case "Shipped":
      return "bg-blue-50 text-blue-700 border-blue-200 focus:ring-blue-100";
    case "Delivered":
      return "bg-emerald-50 text-emerald-700 border-emerald-200 focus:ring-emerald-100";
    case "Cancelled":
      return "bg-rose-50 text-rose-600 border-rose-200 focus:ring-rose-100";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200 focus:ring-gray-100";
  }
};

const OrderManagement = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 transition-all duration-500">
      {/* Header section */}
      <div className="mb-8 pb-4 border-b border-gray-100">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Order Management
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Track customer purchases, update fulfillment pipelines, and manage
          statuses.
        </p>
      </div>

      {/* Table Container with modern glassmorphism feel */}
      <div className="overflow-hidden bg-white shadow-xl rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-600 text-left">
            <thead className="bg-gray-50/70 text-xs font-semibold uppercase text-gray-500 tracking-wider">
              <tr>
                <th className="py-4 px-6">Order ID</th>
                <th className="py-4 px-6">Customer</th>
                <th className="py-4 px-6">Total Price</th>
                <th className="py-4 px-6">Status Pipeline</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="group transition-all duration-200 hover:bg-slate-50/60"
                  >
                    {/* Order ID */}
                    <td className="py-4 px-6 font-mono text-xs font-bold text-indigo-600 whitespace-nowrap">
                      #{order._id}
                    </td>

                    {/* Customer Info */}
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                          {order.user.name}
                        </span>
                        {order.user.email && (
                          <span className="text-xs text-gray-400 font-normal">
                            {order.user.email}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Total Price */}
                    <td className="py-4 px-6 font-bold text-gray-900">
                      ${order.totalPrice.toFixed(2)}
                    </td>

                    {/* Status Dropdown selector */}
                    <td className="py-4 px-6">
                      <select
                        value={order.status}
                        onChange={(e) =>
                          handleStatusChange(order._id, e.target.value)
                        }
                        className={`font-medium text-xs rounded-lg border p-2 outline-none cursor-pointer focus:ring-4 transition-all duration-200 ${getStatusStyles(
                          order.status,
                        )}`}
                      >
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>

                    {/* Action Button */}
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      {order.status !== "Delivered" &&
                      order.status !== "Cancelled" ? (
                        <button
                          className="inline-flex items-center bg-indigo-50 text-indigo-600 font-semibold px-4 py-2 text-xs rounded-lg border border-indigo-100 hover:bg-indigo-600 hover:text-white hover:border-transparent transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow"
                          onClick={() =>
                            handleStatusChange(order._id, "Delivered")
                          }
                        >
                          Mark as Delivered
                        </button>
                      ) : (
                        <span className="text-xs font-medium text-gray-400 italic bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">
                          Archived
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="py-12 px-6 text-center text-gray-400"
                  >
                    <div className="flex flex-col items-center justify-center gap-2">
                      <span className="text-2xl">📋</span>
                      <p className="font-medium text-gray-500">
                        No Orders Found
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

export default OrderManagement;
