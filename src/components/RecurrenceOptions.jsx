// RecurrenceOptions.jsx

import React from "react";
import { useRecurring } from "../context/RecurringContext";

export default function RecurrenceOptions() {
  const {
    recurringType,
    setRecurringType,
    customInterval,
    setCustomInterval,
  } = useRecurring();

  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700">
        Recurrence Type
      </label>
      <select
        value={recurringType}
        onChange={(e) => setRecurringType(e.target.value)}
        className="w-full mt-1 p-2 border rounded"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
        <option value="custom">Custom</option>
      </select>

      {recurringType === "custom" && (
        <input
          type="number"
          placeholder="Enter custom interval in days"
          value={customInterval}
          onChange={(e) => setCustomInterval(e.target.value)}
          className="w-full mt-2 p-2 border rounded"
        />
      )}
    </div>
  );
}
