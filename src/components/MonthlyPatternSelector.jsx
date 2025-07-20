import React from "react";
import { useRecurring } from "../context/RecurringContext";

const ordinals = ["first", "second", "third", "fourth", "last"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function MonthlyPatternSelector() {
  const { monthlyOrdinal, setMonthlyOrdinal, monthlyWeekday, setMonthlyWeekday } = useRecurring();

  return (
    <div className="mt-4 grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium">Week</label>
        <select
          value={monthlyOrdinal}
          onChange={(e) => setMonthlyOrdinal(e.target.value)}
          className="w-full mt-1 p-2 border rounded"
        >
          {ordinals.map((ord) => (
            <option key={ord} value={ord}>{ord}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Day</label>
        <select
          value={monthlyWeekday}
          onChange={(e) => setMonthlyWeekday(parseInt(e.target.value))}
          className="w-full mt-1 p-2 border rounded"
        >
          {weekdays.map((day, i) => (
            <option key={i} value={i}>{day}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

