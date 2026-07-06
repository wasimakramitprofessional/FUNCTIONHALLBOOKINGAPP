import React from "react";

export default function OwnerDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Owner Dashboard</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white shadow rounded p-4">
          <p className="text-gray-600">Pending requests</p>
          <p className="text-xl font-bold">3</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <p className="text-gray-600">Confirmed (this month)</p>
          <p className="text-xl font-bold">8</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <p className="text-gray-600">Revenue (this month)</p>
          <p className="text-xl font-bold">₹2.4L</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <p className="text-gray-600">Avg. rating</p>
          <p className="text-xl font-bold">4.5★</p>
        </div>
      </div>

      {/* Upcoming Events Table */}
      <div className="bg-white shadow rounded p-4 overflow-x-auto">
        <h3 className="text-lg font-semibold mb-3">Upcoming Events</h3>
        <table className="min-w-full text-sm text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="px-3 py-2">Date</th>
              <th className="px-3 py-2">Customer</th>
              <th className="px-3 py-2">Guests</th>
              <th className="px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-3 py-2">12 Aug</td>
              <td className="px-3 py-2">R. Sharma</td>
              <td className="px-3 py-2">350</td>
              <td className="px-3 py-2 text-green-600 font-medium">Confirmed</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-3 py-2">14 Aug</td>
              <td className="px-3 py-2">A. Reddy</td>
              <td className="px-3 py-2">200</td>
              <td className="px-3 py-2 text-yellow-600 font-medium">Awaiting response</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
