// OwnerListings.js
import React from "react";

export default function OwnerListings() {
  return (
    <div>
      <h2>My Listings</h2>
      <div className="listing-card">
        <h3>Grand Orchid Banquets</h3>
        <p>Status: Live · ⭐4.5</p>
        <button>Edit details</button>
        <button>Manage photos</button>
        <button>Edit pricing</button>
        <button>Deactivate listing</button>
      </div>
      <div className="listing-card">+ Add another hall</div>
    </div>
  );
}
