// src/utils/api.js
const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = (s * a) % m) / m;
    };
};

export const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    // 增加中午時段迴圈
    for (let i = 11; i <= 14; i++) {
        if (random() < 0.5) result.push(i + ":00");
        if (random() < 0.5) result.push(i + ":30");
    }
    // 原有的晚上時段迴圈
    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ":00");
        }
        if (random() < 0.5) {
            result.push(i + ":30");
        }
    }
    return result;
};

export const submitAPI = function (formData) {
    return true;
};
