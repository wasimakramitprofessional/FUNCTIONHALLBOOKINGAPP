import React, { useState } from "react";

export default function OwnerCalendar() {
  const [dates, setDates] = useState({ 3: "Booked", 5: "Blocked", 9: "Booked" });

  const toggleDate = (day) => {
    setDates((prev) => ({
      ...prev,
      [day]: prev[day] === "Blocked" ? "Open" : "Blocked",
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Availability Calendar — August 2026</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
        {[...Array(14)].map((_, i) => {
          const day = i + 1;
          return (
            <div
              key={day}
              onClick={() => toggleDate(day)}
              className={`p-3 rounded border cursor-pointer text-center text-sm
                ${dates[day] === "Blocked" ? "bg-red-100 border-red-400" : "bg-green-100 border-green-400"}`}
            >
              {day} — {dates[day] || "Open"}
            </div>
          );
        })}
      </div>
    </div>
  );
}
