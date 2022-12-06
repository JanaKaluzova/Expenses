import { Expense } from "../../App";
import "./Expenses.css";
import { Card } from "../UI/Card";
import { ExpensesFilter } from "./ExpensesFilter";
import { useState } from "react";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from "./ExpensesChart";

type Props = {
  items: Expense[];
};

export const Expenses = (props: Props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense: Expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <>
          <ExpensesFilter onChangeFilter={filterChangeHandler} />
          <ExpensesChart expense={filteredExpenses} />
          <ExpensesList items={filteredExpenses} />
        </>
      </Card>
    </div>
  );
};
