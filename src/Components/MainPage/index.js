// src/layouts/MainLayout.js
import React from "react";
import Header from "../../app/Header";
import Footer from "../../app/Footer";
import Menu from "../../app/Menu";
import Hotline from "../../app/Hotline";
import FadeInSection from "../../Components/FadeInSection";
import FloatingButtons from "../../Components/FloatingButton";

import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <FadeInSection>
        <Header />
      </FadeInSection>
      <Menu />

      <main>
        <Outlet />
      </main>
      <FloatingButtons />
      <FadeInSection>
        <Footer />
        <Hotline />
      </FadeInSection>
    </div>
  );
};

export default MainPage;
