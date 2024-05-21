import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Reservations from "./index";
jest.mock("./ReservationForm", () => () => (
  <div data-testid="mocked-reservation-form" />
));
describe("Reservations", () => {
  let navigateSpy;
  beforeEach(() => {
    navigateSpy = jest.fn();
    jest
      .spyOn(require("react-router-dom"), "useNavigate")
      .mockReturnValue(navigateSpy);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("renders without errors", () => {
    render(<Reservations />);
  });
  test("displays reservation form", () => {
    render(<Reservations />);
    expect(screen.getByTestId("mocked-reservation-form")).toBeInTheDocument();
  });
  test("calls useNavigate when form is submitted successfully", () => {
    render(<Reservations />);
    fireEvent.click(screen.getByText("Reserve now!"));
    expect(navigateSpy).toHaveBeenCalled();
  });
});
