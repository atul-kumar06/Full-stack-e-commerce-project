import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const cartproducts = [
  {
    productID: 1,
    name: "T-shirt",
    size: "M",
    quantity: 1,
    price: 5,
    color: "Red",
    image: "https://picsum.photos/200?random=1",
  },
  {
    productID: 2,
    name: "Jeans",
    size: "F",
    quantity: 3,
    price: 25,
    color: "Pink",
    image: "https://picsum.photos/200?random=2",
  },
  {
    productID: 3,
    name: "T-shirt",
    size: "M",
    quantity: 1,
    price: 5,
    color: "Yellow",
    image: "https://picsum.photos/200?random=3",
  },
];

const Cartcontent = () => {
  return (
    <div>
      {cartproducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt="productname"
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                <span>size:{product.size} </span>|{" "}
                <span>color:{product.color}</span>
              </p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium smooth-click-animation ">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium smooth-click-animation ">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <p>${product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin3Line className="h-6 w-6 text-red-600 smooth-click-animation " />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cartcontent;
