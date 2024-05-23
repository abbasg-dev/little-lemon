import { validateFormData } from "validations";
describe("JavaScript validation functions", () => {
  test("validateFormData returns true for valid data", () => {
    const formData = {
      date: "2024-05-30",
      time: "12:00",
      guests: 2,
      occasion: "Birthday",
    };
    expect(validateFormData(formData).isValid).toBe(true);
  });
  test("validateFormData returns false for invalid data", () => {
    const formData = {
      date: "",
      time: "12:00",
      guests: 15,
      occasion: "",
    };
    expect(validateFormData(formData).isValid).toBe(false);
  });
});
