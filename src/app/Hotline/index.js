import React from "react";
import { Nav } from "react-bootstrap";
import { FaFacebookF, FaTiktok, FaPhoneAlt } from "react-icons/fa"; // Import icon Home
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Import file CSS

const Hotline = () => {
  return (
    <div className="HotlineContainer d-flex justify-content-center responsive-hotline">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="d-flex align-items-center">
          <img
            src="https://images.vietnamluxtour.com/uploads/1.png"
            alt="Logo"
            style={{ width: "100px", height: "100px" }}
          />
          <div
            style={{
              width: "60%",
              textAlign: "left",
              marginLeft: "20px",
            }}
          >
            <div className="contentCompany">
              Khám phá thế giới cùng chúng tôi - nơi mọi hành trình đều trở nên
              đáng nhớ!
            </div>
          </div>
        </div>
        <div>
          <div className="Company">
            CÔNG TY TNHH THƯƠNG MẠI DU LỊCH VÀ SỰ KIỆN VIỆT NAM
          </div>
          <div className="CompanyDetail">
            57 Đường N12, Khu nhà ở thấp tầng Ba Son, KP. Phước Lai, P. Trường
            Thạnh, TP. Thủ Đức, TP. Hồ Chí Minh
          </div>
          <div className="CompanyDetail">
            Giấy phép đăng ký kinh doanh (Mã số thuế): 0318789883
          </div>
          <div className="CompanyDetail">
            Giấy phép kinh doanh lữ hành nội địa: 79-0486/2025/SDL-GP LHNĐ
          </div>
          <div className="CompanyDetail">
            Email: dulichvasukienvietnam@gmail.com
          </div>
          <div className="CompanyDetail">
            Facebook: https://www.facebook.com/vietnamluxtour/
          </div>
        </div>
      </div>
      <div
        style={{
          width: "40%",
          textAlign: "left",
          paddingLeft: "20px",
        }}
      >
        <div>
          <div className="Contact">LIÊN HỆ</div>
          <div>
            Trụ sở: 57 Đường N12, Khu đô thị Đông Tăng Long, P. Trường Thạnh,
            TP. Thủ Đức, TP. Hồ Chí Minh
          </div>
          <div className="CompanyDetail">
            Hotline: 076 4747 160 - 0373 954 963 - 0896 414 243
          </div>
          <div className="CompanyDetail">
            Email: dulichvasukienvietnam@gmail.com
          </div>
        </div>
        <div>
          <div className="Contact" style={{ marginTop: "20px" }}>
            KẾT NỐI VỚI CHÚNG TÔI
          </div>
          <div className="d-flex" style={{ marginTop: "15px" }}>
            <div>
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
            <div>
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
          <div>
            <div className="footer-bottom">
              <p>© 2025 Việt Nam Tour. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotline;
