import React from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enterExpenseData) => {
        const expenseData = {
            ...enterExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpense;