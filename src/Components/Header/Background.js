import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/background.css";

const BackgroundCarousel = ({ backgroundImagesData }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-div">
      <Slider {...settings}>
        {backgroundImagesData &&
          backgroundImagesData.map(({ id, url }) => (
            <BackgroundImageDiv key={id} url={url} />
          ))}
      </Slider>
    </div>
  );
};

const BackgroundImageDiv = ({ url }) => {
  return (
    <div
      className="background-image-div"
      style={{ backgroundImage: `url(${url})` }}
    />
  );
};

export default BackgroundCarousel;
