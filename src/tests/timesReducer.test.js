import "@testing-library/jest-dom/extend-expect";
import { initializeTimes, updateTimes } from "utils/helpers";
import * as Keys from "constants/constants";

test("initializeTimes returns a non-empty array of available booking times", async () => {
  const availableTimes = await initializeTimes();
  expect(Array.isArray(availableTimes)).toBe(true);
  expect(availableTimes.length).toBeGreaterThan(0);
});

test("updateTimes updates the state with available times based on the selected date", () => {
  const initialState = [];
  const action = {
    type: Keys.SET_AVAILABLE_TIMES,
    payload: ["10:00 AM", "11:00 AM"],
  };
  const newState = updateTimes(initialState, action);
  expect(newState).toEqual(["10:00 AM", "11:00 AM"]);
});
