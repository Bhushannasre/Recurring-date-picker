export function getDatesForMonthlyPattern(start, end, ordinal, weekday) {
  const ordinalMap = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    last: -1,
  };

  const result = [];
  const current = new Date(start);

  while (current <= end) {
    const year = current.getFullYear();
    const month = current.getMonth();

    const dates = [];
    for (let d = new Date(year, month, 1); d.getMonth() === month; d.setDate(d.getDate() + 1)) {
      if (d.getDay() === weekday) {
        dates.push(new Date(d));
      }
    }

    const targetIndex = ordinalMap[ordinal];
    const dateToAdd = targetIndex === -1 ? dates[dates.length - 1] : dates[targetIndex - 1];

    if (dateToAdd && dateToAdd >= start && dateToAdd <= end) {
      result.push(dateToAdd);
    }

    current.setMonth(current.getMonth() + 1);
    current.setDate(1);
  }

  return result;
}
