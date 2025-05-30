import React from "react";
import { Container, Nav } from "react-bootstrap";
import { FaHome } from "react-icons/fa"; // Import icon Home
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

import {
  BsClock,
  BsCalendar3,
  BsCarFront,
  BsBuilding,
  BsCaretRightFill,
} from "react-icons/bs";
import "./index.css"; // Import file CSS

const CusTomerFeedBack = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4, // Hiển thị 4 thẻ một lần
    slidesToScroll: 1, // Lướt từng thẻ một
    swipeToSlide: true, // ✅ Cho phép swipe tự do, không bị snap
    draggable: true,
    pauseOnHover: false,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#eeeeee",
      }}
    >
      <div
        style={{
          maxWidth: "85%",
          boxSizing: "border-box",
          margin: "0 auto",
        }}
      >
        <div className="" style={{ marginBottom: "30px" }}>
          <div className="NewTourTitleCFB">KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI</div>
          <div
            style={{ maxWidth: "1180px", width: "100%", textAlign: "center" }}
          >
            <Slider {...settings}>
              {pickedData.map((item) => (
                <div key={item.id}>
                  <div className="exp-cardCFB">
                    <div className="exp-info-wrap">
                      <p id="exp-description">{item.description}</p>
                    </div>

                    <div
                      className="d-flex justify-content-center"
                      style={{
                        marginTop: "10px",
                        marginBottom: "20px",
                        color: "#FFCC33",
                      }}
                    >
                      {Array.from({ length: 5 }, (_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>

                    <div>
                      <img
                        key={item.id}
                        src={item.url}
                        alt={`Customer ${item.id}`}
                        className="object-cover"
                        style={{
                          height: 80,
                          width: 80,
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div className="CFBName">{item.name}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CusTomerFeedBack;

const pickedData = [
  {
    id: 1,
    description:
      "Bàu Trắng là một hồ nước ngọt nằm giữa những đồi cát trắng trải dài ở Bình Thuận, tạo nên khung cảnh hoang sơ và thơ mộng. Nơi đây nổi bật với mặt hồ trong xanh, sen nở rực vào mùa hè và những triền cát uốn lượn đẹp như tranh vẽ",
    url:
      "https://cdn-imgix.headout.com/tour/652/TOUR-IMAGE/cd0fa708-27c2-4145-9fcf-14e84d910456-517-new-york-phantom-of-the-opera-00.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",

    name: "Chị Ngọc",
  },
  {
    id: 2,

    description:
      "Bàu Trắng là một hồ nước ngọt nằm giữa những đồi cát trắng trải dài ở Bình Thuận, tạo nên khung cảnh hoang sơ và thơ mộng. Nơi đây nổi bật với mặt hồ trong xanh, sen nở rực vào mùa hè và những triền cát uốn lượn đẹp như tranh vẽ",
    url:
      "https://cdn-imgix.headout.com/tour/638/TOUR-IMAGE/d8da7ef3-6be5-4ab9-a88e-66a1cf8b5126-2.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",

    name: "Chị Ngọc",
  },
  {
    id: 3,

    description:
      "Bàu Trắng là một hồ nước ngọt nằm giữa những đồi cát trắng trải dài ở Bình Thuận, tạo nên khung cảnh hoang sơ và thơ mộng. Nơi đây nổi bật với mặt hồ trong xanh, sen nở rực vào mùa hè và những triền cát uốn lượn đẹp như tranh vẽ",
    url:
      "https://cdn-imgix.headout.com/tour/18201/TOUR-IMAGE/a24bde23-2e32-49d4-bf14-b933fe60fe52-c817b2f3-194d-4fde-9ad8-fccbaf50ed31-9339-new-york-king-kong-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",

    name: "Chị Ngọc",
  },
  {
    id: 4,

    description:
      "Bàu Trắng là một hồ nước ngọt nằm giữa những đồi cát trắng trải dài ở Bình Thuận, tạo nên khung cảnh hoang sơ và thơ mộng. Nơi đây nổi bật với mặt hồ trong xanh, sen nở rực vào mùa hè và những triền cát uốn lượn đẹp như tranh vẽ",
    url:
      "https://cdn-imgix.headout.com/tour/2636/TOUR-IMAGE/84609881-4697-4b73-bb46-9998b2fd7aa2-1866-dubai-burj-khalifa-at-the-top-01-4-.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",

    name: "Chị Ngọc",
  },
  {
    id: 5,

    description:
      "Bàu Trắng là một hồ nước ngọt nằm giữa những đồi cát trắng trải dài ở Bình Thuận, tạo nên khung cảnh hoang sơ và thơ mộng. Nơi đây nổi bật với mặt hồ trong xanh, sen nở rực vào mùa hè và những triền cát uốn lượn đẹp như tranh vẽ",
    url:
      "https://cdn-imgix.headout.com/tour/3832/TOUR-IMAGE/4306765f-f03f-47a0-a5c5-241ae6cd49f6-2545-dubai-aquarium-underwater-zoo-burj-khalifa-combo-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",

    name: "Chị Ngọc",
  },
  {
    id: 6,

    description:
      "Bàu Trắng là một hồ nước ngọt nằm giữa những đồi cát trắng trải dài ở Bình Thuận, tạo nên khung cảnh hoang sơ và thơ mộng. Nơi đây nổi bật với mặt hồ trong xanh, sen nở rực vào mùa hè và những triền cát uốn lượn đẹp như tranh vẽ",
    url:
      "https://cdn-imgix.headout.com/tour/13905/TOUR-IMAGE/b23dc05c-1b19-4eb4-a205-fb9f0f2e29ab-7654-paris-Palace-of-Versailles-All-Access-Passport-Entry-with-Audioguide-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",

    name: "Chị Ngọc",
  },
  {
    id: 7,

    description:
      "Bàu Trắng là một hồ nước ngọt nằm giữa những đồi cát trắng trải dài ở Bình Thuận, tạo nên khung cảnh hoang sơ và thơ mộng. Nơi đây nổi bật với mặt hồ trong xanh, sen nở rực vào mùa hè và những triền cát uốn lượn đẹp như tranh vẽ",
    url:
      "https://cdn-imgix.headout.com/tour/8092/TOUR-IMAGE/d9ee5fc2-5c9e-4981-8f4a-d16dc69769fd-P1.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",

    name: "Chị Ngọc",
  },
  {
    id: 8,

    description:
      "Bàu Trắng là một hồ nước ngọt nằm giữa những đồi cát trắng trải dài ở Bình Thuận, tạo nên khung cảnh hoang sơ và thơ mộng. Nơi đây nổi bật với mặt hồ trong xanh, sen nở rực vào mùa hè và những triền cát uốn lượn đẹp như tranh vẽ",
    url:
      "https://cdn-imgix.headout.com/tour/8092/TOUR-IMAGE/d9ee5fc2-5c9e-4981-8f4a-d16dc69769fd-P1.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",

    name: "Chị Ngọc",
  },
];
