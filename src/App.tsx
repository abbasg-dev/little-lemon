import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "components/layout";
import Home from "components/pages/Home";
import Reservations from "components/pages/Reservations";
import ConfirmedReservation from "components/pages/Reservations/Confirmed";
import NotFound from "components/pages/NotFound";
import * as ROUTES from "constants/routes";
import ScrollToTop from "components/layout/ScrollToTop";
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path={ROUTES.MAIN} element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path={"/" + ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.RESERVATIONS} element={<Reservations />} />
          <Route path={ROUTES.CONFIRMED} element={<ConfirmedReservation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};
export default App;
