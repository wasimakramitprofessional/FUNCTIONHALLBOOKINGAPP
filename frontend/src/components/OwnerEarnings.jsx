// OwnerEarnings.js
import React from "react";

export default function OwnerEarnings() {
  return (
    <div>
      <h2>Earnings & Payouts</h2>
      <div className="stats">
        <div>Total earned: <b>₹8.2L</b></div>
        <div>Platform commission (10%): <b>₹82,000</b></div>
        <div>Next payout: <b>₹40,000 on 5 Aug</b></div>
      </div>
      <table>
        <thead>
          <tr><th>Booking</th><th>Date</th><th>Gross</th><th>Commission</th><th>Net Payout</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr><td>#BK1042</td><td>12 Aug</td><td>₹45,000</td><td>₹4,500</td><td>₹40,500</td><td>Paid</td></tr>
          <tr><td>#BK1039</td><td>02 Aug</td><td>₹30,000</td><td>₹3,000</td><td>₹27,000</td><td>Pending</td></tr>
        </tbody>
      </table>
    </div>
  );
}
