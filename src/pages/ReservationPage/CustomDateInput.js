import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css"; // 引入基本樣式
import "./DatePickerCustom.scss"; // 之後我們在這裡覆蓋 CSS

export default function CustomDateInput({ formData, updateFormData }) {
    const [isOpen, setIsOpen] = useState(false);
    // 當日期選定時，自動更新並收起
    const handleDateChange = (date) => {
        updateFormData({ date: date.toISOString() });
        setIsOpen(false);
    };
    return (
        <div className="custom-datepicker-container">
            {/* 顯示欄位 */}
            <div className="input-box" onClick={() => setIsOpen(!isOpen)}>
                {formData.date ? format(new Date(formData.date), "EEE, MMM d") : "Pick a date"}
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
