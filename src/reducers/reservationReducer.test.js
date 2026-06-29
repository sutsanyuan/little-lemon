import { reservationReducer, initialReservationState } from "./reservationReducer";

describe("Reservation Reducer", () => {
    test("Should update date and reset time", () => {
        const action = { type: "UPDATE_DATE", payload: "2026-06-30" };
        const newState = reservationReducer(initialReservationState, action);

        expect(newState.date).toBe("2026-06-30");
        expect(newState.time).toBe(""); // 確保時間被清空
    });
    test("UPDATE_DATE: Available Time changed", () => {
        const action = { type: "UPDATE_DATE", payload: "2026-06-28" };
        const newState = reservationReducer(initialReservationState, action);
        //比較陣列或物件用toEqual
        expect(newState.availableTimes).toEqual([
            { label: "Noon", times: ["11:00", "11:30", "12:00", "12:30", "13:00"] },
            { label: "Evening", times: ["17:00", "17:30", "18:00", "18:30", "19:00"] },
        ]);
    });
    test("UPDATE_DATE: Only Evening times available on week days", () => {
        // 2026-06-29 是週一
        const action = { type: "UPDATE_DATE", payload: "2026-06-29" };
        const newState = reservationReducer(initialReservationState, action);

        expect(newState.availableTimes).toEqual([
            { label: "Evening", times: ["17:00", "17:30", "18:00", "18:30", "19:00"] },
        ]);
    });
    test("UPDATE_GUESTS: Not changing kids data while updating adults", () => {
        const action = { type: "UPDATE_GUESTS", payload: { adult: 2 } };
        const state = reservationReducer(initialReservationState, action);

        expect(state.guests.adult).toBe(2);
        expect(state.guests.kid).toBe(""); // 確保小孩數量沒被改掉
    });
});
