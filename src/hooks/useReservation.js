import { useContext } from "react";

export const useReservation = (dispatch) => {
    const updateGuests = (type, value) => {
        dispatch({ type: "UPDATE_GUESTS", payload: { [type]: value } });
    };
    const updateDate = (date) => {
        dispatch({ type: "UPDATE_DATE", payload: date });
    };
    const updateField = (key, value) => {
        dispatch({ type: "UPDATE_FIELD", payload: { [key]: value } });
    };
    return { updateGuests, updateDate, updateField };
};
