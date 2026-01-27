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
        <div>
          <div className="Company">
            CÔNG TY TNHH THƯƠNG MẠI DU LỊCH VÀ SỰ KIỆN VIỆT NAM
          </div>
          <div className="CompanyDetail">
            Trụ sở: 57 Đường N12, Khu nhà ở thấp tầng Ba Son, Phường Long Phước,
            Thành phố Hồ Chí Minh
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
          {/* <div className="CompanyDetail">
            Facebook: https://www.facebook.com/vietnamluxtour/
          </div> */}
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
            Trụ sở: 57 Đường N12, Khu nhà ở thấp tầng Ba Son, P. Long Phước, TP.
            Hồ Chí Minh
          </div>
          <div>
            Liên hệ: 153 Đường N5, khu nhà ở thấp tầng Thủ Thiêm, P. Long Phước,
            TP. Hồ Chí Minh
          </div>
          <div className="CompanyDetail">
            Hotline: 076 4747 160 - 0373 954 963 - 0896 414 243
          </div>
          {/* <div className="CompanyDetail">
            Email: dulichvasukienvietnam@gmail.com
          </div> */}
          <div style={{ marginTop: "20px" }}>
            <a
              href="http://online.gov.vn/Home/WebDetails/139850"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.myvietnamtour.vn/uploads/vietnamtour.webp"
                alt="Đã thông báo Bộ Công Thương"
                style={{
                  width: "150px", // Thu nhỏ lại một chút cho thanh thoát
                  height: "auto",
                  display: "block",
                  transition: "transform 0.3s", // Thêm hiệu ứng hover cho xịn
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotline;
