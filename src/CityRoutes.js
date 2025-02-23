import React from "react";
import { Routes, Route } from "react-router-dom";
import MainHome from "./Components/MainHome";
import NewYork from "./Components/NewYork";

const CityRoutes = () => (
  <Routes>
    <Route path="/" element={<MainHome />} />
    <Route path="/cities/new-york" element={<NewYork />} />
    <Route path="/cities/las-vegas" element={<MainHome />} />
    <Route path="/cities/rome" element={<MainHome />} />
    <Route path="/cities/paris" element={<MainHome />} />
    <Route path="/cities/london" element={<MainHome />} />
    <Route path="/cities/dubai" element={<MainHome />} />
    <Route path="/cities/barcelona" element={<MainHome />} />
    <Route path="/cities/madrid" element={<MainHome />} />
    <Route path="/cities/singapore" element={<MainHome />} />
    <Route path="/cities/venice" element={<MainHome />} />
    <Route path="/cities/milan" element={<MainHome />} />
    <Route path="/cities/naples" element={<MainHome />} />
    <Route path="/cities/budapest" element={<MainHome />} />
    <Route path="/cities/edinburg" element={<MainHome />} />
    <Route path="/cities/florence" element={<MainHome />} />
  </Routes>
);

export default CityRoutes;
