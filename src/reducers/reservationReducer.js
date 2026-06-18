//// 模擬一個根據日期獲取時間的邏輯函式
const getAvailableTimesByDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDay(); //0 => Sunday, 6 => Sat
    if (day === 0 || day === 6) {
        return [
            { label: "Noon", times: ["11:00", "11:30", "12:00", "12:30", "13:00"] },
            { label: "Evening", times: ["17:00", "17:30", "18:00", "18:30", "19:00"] },
        ];
    }
    return [{ label: "Evening", times: ["17:00", "17:30", "18:00", "18:30", "19:00"] }];
};
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
    availableTimes: getAvailableTimesByDate(new Date().toISOString()),
};

export function reservationReducer(state, action) {
    switch (action.type) {
        case "UPDATE_FIELD":
            return { ...state, ...action.payload };

        case "UPDATE_DATE":
            const newDate = action.payload;
            // 關鍵：在這裡重新計算時段
            const newAvailableTimes = getAvailableTimesByDate(newDate);
            // 在這裡加入你未來需要對接 API 的邏輯
            return {
                ...state,
                date: newDate,
                time: "", // 日期變，清空時間
                availableTimes: newAvailableTimes, // 更新時段
            };

        default:
            return state;
    }
}
