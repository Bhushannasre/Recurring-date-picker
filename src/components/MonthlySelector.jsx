// src/components/MonthlySelector.jsx
import React from "react";
import { useRecurring } from "../context/RecurringContext";

const MonthlySelector = () => {
  const { patternDay, setPatternDay } = useRecurring();

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="mt-4">
      <label htmlFor="monthly-day" className="block text-sm font-medium text-gray-700">
        Select Day of the Month
      </label>
      <select
        id="monthly-day"
        value={patternDay}
        onChange={(e) => setPatternDay(Number(e.target.value))}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
      >
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MonthlySelector;
