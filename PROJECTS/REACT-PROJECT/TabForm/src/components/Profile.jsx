import React, { useEffect, useState } from "react";
import Button from "./Button";
export default function Profile({
    name,
    setName,
    age,
    setAge,
    email,
    setEmail,
    setTab
}) {
    const [nameError, setNameError] = useState("");
    const [ageError, setAgeError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [valid, setValid] = useState(false);
    const handleClick = () => {
        if (name.trim() == "") {
            setValid(false);
            setNameError("name is required")
        } else {
            setValid(true);
            setNameError("");
        }
        if (age.trim() == "") {
            setValid(false);
            setAgeError("age is required");
        } else {
            setValid(true);
            setAgeError("");
        }
        if (email.trim() == "") {
            setValid(false);
            setEmailError("email is required");
        } else {
            setValid(true);
            setEmailError("");
        }
    }
    useEffect(() => {
        if (valid) setTab(2);
    }, [valid])
    return (
        <>
            <div className="formContainer">
                <div>
                    <label htmlFor="">name</label>
                    <input
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        type="text"
                    />
                    <p>{nameError}</p>
                </div>
                <div>
                    <label htmlFor="">Age</label>
                    <input
                        onChange={(e) => {
                            setAge(e.target.value);
                        }}
                        type="text"
                    />
                    <p>{ageError}</p>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        type="text"
                    />
                    <p>{emailError}</p>
                </div>
            </div>
            <Button onClick={handleClick} text="NEXT" />
        </>
    );
}

