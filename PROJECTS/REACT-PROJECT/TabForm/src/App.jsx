import { useState } from "react";
import "./App.css";
import Tabs from "./components/Tabs";
import Button from "./components/Button";
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import Interest from "./components/interest";
function App() {
  const [tab, setTab] = useState(1);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [checkedValues, setcheckedValues] = useState([]);
  return (
    <div className="main">
      <Tabs setTab={setTab} />
      <div className="pis">
        {tab == 1 ? (
          <Profile
            name={name}
            setName={setName}
            age={age}
            setAge={setAge}
            email={email}
            setEmail={setEmail}
            tab={tab}
            setTab={setTab}
          />
        ) : tab == 2 ? (
          <Interest
            checkedValues={checkedValues}
            setcheckedValues={setcheckedValues}
            setTab={setTab}
          />
        ) : tab == 3 ? (
          <Setting
            name={name}
            age={age}
            email={email}
            checkedValues={checkedValues}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default App;
