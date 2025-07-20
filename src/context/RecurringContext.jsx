/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";

const RecurringContext = createContext();

export const RecurringProvider = ({ children }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [recurringType, setRecurringType] = useState("daily");
  const [customInterval, setCustomInterval] = useState("");
  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const [patternMonth, setPatternMonth] = useState(1);
const [patternDay, setPatternDay] = useState(1);
// const [monthlyOrdinal, setMonthlyOrdinal] = useState("second"); // e.g., first, second, etc.
// const [monthlyWeekday, setMonthlyWeekday] = useState(2); // 0 = Sunday ... 6 = Saturday
const [monthlyOrdinal, setMonthlyOrdinal] = useState("second"); // e.g. "first", "second"
const [monthlyWeekday, setMonthlyWeekday] = useState(2); // 0 = Sunday




  return (
    <RecurringContext.Provider
      value={{
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        recurringType,
        setRecurringType,
        customInterval,
        setCustomInterval,
        daysOfWeek,
  setDaysOfWeek,
  patternDay,
setPatternDay,
patternMonth,
setPatternMonth,
 monthlyOrdinal,
  setMonthlyOrdinal,
  monthlyWeekday,
  setMonthlyWeekday,
      }}
    >
      {children}
    </RecurringContext.Provider>
  );
};

export const useRecurring = () => useContext(RecurringContext);
