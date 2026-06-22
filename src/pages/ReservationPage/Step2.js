import { useState, useEffect } from "react";
import { useReservation } from "../../hooks/useReservation";

import { OCCASION_OPTIONS } from "../../data/reservationOptions";
import AppDropdown from "../../components/common/AppDropdown";
import OccasionIcon from "../../assets/icons/occasion.svg";

export default function Step1({ formData, dispatch, nextStep }) {
    const { updateField } = useReservation(dispatch);
    const [openDropdown, setOpenDropdown] = useState(null);
    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };
    const getDisplayValue = (type, val) => {
        if (!val) return type; // 還沒選就顯示 "Adult"
        return val;
    };
    useEffect(() => {
        console.log("formData(state) 已經更新:", formData);
    }, [formData]);
    return (
        <div className="stepWrapper">
            <div className="stepBlock">
                <section className="infoSection">
                    <h1>One Last Step</h1>
                    <h2>Enter your contact details and confirm the booking!</h2>
                </section>
                <section className="formSection">
                    <h3>contact Details</h3>
                    <h4>Name</h4>
                    <div className="inputGroupRow">{/* Name/Surname */}</div>
                    <h4>Gender</h4>
                    {/* radio btn Mr. Ms. N/A or Maybe toggle */}
                    <h4>Phone Number</h4>
                    <div className="inputGroupRow">{/* Phone Number */}</div>

                    <h4>Email</h4>
                    {/* text input */}

                    <h4>Ocassion</h4>
                    <AppDropdown
                        label="Occasion"
                        icon={OccasionIcon}
                        options={OCCASION_OPTIONS}
                        value={getDisplayValue("Occasion", formData.occasion)}
                        onChange={(val) => updateField("occasion", val)}
                        isOpen={openDropdown === "occasion"}
                        onToggle={() => toggleDropdown("occasion")}></AppDropdown>
                    <button className="formBtn" onClick={nextStep}>
                        Next Step
                    </button>
                </section>
            </div>
        </div>
    );
}
