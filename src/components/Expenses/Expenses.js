import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState(undefined);
    const filterChangedHandler = year=>{
        setSelectedYear(Number(year));
        console.log(props.items);
        console.log(selectedYear);
        console.log(props.items.filter(el=>  el.date.getFullYear() ==selectedYear));
    };
    return (
        <Card className="expenses">
            <ExpensesFilter onFilterChanged={filterChangedHandler} />
            {props.items.filter(el=> selectedYear!=undefined && el.date.getFullYear() ==selectedYear).map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
        </Card>
    );
}
export default Expenses;