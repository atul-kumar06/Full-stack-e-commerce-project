import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyOrdersPage = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Trigger the page container ease-in entry transition
    setIsMounted(true);

    // Simulate fetching orders from an API
    const timer = setTimeout(() => {
      const mockOrders = [
        {
          _id: "1234567890",
          createdAt: new Date(),
          shippingAddress: {
            city: "Panipat",
            state: "Haryana",
            country: "India",
            postalCode: "132103",
          },
          orderItems: [
            { name: "Product 1", image: "https://picsum.photos/200?random=20" },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: "123123123",
          createdAt: new Date(),
          shippingAddress: {
            city: "Sonipat",
            state: "Haryana",
            country: "India",
            postalCode: "132113",
          },
          orderItems: [
            { name: "Product 2", image: "https://picsum.photos/200?random=21" },
          ],
          totalPrice: 200,
          isPaid: false,
        },
        {
          _id: "321321321",
          createdAt: new Date(),
          shippingAddress: {
            city: "Rohtak",
            state: "Haryana",
            country: "India",
            postalCode: "132143",
          },
          orderItems: [
            { name: "Product 3", image: "https://picsum.photos/200?random=22" },
          ],
          totalPrice: 9,
          isPaid: true,
        },
      ];
      setOrders(mockOrders);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleRowClick = (orderID) => {
    navigate(`/order/${orderID}`);
  };

  return (
    <div
      className={`max-w-7xl mx-auto p-4 sm:p-6 transform transition-all duration-500 ease-out ${
        isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
        My Orders
      </h2>

      <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-gray-500">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 font-semibold">
              <tr>
                <th className="py-4 px-4">Image</th>
                <th className="py-4 px-4">Order ID</th>
                <th className="py-4 px-4">Date</th>
                <th className="py-4 px-4">Shipping</th>
                <th className="py-4 px-4">Items</th>
                <th className="py-4 px-4">Price</th>
                <th className="py-4 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {isLoading ? (
                /* Skeleton Loading State via Pure Tailwind */
                Array.from({ length: 3 }).map((_, idx) => (
                  <tr key={idx} className="animate-pulse">
                    <td className="py-4 px-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="h-4 bg-gray-200 rounded w-24"></div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                      <div className="h-3 bg-gray-100 rounded w-12"></div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="h-4 bg-gray-200 rounded w-28"></div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="h-4 bg-gray-200 rounded w-12"></div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="h-4 bg-gray-200 rounded w-16"></div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                    </td>
                  </tr>
                ))
              ) : orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="hover:bg-blue-50/50 transition-colors duration-200 cursor-pointer opacity-100 translate-x-0"
                    onClick={() => {
                      handleRowClick(order._id);
                    }}
                  >
                    <td className="py-4 px-4">
                      <img
                        src={order.orderItems[0].image}
                        alt={order.orderItems[0].name}
                        className="w-12 h-12 object-cover rounded-lg shadow-sm"
                      />
                    </td>
                    <td className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap">
                      #{order._id}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="text-sm">
                        {order.createdAt.toLocaleDateString()}
                      </div>
                      <div className="text-xs text-gray-400">
                        {order.createdAt.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm max-w-50 truncate">
                      {order.shippingAddress.city},{" "}
                      {order.shippingAddress.state}
                    </td>
                    <td className="py-4 px-4 text-sm">
                      {order.orderItems.length}{" "}
                      {order.orderItems.length > 1 ? "items" : "item"}
                    </td>
                    <td className="py-4 px-4 font-semibold text-gray-800">
                      ${order.totalPrice.toFixed(2)}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`${
                          order.isPaid
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        } px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider`}
                      >
                        {order.isPaid ? "Paid" : "Pending"}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="py-20 text-center text-gray-400 italic"
                  >
                    You have no orders yet.
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

export default MyOrdersPage;
