import React from "react";
import CustomDateInput from "./CustomDateInput";

export default function Step1({ formData, updateFormData, nextStep }) {
    return (
        <div>
            <section className="infoSection"></section>
            <section className="formSection">
                <CustomDateInput formData={formData} updateFormData={updateFormData} />
            </section>

            <h3>Step 1: Choose Date & Time</h3>
            <p>測試：目前選定人數為 {formData.guests}</p>
            <button onClick={nextStep}>Next Step</button>
        </div>
    );
}
