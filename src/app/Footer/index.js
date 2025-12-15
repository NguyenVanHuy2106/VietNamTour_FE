import React from "react";
import "./index.css";
import Logo from "../../Components/Images/headout.png";
import Facebook from "../../Components/Images/fb-connect.png";
import Instagram from "../../Components/Images/instagram-connect.png";
import Tiktok from "../../Components/Images/instagram-connect.png";
import Youtube from "../../Components/Images/instagram-connect.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Quick Links */}
        <div className="footer-section links">
          <h4>Dịch vụ</h4>
          <ul>
            <li>Tour Trong Nước</li>
            <li>Tour Nước Ngoài</li>
            <li>Khuyến Mãi</li>
            <li>Cẩm Nang Du Lịch</li>
          </ul>
        </div>
        <div className="footer-section links">
          <h4>Thông tin</h4>
          <ul>
            <li>Tour Trong Nước</li>
            <li>Tour Nước Ngoài</li>
            <li>Khuyến Mãi</li>
            <li>Cẩm Nang Du Lịch</li>
          </ul>
        </div>

        {/* Policies */}
        <div className="footer-section policies">
          <h4>Hướng dẫn</h4>
          <ul>
            <li onClick={() => navigate("/dieu-khoan-su-dung")}>
              Điều khoản sử dụng
            </li>
            <li onClick={() => navigate("/chinh-sach-bao-mat")}>
              Chính sách bảo mật
            </li>
            <li onClick={() => navigate("/phuong-thuc-thanh-toan")}>
              Phương thức thanh toán{" "}
            </li>
            <li onClick={() => navigate("/chinh-sach-giao-nhan")}>
              Chính sách giao nhận
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="footer-section">
          <h4>Đăng ký nhận thông tin</h4>
          <div className="subscribe-wrapper">
            <input
              type="email"
              placeholder="Email..."
              className="form-control subscribe-input"
            />
            <button type="button" className="subscribe-button">
              Gửi
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
    </footer>
  );
};

export default Footer;
