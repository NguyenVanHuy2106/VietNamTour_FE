import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import CityRoutes from "./CityRoutes";
import logo from "./Components/Images/headout.png";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width <= 1100 ? (
    <div className="mobile-tablet">
      <img src={logo} alt="Headout" />
      <p>
        Currently, we're not supporting Mobile & Tablets{" "}
        <span role="img" aria-label="Warn">
          🙏
        </span>
      </p>
    </div>
  ) : (
    <BrowserRouter>
      <CityRoutes />
    </BrowserRouter>
  );
};

export default App;
