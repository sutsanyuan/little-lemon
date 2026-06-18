import React, { useReducer, useState } from "react";
import { reservationReducer, initialReservationState } from "../../reducers/reservationReducer"; // 匯入邏輯
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import ProgressBar from "../../components/common/ProgressBar";

export default function Reservation() {
    const [step, setStep] = useState(1);
    const [state, dispatch] = useReducer(reservationReducer, initialReservationState);
    const reservationSteps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }];
    //準備改這裡 0617
    // 集中管理表單資料
    // const [formData, setFormData] = useState({
    //     date: "",
    //     time: "",
    //     guests: { adult: "", kid: "" },
    //     isBoothRequest: false,
    //     occasion: "Birthday",
    //     name: "",
    //     email: "",
    //     phone: "",
    // });
    // //更新函式組件
    // const updateFormData = (newData) => {
    //     setFormData((prev) => ({ ...prev, ...newData }));
    // };
    //Render Steps
    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <Step1
                        // 3. 傳遞 state 和 dispatch，取代原本的 formData 和 updateFormData
                        formData={state}
                        dispatch={dispatch}
                        nextStep={() => setStep(2)}
                    />
                );
            case 2:
                return (
                    <Step2
                        formData={state}
                        dispatch={dispatch}
                        prevStep={() => setStep(1)}
                        nextStep={() => setStep(3)}
                    />
                );
            case 3:
                return <Step3 formData={state} />;
            default:
                return <Step1 formData={state} dispatch={dispatch} nextStep={() => setStep(2)} />;
        }
    };

    return (
        <main>
            <section className="reservationBlock">
                <div className="container">
                    {renderStep()}
                    {/* 這裡可以放你的進度條組件 */}
                    <div className="progress-bar">Step {step} of 3</div>
                </div>
            </section>

            <ProgressBar steps={reservationSteps} currentStep={step} />
        </main>
    );
}
