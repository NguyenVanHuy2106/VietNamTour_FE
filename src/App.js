import React from "react";
import { BrowserRouter } from "react-router-dom";
import CityRoutes from "./CityRoutes";

const App = () => (
  <BrowserRouter>
    <CityRoutes />
  </BrowserRouter>
);

export default App;
