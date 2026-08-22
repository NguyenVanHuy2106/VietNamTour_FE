import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import API from "../../config/APINoToken";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Compass, Sparkles } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

export default function Relation() {
  const [data, setData] = useState([]);
  const [dataDOAN, setDataDOAN] = useState([]);

  const navigate = useNavigate();

  const bigSliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
    dotsClass: "slick-dots custom-big-dots",
  };

  const getData = async () => {
    try {
      const response = await API.post("/post/getCNDLPost", {
        category_id: 9,
      });

      if (response && response.data && response.data.data) {
        setData(response.data.data.slice(0, 3));
      }
    } catch (error) {
      console.error("Lỗi lấy cẩm nang:", error);
    }
  };

  const getDataDOAN = async () => {
    try {
      const response = await API.post("/post/getCNDLPost", {
        category_id: 12,
      });

      if (response && response.data && response.data.data) {
        setDataDOAN(response.data.data.slice(0, 3));
      }
    } catch (error) {
      console.error("Lỗi lấy hành trình khách đoàn:", error);
    }
  };

  useEffect(() => {
    getData();
    getDataDOAN();
  }, []);

  const handleGoToDetail = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <section className="rel-v3-section">
      <div className="rel-v3-container">
        {/* HEADER */}
        <div className="rel-v3-header">
          <div className="rel-v3-title-group">
            <span className="rel-v3-subtitle">Cảm hứng cho mỗi hành trình</span>

            <h2 className="rel-v3-main-title">Hành trình & Kinh nghiệm</h2>

            <p className="rel-v3-header-desc">
              Câu chuyện hành trình, kinh nghiệm du lịch và những gợi ý hữu ích
              dành cho chuyến đi tiếp theo của bạn.
            </p>
          </div>

          <button
            type="button"
            className="rel-v3-all-btn"
            onClick={() => navigate("/blog")}
          >
            <span>Xem tất cả bài viết</span>
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="rel-v3-grid">
          {/* BIG SLIDER */}
          <div className="rel-v3-big-slider-container">
            {dataDOAN && dataDOAN.length > 0 ? (
              <Slider {...bigSliderSettings} key={dataDOAN.length}>
                {dataDOAN.map((item) => (
                  <div key={item.post_id} className="lp-slide-item">
                    <article
                      className="rel-v3-big-card"
                      onClick={() => handleGoToDetail(item.slug)}
                    >
                      <img
                        src={item.thumbnail_url}
                        alt={item.title}
                        className="rel-v3-big-img"
                      />

                      <div className="rel-v3-big-overlay">
                        <div className="rel-v3-tag">
                          <Compass size={14} />

                          <span>KHÁCH ĐOÀN TIÊU BIỂU</span>
                        </div>

                        <h3 className="rel-v3-big-title">{item.title}</h3>

                        <p className="rel-v3-big-desc">{item.description}</p>

                        <div className="rel-v3-big-link">
                          Xem hành trình
                          <ArrowUpRight size={16} />
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="rel-v3-loader">Đang tải hành trình...</div>
            )}
          </div>

          {/* RIGHT LIST */}
          <div className="rel-v3-list">
            <div className="rel-v3-list-label">
              <Sparkles size={16} />

              <span>Cẩm nang mới nhất</span>
            </div>

            <div className="rel-v3-list-items">
              {data.map((item) => (
                <article
                  key={item.post_id}
                  className="rel-v3-small-card"
                  onClick={() => handleGoToDetail(item.slug)}
                >
                  <div className="rel-v3-small-img-box">
                    <img src={item.thumbnail_url} alt={item.title} />
                  </div>

                  <div className="rel-v3-small-info">
                    <h4>{item.title}</h4>

                    <span>
                      Chi tiết hành trình
                      <ArrowUpRight size={13} />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
