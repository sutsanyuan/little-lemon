import { validateStep1, validateStep2 } from "./validate";

describe("Validation Logic (utils/validate.js)", () => {
    describe("validateStep1", () => {
        test("當所有欄位都為空時，應回傳所有錯誤訊息", () => {
            const data = { date: "", time: "", guests: { adult: 0 } };
            const errors = validateStep1(data);
            expect(errors.date).toBe("Please select a date");
            expect(errors.time).toBe("Please select a time");
            expect(errors.guests).toBe("At least one adult is required");
        });

        test("當所有欄位合法時，應回傳空物件", () => {
            const data = { date: "2026-07-10", time: "18:00", guests: { adult: 2 } };
            const errors = validateStep1(data);
            expect(errors).toEqual({});
        });
    });

    describe("validateStep2", () => {
        test("當 email 格式錯誤時，應顯示錯誤", () => {
            const data = {
                name: { firstName: "John", lastName: "Doe" },
                email: "invalid-email",
                phone: "12345678",
                occasion: "Birthday",
                note: "",
            };
            const errors = validateStep2(data);
            expect(errors.email).toBe("Invalid email format");
        });

        test("當 phone 太短時，應顯示錯誤", () => {
            const data = {
                name: { firstName: "John", lastName: "Doe" },
                email: "test@test.com",
                phone: "123", // 太短
                occasion: "Birthday",
                note: "",
            };
            const errors = validateStep2(data);
            expect(errors.phone).toBe("Phone number is too short");
        });
    });
});
