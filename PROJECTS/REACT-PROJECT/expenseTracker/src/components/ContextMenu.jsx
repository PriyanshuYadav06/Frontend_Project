import React from "react";
export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  setExpenses,
  rowid,
  setExpense,
  expenses,
  setEditingRowId,
}) {
  if (!menuPosition.left) return;
  function handleDelete() {
    setExpenses((prev) => prev.filter((expense) => expense.id !== rowid));
    setMenuPosition({});
  }
  function handleEdit() {
    setEditingRowId(rowid);
    expenses.forEach((exp) => {
      if (exp.id === rowid) {
        setExpense({
          title: exp.title,
          category: exp.category,
          amount: exp.amount,
        });
      }
    });
    setMenuPosition({});
  }

  return (
    <div className="context-menu" style={menuPosition}>
      <div onClick={handleEdit}>Edit</div>
      <div onClick={handleDelete}>Delete</div>
    </div>
  );
}
