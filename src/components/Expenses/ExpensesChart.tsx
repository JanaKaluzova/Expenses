import { Chart } from "../Chart/Chart";
import { Expense } from "../../App";

type Props = {
  expense: Expense[];
};

export const ExpensesChart: React.FC<Props> = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0, maxValue: 0 },
    { label: "Feb", value: 0, maxValue: 0 },
    { label: "Mar", value: 0, maxValue: 0 },
    { label: "Apr", value: 0, maxValue: 0 },
    { label: "May", value: 0, maxValue: 0 },
    { label: "Jun", value: 0, maxValue: 0 },
    { label: "Jul", value: 0, maxValue: 0 },
    { label: "Aug", value: 0, maxValue: 0 },
    { label: "Sep", value: 0, maxValue: 0 },
    { label: "Oct", value: 0, maxValue: 0 },
    { label: "Nov", value: 0, maxValue: 0 },
    { label: "Dec", value: 0, maxValue: 0 },
  ];

  for (const expense of props.expense) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};
