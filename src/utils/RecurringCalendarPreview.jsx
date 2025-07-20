import { useRecurring } from "../context/RecurringContext";

import { generateRecurringDates } from "../utils/generateRecurringDates";

const RecurringCalendarPreview = () => {
  const { startDate, endDate, recurringType, customInterval } = useRecurring();

  const dates = generateRecurringDates({
    startDate,
    endDate,
    type: recurringType,
    interval: customInterval,
  });

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Preview</h2>
      <div className="space-y-2">
        {dates.map((date, idx) => (
          <div
            key={idx}
            className="bg-blue-200 text-center py-1 rounded-md"
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecurringCalendarPreview;
