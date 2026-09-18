import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FadeInSection from "./FadeInSection";
import FamousDes from "../app/FamousDes";

import "./Styles/main-home.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Search from "../app/Search";
import CompanyTour from "../app/CompanyTour";
import Customer from "../app/Customer";
import CustomerFeedBack from "../app/CustomerFeedBack";
import Banner from "../app/Banner";
import Relation from "../app/Relation";
import HomeCTA from "../app/HomeCTA";

const MainHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App" style={{ margin: 0 }}>
      <Helmet>
        <title>
          Việt Nam Tour - Tổ chức Tour du lịch & Sự kiện chuyên nghiệp
        </title>

        <meta
          name="description"
          content="Việt Nam Tour chuyên tổ chức tour du lịch trong nước, tour đoàn doanh nghiệp, MICE, team building, gala dinner và sự kiện trọn gói."
        />

        <link rel="canonical" href="https://myvietnamtour.vn/" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Việt Nam Tour" />

        <meta
          property="og:title"
          content="Việt Nam Tour - Tour du lịch & Sự kiện chuyên nghiệp"
        />

        <meta
          property="og:description"
          content="Chuyên tổ chức tour du lịch, tour đoàn doanh nghiệp, team building, MICE, gala dinner và sự kiện trọn gói."
        />

        <meta property="og:url" content="https://myvietnamtour.vn/" />

        <meta
          property="og:image"
          content="https://cdn.myvietnamtour.vn/uploads/1.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://myvietnamtour.vn/#website",
            url: "https://myvietnamtour.vn/",
            name: "Việt Nam Tour",
            alternateName: "My Vietnam Tour",
            publisher: {
              "@id": "https://myvietnamtour.vn/#organization",
            },
          })}
        </script>

        {/* ORGANIZATION SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://myvietnamtour.vn/#organization",
            name: "Việt Nam Tour",
            alternateName: "My Vietnam Tour",
            url: "https://myvietnamtour.vn/",
            logo: {
              "@type": "ImageObject",
              url: "https://cdn.myvietnamtour.vn/uploads/1.png",
            },
          })}
        </script>
      </Helmet>

      <FadeInSection>
        <Banner />
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
        <HomeCTA />
      </FadeInSection>
    </div>
  );
};

export default MainHome;
