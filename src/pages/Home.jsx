import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionsection from "../components/Products/GenderCollectionsection";
import NewArrival from "../components/Products/NewArrival";
import ProductDetail from "../components/Products/ProductDetail";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeatureSection from "../components/Products/FeatureSection";

const placeholderproducts = [
  {
    _id: "1",
    price: 120,
    name: "Product-1",
    images: [
      {
        url: "https://picsum.photos/500/500?random=12",
        altText: "Stylish Jacket",
      },
    ],
  },

  {
    _id: "2",
    price: 120,
    name: "Product-2",
    images: [
      {
        url: "https://picsum.photos/500/500?random=13",
        altText: "Stylish Jacket",
      },
    ],
  },
  {
    _id: "3",
    name: "Product-3",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=14",
        altText: "Stylish Jacket",
      },
    ],
  },
  {
    _id: "4",
    name: "Product-4",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=15",
        altText: "Stylish Jacket",
      },
    ],
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionsection />
      <NewArrival />
      {/* Best seller section */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetail />
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women{" "}
        </h2>
        <ProductGrid products={placeholderproducts} />
      </div>
      <FeaturedCollection />
      <FeatureSection />
    </div>
  );
};

export default Home;
