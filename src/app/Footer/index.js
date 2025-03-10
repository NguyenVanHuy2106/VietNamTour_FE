import React from "react";
import "./index.css";
import Logo from "../../Components/Images/headout.png";
import Facebook from "../../Components/Images/fb-connect.png";
import Instagram from "../../Components/Images/instagram-connect.png";
import Tiktok from "../../Components/Images/instagram-connect.png";
import Youtube from "../../Components/Images/instagram-connect.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo & Intro */}
        <div className="footer-section about">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/LOGOWEB.png?alt=media&token=c2420a58-23d8-42ab-b9a5-c2d54a9c6c32"
            alt="Logo"
            style={{ width: "240px", height: "80px" }}
          />
          <p>
            Khám phá thế giới cùng chúng tôi - nơi mọi hành trình đều trở nên
            đáng nhớ!
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h4>Khám Phá</h4>
          <ul>
            <li>Tour Trong Nước</li>
            <li>Tour Nước Ngoài</li>
            <li>Khuyến Mãi</li>
            <li>Cẩm Nang Du Lịch</li>
          </ul>
        </div>

        {/* Policies */}
        <div className="footer-section policies">
          <h4>Chính Sách</h4>
          <ul>
            <li>Điều khoản sử dụng</li>
            <li>Chính sách bảo mật</li>
            <li>Hướng dẫn đặt tour</li>
            <li>Hỗ trợ khách hàng</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="footer-section contact">
          <h4>Liên hệ</h4>
          <p>Email: dulichvasukienvietnam@gmail.com</p>
          <p>Hotline: 0764.747.160</p>
          <div className="social-icons">
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={Tiktok} alt="TikTok" />
            <img src={Youtube} alt="YouTube" />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2025 Travel Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
