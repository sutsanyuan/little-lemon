import { useState, useEffect } from "react";
import { useReservation } from "../../hooks/useReservation";

import { Gender_OPTIONS, OCCASION_OPTIONS } from "../../data/reservationOptions";
import AppDropdown from "../../components/common/AppDropdown";
import AppInput from "../../components/common/AppInput";
import AppTextArea from "../../components/common/AppTextArea";
import OccasionIcon from "../../assets/icons/occasion.svg";
import { validateStep2 } from "../../utils/validate";
import { handleStepConfirm } from "../../utils/stepHandler";
import BookingSummary from "./BookingSummary";

export default function Step1({ formData, dispatch, nextStep, prevStep }) {
    const [errors, setErrors] = useState({});
    const clearError = (field) => {
        setErrors((prev) => {
            const next = { ...prev };
            delete next[field];
            return next;
        });
    };
    const onConfirm = () => {
        handleStepConfirm(formData, validateStep2, setErrors, nextStep);
    };
    const { updateField, updateName } = useReservation(dispatch);
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
                    <BookingSummary formData={formData} edit={prevStep}></BookingSummary>
                </section>
                <section className="formSection">
                    <h3>contact Details</h3>
                    <h4>Name</h4>
                    <div className="inputGroupRow">
                        <AppInput
                            value={formData.name.firstName}
                            onChange={(e) => {
                                updateName("firstName", e.target.value);
                                clearError("firstName");
                            }}
                            error={errors.firstName}
                            placeholder="Name"
                        />
                        <AppInput
                            value={formData.name.lastName}
                            onChange={(e) => {
                                updateName("lastName", e.target.value);
                                clearError("lastName");
                            }}
                            error={errors.lastName}
                            placeholder="Surname"
                        />
                    </div>
                    <h4>Gender</h4>
                    {/* radio btn Mr. Ms. N/A or Maybe toggle */}
                    <AppDropdown
                        label="Occasion"
                        options={Gender_OPTIONS}
                        value={getDisplayValue("Gender", formData.gender)}
                        onChange={(val) => updateField("gender", val)}
                        isOpen={openDropdown === "gender"}
                        onToggle={() => toggleDropdown("gender")}></AppDropdown>
                    <h4>Phone Number</h4>
                    <div className="phoneInputRow">
                        <AppInput value="+1" type="text" disabled className="countryCode" />
                        <AppInput
                            value={formData.phone}
                            onChange={(e) => {
                                updateField("phone", e.target.value);
                                clearError("phone");
                            }}
                            error={errors.phone}
                            placeholder="Phone Number"
                            type="tel"
                            className="phoneNumber"
                        />
                    </div>

                    <h4>Email</h4>
                    <AppInput
                        value={formData.email}
                        onChange={(e) => {
                            updateField("email", e.target.value);
                            clearError("email");
                        }}
                        error={errors.email}
                        placeholder="Email"
                        type="email"
                    />

                    <h4>Ocassion</h4>
                    <AppDropdown
                        label="Occasion"
                        icon={OccasionIcon}
                        options={OCCASION_OPTIONS}
                        value={getDisplayValue("Occasion", formData.occasion)}
                        onChange={(val) => updateField("occasion", val)}
                        isOpen={openDropdown === "occasion"}
                        onToggle={() => toggleDropdown("occasion")}
                    />
                    <h4>Note</h4>
                    <AppTextArea
                        value={formData.note}
                        onChange={(e) => {
                            updateField("note", e.target.value);
                            clearError("note");
                        }}
                        error={errors.note}
                        placeholder="Got any special request? Leave it here."
                        rows={4} // 透過 ...rest 直接傳入 textarea 原生屬性
                    />
                    <button className="formBtn" onClick={onConfirm}>
                        Next Step
                    </button>
                </section>
            </div>
        </div>
    );
}
