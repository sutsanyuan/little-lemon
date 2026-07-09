import React from "react";
import "./AppTextArea.scss";

export default function AppTextArea({ label, error, onChange, className, id, ...rest }) {
    const combinedClass = `form-textarea ${error ? "errorInput" : ""} ${className || ""}`;

    return (
        <div className="textarea-group">
            {label && <label htmlFor={id}>{label}</label>}
            <textarea
                id={id}
                aria-label={label}
                className={combinedClass}
                onChange={onChange}
                {...rest}
            />
            {error && <p className="errors">{error}</p>}
        </div>
    );
}
