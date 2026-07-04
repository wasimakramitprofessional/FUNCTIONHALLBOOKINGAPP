import React from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import SearchBar from "../components/SearchBar";
import HallCard from "../components/HallCard";


function Landing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroBanner />
      <SearchBar />
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Halls</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <HallCard name="Grand Orchid" rating={4.5} price="₹/plate" capacity="500" />
          <HallCard name="Royal Palms" rating={4.2} price="₹/plate" capacity="300" />
          <HallCard name="Sapphire Convention" rating={4.8} price="₹/plate" capacity="800" />
        </div>
      </div>
    </div>
  );
}
export default Landing;