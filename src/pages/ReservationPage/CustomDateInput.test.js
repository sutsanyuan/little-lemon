import { render, screen, fireEvent } from "@testing-library/react";
import CustomDateInput from "./CustomDateInput";

// 模擬 props
const mockOnDateChange = jest.fn();
const mockDate = "2026-06-29T10:00:00.000Z";

describe("CustomDateInput UI 互動測試", () => {
    test("初始狀態：日曆應該是關閉的", () => {
        render(<CustomDateInput selectedDate={mockDate} onDateChange={mockOnDateChange} />);

        // 改用 queryByRole + name 的方式，檢查該標題是否「不存在」
        const calendarMonth = screen.queryByRole("heading", { name: /June 2026/i });

        expect(calendarMonth).not.toBeInTheDocument();
    });
    test("點擊輸入框後，日曆應該要顯示", () => {
        render(<CustomDateInput selectedDate={mockDate} onDateChange={mockOnDateChange} />);

        // 1. 點擊輸入框
        const inputBox = screen.getByText(/Mon, Jun 29/i);
        fireEvent.click(inputBox);

        // 2. [修正] 改用「月份標題」來判斷日曆是否出現
        // 從錯誤訊息可以看到它有一個 h2 叫 "June 2026"
        const calendarMonth = screen.getByRole("heading", { name: /June 2026/i });

        expect(calendarMonth).toBeInTheDocument();
    });
});
