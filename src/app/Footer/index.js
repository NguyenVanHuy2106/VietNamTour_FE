import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
  FaFileAlt,
} from "react-icons/fa";

import "./index.css";

const Footer = () => {
  const navigate = useNavigate();

  const openExternal = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="vnt-footer">
      <div className="vnt-footer-container">
        {/* =====================================================
            TOP
        ===================================================== */}
        <div className="vnt-footer-top">
          {/* BRAND */}
          <div className="vnt-footer-brand">
            <div className="vnt-footer-brand-head">
              <img
                src="https://cdn.myvietnamtour.vn/uploads/logovnt.png"
                alt="Việt Nam Tour"
                className="vnt-footer-logo"
              />

              <div>
                <h2>VIỆT NAM TOUR</h2>

                <span>Khám phá vẻ đẹp Việt</span>
              </div>
            </div>

            <p className="vnt-footer-brand-desc">
              Đồng hành cùng khách hàng trong những hành trình nghỉ dưỡng, tour
              đoàn doanh nghiệp, team building, MICE và sự kiện chuyên nghiệp.
            </p>

            <div className="vnt-footer-contact-list">
              <a href="tel:0373954963" className="vnt-footer-contact">
                <FaPhoneAlt />

                <div>
                  <span>Hotline tư vấn</span>
                  <strong>0373 954 963</strong>
                </div>
              </a>

              <a
                href="mailto:dulichvasukienvietnam@gmail.com"
                className="vnt-footer-contact"
              >
                <FaEnvelope />

                <div>
                  <span>Email</span>
                  <strong>dulichvasukienvietnam@gmail.com</strong>
                </div>
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div className="vnt-footer-links">
            <div className="vnt-footer-column">
              <h3>Dịch vụ</h3>

              <ul>
                <li onClick={() => navigate("/danh-sach-tour")}>
                  Tour trong nước
                </li>

                <li>Tour khách đoàn</li>
                <li>Team Building</li>
                <li>MICE & Sự kiện</li>
                <li>Dịch vụ Booking</li>
              </ul>
            </div>

            <div className="vnt-footer-column">
              <h3>Khám phá</h3>

              <ul>
                <li onClick={() => navigate("/blog")}>Cẩm nang du lịch</li>

                <li>Điểm đến nổi tiếng</li>
                <li>Hành trình khách đoàn</li>
                <li>Chương trình ưu đãi</li>
                <li>Về Việt Nam Tour</li>
              </ul>
            </div>

            <div className="vnt-footer-column">
              <h3>Hỗ trợ</h3>

              <ul>
                <li onClick={() => navigate("/dieu-khoan-su-dung")}>
                  Điều khoản sử dụng
                </li>

                <li onClick={() => navigate("/chinh-sach-bao-mat")}>
                  Chính sách bảo mật
                </li>

                <li onClick={() => navigate("/phuong-thuc-thanh-toan")}>
                  Phương thức thanh toán
                </li>

                <li onClick={() => navigate("/chinh-sach-giao-nhan")}>
                  Chính sách giao nhận
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="vnt-footer-middle">
          <div className="vnt-footer-newsletter">
            <div className="vnt-footer-newsletter-text">
              <span>CẬP NHẬT HÀNH TRÌNH MỚI</span>

              <h3>Nhận thông tin tour và ưu đãi mới nhất</h3>
            </div>

            <div className="vnt-footer-subscribe">
              <input type="email" placeholder="Nhập email của bạn" />

              <button type="button">Đăng ký</button>
            </div>
          </div>

          <div className="vnt-footer-social">
            <span>Kết nối cùng Việt Nam Tour</span>

            <div className="vnt-footer-social-icons">
              <button
                type="button"
                aria-label="Facebook Việt Nam Tour"
                onClick={() =>
                  openExternal("https://www.facebook.com/vietnamluxtour")
                }
              >
                <FaFacebookF />
              </button>

              <button
                type="button"
                aria-label="TikTok Việt Nam Tour"
                onClick={() =>
                  openExternal("https://www.tiktok.com/@vietnamluxtour")
                }
              >
                <FaTiktok />
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================
            COMPANY / LEGAL
        ===================================================== */}
        <div className="vnt-footer-company-area">
          {/* COMPANY INFO */}
          <div className="vnt-footer-company-card">
            <div className="vnt-footer-block-title">
              <FaBuilding />

              <span>THÔNG TIN DOANH NGHIỆP</span>
            </div>

            <h3>CÔNG TY TNHH THƯƠNG MẠI DU LỊCH VÀ SỰ KIỆN VIỆT NAM</h3>

            <div className="vnt-footer-company-details">
              <div className="vnt-footer-detail-row">
                <FaMapMarkerAlt />

                <span>
                  Trụ sở: 57 Đường N12, Khu nhà ở thấp tầng Ba Son, Phường Long
                  Phước, Thành phố Hồ Chí Minh
                </span>
              </div>

              <div className="vnt-footer-detail-row">
                <FaFileAlt />

                <span>
                  Giấy phép đăng ký kinh doanh (Mã số thuế):
                  <strong> 0318789883</strong>
                </span>
              </div>

              <div className="vnt-footer-detail-row">
                <FaFileAlt />

                <span>
                  Giấy phép kinh doanh lữ hành nội địa:
                  <strong> 79-0486/2025/SDL-GP LHNĐ</strong>
                </span>
              </div>
            </div>
          </div>

          {/* CONTACT / LEGAL BADGE */}
          <div className="vnt-footer-office-card">
            <div className="vnt-footer-block-title">
              <FaPhoneAlt />

              <span>LIÊN HỆ</span>
            </div>

            <div className="vnt-footer-company-details">
              <div className="vnt-footer-detail-row">
                <FaMapMarkerAlt />

                <span>
                  Trụ sở: 57 Đường N12, Khu nhà ở thấp tầng Ba Son, P. Long
                  Phước, TP. Hồ Chí Minh
                </span>
              </div>

              <div className="vnt-footer-detail-row">
                <FaMapMarkerAlt />

                <span>
                  Liên hệ: 153 Đường N5, Khu nhà ở thấp tầng Thủ Thiêm, P. Long
                  Phước, TP. Hồ Chí Minh
                </span>
              </div>

              <div className="vnt-footer-detail-row">
                <FaPhoneAlt />

                <span>
                  Hotline:
                  <strong> 076 4747 160 - 0373 954 963 - 0896 414 243</strong>
                </span>
              </div>
            </div>

            <a
              href="http://online.gov.vn/Home/WebDetails/139850"
              target="_blank"
              rel="noreferrer"
              className="vnt-footer-bct"
            >
              <img
                src="https://cdn.myvietnamtour.vn/uploads/vietnamtour.webp"
                alt="Đã thông báo Bộ Công Thương"
              />
            </a>
          </div>
        </div>

        {/* =====================================================
            NEWSLETTER + SOCIAL
        ===================================================== */}

        {/* =====================================================
            BOTTOM
        ===================================================== */}
        <div className="vnt-footer-bottom">
          <div className="vnt-footer-copyright">
            <span>
              © {new Date().getFullYear()} Vietnam Tour. All rights reserved.
            </span>
          </div>

          <div className="vnt-footer-bottom-links">
            <span onClick={() => navigate("/chinh-sach-bao-mat")}>Bảo mật</span>

            <span onClick={() => navigate("/dieu-khoan-su-dung")}>
              Điều khoản
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
