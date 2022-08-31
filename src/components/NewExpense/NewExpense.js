import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    const onSaveExpenseDataHandler = (enterExpenseData) => {
        const expenseData = {
            ...enterExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        stopEditingHandler();
    }
    let formContents = <button onClick={startEditingHandler}>Add New Expense</button>;
    if (isEditing) {
        formContents = <ExpenseForm
            onSaveExpenseData={onSaveExpenseDataHandler}
            onCancel={stopEditingHandler}/>
    }
    return (
        <div className="new-expense">
            {formContents}
        </div>
    );
};

export default NewExpense;