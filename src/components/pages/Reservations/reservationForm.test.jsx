import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ReservationForm from "./ReservationForm";
describe("ReservationForm", () => {
  test("renders without errors", () => {
    render(
      <ReservationForm
        availableTimes={[]}
        dispatchOnDateChange={() => {}}
        submitData={() => {}}
      />
    );
  });
  test("allows user to submit form with valid data", async () => {
    const mockSubmit = jest.fn();
    render(
      <ReservationForm
        availableTimes={[]}
        dispatchOnDateChange={() => {}}
        submitData={mockSubmit}
      />
    );
    fireEvent.change(screen.getByLabelText("Date"), {
      target: { value: "2024-05-23" },
    });
    fireEvent.change(screen.getByLabelText("Time"), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText("Occasion"), {
      target: { value: "Birthday" },
    });
    fireEvent.click(screen.getByText("Reserve now!"));
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        date: "2024-05-23",
        time: "18:00",
        numberOfGuests: 4,
        occasion: "Birthday",
      });
    });
  });
  test("displays validation error if date is not selected", async () => {
    render(
      <ReservationForm
        availableTimes={[]}
        dispatchOnDateChange={() => {}}
        submitData={() => {}}
      />
    );
    fireEvent.click(screen.getByText("Reserve now!"));
    await waitFor(() => {
      expect(
        screen.getByText("Please choose a valid date")
      ).toBeInTheDocument();
    });
  });
  test("displays validation error if time is not selected", async () => {
    render(
      <ReservationForm
        availableTimes={[]}
        dispatchOnDateChange={() => {}}
        submitData={() => {}}
      />
    );
    fireEvent.click(screen.getByText("Reserve now!"));
    await waitFor(() => {
      expect(
        screen.getByText("Please choose a valid time")
      ).toBeInTheDocument();
    });
  });
  test("displays validation error if number of guests is not entered", async () => {
    render(
      <ReservationForm
        availableTimes={[]}
        dispatchOnDateChange={() => {}}
        submitData={() => {}}
      />
    );
    fireEvent.click(screen.getByText("Reserve now!"));
    await waitFor(() => {
      expect(
        screen.getByText("Please enter the number of guests")
      ).toBeInTheDocument();
    });
  });
  test("displays validation error if occasion is not selected", async () => {
    render(
      <ReservationForm
        availableTimes={[]}
        dispatchOnDateChange={() => {}}
        submitData={() => {}}
      />
    );
    fireEvent.click(screen.getByText("Reserve now!"));
    await waitFor(() => {
      expect(
        screen.getByText("Please choose a valid occasion")
      ).toBeInTheDocument();
    });
  });
});
