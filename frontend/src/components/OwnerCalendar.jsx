// OwnerCalendar.js
import React, { useState } from "react";

export default function OwnerCalendar() {
  const [dates, setDates] = useState({
    3: "Booked",
    5: "Blocked",
    9: "Booked",
    12: "Booked",
    14: "Booked"
  });

  const toggleDate = (day) => {
    setDates(prev => ({
      ...prev,
      [day]: prev[day] === "Blocked" ? "Open" : "Blocked"
    }));
  };

  return (
    <div>
      <h2>Availability Calendar — August 2026</h2>
      <div className="calendar">
        {[...Array(14)].map((_, i) => {
          const day = i + 1;
          return (
            <div key={day} className="calendar-cell" onClick={() => toggleDate(day)}>
              {day} — {dates[day] || "Open"}
            </div>
          );
        })}
      </div>
    </div>
  );
}
