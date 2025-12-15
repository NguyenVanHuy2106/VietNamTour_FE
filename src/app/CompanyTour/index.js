import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { toSlug } from "../../Components/ToSlug";

import APIToken from "../../config/APIToken";
import API from "../../config/APINoToken";
import { useNavigate } from "react-router-dom";

import { BsCalendar3, BsCarFront, BsBuilding } from "react-icons/bs";

const CompanyTour = () => {
  const navigate = useNavigate();
  const [dataDOANTour, setDataDOANTour] = useState([]);
  const getData = async () => {
    try {
      const response = await API.get("/tour/getDOANTour");
      setDataDOANTour(response.data.data || []);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách Tour mới:", error.response || error);
    }
  };
  const handleGoToDetail = (tourid, tourname) => {
    const slug = toSlug(tourname);
    navigate(`/tour/${slug}-${tourid}`);
  };

  useEffect(() => {
    getData();
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    pauseOnHover: false,
    adaptiveHeight: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // nhỏ hơn 576px thì chỉ hiện 1 slide
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1210px",
        boxSizing: "border-box",
        margin: "0 auto",
      }}
    >
      <div
        className="NewTourTitleNT"
        onClick={() =>
          navigate("/danh-sach-tour", { state: { tourtype: "DOAN" } })
        }
      >
        TOUR KHÁCH ĐOÀN
      </div>
      <div
        className="d-flex justify-content-center"
        style={{
          marginBottom: "30px",
        }}
      >
        <div style={{ width: "98%", textAlign: "center" }}>
          <Slider {...settings}>
            {dataDOANTour.map((item) => (
              <div key={item.tourid}>
                <div
                  className="exp-cardC"
                  onClick={() => handleGoToDetail(item.tourid, item.tourname)}
                >
                  <div
                    className="exp-card-img"
                    style={{
                      height: "166px",
                      backgroundImage: `url(${item.images[0].imageurl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div className="exp-content-wrap" style={{ padding: 10 }}>
                    <div className="exp-info-wrapCT">
                      {item.destination_name && (
                        <>
                          <p id="exp-city" style={{ fontWeight: "bold" }}>
                            {item.destination_name}
                          </p>
                          <p
                            id="exp-description"
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              fontWeight: "bold",
                            }}
                          >
                            {item.tourname}
                          </p>
                        </>
                      )}
                    </div>
                    <div className="priceCompanyTour">
                      <p
                        style={{
                          fontSize: 11,
                          paddingRight: 10,
                        }}
                      >
                        Chỉ từ VNĐ
                      </p>
                      <p
                        style={{
                          fontSize: 20,
                          color: "#ff0000",
                        }}
                      >
                        {item.price &&
                          Number(item.price.adultprice).toLocaleString("de-DE")}
                      </p>
                    </div>
                    <div
                      style={{
                        textAlign: "right",
                        marginTop: 4,
                      }}
                    >
                      Xem thêm
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CompanyTour;

const pickedData = [
  {
    id: 1,
    currentPrice: 29,
    currency: "VNĐ",
    stars: 4.6,
    city: "TP. HỒ CHÍ MINH",
    description: "The Phantom of the Opera",
    url:
      "https://cdn-imgix.headout.com/tour/652/TOUR-IMAGE/cd0fa708-27c2-4145-9fcf-14e84d910456-517-new-york-phantom-of-the-opera-00.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    time: "3 ngày 3 đêm",
    date: "20/11/2025",
    vehicle: "Xe 45 chỗ",
    hotel: "Resort 4 sao",
  },
  {
    id: 2,
    currentPrice: 57.5,
    currency: "VNĐ",
    stars: 4.6,
    cashback: 10,
    city: "TP. HỒ CHÍ MINH",
    description: "Aladdin",
    url:
      "https://cdn-imgix.headout.com/tour/638/TOUR-IMAGE/d8da7ef3-6be5-4ab9-a88e-66a1cf8b5126-2.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    time: "3 ngày 3 đêm",
    date: "20/11/2025",
    vehicle: "Xe 45 chỗ",
    hotel: "Resort 4 sao",
  },
  {
    id: 3,
    currentPrice: 40.5,
    lastPrice: 79,
    currency: "VNĐ",
    city: "TP. HỒ CHÍ MINH",
    description: "King Kong - Broadway Week Discount",
    url:
      "https://cdn-imgix.headout.com/tour/18201/TOUR-IMAGE/a24bde23-2e32-49d4-bf14-b933fe60fe52-c817b2f3-194d-4fde-9ad8-fccbaf50ed31-9339-new-york-king-kong-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    time: "3 ngày 3 đêm",
    date: "20/11/2025",
    vehicle: "Xe 45 chỗ",
    hotel: "Resort 4 sao",
  },
  {
    id: 4,
    currentPrice: 141,
    lastPrice: 146,
    currency: "VNĐ",
    stars: 4.6,

    cashback: 5,
    city: "TP. HỒ CHÍ MINH",
    description: "Burj Khalifa: At the Top (Level 124 & 125)",
    url:
      "https://cdn-imgix.headout.com/tour/2636/TOUR-IMAGE/84609881-4697-4b73-bb46-9998b2fd7aa2-1866-dubai-burj-khalifa-at-the-top-01-4-.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    time: "3 ngày 3 đêm",
    date: "20/11/2025",
    vehicle: "Xe 45 chỗ",
    hotel: "Resort 4 sao",
  },
  {
    id: 5,
    currentPrice: 196,
    lastPrice: 206,
    currency: "VNĐ",
    stars: 4.6,
    cashback: 5,
    city: "TP. HỒ CHÍ MINH",
    description: "Dubai Acquarium & Underwater Zoo + Burj Khalifa Combo",
    url:
      "https://cdn-imgix.headout.com/tour/3832/TOUR-IMAGE/4306765f-f03f-47a0-a5c5-241ae6cd49f6-2545-dubai-aquarium-underwater-zoo-burj-khalifa-combo-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    time: "3 ngày 3 đêm",
    date: "20/11/2025",
    vehicle: "Xe 45 chỗ",
    hotel: "Resort 4 sao",
  },
  {
    id: 6,
    currentPrice: 20,
    currency: "VNĐ",
    stars: 4.6,
    city: "TP. HỒ CHÍ MINH",
    description:
      "Palace of Versailles All Access Passport Entry with Audioguide",
    url:
      "https://cdn-imgix.headout.com/tour/13905/TOUR-IMAGE/b23dc05c-1b19-4eb4-a205-fb9f0f2e29ab-7654-paris-Palace-of-Versailles-All-Access-Passport-Entry-with-Audioguide-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    time: "3 ngày 3 đêm",
    date: "20/11/2025",
    vehicle: "Xe 45 chỗ",
    hotel: "Resort 4 sao",
  },
  {
    id: 7,
    currentPrice: 31,
    lastPrice: 45,
    currency: "VNĐ",
    stars: 4.6,
    cashback: 10,
    city: "TP. HỒ CHÍ MINH",
    description: "Skip The Line: Eiffel Tower Tickets with Host",
    url:
      "https://cdn-imgix.headout.com/tour/8092/TOUR-IMAGE/d9ee5fc2-5c9e-4981-8f4a-d16dc69769fd-P1.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    time: "3 ngày 3 đêm",
    date: "20/11/2025",
    vehicle: "Xe 45 chỗ",
    hotel: "Resort 4 sao",
  },
  {
    id: 8,
    currentPrice: 31,
    lastPrice: 45,
    currency: "VNĐ",
    stars: 4.6,
    cashback: 10,
    city: "TP. HỒ CHÍ MINH",
    description: "Skip The Line: Eiffel Tower Tickets with Host",
    url:
      "https://cdn-imgix.headout.com/tour/8092/TOUR-IMAGE/d9ee5fc2-5c9e-4981-8f4a-d16dc69769fd-P1.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    time: "3 ngày 3 đêm",
    date: "20/11/2025",
    vehicle: "Xe 45 chỗ",
    hotel: "Resort 4 sao",
  },
];
