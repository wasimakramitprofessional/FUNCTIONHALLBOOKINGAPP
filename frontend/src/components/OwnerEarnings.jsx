import React from "react";

export default function OwnerEarnings() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Earnings & Payouts</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded p-4">
          <p className="text-gray-600">Total earned</p>
          <p className="text-xl font-bold">₹8.2L</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <p className="text-gray-600">Platform commission (10%)</p>
          <p className="text-xl font-bold">₹82,000</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <p className="text-gray-600">Next payout</p>
          <p className="text-xl font-bold">₹40,000 on 5 Aug</p>
        </div>
      </div>

      {/* Earnings Table */}
      <div className="bg-white shadow rounded p-4 overflow-x-auto">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="px-3 py-2">Booking</th>
              <th className="px-3 py-2">Date</th>
              <th className="px-3 py-2">Gross</th>
              <th className="px-3 py-2">Commission</th>
              <th className="px-3 py-2">Net Payout</th>
              <th className="px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-3 py-2">#BK1042</td>
              <td className="px-3 py-2">12 Aug</td>
              <td className="px-3 py-2">₹45,000</td>
              <td className="px-3 py-2">₹4,500</td>
              <td className="px-3 py-2">₹40,500</td>
              <td className="px-3 py-2 text-green-600 font-medium">Paid</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-3 py-2">#BK1039</td>
              <td className="px-3 py-2">02 Aug</td>
              <td className="px-3 py-2">₹30,000</td>
              <td className="px-3 py-2">₹3,000</td>
              <td className="px-3 py-2">₹27,000</td>
              <td className="px-3 py-2 text-yellow-600 font-medium">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
