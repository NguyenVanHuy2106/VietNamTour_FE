import React, { useState, useEffect } from "react";

import { useLocation, useParams } from "react-router-dom";
import API from "../../config/APINoToken";
import { Spinner } from "react-bootstrap";
import { toSlug } from "../../Components/ToSlug";

import {
  FaRegClock,
  FaRegCalendarAlt,
  FaBus,
  FaRegBuilding,
  FaMapMarkerAlt,
  FaRegMap,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./index.css";

const TourDetail = () => {
  const { idSlug } = useParams(); // ví dụ: '123-da-lat-tour'
  const slugParts = idSlug.split("-");
  const tourId = slugParts[slugParts.length - 1]; // lấy phần cuối
  //const tourId = idSlug.split("-")[0]; // lấy '123'
  const location = useLocation();
  const navigate = useNavigate();
  //const { tourId } = location.state || {};
  const [dataTourDetail, setDataTourDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tourInfo, setTourInfo] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [tourDetail, setTourDetail] = useState("");
  const [tourPrice, setTourPrice] = useState("");
  const [tourHighlight, setTourHighlight] = useState([]);
  const [tourDes, setTourDes] = useState("");
  const [dataRelationTours, setDataRelationTours] = useState([]);
  // const [destination, setDestination] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await API.get(`/tour/get/${tourId}`);
      const tourData = response.data.data;

      setDataTourDetail(tourData || []);
      setTourInfo(tourData.tour);
      setTourDetail(tourData.detail);
      setTourPrice(tourData.price);
      setTourHighlight(tourData.highlights);
      setTourDes(tourData.description);
      // setDestination(tourData.destination);
      getRelationTours(tourData.tour.destination);
      //console.log(tourData.destination);

      const mainImgObj = tourData.images.find((img) => img.imagetype === 0);
      if (mainImgObj) {
        setMainImage(mainImgObj.imageurl);
      } else {
        setMainImage("");
      }
    } catch (error) {
      console.error("Lỗi khi lấy chi tiết Tour:", error.response || error);
    } finally {
      setLoading(false);
    }
  };
  const getRelationTours = async (destination) => {
    //console.log(destination);
    try {
      const response = await API.post("/tour/relation", {
        tourid: tourId,
        destination: destination,
      });
      setDataRelationTours(response.data.data);
    } catch (error) {
      console.error("Lỗi khi lấy chi tiết Tour:", error.response || error);
    } finally {
      setLoading(false);
    }
  };
  const handleGoToDetail = (tourid, tourname) => {
    const slug = toSlug(tourname);
    navigate(`/tour/${slug}-${tourid}`);
  };

  useEffect(() => {
    //console.log(tourId);
    window.scrollTo(0, 0);
    if (tourId) {
      getData();
    }
  }, [tourId]);

  return (
    <div className="tour-detail-container container">
      {loading ? (
        <div className="loading-overlay">
          <div className="loading-spinner">
            <Spinner animation="border" role="status" />
          </div>
        </div>
      ) : (
        <>
          <h1 className="tour-name">{tourInfo.tourname}</h1>
          <div className="row">
            {/* Cột trái (Hình ảnh) - Hiển thị đầu tiên trên cả 2 màn hình */}
            <div className="col-lg-8 col-12 order-1">
              <div className="main-image-container mb-3">
                {mainImage && (
                  <img
                    src={mainImage}
                    alt="VietNam Tour"
                    className="img-fluid rounded"
                  />
                )}
              </div>
              <div className="thumbnail-container">
                {dataTourDetail.images && Array.isArray(dataTourDetail.images)
                  ? dataTourDetail.images.map((img, index) => (
                      <img
                        key={index}
                        src={img.imageurl}
                        alt={img.imagename || `image-${index}`}
                        className="thumbnail-image"
                        onClick={() => setMainImage(img.imageurl)}
                      />
                    ))
                  : null}
              </div>
              <div
                style={{
                  fontStyle: "italic",
                  textAlign: "justify",
                  marginTop: 10,
                  color: "#888888",
                }}
              >
                {tourInfo.description}
              </div>
            </div>

            {/* Cột phải (thông tin tóm tắt) - Hiển thị thứ hai trên desktop, nhưng sẽ được sắp xếp lại trên mobile */}
            <div className="col-lg-4 col-12 order-lg-2 order-2 mt-lg-0 mt-4">
              {/* Box thông tin tóm tắt */}
              <div className="tour-info-card p-3 rounded shadow-sm">
                <div className="info-item">
                  <FaRegClock />
                  <span className="info-text">
                    Thời gian: {dataTourDetail.timetype_name}
                  </span>
                </div>
                <div className="info-item">
                  <FaRegCalendarAlt />
                  <span className="info-text">
                    Ngày khởi hành: {tourInfo.startdate}
                  </span>
                </div>
                <div className="info-item">
                  <FaBus />
                  <span className="info-text">
                    Phương tiện: {dataTourDetail.vehicletype_name}
                  </span>
                </div>
                <div className="info-item">
                  <FaRegBuilding />
                  <span className="info-text">
                    Lưu trú: {dataTourDetail.hoteltypename}
                  </span>
                </div>
                <div className="info-item">
                  <FaMapMarkerAlt />
                  <span className="info-text">
                    Điểm khởi hành: {dataTourDetail.departure_name}
                  </span>
                </div>
                <div className="info-item">
                  <FaRegMap />
                  <span className="info-text">
                    Điểm đến: {dataTourDetail.destination_name}
                  </span>
                </div>
              </div>

              {/* Box giá và nút đặt tour */}
              <div className="tour-price-box p-3 rounded text-center mt-4 shadow-sm">
                <div className="price-label">Giá Tour:</div>
                <div className="price-value">
                  {tourPrice && tourPrice.adultprice != null
                    ? tourPrice.adultprice.toLocaleString("vi-VN") + " ₫"
                    : "Đang cập nhật"}
                </div>
              </div>

              <div className="booking-buttons d-grid gap-2 mt-3">
                <button className="btn btn-primary btn-lg">ĐẶT TOUR</button>
                <button className="btn btn-outline-primary btn-lg">
                  TƯ VẤN
                </button>
              </div>

              {/* Điểm nổi bật */}
              <div className="highlight-section mt-4">
                <h2 className="section-heading">ĐIỂM NỔI BẬT</h2>
                <ul className="highlight-list">
                  {tourHighlight.map((item, index) => (
                    <li key={index}>{item.highlight_value}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Chi tiết bài viết - Sẽ hiển thị bên dưới trên mobile, và bên trái dưới cùng trên desktop */}
            <div className="col-12 col-lg-8 order-3">
              <div className="tour-body mt-4">
                <h2 className="section-heading">CHI TIẾT LỊCH TRÌNH</h2>
                <div
                  className="tour-detail-content"
                  dangerouslySetInnerHTML={{ __html: tourDetail.content }}
                />
              </div>
            </div>

            {/* Các tour liên quan - Sẽ hiển thị bên dưới cùng */}
            <div className="col-12 col-lg-4 order-4">
              <div className="relative-tour-section mt-4">
                <h2 className="section-heading">CÁC TOUR LIÊN QUAN</h2>
                {dataRelationTours.map((tour) => (
                  <div
                    key={tour.tourid}
                    onClick={() => handleGoToDetail(tour.tourid, tour.tourname)}
                    className="relative-tour-card d-flex mb-3 p-2 border rounded"
                  >
                    <img
                      src={tour.images[0].imageurl}
                      alt="Image"
                      className="relative-tour-image rounded"
                    />
                    <div className="d-flex flex-column ms-3">
                      <h5 className="relative-tour-title">{tour.tourname}</h5>
                      <p className="mb-1 relative-text">
                        Khởi hành: {tour.departure_name}
                      </p>
                      <div className="d-flex align-items-baseline">
                        <p className="mb-0 relative-text">Giá Tour:</p>
                        <p className="price-text ms-2">
                          {tourPrice && tourPrice.adultprice != null
                            ? tourPrice.adultprice.toLocaleString("vi-VN") +
                              " ₫"
                            : "Đang cập nhật"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TourDetail;
