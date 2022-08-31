import React, {useState} from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
    //const [enteredTitle, setEnteredTitle] = useState('');
    //const [enteredAmount, setEnteredAmount] = useState('');
    //const [enteredDate, setEnteredDate] = useState('');
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangHandler = (event) => {
        //setEnteredTitle(event.target.value);
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        });
    }
    const amountChangHandler = (event) => {
        //setEnteredAmount(event.target.value);
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        });
    }
    const dateChangHandler = (event) => {
        //setEnteredDate(event.target.value);
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        });
    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step='0.01' onChange={amountChangHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2022-01-01" max='2022-12-31' onChange={dateChangHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;