import React from "react";
import "./AppDropdown.scss";
import arrowIcon from "../../assets/icons/arrowDown.svg";
export default function AppDropdown({ label, icon, options, value, onChange, isOpen, onToggle }) {
    const displayText = value ? `${value}` : label;

    return (
        <div className="custom-dropdown">
            {/* Title */}
            <div className={`dropdown-header ${isOpen ? "active" : ""}`} onClick={onToggle}>
                <img src={icon} alt="icon" />
                <span>{displayText}</span>
                <img src={arrowIcon} alt="arrow" className={`arrow ${isOpen ? "rotate" : ""}`} />
            </div>
            {/* Dropdown content */}
            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((opt) => {
                        return (
                            <li
                                key={opt.value}
                                onClick={() => {
                                    onChange(opt.value);
                                    onToggle();
                                }}>
                                {opt.label}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
