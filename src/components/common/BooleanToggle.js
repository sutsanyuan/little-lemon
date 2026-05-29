import checkIcon from "../../assets/icons/check.svg";
export default function BooleanToggle({ value, onChange }) {
    return (
        <div className="toggle-container">
            <button className={value === true ? "active" : ""} onClick={() => onChange(true)}>
                Yes <img src={checkIcon}></img>
            </button>
            <button className={value === false ? "active" : ""} onClick={() => onChange(true)}>
                Yes
            </button>
        </div>
    );
}
