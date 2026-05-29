import React, { useState } from "react";
import CustomDateInput from "./CustomDateInput";
import TimePicker from "./TimePicker";
import { format } from "date-fns";
import { GUEST_OPTIONS, OCCASION_OPTIONS } from "../../data/reservationOptions";
import AppDropdown from "../../components/common/AppDropdown";
import AdultIcon from "../../assets/icons/Adults.svg";
import KidIcon from "../../assets/icons/Kids.svg";
export default function Step1({ formData, updateFormData, nextStep }) {
    const handleTimeSelect = (time) => {
        updateFormData({ time: time });
    };

    const [openDropdown, setOpenDropdown] = useState(null);
    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };
    const handleGuestsChange = (type, value) => {
        updateFormData({
            guests: {
                ...formData.guests,
                [type]: value,
            },
        });
    };

    const getDisplayValue = (type, val) => {
        if (!val) return type; // 還沒選就顯示 "Adult"
        return `${val} ${val > 1 ? type + "s" : type}`;
    };
    return (
        <div>
            <section className="infoSection">
                <h1>Resevre A Table</h1>
                <h2>Savor Mediterranean flavors. Reserve your table today!</h2>
            </section>
            <section className="formSection">
                <h3>Reservation Details</h3>
                <h4>Number of Dinners</h4>
                <div className="inputGroupRow">
                    <AppDropdown
                        label="Adult"
                        icon={AdultIcon}
                        options={GUEST_OPTIONS}
                        value={getDisplayValue("Adult", formData.guests.adult)}
                        onChange={(val) => handleGuestsChange("adult", val)}
                        isOpen={openDropdown === "adults"}
                        onToggle={() => toggleDropdown("adults")}></AppDropdown>
                    <AppDropdown
                        label="Kid"
                        icon={KidIcon}
                        options={GUEST_OPTIONS}
                        value={getDisplayValue("Kid", formData.guests.adult)}
                        onChange={(val) => handleGuestsChange("kid", val)}
                        isOpen={openDropdown === "kids"}
                        onToggle={() => toggleDropdown("kids")}></AppDropdown>
                </div>
                <h4>Dining Date</h4>
                <CustomDateInput formData={formData} updateFormData={updateFormData} />
                <h4>Require Booth</h4>
                <TimePicker selectedTime={formData.time} onTimeSelect={handleTimeSelect} />
            </section>

            <h3>Step 1: Choose Date & Time</h3>
            {/* <p>測試：目前選定人數為 {formData.guests}</p>
            <p>測試：date {format(new Date(formData.date), "EEE, MMM d")}</p>
            <p>測試：time {formData.time}</p> */}
            <button onClick={nextStep}>Next Step</button>
        </div>
    );
}
