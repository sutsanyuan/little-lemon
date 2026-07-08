import { reservationReducer, initialReservationState } from "./reservationReducer";
import { fetchAPI } from "../utils/api";
// *1. 告訴 Jest 把 fetchAPI 變成一個可以被控制的 Mock 函式
jest.mock("../utils/api", () => ({
    fetchAPI: jest.fn(),
}));

describe("Reservation Reducer", () => {
    // 每次測試前先清除之前的 Mock 呼叫紀錄，確保測試獨立
    beforeEach(() => {
        // 在每個測試開始前，給一個預設的 Mock 回傳值，避免 undefined 錯誤
        fetchAPI.mockReturnValue([]);
        // fetchAPI.mockClear();
    });
    test("Should update date and reset time", () => {
        const action = { type: "UPDATE_DATE", payload: "2026-06-30" };
        const newState = reservationReducer(initialReservationState, action);

        expect(newState.date).toBe("2026-06-30");
        expect(newState.time).toBe(""); // 確保時間被清空
    });

    // test("UPDATE_DATE: Available Time changed", () => {
    //     const action = { type: "UPDATE_DATE", payload: "2026-06-28" };
    //     const newState = reservationReducer(initialReservationState, action);
    //     //比較陣列或物件用toEqual
    //     expect(newState.availableTimes).toEqual([
    //         { label: "Noon", times: ["11:00", "11:30", "12:00", "12:30", "13:00"] },
    //         { label: "Evening", times: ["17:00", "17:30", "18:00", "18:30", "19:00"] },
    //     ]);
    // });
    //註解掉因為API是隨機時間

    // test("UPDATE_DATE: Only Evening times available on week days", () => {
    //     // 2026-06-29 是週一
    //     const action = { type: "UPDATE_DATE", payload: "2026-06-29" };
    //     const newState = reservationReducer(initialReservationState, action);

    //     expect(newState.availableTimes).toEqual([
    //         { label: "Evening", times: ["17:00", "17:30", "18:00", "18:30", "19:00"] },
    //     ]);
    // });
    //舊的時間機制
    test("UPDATE_DATE: Available Time should be transformed correctly", () => {
        // 設定這個測試專屬的模擬回傳值
        fetchAPI.mockReturnValue(["11:00", "17:00"]);

        const action = { type: "UPDATE_DATE", payload: "2026-06-28" };
        const newState = reservationReducer(initialReservationState, action);

        // 驗證轉換邏輯 (你的 Adapter)
        expect(newState.availableTimes).toEqual([
            { label: "Noon", times: ["11:00"] },
            { label: "Evening", times: ["17:00"] },
        ]);

        // 驗證 API 有被呼叫
        expect(fetchAPI).toHaveBeenCalled();
    });

    test("UPDATE_GUESTS: Not changing kids data while updating adults", () => {
        const action = { type: "UPDATE_GUESTS", payload: { adult: 2 } };
        const state = reservationReducer(initialReservationState, action);

        expect(state.guests.adult).toBe(2);
        expect(state.guests.kid).toBe(""); // 確保小孩數量沒被改掉
    });
});
