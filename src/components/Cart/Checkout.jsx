import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RazorpayButton from "./RazorpayButton";

const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 130,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  totalprice: 195,
};

const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutId, setcheckoutId] = useState(null);
  const [shippingAddress, setshippingAddress] = useState({
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setcheckoutId(123); // ← unlocks payment section
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-6">
      <div className="p-4">
        <h2 className="text-2xl uppercase mb-4 font-semibold">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="mb-4 text-lg">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="User@example.com"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                value={shippingAddress.firstname}
                onChange={(e) =>
                  setshippingAddress({
                    ...shippingAddress,
                    firstname: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                value={shippingAddress.lastname}
                onChange={(e) =>
                  setshippingAddress({
                    ...shippingAddress,
                    lastname: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setshippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setshippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setshippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) =>
                setshippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Mobile Number</label>
            <input
              type="tel"
              value={shippingAddress.phone}
              onChange={(e) =>
                setshippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mt-6">
            {checkoutId ? (
              // ✅ Show payment after form submit
              <div>
                <h3 className="text-lg mb-4">Complete Payment</h3>
                <RazorpayButton
                  amount={cart.totalprice}
                  shippingAddress={shippingAddress}
                  onSuccess={(response) => {
                    console.log("Payment successful!", response);
                    navigate("/order-confirmation");
                  }}
                  onError={(error) => {
                    console.log("Payment failed!", error);
                  }}
                />
              </div>
            ) : (
              // ✅ Show this button first
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded smooth-click-animation"
              >
                Continue to Payment
              </button>
            )}
          </div>
        </form>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4 font-semibold text-center">
          Order Summary
        </h3>

        <div className="border-t py-4 mb-4">
          {cart.products.map((product, index) => (
            <div
              key={index}
              className="flex items-start justify-between py-2 border-b"
            >
              <div className="flex justify-between">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 mr-4"
                />
                <div>
                  <h3 className="text-md font-semibold">{product.name}</h3>
                  <p className="text-gray-500">{product.color}</p>
                </div>
              </div>
              <p className="text-xl">₹ {product.price?.toLocaleString()}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center text-lg mb-4">
          <p className="font-semibold">Subtotal</p>
          <p>₹{cart.totalprice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p className="font-semibold">Shipping</p>
          <p className="font-semibold">Free</p>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p className="font-semibold">Total</p>
          <div>₹{cart.totalprice?.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
