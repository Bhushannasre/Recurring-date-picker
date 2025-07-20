import React from "react";
import { useRecurring } from "../context/RecurringContext";


export default function DateRangeSelector() {
  const { startDate, setStartDate, endDate, setEndDate } = useRecurring();

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full mt-1 p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">End Date (optional)</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full mt-1 p-2 border rounded"
        />
      </div>
    </div>
  );
}
