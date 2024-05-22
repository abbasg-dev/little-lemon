import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Reservations from "./Reservations";

test("renders Reservations component", () => {
  render(
    <MemoryRouter>
      <Reservations />
    </MemoryRouter>
  );
});
