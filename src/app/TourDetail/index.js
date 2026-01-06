import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../config/APINoToken";
import { Spinner } from "react-bootstrap";
import { toSlug } from "../../Components/ToSlug";
import {
  FaRegClock,
  FaRegCalendarAlt,
  FaBus,
  FaRegBuilding,
  FaMapMarkerAlt,
  FaStar,
  FaShieldAlt,
  FaTicketAlt,
  FaCheckCircle,
  FaFire,
} from "react-icons/fa";
import "./index.css";

const TourDetail = () => {
  const { idSlug } = useParams();
  const { Slug } = useParams();
  //const tourId = idSlug ? idSlug.split("-").pop() : null;
  const navigate = useNavigate();
  //console.log(Slug);

  const [data, setData] = useState({
    tour: {},
    detail: {},
    price: {},
    highlights: [],
    images: [],
    relations: [],
    fullData: {},
  });
  const [loading, setLoading] = useState(true);
  const [activeImg, setActiveImg] = useState("");

  // const getData = async () => {
  //   try {
  //     setLoading(true);
  //     const res = await API.get(`/tour/get/${tourId}`);
  //     const d = res.data.data;

  //     let initialImg = "";
  //     if (d.images && d.images.length > 0) {
  //       const mainImgObj = d.images.find((img) => img.imagetype === 0);
  //       initialImg = mainImgObj ? mainImgObj.imageurl : d.images[0].imageurl;
  //     }

  //     setData({
  //       tour: d.tour || {},
  //       detail: d.detail || {},
  //       price: d.price || {},
  //       highlights: d.highlights || [],
  //       images: d.images || [],
  //       fullData: d || {},
  //     });
  //     setActiveImg(initialImg);

  //     const rel = await API.post("/tour/relation", {
  //       tourid: tourId,
  //       destination: d.tour ? d.tour.destination : "",
  //     });
  //     setData((prev) => ({ ...prev, relations: rel.data.data || [] }));
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const getData = async () => {
    try {
      setLoading(true);

      if (!Slug) {
        console.error("Slug is missing");
        setLoading(false);
        return;
      }

      const res = await API.get(`/tour/slug/${Slug}`);

      // Thay d = res.data?.data bằng cách kiểm tra an toàn này:
      const d = res.data && res.data.data ? res.data.data : null;

      if (!d || !d.tour) {
        console.warn("Không tìm thấy dữ liệu tour");
        setLoading(false);
        return;
      }

      // Xử lý hình ảnh
      let initialImg = "";
      if (d.images && d.images.length > 0) {
        const mainImgObj = d.images.find((img) => img.imagetype === 0);
        initialImg = mainImgObj ? mainImgObj.imageurl : d.images[0].imageurl;
      }

      // Cập nhật state chính
      setData({
        tour: d.tour || {},
        detail: d.detail || {},
        price: d.price || {},
        highlights: d.highlights || [],
        images: d.images || [],
        fullData: d || {},
        relations: [],
      });
      setActiveImg(initialImg);

      // Gọi API liên quan
      try {
        // Kiểm tra kỹ tên trường ID (id hoặc tour_id)
        const tourIdForRel = d.tour.tourid;
        const rel = await API.post("/tour/relation", {
          tourid: tourIdForRel,
          destination: d.tour.destination || "",
        });

        const relationData = rel.data && rel.data.data ? rel.data.data : [];
        setData((prev) => ({ ...prev, relations: relationData }));
      } catch (relError) {
        console.error("Lỗi lấy tour liên quan:", relError);
      }
    } catch (error) {
      console.error("Lỗi API chính:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (Slug) getData();
  }, [Slug]);

  if (loading)
    return (
      <div className="loading-global">
        <span>Đang tải...</span>
      </div>
    );

  const { tour, price, fullData, images, highlights, detail, relations } = data;

  return (
    <div className="tour-pro-v3">
      <div className="container">
        {/* --- PHẦN 1: TIÊU ĐỀ & ĐIỂM NHẤN (HÀNG ĐẦU) --- */}
        <div className="tour-header-pro">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1 className="tour-main-title">{tour.tourname}</h1>
              {/* DI CHUYỂN ĐIỂM NHẤN LÊN ĐÂY */}
              <div className="highlight-ribbon mt-3">
                {highlights.slice(0, 4).map((h, i) => (
                  <div key={i} className="ribbon-item">
                    <FaCheckCircle className="text-success" />{" "}
                    <span>{h.highlight_value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          {/* --- CỘT TRÁI: GALLERY & LỊCH TRÌNH --- */}
          <div className="col-lg-8">
            <div className="gallery-box-v3">
              <div className="big-frame">
                <img src={activeImg} alt="main" className="img-main" />
                <div className="view-count">
                  <FaFire /> Đang có 12 người xem tour này
                </div>
              </div>
              <div className="thumb-row">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`thumb-box-v3 ${
                      activeImg === img.imageurl ? "active" : ""
                    }`}
                    onClick={() => setActiveImg(img.imageurl)}
                  >
                    <img src={img.imageurl} alt="thumb" />
                  </div>
                ))}
              </div>
            </div>

            <div className="content-detail-v3 mt-5">
              <h3 className="section-title-v3">HÀNH TRÌNH CHI TIẾT</h3>
              <div
                className="html-render-v3"
                dangerouslySetInnerHTML={{ __html: detail.content }}
              />
            </div>
          </div>

          {/* --- CỘT PHẢI: BOOKING & TOUR TƯƠNG TỰ --- */}
          <div className="col-lg-4">
            <div className="sidebar-v3">
              <div className="specs-card-v4">
                {/* Khối Thời gian */}
                <div className="spec-line-item">
                  <div className="icon-v4-box pulse-blue">
                    <FaRegClock />
                  </div>
                  <div className="text-v4-box">
                    <label className="label-neon">Thời gian</label>
                    <strong className="text-neon">
                      {fullData.timetype_name}
                    </strong>
                  </div>
                </div>

                {/* Khối Phương tiện */}
                <div className="spec-line-item">
                  <div className="icon-v4-box pulse-orange">
                    <FaBus />
                  </div>
                  <div className="text-v4-box">
                    <label className="label-neon">Phương tiện</label>
                    <strong className="text-neon">
                      {fullData.vehicletype_name}
                    </strong>
                  </div>
                </div>

                {/* Khối Lưu trú */}
                <div className="spec-line-item">
                  <div className="icon-v4-box pulse-green">
                    <FaRegBuilding />
                  </div>
                  <div className="text-v4-box">
                    <label className="label-neon">Lưu trú</label>
                    <strong className="text-neon">
                      {fullData.hoteltypename}
                    </strong>
                  </div>
                </div>

                {/* Khối Khởi hành */}
                <div className="spec-line-item">
                  <div className="icon-v4-box pulse-red">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="text-v4-box">
                    <label className="label-neon">Khởi hành</label>
                    <strong className="text-neon">
                      {fullData.departure_name}
                    </strong>
                  </div>
                </div>
              </div>

              {/* BOX ĐẶT TOUR */}
              <div className="booking-card-v3">
                <div className="price-label">Giá trọn gói từ:</div>
                <div className="price-val-v3">
                  {price.adultprice
                    ? price.adultprice.toLocaleString("vi-VN") + " ₫"
                    : "Liên hệ"}
                </div>
                <button className="btn-book-v3">
                  <FaTicketAlt /> ĐẶT TOUR NGAY
                </button>
                <div className="support-tag">
                  <FaShieldAlt /> Cam kết hoàn tiền nếu dịch vụ không đúng
                </div>
              </div>

              {/* DI CHUYỂN TOUR TƯƠNG TỰ VÀO ĐÂY */}
              <div className="related-sidebar-v3 mt-4">
                <h5 className="side-title-v3">GỢI Ý TOUR KHÁC</h5>
                {relations &&
                  relations.slice(0, 4).map((rel) => (
                    <div
                      key={rel.tourid}
                      className="rel-mini-card"
                      onClick={() =>
                        navigate(`/tour/${toSlug(rel.tourname)}-${rel.tourid}`)
                      }
                    >
                      <div className="mini-img">
                        <img
                          src={
                            rel.images && rel.images[0]
                              ? rel.images[0].imageurl
                              : ""
                          }
                          alt=""
                        />
                      </div>
                      <div className="mini-info">
                        <h6>{rel.tourname}</h6>
                        <p>
                          {rel.price
                            ? rel.price.adultprice.toLocaleString("vi-VN") +
                              " ₫"
                            : "Liên hệ"}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
