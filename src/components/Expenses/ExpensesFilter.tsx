import './ExpensesFilter.css'

type Props = {
  onChangeFilter: (filter: string) => void
}

export const ExpensesFilter = (props: Props) => {
  const dropDownChangeHanler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChangeFilter(event.target.value)
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dropDownChangeHanler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  )
}
