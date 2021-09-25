import { useState } from 'react';
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense = (props)=>{
    const [showingForm,setShowingForm] = useState(false);
    const expenseCreatedHandler = expense =>{
        props.onExpenseCreated(expense);
    };
    const showFormHandler = ()=>{
        setShowingForm(true);
    };
    const hideFormHandler = ()=>{
        setShowingForm(false);
    };
    return (
        <div className="new-expense">
            {showingForm && <ExpenseForm onCancel={hideFormHandler} onExpenseCreated={expenseCreatedHandler}/>}
            {!showingForm && <button onClick={showFormHandler}>Add An Expense</button>}
        </div>
    );
};
export default NewExpense;