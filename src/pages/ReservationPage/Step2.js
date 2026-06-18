import React from "react";
import { OCCASION_OPTIONS } from "../../data/reservationOptions";
import AppDropdown from "../../components/common/AppDropdown";

export default function Step1({ formData, dispatch, nextStep }) {
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

                    <button className="formBtn" onClick={nextStep}>
                        Next Step
                    </button>
                </section>
            </div>
        </div>
    );
}
