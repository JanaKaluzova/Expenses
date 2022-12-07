import "./ExpensesList.css";
import { ExpenseItem } from "./expenseItem";
import { Expense } from "../../App";
import { useState } from "react";

export type Props = {
  items: Expense[];
  onDelete: (id: string) => void;
};

export const ExpensesList: React.FC<Props> = ({ items, onDelete }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem
          id={expense.id}
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
