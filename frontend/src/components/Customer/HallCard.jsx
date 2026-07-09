import React from "react";
import { Link } from "react-router-dom";

function HallCard({ id, name, rating, price, capacity, image, compact = false }) {
  return (
    <div
      className={`bg-white shadow rounded-lg overflow-hidden ${
        compact ? "flex items-center" : ""
      }`}
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className={
          compact
            ? "w-32 h-32 object-cover"
            : "w-full h-48 object-cover"
        }
      />

      {/* Info */}
      <div className={compact ? "p-4 flex-1" : "p-4"}>
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600">⭐ {rating} · Capacity: {capacity}</p>
        <p className="text-gray-700 font-medium">{price}</p>
        <Link to={`/hall/${id}`}>
          <button
            className={`mt-2 bg-indigo-600 text-white ${
              compact ? "px-4 py-1" : "w-full py-2"
            } rounded hover:bg-indigo-700 transition`}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HallCard;
