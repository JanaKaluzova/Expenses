import { ExpenseDate } from './ExpenseDate'
import './ExpenseItem.css'
import { Card } from '../UI/Card'

type Props = {
  title: string
  amount: number
  date: Date
}
export const ExpenseItem = (props: Props) => {
  return (
    <li>
      <Card className="expense-item">
        <>
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{props.title}</h2>
          </div>
          <div className="expense-item__price">${props.amount}</div>
        </>
      </Card>
    </li>
  )
}
