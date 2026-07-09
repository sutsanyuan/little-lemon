import { render, screen, fireEvent } from "@testing-library/react";
import AppDropdown from "./AppDropdown";

// Mock 掉 SVG 圖片
jest.mock("../../assets/icons/arrowDown.svg", () => "arrow.svg");

describe("AppDropdown Component", () => {
    const mockOptions = [
        { label: "Option 1", value: "opt1" },
        { label: "Option 2", value: "opt2" },
    ];
    const mockOnToggle = jest.fn();
    const mockOnChange = jest.fn();

    test("應正確顯示 Label 或選中的值", () => {
        const { rerender } = render(<AppDropdown label="Select" options={mockOptions} value="" />);
        expect(screen.getByText("Select")).toBeInTheDocument();

        rerender(<AppDropdown label="Select" options={mockOptions} value="Option 1" />);
        expect(screen.getByText("Option 1")).toBeInTheDocument();
    });

    test("當 isError 為 true 時，header 應具備 errorInput class", () => {
        render(<AppDropdown isError={true} options={mockOptions} />);
        const header = screen.getByRole("img", { name: /arrow/i }).parentElement;
        expect(header).toHaveClass("errorInput");
    });

    test("點擊 header 應觸發 onToggle", () => {
        render(<AppDropdown options={mockOptions} onToggle={mockOnToggle} isOpen={false} />);
        const header = screen.getByRole("img", { name: /arrow/i }).parentElement;

        fireEvent.click(header);
        expect(mockOnToggle).toHaveBeenCalled();
    });

    test("當 isOpen 為 true 時，應顯示選項列表並正確觸發 onChange", () => {
        render(
            <AppDropdown
                isOpen={true}
                options={mockOptions}
                onChange={mockOnChange}
                onToggle={mockOnToggle}
            />
        );

        // 檢查選項是否存在
        const option1 = screen.getByText("Option 1");
        expect(option1).toBeInTheDocument();

        // 模擬點擊選項
        fireEvent.click(option1);
        expect(mockOnChange).toHaveBeenCalledWith("opt1");
        expect(mockOnToggle).toHaveBeenCalled(); // 點擊後應關閉
    });
});
