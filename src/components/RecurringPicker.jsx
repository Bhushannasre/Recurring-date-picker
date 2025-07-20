import React from "react";
import DateRangeSelector from "./DateRangeSelector";
import RecurrenceOptions from "./RecurrenceOptions";
import RecurringCalendarPreview from "./RecurringCalendarPreview";
import WeeklySelector from "./WeeklySelector";
import MonthlySelector from "./MonthlySelector"; // ✅ Import Monthly
import YearlySelector from "./YearlySelector";   // ✅ Import Yearly
import { useRecurring } from "../context/RecurringContext";
import MonthlyPatternSelector from './MonthlyPatternSelector';


export default function RecurringPicker() {
  const { recurringType } = useRecurring();

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Recurring Date Picker</h2>

      <DateRangeSelector />
      <RecurrenceOptions />

      {/* ✅ Render appropriate selector based on recurrenceType */}
      {recurringType === "weekly" && <WeeklySelector />}
      {/* {recurringType === "monthly" && <MonthlySelector /> } */}
      {recurringType === "monthly" && (
  <>
    <MonthlySelector />
    <MonthlyPatternSelector /> {/* New Monthly Pattern Selector */}
  </>
)}
      {recurringType === "yearly" && <YearlySelector />}

      <h3 className="mt-6 text-lg font-semibold">Preview</h3>
      <RecurringCalendarPreview />
    </div>
  );
}
