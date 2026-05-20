import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

export default function Button({
    children,
    icon,
    showIcon = true,
    backgroundColor,
    textColor,
    onClick,
    className = "",
    to,
}) {
    let tc = textColor;
    let bc = backgroundColor;
    if (textColor === "primary-lemon") {
        tc = "#f4ce14";
    }
    if (backgroundColor === "primary-lemon") {
        bc = "#f4ce14";
    }
    const style = { backgroundColor: bc, color: tc };

    if (to) {
        return (
            <Link to={to} className={`custom-button ${className}`} style={style}>
                {showIcon && icon && (
                    <span className="button-icon">
                        <img src={icon} alt="icon" />
                    </span>
                )}
                {children}
            </Link>
        );
    }
    return (
        <button className={`custom-button ${className}`} onClick={onClick} style={style}>
            {showIcon && icon && (
                <span className="button-icon">
                    <img src={icon} alt="icon"></img>
                </span>
            )}
            {children}
        </button>
    );
}
