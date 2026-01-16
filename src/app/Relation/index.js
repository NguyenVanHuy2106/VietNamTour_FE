import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import API from "../../config/APINoToken";
import { useNavigate } from "react-router-dom";
import { toSlug } from "../../Components/ToSlug";
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
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
    pauseOnHover: false, // Thêm dòng này để tránh bị dừng khi chuột vô tình đè lên
    dotsClass: "slick-dots custom-big-dots",
  };
  const getData = async () => {
    try {
      const response = await API.post("/post/getCNDLPost", { category_id: 9 });
      if (response && response.data && response.data.data) {
        setData(response.data.data.slice(0, 3)); // Chỉ lấy 3 bài đẹp nhất
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getDataDOAN = async () => {
    try {
      const response = await API.post("/post/getCNDLPost", { category_id: 12 });
      if (response && response.data && response.data.data) {
        setDataDOAN(response.data.data.slice(0, 3)); // Chỉ lấy 1 bài tiêu điểm
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
    getDataDOAN();
  }, []);

  const handleGoToDetail = (slug) => {
    //const slug = toSlug(title);
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="rel-v3-section">
      <div className="rel-v3-container">
        {/* TIÊU ĐỀ TỔNG KHỐI */}
        <div className="rel-v3-header">
          <div className="rel-v3-title-group">
            <span className="rel-v3-subtitle">
              Khám phá thế giới cùng chúng tôi
            </span>
            <h2 className="rel-v3-main-title">HÀNH TRÌNH & KINH NGHIỆM</h2>
          </div>
          <button className="rel-v3-all-btn" onClick={() => navigate("/blog")}>
            Xem tất cả bài viết <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="rel-v3-grid">
          {/* KHỐI TRÁI: TIÊU ĐIỂM KHÁCH ĐOÀN (BIG CARD) */}
          <div className="rel-v3-big-slider-container">
            {dataDOAN && dataDOAN.length > 0 ? (
              <Slider {...bigSliderSettings} key={dataDOAN.length}>
                {dataDOAN.map((item) => (
                  <div
                    key={item.post_id}
                    className="lp-slide-item"
                    onClick={() => handleGoToDetail(item.slug)}
                  >
                    <div className="rel-v3-big-card">
                      <img
                        src={item.thumbnail_url}
                        alt={item.title}
                        className="rel-v3-big-img"
                      />
                      <div className="rel-v3-big-overlay">
                        <div className="rel-v3-tag">
                          <Compass size={14} /> KHÁCH ĐOÀN TIÊU BIỂU
                        </div>
                        <h3 className="rel-v3-big-title">{item.title}</h3>
                        <p className="rel-v3-big-desc">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="rel-v3-loader">Đang tải hành trình...</div>
            )}
          </div>

          {/* KHỐI PHẢI: DANH SÁCH CẨM NANG (STACKED CARDS) */}
          <div className="rel-v3-list">
            <div className="rel-v3-list-label">
              <Sparkles size={16} /> CẨM NANG MỚI NHẤT
            </div>
            {data.map((item) => (
              <div
                key={item.post_id}
                className="rel-v3-small-card"
                onClick={() => handleGoToDetail(item.slug)}
              >
                <div className="rel-v3-small-img-box">
                  <img src={item.thumbnail_url} alt={item.title} />
                </div>
                <div className="rel-v3-small-info">
                  <h4>{item.title}</h4>
                  <span>Chi tiết hành trình</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
