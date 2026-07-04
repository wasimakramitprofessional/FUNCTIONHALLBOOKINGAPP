import React from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";   // ✅ Your hero banner component
import HallCard from "../components/HallCard";

function Landing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Banner */}
      <HeroBanner />

      {/* Search + Filters Section */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <div className="bg-white shadow rounded-lg p-6 flex flex-wrap gap-4 items-center">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search halls by name or location"
            className="flex-1 border rounded p-2 focus:ring-2 focus:ring-indigo-500"
          />

          {/* Date Picker */}
          <input
            type="date"
            className="border rounded p-2 focus:ring-2 focus:ring-indigo-500"
          />

          {/* Filter Dropdown */}
          <select className="border rounded p-2 focus:ring-2 focus:ring-indigo-500">
            <option>Sort by Rating</option>
            <option>Sort by Price</option>
            <option>Sort by Capacity</option>
          </select>

          {/* Search Button */}
          <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
            Search
          </button>
        </div>
      </div>

      {/* Featured Halls */}
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <h2 className="text-2xl font-semibold mb-6">Featured Halls</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <HallCard
            id="1"
            name="Grand Orchid"
            rating={4.8}
            price="₹1200 per plate"
            capacity="500"
            image="/images/hall1.jpg"
          />
          <HallCard
            id="2"
            name="Royal Palms"
            rating={4.6}
            price="₹1000 per plate"
            capacity="300"
            image="/images/hall2.jpg"
          />
          <HallCard
            id="3"
            name="Sapphire Convention"
            rating={4.9}
            price="₹1500 per plate"
            capacity="800"
            image="/images/hall3.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
