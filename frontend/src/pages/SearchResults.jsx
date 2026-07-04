import React from "react";
import Navbar from "../components/Navbar";
import HallCard from "../components/HallCard";

function SearchResults() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 pt-24">
        <h2 className="text-2xl font-semibold mb-6">Available Halls</h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <select className="border rounded p-2 focus:ring-2 focus:ring-indigo-500">
            <option>Sort by Rating</option>
            <option>Sort by Price</option>
            <option>Sort by Capacity</option>
          </select>
          <input
            type="text"
            placeholder="Search by name"
            className="border rounded p-2 flex-1 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Results Grid */}
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

export default SearchResults;
