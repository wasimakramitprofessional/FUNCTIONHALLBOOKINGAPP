import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


function HallDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 pt-24">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">Grand Orchid Convention Hall</h1>
        <p className="text-gray-600 mb-6">Located in Hyderabad · Capacity: 500 guests</p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">Photo 1</div>
          <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">Photo 2</div>
          <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">Photo 3</div>
        </div>

        {/* Details Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">About this hall</h2>
          <p className="text-gray-700 mb-4">
            The Grand Orchid Convention Hall offers a spacious venue with modern interiors, ample parking, and
            customizable decor options. Perfect for weddings, receptions, and corporate events.
          </p>

          <h3 className="text-lg font-semibold mb-2">Amenities</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Air-conditioned hall</li>
            <li>Parking space</li>
            <li>Catering services</li>
            <li>Stage and lighting setup</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Pricing</h3>
          <p className="text-gray-700">₹1200 per plate · Minimum 200 guests</p>
        </div>

        <Link to="/booking">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">Book Now</button>
        </Link>


        

        
      </div>
    </div>
  );
}

export default HallDetails;
