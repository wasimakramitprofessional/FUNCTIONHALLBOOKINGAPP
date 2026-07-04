import React from "react";
import { Link } from "react-router-dom";

function HallCard({ id, name, rating, price, capacity, image }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
      {/* Hall Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />

      {/* Hall Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600">⭐ {rating} · Capacity: {capacity}</p>
        <p className="text-gray-700 font-medium">{price}</p>

        {/* View Details Button */}
        <Link to={`/hall/${id}`}>
          <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HallCard;
