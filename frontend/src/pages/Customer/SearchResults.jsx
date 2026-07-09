import React, { useState } from "react";
import Navbar from "../../components/Customer/Navbar";
import HallCard from "../../components/Customer/HallCard";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";


// ✅ Helper component to update map view when hall is selected
function MapUpdater({ hall }) {
  const map = useMap();
  if (hall) {
    map.setView([hall.lat, hall.lng], 16); // zoom to hall location
  }
  return null;
}

function SearchResults() {
  const halls = [
    {
      id: "1",
      name: "Grand Orchid",
      rating: 4.8,
      price: "₹1200 per plate",
      capacity: "500",
      image: "/images/hall1.jpg",
      lat: 17.385044,
      lng: 78.486671,
    },
    {
      id: "2",
      name: "Royal Palms",
      rating: 4.6,
      price: "₹1000 per plate",
      capacity: "300",
      image: "/images/hall2.jpg",
      lat: 17.400000,
      lng: 78.480000,
    },
    {
      id: "3",
      name: "Sapphire Convention",
      rating: 4.9,
      price: "₹1500 per plate",
      capacity: "800",
      image: "/images/hall3.jpg",
      lat: 17.390000,
      lng: 78.490000,
    },
  ];

  const [selectedHall, setSelectedHall] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Filters Section */}
      <div className="max-w-6xl mx-auto px-4 pt-24">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">Location</p>
              <input type="text" placeholder="Enter city" className="w-full border rounded p-2 focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">Date</p>
              <input type="date" className="w-full border rounded p-2 focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">Capacity</p>
              <select className="w-full border rounded p-2 focus:ring-2 focus:ring-indigo-500">
                <option>Up to 200</option>
                <option>200–500</option>
                <option>500+</option>
              </select>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">Price</p>
              <select className="w-full border rounded p-2 focus:ring-2 focus:ring-indigo-500">
                <option>Low to High</option>
                <option>High to Low</option>
              </select>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">Rating</p>
              <select className="w-full border rounded p-2 focus:ring-2 focus:ring-indigo-500">
                <option>4★ & above</option>
                <option>3★ & above</option>
              </select>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">Amenities</p>
              <select className="w-full border rounded p-2 focus:ring-2 focus:ring-indigo-500">
                <option>Parking</option>
                <option>Catering</option>
                <option>Air Conditioning</option>
                <option>Stage & Lighting</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results + Map Layout */}
      <div className="max-w-6xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Hall Results (Left) */}
        <div className="space-y-4">
          {halls.map((hall) => (
            <div
              key={hall.id}
              onClick={() => setSelectedHall(hall)}
              className={`cursor-pointer rounded-lg transition ${
                selectedHall?.id === hall.id ? "ring-2 ring-indigo-600" : ""
              }`}
            >
              <HallCard {...hall} compact={true} />
            </div>
          ))}
        </div>

        {/* Map View (Right) */}
        <div className="bg-white shadow rounded-lg h-[600px] overflow-hidden">
          <MapContainer
            center={[17.385044, 78.486671]}
            zoom={13}
            className="w-full h-full"
            scrollWheelZoom={true}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {selectedHall && (
              <Marker position={[selectedHall.lat, selectedHall.lng]}>
                <Popup autoOpen={true}>
                  <strong>{selectedHall.name}</strong><br />
                  {selectedHall.price} · Capacity {selectedHall.capacity}
                </Popup>
              </Marker>
            )}
            <MapUpdater hall={selectedHall} />
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;

 