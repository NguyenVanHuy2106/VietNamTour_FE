import React from "react";
import Slider from "react-slick";
import ExperienceCard from "./ExperienceCard";
import { Left } from "./Arrows.js";
import { Right } from "./Arrows";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles/headout-picks.css";

const TopPicks = ({ pickedData, headline }) => {
  return (
    <div className="headout-picks-wrapper">
      <div className="headout-picks-nav">
        <h1>{headline}</h1>
        <div className="view-all">
          <h3>View All</h3>
          <i className="fas fa-arrow-right" />
        </div>
      </div>
      <hr
        style={{
          backgroundColor: "#ffbb58",
          width: "75px",
          height: "2px",
          border: "none",
          marginTop: "0px",
          marginLeft: "0px",
          marginBottom: "20px",
        }}
      />
      <div className="top-picked-carousel-wrap">
        {pickedData && <PickedSlider pickedData={pickedData} />}
      </div>
    </div>
  );
};

const PickedSlider = ({ pickedData }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <Right />,
    prevArrow: <Left />,
  };

  return (
    <Slider {...settings}>
      {pickedData &&
        pickedData.map(
          ({
            id,
            city,
            url,
            description,
            currency,
            currentPrice,
            ratings,
            stars,
            discount,
            cashback,
            lastPrice,
            about,
          }) => (
            <ExperienceCard
              key={id}
              city={city}
              about={about}
              url={url}
              description={description}
              currency={currency}
              price={currentPrice}
              ratings={ratings}
              stars={stars}
              discount={discount}
              cashback={cashback}
              lastPrice={lastPrice}
            />
          )
        )}
    </Slider>
  );
};

export default TopPicks;
