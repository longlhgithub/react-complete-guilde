import './ExpenseForm.css'
import { useState } from 'react';
const ExpenseForm = (props) => {
    const [newExpense, setExpense] = useState({title:'',amount:0,date : ''});
    const submitHandler = (event) => {
        event.preventDefault();
        props.onExpenseCreated(newExpense);
        setExpense({title:'',amount:0,date : ''});
        props.onCancel();
    };
    const inputChangedHandler = event => {
        setExpense(prevInput => {
            let updatingExpense = {
                ...prevInput,
            };
            switch (event.target.name) {
                case "title":
                    updatingExpense.title = event.target.value;
                    break;
                case "amount":
                    updatingExpense.amount = event.target.value;
                    break;
                case "date":
                    updatingExpense.date = new Date(event.target.value);
                    break;
                default:
                    break;
            }
            updatingExpense.id= Math.random();
            return updatingExpense;
        });
    };
    const cancelHandler = ()=>{props.onCancel()};
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" name="title" value={newExpense.title} onChange={inputChangedHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" name="amount" value={newExpense.amount} onChange={inputChangedHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    {newExpense.date ?newExpense.date.toString('yyyy-MM-dd'): ''}
                    <input type="date" name="date" value={newExpense.date ?newExpense.date.getFullYear()+'-' + (newExpense.date.getMonth()+1) +'-' + newExpense.date.getDate(): ''} onChange={inputChangedHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={cancelHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;