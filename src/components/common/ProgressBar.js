import React from "react";
import "./ProgressBar.scss";

export default function ProgressBar({ steps, currentStep }) {
    return (
        <section className="progressBarBlock">
            <div className="container">
                <div className="progress-bar">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`step ${currentStep === index + 1 ? "active" : ""}`}>
                            {/* 這裡只顯示數字，或者根據陣列內容顯示 Label */}
                            <span className="step-number">{step.label || index + 1}</span>
                            <span className="step-bar"></span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
