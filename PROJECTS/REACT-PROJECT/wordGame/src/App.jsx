import { Route, Routes } from "react-router";
import Dashboard from "../pages/Dashboard";
import Landing from "../pages/Landing";
import Result from "../pages/Result";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}
export default App;
