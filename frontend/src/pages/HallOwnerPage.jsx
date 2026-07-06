import React, { useState } from "react";
import HallOwnerSidebar from "../components/HallOwnerSidebar";
import OwnerDashboard from "../components/OwnerDashboard";
import OwnerCalendar from "../components/OwnerCalendar";
import OwnerListings from "../components/OwnerListings";
import OwnerEarnings from "../components/OwnerEarnings";
import OwnerOnboarding from "../components/OwnerOnboarding";

export default function HallOwnerPage() {
  const [active, setActive] = useState("Dashboard");

  const renderContent = () => {
    switch (active) {
      case "Dashboard": return <OwnerDashboard />;
      case "Calendar": return <OwnerCalendar />;
      case "My Listings": return <OwnerListings />;
      case "Earnings & Payouts": return <OwnerEarnings />;
      case "Onboarding": return <OwnerOnboarding />;
      default: return <div>Select a tab</div>;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans">
      {/* Sidebar collapses below md */}
      <HallOwnerSidebar active={active} setActive={setActive} />
      <main className="flex-1 p-6 bg-gray-50">{renderContent()}</main>
    </div>
  );
}
