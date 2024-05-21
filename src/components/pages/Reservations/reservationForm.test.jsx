import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ReservationForm from "./ReservationForm";
// Mock the dispatchOnDateChange function
const dispatchOnDateChangeMock = jest.fn();
describe("ReservationForm", () => {
  test("renders without crashing", () => {
    render(
      <ReservationForm
        availableTimes={["10:00 AM", "11:00 AM"]}
        dispatchOnDateChange={dispatchOnDateChangeMock}
        submitData={() => {}}
      />
    );
  });
  test("submits form data", async () => {
    const submitDataMock = jest.fn();
    render(
      <ReservationForm
        availableTimes={["10:00 AM", "11:00 AM"]}
        dispatchOnDateChange={dispatchOnDateChangeMock}
        submitData={submitDataMock}
      />
    );
    fireEvent.change(screen.getByLabelText("Date"), {
      target: { value: "2024/05/20" },
    });
    fireEvent.change(screen.getByLabelText("Time"), {
      target: { value: "10:00 AM" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByLabelText("Occasion"), {
      target: { value: "Birthday" },
    });
    fireEvent.click(screen.getByText("Reserve now!"));
    await waitFor(() => {
      expect(submitDataMock).toHaveBeenCalledWith({
        date: "2024-05-20T00:00:00.000Z",
        time: "10:00 AM",
        numberOfGuests: 2,
        occasion: "Birthday",
      });
    });
  });
});
