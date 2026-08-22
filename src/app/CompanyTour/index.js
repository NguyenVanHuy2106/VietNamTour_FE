import React, { useState, useEffect } from "react";
import API from "../../config/APINoToken";
import { useNavigate } from "react-router-dom";
import { BsArrowRight, BsShieldCheck } from "react-icons/bs";
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
    navigate(`/tour/${slug}`);
  };

  const handleGoToAll = () => {
    navigate("/danh-sach-tour", {
      state: {
        tourtype: "DOAN",
      },
    });
  };

  return (
    <section className="company-tour-section">
      <div className="company-tour-container">
        {/* HEADER */}
        <div className="company-tour-header">
          <div className="company-tour-heading">
            <div className="company-tour-eyebrow">
              <BsShieldCheck />
              <span>TOUR DOANH NGHIỆP</span>
            </div>

            <div className="company-tour-title-row">
              <div>
                <h2>Tour dành cho doanh nghiệp</h2>

                <p>
                  Những hành trình được thiết kế riêng cho khách đoàn, doanh
                  nghiệp và các chương trình gắn kết tập thể.
                </p>
              </div>

              <button
                type="button"
                className="company-tour-view-all"
                onClick={handleGoToAll}
              >
                <span>Xem tất cả</span>
                <BsArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* TOUR LIST */}
        <div className="company-tour-list">
          {dataDOANTour.map((item) => {
            const imageUrl =
              item.images && item.images.length > 0
                ? item.images[0].imageurl
                : "";

            const adultPrice =
              item.price && item.price.adultprice ? item.price.adultprice : 0;

            return (
              <article
                key={item.tourid}
                className="company-tour-card"
                onClick={() => handleGoToDetail(item.slug)}
              >
                <div className="company-tour-image-wrap">
                  <div
                    className="company-tour-image"
                    style={{
                      backgroundImage: `url(${imageUrl})`,
                    }}
                  />

                  <div className="company-tour-image-overlay" />

                  <div className="company-tour-price">
                    <span>Từ</span>
                    <strong>
                      {Number(adultPrice).toLocaleString("vi-VN")}đ
                    </strong>
                  </div>
                </div>

                <div className="company-tour-card-body">
                  <div className="company-tour-destination">
                    {item.destination_name || "Việt Nam"}
                  </div>

                  <h3>{item.tourname}</h3>

                  <div className="company-tour-card-footer">
                    <span>Khám phá tour</span>
                    <BsArrowRight />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* MOBILE CTA */}
        <div className="company-tour-mobile-footer">
          <button type="button" onClick={handleGoToAll}>
            Xem tất cả tour doanh nghiệp
            <BsArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanyTour;
