import { render, screen, fireEvent } from "@testing-library/react";
import CustomDateInput from "./CustomDateInput";

// --- Mock 設定 ---
jest.mock("./DatePickerCustom.scss", () => ({}));
jest.mock("react-datepicker/dist/react-datepicker.css", () => ({}));
jest.mock("../../assets/icons/arrowDown.svg", () => "arrow.svg");
jest.mock("../../assets/icons/calender.svg", () => "calender.svg");

// Mock 掉 DatePicker，並加入標題以配合測試需求
jest.mock("react-datepicker", () => {
    return function MockDatePicker({ onChange }) {
        return (
            <div data-testid="mock-datepicker">
                <h2>June 2026</h2>
                <input
                    data-testid="datepicker-input"
                    type="date"
                    onChange={(e) => onChange(new Date(e.target.value))}
                />
            </div>
        );
    };
});

describe("CustomDateInput Component", () => {
    const mockOnDateChange = jest.fn();
    const mockDate = "2026-06-29T10:00:00.000Z";

    beforeEach(() => {
        mockOnDateChange.mockClear();
    });

    describe("UI 渲染與狀態測試", () => {
        test("初始狀態：日曆應該是關閉的", () => {
            render(<CustomDateInput selectedDate={mockDate} onDateChange={mockOnDateChange} />);
            const calendarMonth = screen.queryByRole("heading", { name: /June 2026/i });
            expect(calendarMonth).not.toBeInTheDocument();
        });

        test("當 isError 為 true 時，應顯示錯誤樣式 class", () => {
            const { container } = render(<CustomDateInput isError={true} />);
            expect(container.firstChild).toHaveClass("errorInput");
        });
    });

    describe("互動測試", () => {
        test("點擊輸入框後，日曆應該要顯示", () => {
            render(<CustomDateInput selectedDate={mockDate} onDateChange={mockOnDateChange} />);

            const inputBox = screen.getByText(/Mon, Jun 29/i);
            fireEvent.click(inputBox);

            // 現在 Mock 元件有這個標題了，測試會通過
            const calendarMonth = screen.getByRole("heading", { name: /June 2026/i });
            expect(calendarMonth).toBeInTheDocument();
        });

        test("選取日期後應觸發 onDateChange", () => {
            render(<CustomDateInput onDateChange={mockOnDateChange} />);

            fireEvent.click(screen.getByText(/Pick a date/i));

            const input = screen.getByTestId("datepicker-input");
            fireEvent.change(input, { target: { value: "2026-07-09" } });

            expect(mockOnDateChange).toHaveBeenCalled();
        });

        test("Step 1: 應包含 HTML5 required 驗證屬性", () => {
            render(<CustomDateInput />);
            const hiddenInput = screen.getByLabelText("date-input");
            expect(hiddenInput).toBeRequired();
        });
    });
});
