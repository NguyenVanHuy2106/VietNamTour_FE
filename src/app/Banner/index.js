import React, { useState, useEffect, useRef } from "react";
import API from "../../config/APINoToken";
import Slider from "react-slick";
import { Phone, Users, Star, ArrowRight, Send } from "lucide-react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser"; // Import thư viện

const Banner = ({ collectionsData }) => {
  const [dataBanner, setDataBanner] = useState([]);
  const [loading, setLoading] = useState(false); // State để quản lý nút gửi
  const navigate = useNavigate();
  const formRef = useRef(); // Khởi tạo ref để tham chiếu đến form

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true,
    draggable: true,
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
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // HÀM XỬ LÝ GỬI EMAIL
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = "service_opt3z9s";
    const TEMPLATE_ID = "template_05mq10g";
    const PUBLIC_KEY = "gwgx9EAfzRi9KCeKM";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        (result) => {
          // Hiện thông báo thành công
          alert(
            "Gửi yêu cầu thành công! Chúng tôi sẽ gọi lại cho bạn sớm nhất."
          );

          // SỬA TẠI ĐÂY: Dùng formRef.current thay vì e.target
          if (formRef.current) {
            formRef.current.reset();
          }
        },
        (error) => {
          alert("Gửi thất bại, vui lòng kiểm tra lại thông tin hoặc kết nối.");
          console.log("Chi tiết lỗi:", error.text);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <section className="vnt-hero-wrapper">
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

              {/* Gán ref và hàm sendEmail vào đây */}
              <form
                className="vnt-form-main"
                ref={formRef}
                onSubmit={sendEmail}
              >
                <div className="vnt-input-group">
                  {/* Thêm name="user_name" để EmailJS bắt được dữ liệu */}
                  <input
                    name="user_name"
                    type="text"
                    placeholder="Họ và tên của bạn"
                    required
                  />
                </div>
                <div className="vnt-input-group">
                  {/* Thêm name="user_phone" */}
                  <input
                    name="user_phone"
                    type="tel"
                    placeholder="Số điện thoại liên hệ"
                    required
                  />
                </div>
                <div className="vnt-input-group">
                  {/* Thêm name="user_service" */}
                  <select name="user_service" defaultValue="" required>
                    <option value="" disabled>
                      Chọn loại hình dịch vụ
                    </option>
                    <option value="Du lịch Doanh Nghiệp">
                      Du lịch Doanh Nghiệp / Tour Đoàn
                    </option>
                    <option value="Du lịch Gia Đình">
                      Du lịch Gia Đình / Nhóm Nhỏ
                    </option>
                    <option value="Nghỉ dưỡng Cao Cấp">
                      Nghỉ dưỡng Cao Cấp / Khách VIP
                    </option>
                  </select>
                </div>
                {/* Vô hiệu hóa nút khi đang gửi để tránh khách bấm nhiều lần */}
                <button
                  type="submit"
                  className="vnt-btn-submit"
                  disabled={loading}
                >
                  {loading ? "ĐANG GỬI..." : "GỬI YÊU CẦU"} <Send size={18} />
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
