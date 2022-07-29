import './NewExpense.css'
import { ExpenseForm } from './ExpenseForm'
import { Expense } from '../../App'
import { useState } from 'react'

export type EnteredExpenseData = {
  title: string
  amount: number
  date: Date
}

export type Props = {
  onAddExpense: (adExpense: Expense) => void
}

export const NewExpense = (props: Props) => {
  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData: EnteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: new Date().getTime().toString(),
    }
    props.onAddExpense(expenseData)
    setIsEditing(false)
  }

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  )
}
