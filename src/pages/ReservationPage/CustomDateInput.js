import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import arrowIcon from "../../assets/icons/arrowDown.svg";
import calenderIcon from "../../assets/icons/calender.svg";
import "react-datepicker/dist/react-datepicker.css"; // 引入基本樣式
import "./DatePickerCustom.scss"; // 之後我們在這裡覆蓋 CSS

export default function CustomDateInput({ formData, dispatch }) {
    const [isOpen, setIsOpen] = useState(false);
    // 當日期選定時，自動更新並收起
    const handleDateChange = (date) => {
        dispatch({ type: "UPDATE_DATE", payload: date.toISOString() });
        setIsOpen(false);
    };
    return (
        <div className="custom-datepicker-container">
            {/* 顯示欄位 */}
            <div className="input-box" onClick={() => setIsOpen(!isOpen)}>
                <img src={calenderIcon}></img>
                <span>
                    {" "}
                    {formData.date ? format(new Date(formData.date), "EEE, MMM d") : "Pick a date"}
                </span>
                <img src={arrowIcon} alt="arrow" className={`arrow ${isOpen ? "rotate" : ""}`} />
            </div>
            {/* 控制日曆開關的邏輯 */}
            {isOpen && (
                <div className="calender-popup">
                    <DatePicker
                        selected={formData.date ? new Date(formData.date) : null}
                        onChange={handleDateChange}
                        inline
                    />
                </div>
            )}
        </div>
    );
}
