import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // 引入基本樣式
import "./DatePickerCustom.scss"; // 之後我們在這裡覆蓋 CSS
export default function Step1({ formData, updateFormData, nextStep }) {
    return (
        <div>
            <section className="infoSection"></section>
            <section className="formSection">
                <div className="date-picker-wrapper">
                    <DatePicker
                        selected={formData.date ? new Date(formData.date) : null}
                        onChange={(date) => updateFormData({ date: date.toISOString() })}
                        placeholderText="Pick a date"
                        dateFormat="yyyy/MM/dd"
                        minDate={new Date()} // 限制不能選過去的時間
                        inline
                    />
                </div>
            </section>

            <h3>Step 1: Choose Date & Time</h3>
            <p>測試：目前選定人數為 {formData.guests}</p>
            <button onClick={nextStep}>Next Step</button>
        </div>
    );
}
