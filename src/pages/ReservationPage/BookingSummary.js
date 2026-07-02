// BookingSummary.js
import "./BookingSummary.scss";
import PeopleIcon from "../../assets/icons/People.svg";
import DateIcon from "../../assets/icons/calender.svg";
import TimeIcon from "../../assets/icons/Hour.svg";
import BoothIcon from "../../assets/icons/Booth.svg";
import { format, parseISO } from "date-fns";
export default function BookingSummary({ formData, edit }) {
    const formatDate = format(parseISO(formData.date), "EEE, MMM d");
    return (
        <section className="summary-card">
            <h3>LITTLE LEMON, CHICAGO</h3>
            <hr></hr>
            <ul className="summary-details">
                <li>
                    <img src={PeopleIcon} alt="People icon"></img>
                    <p>
                        {formData.guests.adult} Adult, {formData.guests.kid} Kid
                    </p>
                </li>
                <li>
                    <img src={DateIcon} alt="Date icon"></img>
                    <p>{formData.date ? formatDate : "Not selected"}</p>
                </li>
                <li>
                    <img src={TimeIcon} alt="Time icon"></img>
                    <p>{formData.time || "Not selected"}</p>
                </li>
                <li>
                    <img src={BoothIcon} alt="Booth icon"></img>
                    <p>Booth required: {formData.isBoothRequest ? "Yes" : "No"}</p>
                </li>

                {edit && (
                    <button className="edit-btn" onClick={edit}>
                        edit
                    </button>
                )}
            </ul>
        </section>
    );
}
