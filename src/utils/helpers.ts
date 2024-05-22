import { addHours, eachHourOfInterval, format } from "date-fns";
import * as Keys from "constants/constants";

export const updateTimes = (state, action) => {
  switch (action.type) {
    case Keys.SET_AVAILABLE_TIMES:
      return action.payload;
    default:
      return state;
  }
};

export const initializeTimes = () => {
  const startDate = new Date();
  const endDate = addHours(startDate, 6);
  const hours = eachHourOfInterval({ start: startDate, end: endDate });
  const availableTimes = hours.map((hour) => format(hour, "HH:mm"));
  return availableTimes;
};

export const submitAPI = (formData) => {
  return true;
};
