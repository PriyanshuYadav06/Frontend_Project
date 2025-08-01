import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import { Toaster } from "react-hot-toast";
import TodoDashboard from "./pages/TodoDashboard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Routes>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      <Routes>
        <Route path="/todos" element={<TodoDashboard />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
export default App;
