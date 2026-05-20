import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OrderDetails = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  // Track when the component mount lifecycle completes
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const mockOrderDetails = {
      _id: "123123",
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "Razorpay",
      shippingMethod: "Standard",
      OrderItems: [
        {
          productID: "1",
          name: "Jacket",
          color: "Pink",
          size: "M",
          price: 150,
          quantity: 1,
          image: "https://picsum.photos/150?random=12",
        },
        {
          productID: "2",
          name: "T-shirt",
          color: "Black",
          size: "XL",
          price: 200,
          quantity: 1,
          image: "https://picsum.photos/150?random=15",
        },
      ],
      ShippingAddress: {
        address: "1234 Fashion Street",
        city: "Panipat",
        country: "India",
      },
    };
    setOrderDetails(mockOrderDetails);

    // Trigger the entry animation on mounting
    setIsLoaded(true);
  }, [id]);

  return (
    /* The transition classes below handle the smooth fade-in and slide-up effect */
    <div
      className={`max-w-7xl mx-auto p-4 sm:p-6 transform transition-all duration-700 ease-out ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        Order Details
      </h2>

      {!orderDetails ? (
        <p className="text-gray-500">Order not found</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
          {/* Order Header Info */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-6 mb-8 gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                Order ID: #{orderDetails._id}
              </h3>
              <p className="text-gray-500 mt-1">
                Ordered on:{" "}
                {new Date(orderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className="flex flex-row sm:flex-col gap-2">
              <span
                className={`${
                  orderDetails.isPaid
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                } px-3 py-1 rounded-full text-xs font-semibold`}
              >
                {orderDetails.isPaid ? "Payment Approved" : "Payment Pending"}
              </span>
              <span
                className={`${
                  orderDetails.isDelivered
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                } px-3 py-1 rounded-full text-xs font-semibold`}
              >
                {orderDetails.isDelivered ? "Delivered" : "Delivery Pending"}
              </span>
            </div>
          </div>

          {/* Customer Payment & Shipping Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 bg-gray-50 p-4 rounded-lg">
            <div>
              <h4 className="text-base font-semibold text-gray-800 mb-2">
                Payment Info
              </h4>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Method:</span>{" "}
                {orderDetails.paymentMethod}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Status:</span>{" "}
                {orderDetails.isPaid ? "Paid" : "Unpaid"}
              </p>
            </div>

            <div>
              <h4 className="text-base font-semibold text-gray-800 mb-2">
                Shipping Info
              </h4>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Method:</span>{" "}
                {orderDetails.shippingMethod}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Address:</span>{" "}
                {orderDetails.ShippingAddress.address},{" "}
                {orderDetails.ShippingAddress.city},{" "}
                {orderDetails.ShippingAddress.country}
              </p>
            </div>
          </div>

          {/* Product List Table */}
          <div className="overflow-x-auto mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Products Ordered
            </h4>
            <table className="min-w-full text-sm text-left text-gray-600">
              <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                <tr>
                  <th className="py-3 px-4">Product Name</th>
                  <th className="py-3 px-4 text-right">Unit Price</th>
                  <th className="py-3 px-4 text-center">Quantity</th>
                  <th className="py-3 px-4 text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orderDetails.OrderItems.map((item) => (
                  <tr
                    key={item.productID}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-4 flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-md border border-gray-200"
                      />
                      <div>
                        <Link
                          className="text-blue-600 hover:underline font-medium block"
                          to={`/products/${item.productID}`}
                        >
                          {item.name}
                        </Link>
                        <span className="text-xs text-gray-400">
                          Size: {item.size} | Color: {item.color}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right font-medium">
                      ₹{item.price}
                    </td>
                    <td className="py-4 px-4 text-center">{item.quantity}</td>
                    <td className="py-4 px-4 text-right font-semibold text-gray-800">
                      ₹{item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Back to orders link */}
          <div className="border-t pt-4">
            <Link
              to="/my-orders"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1 transition-colors"
            >
              &larr; Back to My Orders
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
