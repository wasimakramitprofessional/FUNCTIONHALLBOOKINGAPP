// Sidebar.js
import React from "react";

export default function Sidebar({ active, setActive }) {
  const tabs = ["Dashboard", "Booking Requests", "Calendar", "My Listings", "Earnings & Payouts", "Reviews", "Settings"];
  
  return (
    <div className="sidebar">
      {tabs.map(tab => (
        <div
          key={tab}
          className={active === tab ? "active" : ""}
          onClick={() => setActive(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}
