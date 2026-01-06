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
import TeamBuilding from "./app/Service/TeamBuilding";
import Conference from "./app/Service/Conference";
import YearEndEvent from "./app/Service/YearEndEvent";
import Travel from "./app/Service/Travel";
import StudyTour from "./app/Service/StudyTour";
import Event from "./app/Service/Event";
import MiceLanding from "./app/Service/Mice";
import CarRentalPro from "./app/Service/Bus";
import BookingAll from "./app/Service/Booking";
import FeedbackPage from "./app/FeedbackPage";

const CityRoutes = () => (
  <Routes>
    <Route path="/" element={<MainPage />}>
      <Route index element={<MainHome />} />
      <Route path="tour/:Slug" element={<TourDetail />} />
      <Route path="danh-sach-tour" element={<TourList />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:Slug" element={<BlogDetail />} />
      <Route path="dieu-khoan-su-dung" element={<TermsOfService />} />
      <Route path="chinh-sach-bao-mat" element={<TermPolicy />} />
      <Route path="phuong-thuc-thanh-toan" element={<PaymentMethods />} />
      <Route path="chinh-sach-giao-nhan" element={<DeliveryInfo />} />
      <Route path="danh-gia" element={<FeedbackPage />} />

      <Route path="dich-vu/team-building" element={<TeamBuilding />} />
      <Route path="dich-vu/hoi-nghi-hoi-thao" element={<Conference />} />
      <Route path="dich-vu/year-end-party" element={<YearEndEvent />} />
      <Route path="dich-vu/du-lich-trong-nuoc" element={<Travel />} />
      <Route path="dich-vu/du-lich-hoc-tap" element={<StudyTour />} />
      <Route path="dich-vu/to-chuc-su-kien" element={<Event />} />
      <Route path="dich-vu/du-lich-mice" element={<MiceLanding />} />
      <Route path="dich-vu/cho-thue-xe" element={<CarRentalPro />} />
      <Route path="dich-vu/booking-dich-vu" element={<BookingAll />} />
    </Route>
  </Routes>
);

export default CityRoutes;
