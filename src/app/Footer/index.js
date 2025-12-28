import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../Components/Images/headout.png";
import Facebook from "../../Components/Images/fb-connect.png";
import Instagram from "../../Components/Images/instagram-connect.png";
import { FaFacebookF, FaTiktok, FaPhoneAlt } from "react-icons/fa"; // Import icon Home
// import Tiktok from "../../Components/Images/tiktok-connect.png";
// import Youtube from "../../Components/Images/youtube-connect.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer-modern">
      <div className="footer-main">
        {/* Left Section: Brand + Subscribe */}
        <div className="footer-left">
          <img
            src="https://cdn.myvietnamtour.vn/uploads/1.png"
            alt="Logo"
            style={{ width: "100px", height: "100px" }}
          />
          <h3>VIỆT NAM TOUR</h3>
          <p>
            Đồng hành cùng trải nghiệm du lịch cao cấp, team building doanh
            nghiệp và các sự kiện chuyên nghiệp.
          </p>
          <p>Đăng ký nhận thông tin</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Nhập email của bạn..." />
            <button>Gửi</button>
          </div>
        </div>

        {/* Right Section: Links + Social */}
        <div className="footer-right">
          <div className="footer-card">
            <h4>Dịch vụ</h4>
            <ul>
              <li>Tour Trong Nước</li>
              <li>Tour Nước Ngoài</li>
              <li>Khuyến Mãi</li>
              <li>Cẩm Nang Du Lịch</li>
            </ul>
          </div>
          <div className="footer-card">
            <h4>Thông tin</h4>
            <ul>
              <li>Tour Trong Nước</li>
              <li>Tour Nước Ngoài</li>
              <li>Khuyến Mãi</li>
              <li>Cẩm Nang Du Lịch</li>
            </ul>
          </div>
          <div className="footer-card">
            <h4>Hướng dẫn</h4>
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
          <div className="footer-card social-card">
            <h4>Kết nối với chúng tôi</h4>
            <div className="d-flex" style={{ marginTop: "15px" }}>
              <div
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/vietnamluxtour",
                    "_blank"
                  )
                }
                style={{
                  cursor: "pointer", // 👈 hover thành bàn tay
                }}
              >
                <FaFacebookF
                  style={{
                    padding: "5px",
                    backgroundColor: "#ffffff",
                    color: "#1d61ad",
                    borderRadius: "50%",
                    fontSize: "35px", // Tăng kích thước
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://www.tiktok.com/@vietnamluxtour",
                    "_blank"
                  )
                }
                style={{
                  cursor: "pointer", // hover bàn tay
                }}
              >
                <FaTiktok
                  style={{
                    marginLeft: "20px",
                    padding: "5px",
                    backgroundColor: "#ffffff",
                    color: "#1d61ad",
                    borderRadius: "50%",
                    fontSize: "35px", // Tăng kích thước
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
