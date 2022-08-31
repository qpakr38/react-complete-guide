import Expenses from "./components/Expenses/Expenses";
import React, {useState} from "react";

import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: "Car Insurance",
        amount: 194.67,
        date: new Date(1111, 1, 1)
    },
    {
        id: 'e2',
        title: "Car Insurance2",
        amount: 294.67,
        date: new Date(2222, 2, 2)
    },
    {
        id: 'e3',
        title: "Car Insurance3",
        amount: 394.67,
        date: new Date(3333, 3, 3)
    },
    {
        id: 'e4',
        title: "Car Insurance4",
        amount: 494.67,
        date: new Date(4444, 4, 4)
    },
    {
        id: 'e5',
        title: "Car Insurance5",
        amount: 594.67,
        date: new Date(5555, 5, 5)
    }
];
const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const addExpenseHandler = expense => {
        setExpenses(prevExpense =>{
            return [expense,...prevExpense];
        });
    };
    // return React.createElement(
    //     'div',
    //     {},
    //     React.createElement('h2',{}, "Let's get started!"),
    //     React.createElement(Expenses,{items: expenses})
    // );
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
