import React from "react";
import "./AppTextArea.scss";

export default function AppTextArea({ label, error, onChange, className, ...rest }) {
    const combinedClass = `form-textarea ${error ? "errorInput" : ""} ${className || ""}`;

    return (
        <div className="textarea-group">
            {label && <label>{label}</label>}
            <textarea className={combinedClass} onChange={onChange} {...rest} />
            {error && <p className="errors">{error}</p>}
        </div>
    );
}
