import React, { useState, useEffect } from "react";
import API from "../../config/APINoToken";
import { useNavigate } from "react-router-dom";
import { toSlug } from "../../Components/ToSlug";
import {
  BsArrowRight,
  BsShieldCheck,
  BsFillGrid3X3GapFill,
} from "react-icons/bs";
import "./index.css";

const CompanyTour = () => {
  const navigate = useNavigate();
  const [dataDOANTour, setDataDOANTour] = useState([]);

  const getData = async () => {
    try {
      const response = await API.get("/tour/getDOANTour");
      setDataDOANTour(response.data.data || []);
    } catch (error) {
      console.error("Lỗi lấy tour đoàn:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleGoToDetail = (slug) => {
    //const slug = toSlug(tourname);
    navigate(`/tour/${slug}`);
  };

  return (
    <div className="tour-grid-section">
      <div className="tour-grid-container">
        {/* Header tinh tế hơn */}
        <div className="tour-grid-header">
          <div className="header-content">
            <div className="mini-badge">
              <BsShieldCheck /> ĐƠN VỊ TỔ CHỨC TOUR ĐOÀN CHUYÊN NGHIỆP
            </div>
            <h2 className="main-title">Hệ Thống Tour Khách Đoàn</h2>
            <p className="sub-title">
              Khám phá hơn 100+ hành trình được thiết kế riêng cho doanh nghiệp
            </p>
          </div>
          <button
            className="btn-discover"
            onClick={() =>
              navigate("/danh-sach-tour", { state: { tourtype: "DOAN" } })
            }
          >
            Xem tất cả <BsFillGrid3X3GapFill />
          </button>
        </div>

        {/* Lưới Tour nhỏ gọn - Show được nhiều ảnh */}
        <div className="tour-bento-grid">
          {dataDOANTour.map((item) => {
            const imageUrl =
              item.images && item.images.length > 0
                ? item.images[0].imageurl
                : "";
            const adultPrice =
              item.price && item.price.adultprice ? item.price.adultprice : 0;

            return (
              <div
                key={item.tourid}
                className="doan-tour-card"
                onClick={() => handleGoToDetail(item.slug)}
              >
                <div className="doan-tour-media">
                  <div
                    className="doan-tour-image"
                    style={{ backgroundImage: "url(" + imageUrl + ")" }}
                  ></div>
                  <div className="mini-price-tag">
                    {Number(adultPrice).toLocaleString("de-DE")}đ
                  </div>
                </div>

                <div className="mini-card-info">
                  <span className="mini-dest">
                    {item.destination_name || "Việt Nam"}
                  </span>
                  <h3 className="mini-name">{item.tourname}</h3>
                  <div className="mini-footer">
                    <span className="view-text">Chi tiết</span>
                    <BsArrowRight className="mini-icon" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CompanyTour;
