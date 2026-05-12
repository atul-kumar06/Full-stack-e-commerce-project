import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <Link to={`/product/${product._id}`} key={index} className="block">
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-auto mb-4">
              <img
                src={product.images[0].url}
                alt={product.images[0].altText || product.name}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <h3 className="text-sm mb-2">{product.name}</h3>
            <p className="text-gray-500 text-sm font-medium tracking-tighter">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
