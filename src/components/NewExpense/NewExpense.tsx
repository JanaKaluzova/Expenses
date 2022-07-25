import './NewExpense.css'
import { ExpenseForm } from './ExpenseForm'
import { Expense } from '../../App'

export type EnteredExpenseData = {
  title: string
  amount: number
  date: Date
}

export type Props = {
  onAddExpense: (adExpense: Expense) => void
}

export const NewExpense = (props: Props) => {
  const saveExpenseDataHandler = (enteredExpenseData: EnteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData)
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}
