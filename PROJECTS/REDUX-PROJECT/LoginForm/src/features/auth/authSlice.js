import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  users: JSON.parse(localStorage.getItem("users")) || [],
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const foundUser = storedUsers.find(
        (u) => u.email === email && u.password === password
      );
      if (foundUser) {
        state.user = foundUser;
        localStorage.setItem("user", JSON.stringify(foundUser));
      }
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    register: (state, action) => {
      const newUser = action.payload;
      state.users.push(newUser);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
});
export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;
