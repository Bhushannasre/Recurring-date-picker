import { useState } from "react";
import RecurringContext from "./RecurringContext";

const RecurringProvider = ({ children }) => {
  const [recurringType, setRecurringType] = useState("daily");
  const [customInterval, setCustomInterval] = useState(1);
  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const [pattern, setPattern] = useState("second");
  const [patternDay, setPatternDay] = useState("tuesday");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const value = {
    recurringType,
    setRecurringType,
    customInterval,
    setCustomInterval,
    daysOfWeek,
    setDaysOfWeek,
    pattern,
    setPattern, 
    patternDay,
    setPatternDay,
    startDate,
    setStartDate,
    endDate,
    setEndDate
  };

  return (
    <RecurringContext.Provider value={value}>
      {children}
    </RecurringContext.Provider>
  );
};

export default RecurringProvider;
