import React, {useState} from "react";
import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    });

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    };
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesList items = {filteredExpenses}/>
        </Card>
    );
}

export default Expenses;