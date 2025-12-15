// CityRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import MainHome from "./Components/MainHome";
import TourDetail from "./app/TourDetail";
import TourList from "./app/TourList";
import Blog from "./app/Blog";
import BlogDetail from "./app/BlogDetail";
import TermsOfService from "./app/General/TermOfService";
import TermPolicy from "./app/General/TermPolicy";
import PaymentMethods from "./app/General/PaymentMethod";
import DeliveryInfo from "./app/General/DeliveryInfo";

const CityRoutes = () => (
  <Routes>
    <Route path="/" element={<MainPage />}>
      <Route index element={<MainHome />} />
      <Route path="tour/:idSlug" element={<TourDetail />} />
      <Route path="danh-sach-tour" element={<TourList />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:idSlug" element={<BlogDetail />} />
      <Route path="dieu-khoan-su-dung" element={<TermsOfService />} />
      <Route path="chinh-sach-bao-mat" element={<TermPolicy />} />
      <Route path="phuong-thuc-thanh-toan" element={<PaymentMethods />} />
      <Route path="chinh-sach-giao-nhan" element={<DeliveryInfo />} />
    </Route>
  </Routes>
);

export default CityRoutes;
