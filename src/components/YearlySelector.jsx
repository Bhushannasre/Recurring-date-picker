import React from "react";
import { useRecurring } from "../context/RecurringContext";

const YearlySelector = () => {
  const { patternMonth, setPatternMonth, patternDay, setPatternDay } = useRecurring();

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="mt-4 grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Month</label>
        <select
          value={patternMonth}
          onChange={(e) => setPatternMonth(Number(e.target.value))}
          className="w-full mt-1 p-2 border rounded"
        >
          {months.map((month, i) => (
            <option key={i} value={i + 1}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Day</label>
        <select
          value={patternDay}
          onChange={(e) => setPatternDay(Number(e.target.value))}
          className="w-full mt-1 p-2 border rounded"
        >
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default YearlySelector;
