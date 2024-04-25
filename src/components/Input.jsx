import React, { useId } from "react"

const Input = ({ type, label, name, border, value, onChange, maxLength }) => {
    const id = useId()
    
    return (
        <label
            htmlFor={id}
            className={`input ${border ? "no-radius-tl no-radius-bl no-border-left" : ""}`}
        >
            {label}
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                maxLength={maxLength}
                required
            />
        </label>
    )
}

export default Input