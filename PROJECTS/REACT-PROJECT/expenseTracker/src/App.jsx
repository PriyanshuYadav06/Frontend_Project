import { useRef, useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseData from "./components/ExpenseData";
function App() {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [expenses, setExpenses] = useState(ExpenseData);
  const [total, setTotal] = useState(0);
  const[editingRowId,setEditingRowId]=useState("");
  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm setEditingRowId={setEditingRowId} editingRowId={editingRowId} expense={expense} setExpense={setExpense} setExpenses={setExpenses} setTotal={setTotal} />
          <ExpenseTable
            setExpense={setExpense} 
            setExpenses={setExpenses}
            expenses={expenses}
            total={total}
            setEditingRowId={setEditingRowId}
          />
        </div>
      </main>
    </>
  );
}

export default App;
