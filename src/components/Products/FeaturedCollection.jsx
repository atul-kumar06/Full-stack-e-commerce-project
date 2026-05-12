import React from "react";
import { Link } from "react-router-dom";
import { featuredImage } from "../../assets";

const FeaturedCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-4">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl shadow-lg">
        {/* left content */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Confort and style
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Apparel made for your everday life
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover high-quality, comfortable clothing that effortlessly blends
            fashion and function. Designed to make you look and feel great every
            dav.
          </p>
          <Link
            to="/collections/all"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
        {/* Right-content */}
        <div className="lg:w-1/2">
          <img
            src={featuredImage}
            alt="Featured Product"
            className="shadow-lg w-full h-full object-cover lg:rounded-tr-3xl lg:rouded-br-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
