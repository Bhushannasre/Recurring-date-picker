import React from "react";
import { useRecurring } from "../context/RecurringContext";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function WeeklySelector() {
  const { daysOfWeek, setDaysOfWeek } = useRecurring();

  const toggleDay = (day) => {
    if (daysOfWeek.includes(day)) {
      setDaysOfWeek(daysOfWeek.filter(d => d !== day));
    } else {
      setDaysOfWeek([...daysOfWeek, day]);
    }
  };

  return (
    <div className="my-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Select Days of Week:</label>
      <div className="flex gap-2 flex-wrap">
        {weekdays.map((day, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => toggleDay(idx)}
            className={`px-3 py-1 rounded border ${
              daysOfWeek.includes(idx)
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-black"
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}
