import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || {},
};
// {
//   todos: {
//     "user1@email.com": [
//       { id: 1, text: "Todo 1", completed: false },
//       { id: 2, text: "Todo 2", completed: true }
//     ]
//   }
// }
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { email, text } = action.payload;
      if (!state.todos[email]) {
        state.todos[email] = [];
      }
      state.todos[email].push({
        id: Date.now(),
        text,
        completed: false,
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleTodo: (state, action) => {
      const { email, id } = action.payload;
      const userTodos = state.todos[email] || [];
      const todo = userTodos.find((t) => t.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
    deleteTodo: (state, action) => {
      const { email, id } = action.payload;
      if (state.todos[email]) {
        state.todos[email] = state.todos[email].filter((t) => t.id !== id);
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
  },
});
export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
