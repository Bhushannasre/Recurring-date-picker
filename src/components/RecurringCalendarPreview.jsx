
import React from "react";
import { useRecurring } from "../context/RecurringContext";
import {
  format,
  parseISO,
  addDays,
  isAfter,
  addMonths,
  addYears,
} from "date-fns";

const RecurringCalendarPreview = () => {
  const {
    startDate,
    endDate,
    recurringType,
    customInterval,
    daysOfWeek,
    patternDay,
    patternMonth,
    monthlyOrdinal,
    monthlyWeekday,
  } = useRecurring();

  const ordinalMap = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    last: -1,
  };

  const generateRecurringDates = () => {
    if (!startDate || !recurringType) return [];

    const dates = new Set();
    let current = parseISO(startDate);
    const final = endDate ? parseISO(endDate) : addDays(current, 60); // 60-day default preview

    switch (recurringType) {
      case "weekly":
        {
          let temp = parseISO(startDate);
          while (!isAfter(temp, final)) {
            if (Array.isArray(daysOfWeek) && daysOfWeek.includes(temp.getDay())) {
              dates.add(format(temp, "yyyy-MM-dd"));
            }
            temp = addDays(temp, 1);
          }
        }
        break;

      case "monthly":
        {
          while (!isAfter(current, final)) {
            const year = current.getFullYear();
            const month = current.getMonth();
            const ordinal = ordinalMap[monthlyOrdinal] || 1;
            const targetWeekday = monthlyWeekday ?? 0;

            if (ordinal === -1) {
              // Last weekday of the month
              const lastDayOfMonth = new Date(year, month + 1, 0); // last day
              const lastWeekday = lastDayOfMonth.getDay();
              const offset = (7 + lastWeekday - targetWeekday) % 7;
              const date = new Date(year, month + 1, 0 - offset);
              if (!isAfter(date, final) && !isAfter(parseISO(startDate), date)) {
                dates.add(format(date, "yyyy-MM-dd"));
              }
            } else {
              // 1st, 2nd, 3rd, 4th weekday
              const firstDay = new Date(year, month, 1);
              const offset = (7 + targetWeekday - firstDay.getDay()) % 7;
              const day = 1 + offset + (ordinal - 1) * 7;
              const date = new Date(year, month, day);
              if (date.getMonth() === month && !isAfter(date, final) && !isAfter(parseISO(startDate), date)) {
                dates.add(format(date, "yyyy-MM-dd"));
              }
            }

            current = addMonths(current, 1);
          }
        }
        break;

      case "yearly":
        {
          while (!isAfter(current, final)) {
            const date = new Date(current.getFullYear(), (patternMonth || 1) - 1, patternDay || 1);
            if (!isAfter(date, final) && !isAfter(parseISO(startDate), date)) {
              dates.add(format(date, "yyyy-MM-dd"));
            }
            current = addYears(current, 1);
          }
        }
        break;

      case "custom":
        {
          const interval = parseInt(customInterval || "1", 10);
          while (!isAfter(current, final)) {
            dates.add(format(current, "yyyy-MM-dd"));
            current = addDays(current, interval);
          }
        }
        break;

      default: // daily
        while (!isAfter(current, final)) {
          dates.add(format(current, "yyyy-MM-dd"));
          current = addDays(current, 1);
        }
        break;
    }

    return Array.from(dates).sort();
  };

  const dates = generateRecurringDates();

  return (
    <div className="mt-2">
      {dates.length === 0 ? (
        <p className="text-gray-500">No dates to preview.</p>
      ) : (
        <ul className="list-disc pl-4 max-h-40 overflow-y-auto">
          {dates.map((date, index) => (
            <li key={index}>{date}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecurringCalendarPreview;

