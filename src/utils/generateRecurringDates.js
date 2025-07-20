import { addDays, addWeeks, addMonths, addYears, isBefore, parseISO } from "date-fns";

export function generateRecurringDates({
  startDate,
  endDate,
  type = "daily",
  interval = 1,
}) {
  if (!startDate) return [];

  const start = parseISO(startDate);
  const end = endDate ? parseISO(endDate) : null;

  let currentDate = start;
  const dates = [];

  while (!end || isBefore(currentDate, end) || currentDate.getTime() === end.getTime()) {
    dates.push(currentDate.toISOString().split("T")[0]);

    switch (type) {
      case "daily":
        currentDate = addDays(currentDate, interval);
        break;
      case "weekly":
        currentDate = addWeeks(currentDate, interval);
        break;
      case "monthly":
        currentDate = addMonths(currentDate, interval);
        break;
      case "yearly":
        currentDate = addYears(currentDate, interval);
        break;
      default:
        return dates; // stop on unknown type
    }
  }

  return dates;
}
