import checkIcon from "../../assets/icons/check.svg";
import "./BooleanToggle.scss";
export default function BooleanToggle({ value, onChange, id }) {
    return (
        <div className="toggle-container">
            <button className={value === true ? "active" : ""} onClick={() => onChange(true)}>
                Yes {value ? <img src={checkIcon}></img> : ""}
            </button>
            <button className={value === false ? "active" : ""} onClick={() => onChange(false)}>
                No{!value ? <img src={checkIcon}></img> : ""}
            </button>
            <input
                id={id}
                required
                tabIndex={-1}
                style={{ opacity: 0, position: "absolute", pointerEvents: "none" }}
                value={value || ""}
                onChange={() => {}}
                aria-label="boolean-input"
            />
        </div>
    );
}
