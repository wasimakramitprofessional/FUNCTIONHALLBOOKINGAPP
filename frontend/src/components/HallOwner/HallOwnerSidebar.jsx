import React from "react";

export default function HallOwnerSidebar({ active, setActive }) {
  const tabs = ["Dashboard", "Calendar", "My Listings", "Earnings & Payouts", "Onboarding"];

  return (
    <aside className="w-56 md:w-64 border-r border-gray-200 bg-white p-4">
      <nav className="space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`w-full text-left px-3 py-2 rounded transition-colors
              ${active === tab 
                ? "bg-gray-800 text-white" 
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"}`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </aside>
  );
}
