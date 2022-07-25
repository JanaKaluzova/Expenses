import { ExpenseDate } from './ExpenseDate'
import './ExpenseItem.css'
import { Card } from '../UI/Card'
import { useState } from 'react'

type Props = {
  title: string
  amount: number
  date: Date
}
export const ExpenseItem = (props: Props) => {
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('Updated')
    console.log(title)
  }
  return (
    <Card className="expense-item">
      <>
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </>
    </Card>
  )
}
