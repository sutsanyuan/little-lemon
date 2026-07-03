import { fetchAPI } from "../utils/api";
const transformToUIFormat = (timeArray) => {
    //分類扁平陣列以適應我的UI格式
    const noon = timeArray.filter((t) => parseInt(t) < 17);
    const evening = timeArray.filter((t) => parseInt(t) >= 17);
    return [
        { label: "Noon", times: noon },
        { label: "Evening", times: evening },
    ].filter((group) => group.times.length > 0); // 若該時段沒位子，直接過濾掉;
};

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
    name: { firstName: "", lastName: "" },
    gender: "",
    email: "",
    phone: "",
    availableTimes: getAvailableTimesByDate(new Date().toISOString()),
    note: "",
};

export function reservationReducer(state, action) {
    switch (action.type) {
        case "UPDATE_FIELD":
            return { ...state, ...action.payload };

        case "UPDATE_DATE":
            const newDate = action.payload;
            // 防呆：確保 date 是有效的
            if (!newDate) return state;

            //舊的方式>六日與平日
            // // 關鍵：在這裡重新計算時段
            // const newAvailableTimes = getAvailableTimesByDate(newDate);

            // 新的
            const rawTimes = fetchAPI(new Date(newDate)); // 呼叫 API 取得原始資料
            const formattedTimes = transformToUIFormat(rawTimes); // 轉成你的格式

            // 在這裡加入你未來需要對接 API 的邏輯
            return {
                ...state,
                date: newDate,
                time: "", // 日期變，清空時間
                availableTimes: formattedTimes,
                //舊的v
                //availableTimes: newAvailableTimes, // 更新時段
            };
        case "UPDATE_GUESTS":
            return { ...state, guests: { ...state.guests, ...action.payload } };
        case "UPDATE_NAME":
            return { ...state, name: { ...state.name, ...action.payload } };
        default:
            return state;
    }
}
