import React from "react";
import { MensCollection, WomensCollection } from "../../assets";
import { Link } from "react-router-dom";

const GenderCollectionSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col md:flex-row gap-6 px-4">
        {/* Women's Collection */}
        <CollectionCard
          image={WomensCollection}
          alt="Women's Collection"
          label="Women's Collection"
          to="/collections/all?gender=Women"
        />

        {/* Men's Collection */}
        <CollectionCard
          image={MensCollection}
          alt="Men's Collection"
          label="Men's Collection"
          to="/collections/all?gender=Men"
        />
      </div>
    </section>
  );
};

const CollectionCard = ({ image, alt, label, to }) => {
  return (
    <div className="flex-1 relative overflow-hidden group cursor-pointer">
      {/* Image with zoom on hover */}
      <img
        src={image}
        alt={alt}
        className="w-full h-auto md:h-150 object-cover
                   transition-transform duration-700 ease-in-out
                   group-hover:scale-110"
      />

      {/* Dark overlay that fades in on hover */}

      <div
        className="absolute inset-0 bg-black/0 group-hover:bg-black/30
                      transition-all duration-700 ease-in-out"
      />

      {/* Label card — slides up slightly on hover */}
      <div
        className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-5
                      transition-transform duration-500 ease-in-out
                      group-hover:-translate-y-2"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{label}</h2>
        <Link
          to={to}
          className="relative text-gray-900 font-medium
                     after:absolute after:left-0 after:bottom-0
                     after:h-[1.5px] after:w-0 after:bg-gray-900
                     after:transition-all after:duration-300
                     hover:after:w-full"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default GenderCollectionSection;
