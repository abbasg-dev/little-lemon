import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BookingForm from "components/pages/Reservations/BookingForm";
describe("HTML5 validation attributes", () => {
  test("date input field has required attribute", () => {
    render(
      <BrowserRouter>
        <BookingForm availableTimes={[]} dispatch={() => {}} />
      </BrowserRouter>
    );
    const dateInput = screen.getByLabelText("Choose date");
    expect(dateInput).toHaveAttribute("required");
  });

  test("time input field has required attribute", () => {
    render(
      <BrowserRouter>
        <BookingForm availableTimes={[]} dispatch={() => {}} />
      </BrowserRouter>
    );
    const timeInput = screen.getByLabelText("Choose time");
    expect(timeInput).toHaveAttribute("required");
  });

  test("guests input field has required, min, and max attributes", () => {
    render(
      <BrowserRouter>
        <BookingForm availableTimes={[]} dispatch={() => {}} />
      </BrowserRouter>
    );
    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("occasion input field has required attribute", () => {
    render(
      <BrowserRouter>
        <BookingForm availableTimes={[]} dispatch={() => {}} />
      </BrowserRouter>
    );
    const occasionInput = screen.getByLabelText("Occasion");
    expect(occasionInput).toHaveAttribute("required");
  });
});
