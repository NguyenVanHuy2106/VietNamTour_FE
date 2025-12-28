import React, { useState, useEffect } from "react";
import API from "../../config/APINoToken";
import Slider from "react-slick";
import { Phone, Users, Star, ArrowRight, Send } from "lucide-react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Banner = ({ collectionsData }) => {
  const [dataBanner, setDataBanner] = useState([]);
  let [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const settings = {
    dots: true, // Hiện chấm tròn dưới slide
    infinite: true, // Lặp vô hạn
    speed: 500, // Tốc độ chuyển slide
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Tự động lướt
    autoplaySpeed: 3000, // 3 giây lướt 1 lần
    swipe: true, // Vuốt được trên mobile
    draggable: true, // Kéo chuột được trên desktop
  };
  const getData = async () => {
    try {
      const response = await API.get("banner/get");
      setDataBanner(response.data.data);
    } catch (error) {
      console.error(
        "Lỗi khi lấy danh sách khách hàng",
        error.response || error
      );
    } finally {
      // setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {/* <Slider {...settings}>
        {dataBanner.map((image) => (
          <div key={image.bannerid}>
            <img
              src={image.bannerurl}
              alt={image.bannername}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "620px",
                // minHeight: "200px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </Slider> */}
      {/* 1. ĐẲNG CẤP HERO SECTION */}
      <section className="vnt-hero-wrapper">
        {/* Khối trang trí nền */}
        <div className="vnt-hero-bg-shape"></div>

        <div className="vnt-hero-container">
          {/* CỘT TRÁI: NỘI DUNG NARRATIVE */}
          <div className="vnt-hero-content">
            <div className="vnt-hero-badge">
              <Star size={14} fill="currentColor" />
              <span>Đối tác lữ hành tin cậy tại Việt Nam</span>
            </div>

            <h1 className="vnt-hero-title">
              TOUR DU LỊCH TRONG NƯỚC <br />
              <span className="vnt-text-highlight">
                TRỌN GÓI • CHUYÊN NGHIỆP • ĐẲNG CẤP
              </span>
            </h1>

            <p className="vnt-hero-desc">
              Giải pháp du lịch toàn diện được thiết kế riêng cho từng cá nhân,
              gia đình và doanh nghiệp. Trải nghiệm hành trình nghỉ dưỡng, gắn
              kết và tái tạo năng lượng hoàn hảo nhất.
            </p>

            <div className="vnt-hero-btns">
              <a href="/danh-sach-tour" className="vnt-btn vnt-btn-main">
                Khám phá hành trình <ArrowRight size={18} />
              </a>
              <a href="tel:0373954963" className="vnt-btn vnt-btn-outline">
                <Phone size={18} /> Gọi tư vấn ngay
              </a>
            </div>

            <div className="vnt-hero-trust">
              <div className="vnt-trust-item">
                <strong>5,000+</strong>
                <span>Khách hàng tin tưởng</span>
              </div>
              <div className="vnt-trust-divider"></div>
              <div className="vnt-trust-item">
                <strong>Nhiều năm</strong>
                <span>Kinh nghiệm lữ hành</span>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI: FORM ĐĂNG KÝ VIP */}
          <div className="vnt-hero-form-box">
            <div className="vnt-glass-card">
              <div className="vnt-card-header">
                <h3>LIÊN HỆ TƯ VẤN</h3>
                <p>Để lại thông tin, chúng tôi sẽ gọi lại ngay!</p>
              </div>

              <form
                className="vnt-form-main"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="vnt-input-group">
                  <input type="text" placeholder="Họ và tên của bạn" required />
                </div>
                <div className="vnt-input-group">
                  <input
                    type="tel"
                    placeholder="Số điện thoại liên hệ"
                    required
                  />
                </div>
                <div className="vnt-input-group">
                  <select defaultValue="">
                    <option value="" disabled>
                      Chọn loại hình dịch vụ
                    </option>
                    <option value="corporate">
                      Du lịch Doanh Nghiệp / Tour Đoàn
                    </option>
                    <option value="family">Du lịch Gia Đình / Nhóm Nhỏ</option>
                    <option value="premium">
                      Nghỉ dưỡng Cao Cấp / Khách VIP
                    </option>
                  </select>
                </div>
                <button type="submit" className="vnt-btn-submit">
                  GỬI YÊU CẦU <Send size={18} />
                </button>
              </form>

              <p className="vnt-form-footer">
                🛡️ Cam kết bảo mật thông tin khách hàng 100%
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Banner;
