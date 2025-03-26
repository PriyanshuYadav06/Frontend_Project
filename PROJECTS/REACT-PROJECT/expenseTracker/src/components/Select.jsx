import React from "react";

export default function Select({
    label,
    id,
    name,
    onChange,
    value,
    error,
    options,
    defaultOption
}) {
    return (
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <select id={id} name={name} value={value} onChange={onChange}>
                <option value="" hidden>
                    {defaultOption}
                </option>
                {options.map((option,i) => {
                    return <option key={i} value={option}>{option}</option>;
                })}
            </select>
            <p className="errs">{error}</p>
        </div>
    );
}
