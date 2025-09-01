import React, { useEffect, useState } from "react";
import Button from "./Button";

export default function Interest({ checkedValues, setcheckedValues, setTab }) {
  const [checkError, setCheckError] = useState("");
  const [valid, setValid] = useState(false);
  const hobbies = ['Cricket', 'Football', 'Singing', 'Dance', 'Coding'];
  const handleChange = (e, idx) => {
    let updatedCheck = [];
    if (e.target.checked) {
      updatedCheck = [...checkedValues, hobbies[idx]];
    } else {
      updatedCheck = checkedValues.filter((val, id) => idx != id);
    }
    setcheckedValues(updatedCheck);
  }
  const handleClick = () => {
    if (checkedValues.length == 0) {
      setValid(false);
      setCheckError("atleast checked one hobby")
    } else {
      setValid(true);
      setCheckError("")
    }
  }
  useEffect(() => {
    if (valid) setTab(3)
  }, [valid])
  return <>
    <div className="formContainer">
      <>
        {hobbies.map((hobby, idx) => {
          return (
            <label key={hobby} htmlFor="">{hobby}
              <input onChange={(e) => handleChange(e, idx)} type="checkbox" name="" id="" />
            </label>
          )
        })}
      </><p>{checkError}</p>
    </div>
    <Button onClick={handleClick} text="NEXT" />
  </>;
}
