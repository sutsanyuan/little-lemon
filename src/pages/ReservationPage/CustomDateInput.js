import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import arrowIcon from "../../assets/icons/arrowDown.svg";
import calenderIcon from "../../assets/icons/calender.svg";
import "react-datepicker/dist/react-datepicker.css"; // 引入基本樣式
import "./DatePickerCustom.scss"; // 之後我們在這裡覆蓋 CSS

export default function CustomDateInput({ selectedDate, onDateChange, isError }) {
    const [isOpen, setIsOpen] = useState(false);
    // 當日期選定時，自動更新並收起
    const handleDateChange = (date) => {
        // [修改]：直接觸發父層傳來的函式，不再直接呼叫 dispatch
        onDateChange(date.toISOString());
        setIsOpen(false);
    };
    return (
        <div className={`custom-datepicker-container ${isError ? "errorInput" : ""}`}>
            {/* 這一行是為了 HTML5 驗證與測試用的隱藏欄位 */}
            <input
                required
                tabIndex={-1}
                style={{ opacity: 0, position: "absolute", pointerEvents: "none" }}
                value={selectedDate || ""}
                onChange={() => {}}
                aria-label="date-input"
            />
            {/* 顯示欄位 */}
            <div className="input-box " onClick={() => setIsOpen(!isOpen)}>
                <img src={calenderIcon}></img>
                <span>
                    {" "}
                    {selectedDate ? format(new Date(selectedDate), "EEE, MMM d") : "Pick a date"}
                </span>
                <img src={arrowIcon} alt="arrow" className={`arrow ${isOpen ? "rotate" : ""}`} />
            </div>
            {/* 控制日曆開關的邏輯 */}
            {isOpen && (
                <div className="calender-popup">
                    <DatePicker
                        selected={selectedDate ? new Date(selectedDate) : null}
                        onChange={handleDateChange}
                        inline
                    />
                </div>
            )}
        </div>
    );
}
