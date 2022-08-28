import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
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
    return (
        <div>
            <h2>Let's get started!</h2>
            <ExpenseItem
            title = {expenses[0].title}
            amount = {expenses[0].amount}
            date = {expenses[0].date}
            />
            <ExpenseItem
            title = {expenses[1].title}
            amount = {expenses[1].amount}
            date = {expenses[1].date}
            />
            <ExpenseItem
            title = {expenses[2].title}
            amount = {expenses[2].amount}
            date = {expenses[2].date}
            />
            <ExpenseItem
            title = {expenses[3].title}
            amount = {expenses[3].amount}
            date = {expenses[3].date}
            />
            <ExpenseItem
            title = {expenses[4].title}
            amount = {expenses[4].amount}
            date = {expenses[4].date}
            />
            }
        </div>
    );
}

export default App;
