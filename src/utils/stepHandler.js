// src/utils/stepHandler.js

/**
 * 處理步驟確認的通用函式
 * @param {object} formData - 當前表單資料
 * @param {function} validateFn - 該步驟的驗證函式 (來自 validate.js)
 * @param {function} setErrorsFn - 設定錯誤狀態的函式 (來自 useState)
 * @param {function} onSuccessFn - 驗證成功後執行的函式 (來自 nextStep)
 */

import { submitAPI } from "./api";
export const handleStepConfirm = (formData, validateFn, setErrorsFn, onSuccessFn) => {
    // 1. 執行驗證
    const errors = validateFn(formData);
    // 2. 更新 UI 的錯誤狀態
    setErrorsFn(errors);

    // 3. 如果沒有錯誤
    if (Object.keys(errors).length === 0) {
        // 3. 呼叫 API 提交資料
        const isSuccess = submitAPI(formData);

        // 4. 如果提交成功，就進入下一步 (Step 3)
        if (isSuccess) {
            //成功後清除 LocalStorage
            localStorage.removeItem("littleLemonBooking");
            onSuccessFn();
        } else {
            // 這裡可以處理提交失敗的邏輯 (例如：顯示錯誤訊息)
            console.error("Submission failed");
        }
    }
};
