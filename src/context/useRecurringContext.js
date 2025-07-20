import { useContext } from "react";
import RecurringContext from "./RecurringContext";

export const useRecurring = () => {
  const context = useContext(RecurringContext);
  if (!context) {
    throw new Error("useRecurring must be used within a RecurringProvider");
  }
  return context;
};
