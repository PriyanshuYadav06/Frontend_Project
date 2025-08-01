import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../features/todos/todosSlice";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
export default function TodoDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const todos = useSelector((state) => state.todos.todos[user.email] || []);
  const [text, setText] = useState("");
  function handleAddTodo() {
    if (!text.trim()) {
      toast.error("Enter a todo!");
      return;
    }
    dispatch(addTodo({ email: user.email, text }));
    setText("");
  }
  function handleLogout() {
    dispatch(logout());
    navigate("/");
    toast.success("Logged out!");
  }
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100 p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-6">
        <div className="flex flex-col  justify-between items-start mb-4">
          <h1 className="text-2xl font-semibold text-indigo-600">
            {user.email}'s Todos
          </h1>
          <button
            onClick={handleLogout}
            className="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
          >
            Logout
          </button>
        </div>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter new todo"
            className="flex-1 border border-gray-300 rounded-md px-3 py-2"
          />
          <button
            onClick={handleAddTodo}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center border p-2 rounded"
            >
              <span
                className={`flex-1 cursor-pointer ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
                onClick={() =>
                  dispatch(toggleTodo({ email: user.email, id: todo.id }))
                }
              >
                {todo.text}
              </span>
              <button
                onClick={() =>
                  dispatch(deleteTodo({ email: user.email, id: todo.id }))
                }
                className="ml-2 text-sm bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <p className="text-gray-500 text-center mt-4">No todos yet!</p>
        )}
      </div>
    </div>
  );
}
