import React, { useState, useEffect } from "react";
import { useReservation } from "../../hooks/useReservation";

import { GUEST_OPTIONS } from "../../data/reservationOptions";

import CustomDateInput from "./CustomDateInput";
import AppDropdown from "../../components/common/AppDropdown";
import TimePicker from "./TimePicker";
import AdultIcon from "../../assets/icons/Adults.svg";
import KidIcon from "../../assets/icons/Kids.svg";
import BooleanToggle from "../../components/common/BooleanToggle";

import MapPic from "../../assets/images/map.png";
import LocationIcon from "../../assets/icons/location.svg";
import PhoneIcon from "../../assets/icons/phone_lemon.svg";
import HoursIcon from "../../assets/icons/hour_lemon.svg";
export default function Step1({ formData, dispatch, nextStep }) {
    // [新增] 初始化 Hook
    const { updateGuests, updateDate, updateField } = useReservation(dispatch);

    // const handleTimeSelect = (time) => {
    //     dispatch({ type: "UPDATE_FIELD", payload: { time: time } });
    // };

    // const handleGuestsChange = (type, value) => {
    //     dispatch({
    //         type: "UPDATE_FIELD",
    //         payload: {
    //             guests: {
    //                 ...formData.guests,
    //                 [type]: value,
    //             },
    //         },
    //     });
    // };

    const [openDropdown, setOpenDropdown] = useState(null);
    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const getDisplayValue = (type, val) => {
        if (!val) return type; // 還沒選就顯示 "Adult"
        return `${val} ${val > 1 ? type + "s" : type}`;
    };
    useEffect(() => {
        console.log("formData(state) 已經更新:", formData);
    }, [formData]);

    return (
        <div className="stepWrapper">
            <div className="stepBlock">
                <section className="infoSection">
                    <h1>Resevre A Table</h1>
                    <h2>Savor Mediterranean flavors. Reserve your table today!</h2>
                    <a
                        href="https://maps.app.goo.gl/UVUmCFR4USeb1feM7"
                        target="_blank"
                        rel="noreferrer"
                        className="map">
                        <picture>
                            <img src={MapPic}></img>
                        </picture>
                    </a>
                    <ul className="infoList">
                        <li>
                            <img src={LocationIcon} />
                            <span>
                                <h4>Location</h4>
                                <p>1340 W Fulton St, Chicago, IL 60607 USA</p>
                            </span>
                        </li>
                        <li>
                            <img src={PhoneIcon} />
                            <span>
                                <h4>Phone Number</h4>
                                <p>+1 000 000 000</p>
                            </span>
                        </li>
                        <li>
                            <img src={HoursIcon} />
                            <span>
                                <h4>Hours</h4>
                                <p>
                                    11-00-14:00
                                    <br />
                                    17:00-20:00
                                </p>
                            </span>
                        </li>
                    </ul>
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
                            onChange={(val) => updateGuests("adult", val)}
                            isOpen={openDropdown === "adults"}
                            onToggle={() => toggleDropdown("adults")}></AppDropdown>
                        <AppDropdown
                            label="Kid"
                            icon={KidIcon}
                            options={GUEST_OPTIONS}
                            value={getDisplayValue("Kid", formData.guests.kid)}
                            onChange={(val) => updateGuests("kid", val)}
                            isOpen={openDropdown === "kids"}
                            onToggle={() => toggleDropdown("kids")}></AppDropdown>
                    </div>
                    <h4>Dining Date</h4>
                    <CustomDateInput
                        selectedDate={formData.date}
                        onDateChange={(date) => updateDate(date)}
                    />
                    <h4>Require Booth</h4>

                    <BooleanToggle
                        value={formData.isBoothRequest}
                        onChange={(val) => updateField("isBoothRequest", val)}></BooleanToggle>
                    <hr></hr>
                    <h3>Time</h3>
                    <TimePicker
                        availableTimes={formData.availableTimes}
                        selectedTime={formData.time}
                        onTimeSelect={(time) => updateField("time", time)}
                    />
                    <button className="formBtn" onClick={nextStep}>
                        Next Step
                    </button>
                </section>
            </div>
        </div>
    );
}
