import { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "constants/routes";
import ReservationForm from "./ReservationForm";
import { initializeTimes, submitAPI, updateTimes } from "utils/helpers";
import "./Reservations.css";
const Reservations = () => {
  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate();
  useEffect(() => {
    const initializeTimesAndFetch = async () => {
      try {
        const response = await initializeTimes();
        dispatchOnDateChange({
          type: "SET_AVAILABLE_TIMES",
          payload: response,
        });
      } catch (error) {
        console.error("Error fetching available times:", error);
      }
    };
    initializeTimesAndFetch();
  }, []);
  const submitData = (formData) => {
    const response = submitAPI(formData);
    if (response) navigate(ROUTES.CONFIRMED);
  };
  return (
    <div className="reservations">
      <h2>Table reservation</h2>
      <ReservationForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    </div>
  );
};
export default Reservations;
