// CityRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import MainHome from "./Components/MainHome";
import TourDetail from "./app/TourDetail";
import TourList from "./app/TourList";
import Blog from "./app/Blog";
import BlogDetail from "./app/BlogDetail";

const CityRoutes = () => (
  <Routes>
    <Route path="/" element={<MainPage />}>
      <Route index element={<MainHome />} />
      <Route path="tour-detail" element={<TourDetail />} />
      <Route path="tour-list" element={<TourList />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog-detail" element={<BlogDetail />} />
    </Route>
  </Routes>
);

export default CityRoutes;
