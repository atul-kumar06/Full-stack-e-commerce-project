import React, { useRef, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const newArrivals = [
  {
    _id: "1",
    name: "Stylish Jacket",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/seed/1/500/500",
        altText: "Stylish Jacket",
      },
    ],
  },
  {
    _id: "2",
    name: "Casual Shirt",
    price: 85,
    images: [
      { url: "https://picsum.photos/seed/2/500/500", altText: "Casual Shirt" },
    ],
  },
  {
    _id: "3",
    name: "Summer Dress",
    price: 95,
    images: [
      { url: "https://picsum.photos/seed/3/500/500", altText: "Summer Dress" },
    ],
  },
  {
    _id: "4",
    name: "Denim Jacket",
    price: 140,
    images: [
      { url: "https://picsum.photos/seed/4/500/500", altText: "Denim Jacket" },
    ],
  },
  {
    _id: "5",
    name: "Linen Pants",
    price: 75,
    images: [
      { url: "https://picsum.photos/seed/5/500/500", altText: "Linen Pants" },
    ],
  },
  {
    _id: "6",
    name: "Knit Sweater",
    price: 110,
    images: [
      { url: "https://picsum.photos/seed/6/500/500", altText: "Knit Sweater" },
    ],
  },
  {
    _id: "7",
    name: "Floral Blouse",
    price: 65,
    images: [
      { url: "https://picsum.photos/seed/7/500/500", altText: "Floral Blouse" },
    ],
  },
  {
    _id: "8",
    name: "Floral Blouse",
    price: 65,
    images: [
      { url: "https://picsum.photos/seed/8/500/500", altText: "Floral Blouse" },
    ],
  },
  {
    _id: "9",
    name: "Floral Blouse",
    price: 65,
    images: [
      { url: "https://picsum.photos/seed/9/500/500", altText: "Floral Blouse" },
    ],
  },
  {
    _id: "10",
    name: "Floral Blouse",
    price: 65,
    images: [
      {
        url: "https://picsum.photos/seed/10/500/500",
        altText: "Floral Blouse",
      },
    ],
  },
];

const ProductCard = ({ product, index }) => {
  const [visible, setVisible] = useState(false);

  const cardRef = useRef(null);
  console.log(cardRef);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="shrink-0 w-55 group cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
      }}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={product.images[0]?.url}
          alt={product.images[0]?.altText || product.name}
          className="w-full h-64 object-cover
                     transition-transform duration-500 ease-in-out
                     group-hover:scale-110"
        />
      </div>

      {/* Info */}
      <div className="mt-3 px-1">
        <p className="font-medium text-gray-900 group-hover:text-black transition-colors">
          {product.name}
        </p>
        <p className="text-gray-500 text-sm">${product.price}</p>
      </div>
    </div>
  );
};

const NewArrival = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto mb-10">
        {/* Text — centered */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
          <p className="text-lg text-gray-600">
            Discover the latest styles straight off the runway, freshly added to
            keep your wardrobe on the cutting edge of fashion.
          </p>
        </div>

        {/* Buttons — own row, right aligned, with spacing */}
        <div className="flex justify-end gap-2 mt-6 mb-6 px-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded border bg-white text-black
                       hover:bg-gray-100 transition-colors duration-200 smooth-click-animation"
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded border bg-white text-black
                       hover:bg-gray-100 transition-colors duration-200 smooth-click-animation"
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="container mx-auto flex gap-6 pb-4 overflow-x-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {newArrivals.map((product, index) => (
          <ProductCard key={product._id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
