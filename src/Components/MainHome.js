import React, { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FadeInSection from "./FadeInSection";
// import FloatingButtons from "./FloatingButton";
import FamousDes from "../app/FamousDes";

import "./Styles/main-home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Search from "../app/Search";
import NewTour from "../app/NewTour";
import CompanyTour from "../app/CompanyTour";
import Customer from "../app/Customer";
import CustomerFeedBack from "../app/CustomerFeedBack";
import Collections from "../app/Collections";
import Banner from "../app/Banner";
import Relation from "../app/Relation";

const MainHome = ({ history }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App" style={{ margin: 0 }}>
      <FadeInSection>
        <Banner />
      </FadeInSection>

      <FadeInSection>
        <NewTour />
      </FadeInSection>
      <FadeInSection>
        <CompanyTour />
      </FadeInSection>
      <FadeInSection>
        <Search />
      </FadeInSection>
      <FadeInSection>
        <Relation />
      </FadeInSection>
      <FadeInSection>
        <FamousDes />
      </FadeInSection>
      <FadeInSection>
        <Customer />
      </FadeInSection>
      <FadeInSection>
        <CustomerFeedBack />
      </FadeInSection>
      <FadeInSection>
        <Collections />
      </FadeInSection>
      {/* <FloatingButtons /> */}
    </div>
  );
};

export default MainHome;
