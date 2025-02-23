import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Left, Right } from "./Arrows";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles/top-cities.css";

const TopCities = () => {
  return (
    <div>
      <div className="top-cities-wrapper">
        <h1>Top những thành phố du lịch</h1>
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
        <div className="top-cities-carousel-wrap">
          <CitySlider />
        </div>
        <hr
          style={{
            height: "1px",
            color: "#e7e7e7",
            borderTop: "none",
            borderLeft: "none",
          }}
        />
      </div>
      <hr className="section-divide-hr" />
    </div>
  );
};

const CitySlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <Right />,
    prevArrow: <Left />,
  };

  return (
    <Slider {...settings}>
      {topCitiesData.map(({ id, city, url, description, route }) => (
        <Link key={id} className="link">
          <CityCard city={city} url={url} description={description} />
        </Link>
      ))}
    </Slider>
  );
};

const CityCard = ({ city, url, description }) => {
  return (
    <div className="city-card-wrapper">
      <div className="city-card">
        <div
          className="city-card-img"
          style={{ backgroundImage: `url(${url})` }}
        />
        <div className="city-details">
          <div id="triangle" />
          <p>{city}</p>
          <div id="city-hidden">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const topCitiesData = [
  {
    id: 1,
    city: "Hà Nội",

    description: "Nghìn năm văn hiến",
    url:
      "https://cdn-imgix.headout.com/cities/new-york/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
  {
    id: 2,
    city: "TP. Hồ Chí Minh",

    description: "Thành phố năng động nhất Việt Nam",
    url:
      "https://cdn-imgix.headout.com/cities/las-vegas/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
  {
    id: 3,
    city: "Đà Nẵng",

    description: "Thành phố đáng sống",
    url:
      "https://cdn-imgix.headout.com/cities/rome/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
  {
    id: 4,
    city: "Hội An",

    description: "Phố cổ đẹp như tranh",
    url:
      "https://cdn-imgix.headout.com/cities/paris/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
  {
    id: 5,
    city: "Huế",

    description: "Cố đô thơ mộng",
    url:
      "https://cdn-imgix.headout.com/cities/london/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
  {
    id: 6,
    city: "Nha Trang",

    description: "Thiên đường biển đảo",
    url:
      "https://cdn-imgix.headout.com/cities/london/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
  {
    id: 7,
    city: "Đà Lạt",

    description: "Thành phố ngàn hoa",
    url:
      "https://cdn-imgix.headout.com/cities/london/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
  {
    id: 8,
    city: "SaPa",

    description: "Nơi gặp gỡ đất trời",
    url:
      "https://cdn-imgix.headout.com/cities/london/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
  {
    id: 9,
    city: "Nha Trang",

    description: "Đảo ngọc miền Nam",
    url:
      "https://cdn-imgix.headout.com/cities/london/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
];

export default TopCities;
