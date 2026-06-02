import React from "react";
import "./TimePicker.scss";
import "./Reservation.scss";
import checkIcon from "../../assets/icons/check.svg";
export default function TimePicker({ selectedTime, onTimeSelect }) {
    //define selectable time
    const timeSlots = [
        { label: "Noon", times: ["11:00", "11:30", "12:00", "12:30", "13:00"] },
        { label: "Evening", times: ["17:00", "17:30", "18:00", "18:30", "19:00"] },
    ];

    return (
        <div className="time-picker-container">
            {timeSlots.map((category) => (
                <div key={category.label} className="time-category">
                    <h4>{category.label}</h4>
                    <div className="time-grid">
                        {category.times.map((time) => (
                            <button
                                key={time}
                                className={selectedTime === time ? "selected" : ""}
                                onClick={() => onTimeSelect(time)}>
                                {time}
                                {selectedTime === time ? <img src={checkIcon}></img> : ""}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
