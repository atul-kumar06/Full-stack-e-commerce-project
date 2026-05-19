import { color } from "framer-motion";
import { image } from "framer-motion/client";

const checkout = {
  _id: "123123",
  createdAt: new Date(),
  checkoutItems: [
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
    contry: "India",
  },
};

const OrderConfirmation = () => {
  const calculateEstimateDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10); // Add 10 days to the orderDate
    return orderDate.toLocaleDateString();
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-5">
        Thank You for your order
      </h1>
      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            {/* OrderID and Date */}
            <div>
              <h2 className="text-xl font-semibold">Order ID:{checkout._id}</h2>
              <p>
                Order Date:{new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div>
              {/* Estimate Delivery */}
              <p className="text-emerald-700 text-sm">
                Estimated Delivery:
                {calculateEstimateDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>
          {/* // OrderItems */}
          <div className="mb-20">
            {checkout.checkoutItems.map((items) => (
              <div key={items.productID} className="flex items-center mb-4">
                <img
                  src={items.image}
                  alt={items.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="text-md font-semibold">{items.name}</h4>
                  <p className="text-sm text-gray-500">
                    {items.color}|{items.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-md">₹{items.price}</p>
                  <p className="text-sm text-gray-500">Qty:{items.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Payment and delivery info */}
          <div className="grid grid-cols-2 gap-8">
            {/* PaymentInfo */}
            <div>
              <h4 className="text-lg font-semibold mb-2 ">Payment</h4>
              <p className="text-gray-600">Razorpay</p>
            </div>
            {/* Delivery Info */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Delivery</h4>
              <p className="text-gray-600">
                {checkout.ShippingAddress.address}
              </p>
              <p className="text-gray-600">
                {checkout.ShippingAddress.city},
                {checkout.ShippingAddress.contry}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
