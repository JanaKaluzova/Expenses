import { Expense } from '../../App'
import { ExpenseItem } from './expenseItem'
import './Expenses.css'
import { Card } from '../UI/Card'

import { ExpensesFilter } from './ExpensesFilter'
import { useState } from 'react'

type Props = {
  items: Expense[]
}

export const Expenses = (props: Props) => {
  const [filteredYear, setFilteredYear] = useState('2022')
  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className="expenses">
        <>
          <ExpensesFilter onChangeFilter={filterChangeHandler} />
          {filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
          ))}
        </>
      </Card>
    </div>
  )
}
