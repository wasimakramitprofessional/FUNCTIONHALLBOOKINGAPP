import React from "react";

export default function Sidebar({ active, setActive }) {
  // Always define the tabs array here
  const tabs = ["Dashboard", "Calendar", "My Listings", "Earnings & Payouts"];

  return (
    <div style={styles.sidebar}>
      {tabs.map((tab) => (
        <div
          key={tab}
          style={{
            ...styles.tab,
            backgroundColor: active === tab ? "#2b2b2b" : "#fff",
            color: active === tab ? "#fff" : "#000",
          }}
          onClick={() => setActive(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}

const styles = {
  sidebar: {
    width: "160px",
    borderRight: "1px solid #ccc",
    padding: "10px",
    fontSize: "14px",
  },
  tab: {
    padding: "8px",
    borderBottom: "1px dashed #ccc",
    cursor: "pointer",
  },
};
