import React, { useRef, useState } from "react";
import Input from "./Input";
import Select from "./Select";
export default function ExpenseForm({ setExpenses, setTotal,expense,setExpense,editingRowId,setEditingRowId}) {
  const validationConfig={
    title:[{required:true,message:"Title is Required"},{minlength:5,message:"Title Should be at least 5 char long"}],
    category:[{required:true,message:"Category is Required"}],
    amount:[{required:true,message:"Amount is Required"}],
  }

  const [errs, setErrs] = useState({});
  function validate(formData) {
    const errsData = {};
    Object.entries(formData).forEach(([key,value])=>{
      validationConfig[key].some((rule)=>{
        if(rule.required && !value){
          errsData[key]=rule.message;
          return true;
          
        }
        if(rule.minlength && value.length<5){
          errsData[key]=rule.message;
          return true;
        }
        if(rule.required && !value){
          errsData[key]=rule.message;
          return true;
        }
      })
    })
    setErrs(errsData);
    return errsData;
  }
  function handleSubmit(e) {
    e.preventDefault();
    if(editingRowId){
      setExpenses((prev)=>
        prev.map((SingleExpense)=>{
          if(SingleExpense.id===editingRowId){
            return {...expense,id:editingRowId};
          }else{
            return SingleExpense;
          }
        })
      )
      setExpense({
        title: "",
        category: "",
        amount: "",
      })
      setEditingRowId(false);
      return;
    }
    const validateResult = validate(expense);
    if (Object.keys(validateResult).length !== 0) {
      return;
    }
    setExpenses((prev) => [...prev, { ...expense, id: crypto.randomUUID() }]);
    setExpense({ title: "", category: "", amount: "" });
    setTotal((prev) => prev + Number(expense.amount));
  }
  function handleChange(e) {
    const { id } = e.target;
    setExpense((prev) => ({ ...prev, [id]: e.target.value }));
    setErrs({});
  }
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        onChange={(e) => handleChange(e)}
        error={errs.title}
      />
      <Select
       label="Category"
       id="category"
       name="category"
       value={expense.category}
       onChange={(e) => handleChange(e)}
       error={errs.category}
       options={['Grocery','Clothes','Bills','Education','Medicine']}
       defaultOption="Select Category"
      />
      <Input
        label="Amount"
        id="amount"
        name="amount"
        onChange={(e) => handleChange(e)}
        value={expense.amount}
        error={errs.amount}
        pattern="^\d*$" 
      />
      <button className="add-btn">{editingRowId?"Save":"Add"}</button>
    </form>
  );
}
