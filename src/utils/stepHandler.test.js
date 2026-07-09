import { handleStepConfirm } from "./stepHandler";
import { submitAPI } from "./api";

// 1. Mock 外部 API
jest.mock("./api", () => ({
    submitAPI: jest.fn(),
}));

describe("handleStepConfirm", () => {
    const mockFormData = { date: "2026-07-09" };
    const mockSetErrors = jest.fn();
    const mockOnSuccess = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        localStorage.clear();
    });

    test("當驗證失敗時，不應呼叫 API 也不應跳轉", () => {
        const mockValidate = jest.fn().mockReturnValue({ date: "Error" });

        handleStepConfirm(mockFormData, mockValidate, mockSetErrors, mockOnSuccess);

        expect(mockSetErrors).toHaveBeenCalledWith({ date: "Error" });
        expect(submitAPI).not.toHaveBeenCalled();
        expect(mockOnSuccess).not.toHaveBeenCalled();
    });

    test("當驗證成功且 API 提交成功時，應執行 onSuccess 並清除 LocalStorage", () => {
        const mockValidate = jest.fn().mockReturnValue({}); // 無錯誤
        submitAPI.mockReturnValue(true); // 模擬 API 成功

        // 預設 LocalStorage 有值
        localStorage.setItem("littleLemonBooking", "some-data");

        handleStepConfirm(mockFormData, mockValidate, mockSetErrors, mockOnSuccess);

        expect(mockSetErrors).toHaveBeenCalledWith({});
        expect(submitAPI).toHaveBeenCalledWith(mockFormData);
        expect(mockOnSuccess).toHaveBeenCalled();
        expect(localStorage.getItem("littleLemonBooking")).toBeNull();
    });
});
