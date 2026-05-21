import React from "react";

export default function TimePicker({ selectedTime, onTimeSelect }) {
    //define selectable time
    const times = [
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
    ];
    return (
        <div className="time-grid">
            {times.map((time) => (
                <button
                    key={time}
                    className={`time-btn ${selectedTime === time ? "selected" : ""}`}
                    onClick={() => onTimeSelect(time)}>
                    {time}
                </button>
            ))}
        </div>
    );
}
