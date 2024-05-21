import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Reservations from "./index";

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));
// Mock the initializeTimes and submitAPI functions
jest.mock("utils/helpers", () => ({
  initializeTimes: jest.fn(() => []),
  submitAPI: jest.fn(() => true),
  updateTimes: jest.fn(),
}));
describe("Reservations", () => {
  test("renders without crashing", () => {
    render(<Reservations />);
  });
});
