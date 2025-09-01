import React from "react";
import Button from "./Button";
export default function Setting({ name, age, email, checkedValues }) {
  return <>
    <p><strong>NAME:</strong>{name}</p>
    <p><strong>AGE:</strong>{age}</p>
    <p><strong>EMAIL:</strong>{email}</p>
    <p><strong>HOBBIES:</strong>{checkedValues.map((val) => `${val} `)}</p>
    <Button text="SUBMIT" />
  </>;
}
