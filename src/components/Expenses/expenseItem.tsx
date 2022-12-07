import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";
import { Card } from "../UI/Card/Card";

type Props = {
  id: string;
  title: string;
  amount: number;
  date: Date;
  onDelete: (id: string) => void;
};

export const ExpenseItem: React.FC<Props> = ({
  id,
  title,
  amount,
  date,
  onDelete,
}) => {
  return (
    <li>
      <Card className="expense-item">
        <>
          <ExpenseDate date={date} />
          <div className="expense-item__description">
            <h2>{title}</h2>
          </div>
          <div className="expense-item__price">${amount}</div>
          <div className="expense-item__delete">
            {<button onClick={() => onDelete(id)}>x</button>}
          </div>
        </>
      </Card>
    </li>
  );
};
