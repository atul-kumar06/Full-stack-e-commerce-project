import React from "react";
import { RabbitHero } from "../../assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-[60vh] sm:h-[75vh] md:h-[90vh] overflow-hidden">
      {/* Background Image with zoom-in on load */}
      <img
        src={RabbitHero}
        alt="Rabbit Hero"
        className="absolute inset-0 w-full h-full object-cover
                   scale-105 animate-[zoomOut_1.2s_ease-out_forwards]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        {/* Heading */}
        <h1
          className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter uppercase
                     leading-none mb-4
                     transition-all duration-500 ease-out
                     hover:tracking-widest hover:scale-105 cursor-default"
        >
          Vacation <br /> Ready
        </h1>

        {/* Subtext */}
        <p
          className="text-sm sm:text-base md:text-lg tracking-wide max-w-md mb-8
                     text-white/80 hover:text-white transition-colors duration-300
                     cursor-default"
        >
          Explore our vacation-ready outfits with fast worldwide shipping.
        </p>

        {/* CTA Button */}
        <Link
          to="/collections/all"
          className="bg-white text-gray-900 px-8 py-3 text-sm font-semibold uppercase
                     tracking-widest rounded-sm
                     hover:bg-gray-900 hover:text-white
                     transition-all duration-300 ease-in-out
                     active:scale-95"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
