import React, {useState} from "react";

import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

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
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses = {filteredExpenses}/>
            <ExpensesList items = {filteredExpenses}/>
        </Card>
    );
}

export default Expenses;