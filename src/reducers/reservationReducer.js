// 這裡存放你的初始狀態和邏輯
export const initialReservationState = {
    date: "",
    time: "",
    guests: { adult: "", kid: "" },
    isBoothRequest: false,
    occasion: "Birthday",
    name: "",
    email: "",
    phone: "",
    availableTimes: [
        { label: "Noon", times: ["11:00", "11:30", "12:00", "12:30", "13:00"] },
        { label: "Evening", times: ["17:00", "17:30", "18:00", "18:30", "19:00"] },
    ],
};

export function reservationReducer(state, action) {
    switch (action.type) {
        case "UPDATE_FIELD":
            return { ...state, ...action.payload };

        case "UPDATE_DATE":
            // 在這裡加入你未來需要對接 API 的邏輯
            return {
                ...state,
                date: action.payload,
                time: "", // 日期變，清空時間
            };

        default:
            return state;
    }
}
