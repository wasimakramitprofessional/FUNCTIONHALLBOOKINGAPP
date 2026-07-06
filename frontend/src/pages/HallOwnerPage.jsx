// HallOwnerPage.js
import React, { useState } from "react";
import Sidebar1 from "../components/Sidebar1";
import OwnerDashboard from "../components/OwnerDashboard";
import OwnerCalendar from "../components/OwnerCalendar";
import OwnerListings from "../components/OwnerListings";
import OwnerEarnings from "../components/OwnerEarnings";

export default function HallOwnerPage() {
  const [active, setActive] = useState("Dashboard");

  const renderContent = () => {
    switch (active) {
      case "Dashboard": return <OwnerDashboard />;
      case "Calendar": return <OwnerCalendar />;
      case "My Listings": return <OwnerListings />;
      case "Earnings & Payouts": return <OwnerEarnings />;
      default: return <div>Select a tab</div>;
    }
  };

  return (
    <div className="owner-page">
      <Sidebar active={active} setActive={setActive} />
      <div className="content">{renderContent()}</div>
    </div>
  );
}
