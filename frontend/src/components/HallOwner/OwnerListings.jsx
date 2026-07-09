import React from "react";

export default function OwnerListings() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">My Listings</h2>

      <div className="bg-white shadow rounded p-4 space-y-3">
        <h3 className="text-lg font-semibold">Grand Orchid Banquets</h3>
        <p className="text-gray-600">Status: Live · ⭐4.5</p>
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1 bg-blue-600 text-white rounded">Edit details</button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded">Manage photos</button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded">Edit pricing</button>
          <button className="px-3 py-1 bg-red-600 text-white rounded">Deactivate listing</button>
        </div>
      </div>

      <div className="bg-gray-100 border border-dashed rounded p-4 text-center cursor-pointer hover:bg-gray-200">
        + Add another hall
      </div>
    </div>
  );
}
