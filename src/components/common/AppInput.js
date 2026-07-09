import React from "react";
import "./AppInput.scss";

export default function AppInput({
    type = "text",
    label,
    id,
    error,
    onChange,
    className,
    ...rest
}) {
    // 1. 明確處理你關心的邏輯
    const combinedClass = `form-input ${error ? "errorInput" : ""} ${className || ""}`;

    // 2. 剩下的屬性 (如 id, type, placeholder) 直接透傳
    return (
        <div className="input-group">
            {label && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                type={type}
                className={combinedClass}
                onChange={onChange}
                {...rest} // 這裡透傳剩下的所有原生屬性
            />
            {error && <p className="errors">{error}</p>}
        </div>
    );
}
