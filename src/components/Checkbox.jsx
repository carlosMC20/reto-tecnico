import React from "react"
import check from '../img/check.svg'

const Checkbox = ({ checked, setChecked, label }) => {
    return (
        <div className="checkbox" onClick={() => setChecked((v) => !v)}>
            <div className={`checkbox__box ${checked ? "checkbox__box--checked" : ""}`}>
                {checked && (<img src={check} alt="check" />)}
            </div>
            <p className="checkbox__label">{label}</p>
        </div>
    )
}

export default Checkbox