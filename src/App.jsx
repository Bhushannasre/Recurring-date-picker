import React from "react";
import RecurringPicker from "./components/RecurringPicker";
import { RecurringProvider } from "./context/RecurringContext";

function App() {
  return (
    <RecurringProvider>
      <div className="min-h-screen flex items-center justify-center bg-blue-100">
        <RecurringPicker />
      </div>
    </RecurringProvider>
  );
}

export default App;
