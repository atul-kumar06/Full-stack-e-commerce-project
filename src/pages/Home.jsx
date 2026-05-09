import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionsection from "../components/Products/GenderCollectionsection";
import NewArrival from "../components/Products/NewArrival";

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionsection />
      <NewArrival />
    </div>
  );
};

export default Home;
