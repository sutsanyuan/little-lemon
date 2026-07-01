// src/utils/stepHandler.js

/**
 * 處理步驟確認的通用函式
 * @param {object} formData - 當前表單資料
 * @param {function} validateFn - 該步驟的驗證函式 (來自 validate.js)
 * @param {function} setErrorsFn - 設定錯誤狀態的函式 (來自 useState)
 * @param {function} onSuccessFn - 驗證成功後執行的函式 (來自 nextStep)
 */
export const handleStepConfirm = (formData, validateFn, setErrorsFn, onSuccessFn) => {
    // 1. 執行驗證
    const errors = validateFn(formData);

    // 2. 更新 UI 的錯誤狀態
    setErrorsFn(errors);

    // 3. 檢查是否有錯誤
    if (Object.keys(errors).length === 0) {
        // 沒有錯誤，執行成功回調
        onSuccessFn();
    }
};
