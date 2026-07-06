// OwnerDashboard.js
import React from "react";

export default function OwnerDashboard() {
  return (
    <div>
      <h2>Owner Dashboard — Overview</h2>
      <div className="stats">
        <div className="card">Pending requests: <b>3</b></div>
        <div className="card">Confirmed (this month): <b>8</b></div>
        <div className="card">Revenue (this month): <b>₹2.4L</b></div>
        <div className="card">Avg. rating: <b>4.5★</b></div>
      </div>
      <h3>Upcoming Events</h3>
      <table>
        <thead>
          <tr><th>Date</th><th>Customer</th><th>Guests</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr><td>12 Aug</td><td>R. Sharma</td><td>350</td><td>Confirmed</td></tr>
          <tr><td>14 Aug</td><td>A. Reddy</td><td>200</td><td>Awaiting response</td></tr>
        </tbody>
      </table>
    </div>
  );
}
