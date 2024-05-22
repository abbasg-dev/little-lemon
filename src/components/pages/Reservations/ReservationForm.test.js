import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import ReservationForm from "./ReservationForm";

describe("ReservationForm", () => {
  test("submitting form calls submitData", async () => {
    const mockSubmitData = jest.fn();
    const { getByLabelText, getByText } = render(
      <ReservationForm
        availableTimes={["10:00", "12:00"]}
        dispatchOnDateChange={() => {}}
        submitData={mockSubmitData}
      />
    );

    fireEvent.change(screen.getByLabelText("Date"), {
      target: { value: "2024/05/23" },
    });
    fireEvent.change(screen.getByLabelText("Time"), {
      target: { value: "10:00" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText("Occasion"), {
      target: { value: "Birthday" },
    });

    fireEvent.click(screen.getByText("Reserve now!"));

    await waitFor(() => {
      expect(mockSubmitData).toHaveBeenCalled();
    });
  });
});
