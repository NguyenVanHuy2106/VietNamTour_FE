import React from "react";
import Slider from "react-slick";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const CustomerFeedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 700,

    slidesToShow: 3,
    slidesToScroll: 1,

    arrows: false,

    centerMode: false,

    pauseOnHover: true,

    dotsClass: "slick-dots custom-dots-feedback",

    responsive: [
      {
        breakpoint: 1100,
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
    <section className="feedback-premium-wrapper">
      <div className="feedback-container">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="feedback-header">
          {/* LEFT DECORATION */}
          <div className="feedback-header-left">
            <div className="feedback-header-line" />

            <span className="premium-badge">TRẢI NGHIỆM TỪ KHÁCH HÀNG</span>
          </div>

          {/* RIGHT CONTENT */}
          <div className="feedback-header-right">
            <h2 className="feedback-main-title">
              Khách hàng nói gì về Việt Nam Tour
            </h2>

            <p className="feedback-subtitle">
              Những chia sẻ thực tế từ khách hàng đã đồng hành cùng chúng tôi
              trong các chương trình du lịch, MICE và sự kiện.
            </p>
          </div>
        </div>

        {/* =====================================================
            SLIDER
        ===================================================== */}
        <div className="feedback-slider-wrap">
          <Slider {...settings}>
            {pickedData.map((item) => (
              <div key={item.id} className="feedback-slide-item">
                <article className="feedback-glass-card">
                  {/* CARD TOP */}
                  <div className="feedback-card-top">
                    <div className="quote-icon">
                      <FaQuoteLeft />
                    </div>

                    <div className="stars-wrapper">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="star-icon" />
                      ))}
                    </div>
                  </div>

                  {/* REVIEW */}
                  <p className="feedback-text">{item.description}</p>

                  {/* CUSTOMER */}
                  <div className="customer-info-box">
                    <div className="avatar-wrapper">
                      <img src={item.url} alt={item.name} loading="lazy" />
                    </div>

                    <div className="customer-name-meta">
                      <h4 className="customer-name">{item.name}</h4>

                      <span className="customer-tag">
                        Khách hàng Việt Nam Tour
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;

/* =========================================================
   DATA
========================================================= */

const pickedData = [
  {
    id: 1,
    description:
      "Chương trình rất thành công với hơn 500 nhân sự tham gia bùng nổ. Kịch bản trò chơi sáng tạo, vui nhộn và lồng ghép khéo léo các giá trị cốt lõi của công ty. Đội ngũ điều hành cực kỳ năng lượng, chuyên nghiệp trong từng khâu tổ chức.",
    url:
      "https://cdn-imgix.headout.com/tour/652/TOUR-IMAGE/cd0fa708-27c2-4145-9fcf-14e84d910456-517-new-york-phantom-of-the-opera-00.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    name: "Chị Thuỷ",
  },

  {
    id: 2,
    description:
      "Dịch vụ MICE hoàn hảo, từ khâu đón tiễn đến trang thiết bị hội thảo đều chỉn chu. Chúng tôi hoàn toàn yên tâm khi giao phó các sự kiện quan trọng cho các bạn.",
    url:
      "https://cdn-imgix.headout.com/tour/638/TOUR-IMAGE/d8da7ef3-6be5-4ab9-a88e-66a1cf8b5126-2.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    name: "Anh Hoàng",
  },

  {
    id: 3,
    description:
      "Bữa tiệc tất niên thực sự bùng nổ với sân khấu hoành tráng và kịch bản mới lạ. Đây là chương trình ấn tượng nhất từ trước đến nay của chúng tôi. Cảm ơn các bạn!",
    url:
      "https://cdn-imgix.headout.com/tour/18201/TOUR-IMAGE/a24bde23-2e32-49d4-bf14-b933fe60fe52-c817b2f3-194d-4fde-9ad8-fccbaf50ed31-9339-new-york-king-kong-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    name: "Anh Triết",
  },

  {
    id: 4,
    description:
      "Hành trình 5 sao đẳng cấp dành cho các đại lý xuất sắc nhất của chúng tôi. Điểm đến sang trọng, ẩm thực tinh tế và dịch vụ chăm sóc khách hàng vô cùng tận tâm.",
    url:
      "https://cdn-imgix.headout.com/tour/2636/TOUR-IMAGE/84609881-4697-4b73-bb46-9998b2fd7aa2-1866-dubai-burj-khalifa-at-the-top-01-4-.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    name: "Chị Linh",
  },

  {
    id: 5,
    description:
      "Tôi đánh giá cao quy trình báo giá minh bạch và xử lý hồ sơ cực kỳ nhanh gọn. Tác phong làm việc bài bản, đáp ứng đúng các tiêu chuẩn khắt khe của tập đoàn.",
    url:
      "https://cdn-imgix.headout.com/tour/3832/TOUR-IMAGE/4306765f-f03f-47a0-a5c5-241ae6cd49f6-2545-dubai-aquarium-underwater-zoo-burj-khalifa-combo-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    name: "Anh Bảo",
  },

  {
    id: 6,
    description:
      "Đội ngũ sáng tạo luôn đưa ra những ý tưởng mới lạ, không đi theo lối mòn. Các chương trình hội thảo kết hợp nghỉ dưỡng nhờ đó mà hiệu quả và thú vị hơn hẳn.",
    url:
      "https://cdn-imgix.headout.com/tour/13905/TOUR-IMAGE/b23dc05c-1b19-4eb4-a205-fb9f0f2e29ab-7654-paris-Palace-of-Versailles-All-Access-Passport-Entry-with-Audioguide-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    name: "Chị Minh Anh",
  },

  {
    id: 7,
    description:
      "Cách các bạn linh hoạt xử lý sự cố thời tiết để đảm bảo an toàn cho đoàn khiến tôi rất cảm kích. Sự tử tế và trách nhiệm là lý do chúng tôi chọn các bạn.",
    url:
      "https://cdn-imgix.headout.com/tour/8092/TOUR-IMAGE/d9ee5fc2-5c9e-4981-8f4a-d16dc69769fd-P1.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    name: "Anh Tùng",
  },

  {
    id: 8,
    description:
      "Chi phí cạnh tranh nhưng chất lượng dịch vụ lại vượt xa mong đợi. Từng chi tiết nhỏ đều được chăm chút kỹ lưỡng, mang lại sự hài lòng tuyệt đối cho cán bộ nhân viên.",
    url:
      "https://cdn-imgix.headout.com/tour/8092/TOUR-IMAGE/d9ee5fc2-5c9e-4981-8f4a-d16dc69769fd-P1.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    name: "Chị Chi",
  },
];
