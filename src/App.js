import React from "react";
import { BrowserRouter } from "react-router-dom";
import CityRoutes from "./RoutesPage"; // Đã đổi tên

const App = () => (
  <BrowserRouter>
    <CityRoutes />
  </BrowserRouter>
);

export default App;
