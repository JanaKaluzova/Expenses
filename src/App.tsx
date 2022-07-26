import React, { useState } from "react";

import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";

export type Expense = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};

const DUMMY_EXPENSES: Expense[] = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense: Expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const handleDelete = (id: string) => {
    const newItemsList = expenses.filter((item) => item.id !== id);

    setExpenses(newItemsList);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onDelete={handleDelete} />
    </div>
  );
}

export default App;
