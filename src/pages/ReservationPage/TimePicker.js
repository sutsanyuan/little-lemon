import React from "react";
import "./TimePicker.scss";
import "./Reservation.scss";
import checkIcon from "../../assets/icons/check.svg";
//20260618 調整成動態
// const timeSlots = [
//     { label: "Noon", times: ["11:00", "11:30", "12:00", "12:30", "13:00"] },
//     { label: "Evening", times: ["17:00", "17:30", "18:00", "18:30", "19:00"] },
// ];
export default function TimePicker({ availableTimes, selectedTime, onTimeSelect }) {
    //define selectable time

    return (
        <div className="time-picker-container">
            {availableTimes.map((category) => (
                <div key={category.label} className="time-category">
                    <h4>{category.label}</h4>
                    <div className="time-grid">
                        {category.times.map((time) => (
                            <button
                                key={time}
                                className={selectedTime === time ? "selected" : ""}
                                onClick={() => onTimeSelect(time)}>
                                {time}
                                {selectedTime === time ? (
                                    <img src={checkIcon} alt="checkIcon"></img>
                                ) : (
                                    ""
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
