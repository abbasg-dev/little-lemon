import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BookingForm from "components/pages/Reservations/BookingForm";
test("Renders the BookingForm heading", () => {
  render(
    <BrowserRouter>
      <BookingForm availableTimes={[]} dispatch={() => {}} />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Table reservation");
  expect(headingElement).toBeInTheDocument();
});
