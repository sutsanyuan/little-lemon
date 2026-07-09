import { render, screen, fireEvent } from "@testing-library/react";
import AppInput from "./AppInput";

// 根據你的元件實作，AppInput 使用了 className 和 ...rest
// 我們需要確保這兩者都能被正確測試到

describe("AppInput Component (Step 2 驗證)", () => {
    // Step 1: 測試 HTML5 屬性
    describe("Step 1: HTML5 Validation Attributes", () => {
        test("應該正確應用 HTML5 屬性 (如 required, type, min)", () => {
            render(
                <AppInput
                    showLabel={true}
                    label="Email"
                    id="email"
                    type="email"
                    required
                    min="1"
                    max="10"
                />
            );

            const input = screen.getByLabelText(/email/i);

            // 驗證屬性
            expect(input).toBeRequired();
            expect(input).toHaveAttribute("type", "email");
            expect(input).toHaveAttribute("min", "1");
            expect(input).toHaveAttribute("max", "10");
        });
    });

    // Step 2: 測試 JavaScript 驗證邏輯顯示
    describe("Step 2: Validation Logic & Error Display", () => {
        test("當 error prop 有值時，應該顯示錯誤訊息並應用 errorInput class", () => {
            const errorMessage = "Invalid input!";
            render(<AppInput showLabel={true} label="Test" id="test-input" error={errorMessage} />);

            // 驗證錯誤訊息文字
            const errorElement = screen.getByText(errorMessage);
            expect(errorElement).toBeInTheDocument();
            expect(errorElement).toHaveClass("errors");

            // 驗證 input 是否有錯誤樣式 (CSS class)
            const input = screen.getByLabelText(/test/i);
            expect(input).toHaveClass("errorInput");
        });

        test("當沒有 error prop 時，不應該顯示錯誤區塊", () => {
            render(<AppInput showLabel={true} label="Test" id="test-input" error={null} />);

            const errorElement = screen.queryByText(/invalid input!/i);
            expect(errorElement).not.toBeInTheDocument();

            const input = screen.getByLabelText(/test/i);
            expect(input).not.toHaveClass("errorInput");
        });

        test("onChange 應該要能正常被觸發", () => {
            const handleChange = jest.fn();
            render(
                <AppInput showLabel={true} label="Test" id="test-input" onChange={handleChange} />
            );

            const input = screen.getByLabelText(/test/i);
            fireEvent.change(input, { target: { value: "Hello" } });

            expect(handleChange).toHaveBeenCalledTimes(1);
        });
    });
});
