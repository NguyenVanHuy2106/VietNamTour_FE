import React, { useState, useEffect } from "react";
import API from "../../config/APINoToken";
import { useNavigate } from "react-router-dom";
import { toSlug } from "../../Components/ToSlug";
import {
  BsClock,
  BsCalendar3,
  BsCarFront,
  BsBuilding,
  BsArrowRight,
} from "react-icons/bs";
import "./index.css";

const NewTour = () => {
  const navigate = useNavigate();
  const [data8NewTour, setData8NewTour] = useState([]);

  const getData = async () => {
    try {
      const response = await API.get("/tour/get8new");
      setData8NewTour(response.data.data || []);
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="clean-bento-section">
      <div className="clean-container">
        <div className="bento-header-flex">
          <div className="title-area">
            <h2 className="bento-main-title">TOUR MỚI NHẤT</h2>
            <div className="title-underline"></div>
          </div>
          <button
            className="bento-view-all"
            onClick={() => navigate("/danh-sach-tour")}
          >
            Xem tất cả hành trình
          </button>
        </div>

        <div className="clean-grid">
          {data8NewTour.map((item) => {
            const imageUrl =
              item.images && item.images.length > 0
                ? item.images[0].imageurl
                : "";
            const adultPrice =
              item.price && item.price.adultprice ? item.price.adultprice : 0;

            return (
              <div
                key={item.tourid}
                className="clean-card"
                onClick={() => navigate(`/tour/${item.slug}`)}
              >
                <div className="clean-media">
                  <div
                    className="clean-img"
                    style={{ backgroundImage: "url(" + imageUrl + ")" }}
                  ></div>
                  {item.highlight && (
                    <div className="clean-badge-highlight">
                      {item.highlight}
                    </div>
                  )}
                </div>

                <div className="clean-content">
                  <span className="clean-location">
                    {item.destination_name}
                  </span>
                  <h3 className="clean-tour-name">{item.tourname}</h3>

                  {/* Thông tin hiển thị sạch sẽ, không in đậm */}
                  <div className="clean-info-list">
                    <div className="clean-info-item">
                      <BsClock size={13} /> <span>{item.timetype_name}</span>
                    </div>
                    <div className="clean-info-item">
                      <BsCalendar3 size={13} />{" "}
                      <span>Khởi hành: {item.startdate}</span>
                    </div>
                    <div className="clean-info-item">
                      <BsCarFront size={13} />{" "}
                      <span>{item.vehicletype_name}</span>
                    </div>
                    <div className="clean-info-item">
                      <BsBuilding size={13} /> <span>{item.hoteltypename}</span>
                    </div>
                  </div>

                  <div className="clean-footer">
                    <div className="clean-price-group">
                      <span className="clean-price-label">Giá trọn gói từ</span>
                      <span className="clean-price-value">
                        {Number(adultPrice).toLocaleString("de-DE")}{" "}
                        <small>VNĐ</small>
                      </span>
                    </div>
                    <div className="clean-arrow-box">
                      <BsArrowRight />
                    </div>
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

export default NewTour;
