import React from "react";

export default function Step1({ formData, updateFormData, nextStep }) {
    return (
        <React.Fragment>
            <h3>Step 1: Choose Date & Time</h3>
            <p>測試：目前選定人數為 {formData.guests}</p>
            <button onClick={nextStep}>Next Step</button>
        </React.Fragment>
    );
}
