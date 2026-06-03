import checkIcon from "../../assets/icons/check.svg";
import "./BooleanToggle.scss";
export default function BooleanToggle({ value, onChange }) {
    return (
        <div className="toggle-container">
            <button className={value === true ? "active" : ""} onClick={() => onChange(true)}>
                Yes {value ? <img src={checkIcon}></img> : ""}
            </button>
            <button className={value === false ? "active" : ""} onClick={() => onChange(false)}>
                No{!value ? <img src={checkIcon}></img> : ""}
            </button>
        </div>
    );
}
