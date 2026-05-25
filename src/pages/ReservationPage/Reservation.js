import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function Reservation() {
    const [step, setStep] = useState(1);
    // 集中管理表單資料
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: { adult: "", kid: "" },
        occasion: "Birthday",
        name: "",
        email: "",
        phone: "",
    });
    //更新函式組件
    const updateFormData = (newData) => {
        setFormData((prev) => ({ ...prev, ...newData }));
    };
    //Render Steps
    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <Step1
                        formData={formData}
                        updateFormData={updateFormData}
                        nextStep={() => setStep(2)}
                    />
                );
            case 2:
                return (
                    <Step2
                        formData={formData}
                        updateFormData={updateFormData}
                        prevStep={() => setStep(1)}
                        nextStep={() => setStep(3)}
                    />
                );
            case 3:
                return <Step3 formData={formData} />;
            default:
                return <Step1 />;
        }
    };

    return (
        <main className="container">
            <h2>Reserve A Table</h2>
            {/* 這裡可以放你的進度條組件 */}
            <div className="progress-bar">Step {step} of 3</div>

            {renderStep()}
        </main>
    );
}
