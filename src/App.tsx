import { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "components/layout";
import Home from "components/pages/Home";
import BookingForm from "components/pages/Reservations/BookingForm";
import ConfirmedReservation from "components/pages/Reservations/Confirmed";
import NotFound from "components/pages/NotFound";
import * as ROUTES from "constants/routes";
import ScrollToTop from "components/layout/ScrollToTop";
import { initializeTimes } from "utils/helpers";
import { updateTimes } from "utils/helpers";
const App = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path={ROUTES.MAIN} element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path={"/" + ROUTES.HOME} element={<Home />} />
          <Route
            path={ROUTES.BOOKING_FORM}
            element={
              <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
              />
            }
          />
          <Route path={ROUTES.CONFIRMED} element={<ConfirmedReservation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};
export default App;
