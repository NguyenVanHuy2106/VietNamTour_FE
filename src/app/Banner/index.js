import React, { useState, useRef } from "react";
import { Phone, Star, ArrowRight, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

import "./index.css";

const Banner = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const SERVICE_ID = "service_opt3z9s";
    const TEMPLATE_ID = "template_05mq10g";
    const PUBLIC_KEY = "gwgx9EAfzRi9KCeKM";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        alert("Gửi yêu cầu thành công! Chúng tôi sẽ gọi lại cho bạn sớm nhất.");

        if (formRef.current) {
          formRef.current.reset();
        }
      })
      .catch((error) => {
        console.error("Chi tiết lỗi:", error);

        alert("Gửi thất bại, vui lòng kiểm tra lại thông tin hoặc kết nối.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="vnt-hero-wrapper">
      {/* BACKGROUND */}
      <div className="vnt-hero-bg-shape" />

      <div className="vnt-hero-container">
        {/* =========================
            CỘT TRÁI - NỘI DUNG
        ========================= */}
        <div className="vnt-hero-content">
          <div className="vnt-hero-badge">
            <Star size={14} fill="currentColor" />
            <span>Đối tác lữ hành tin cậy tại Việt Nam</span>
          </div>

          <h1 className="vnt-hero-title">
            TOUR DU LỊCH TRONG NƯỚC
            <span className="vnt-text-highlight">
              TRỌN GÓI • CHUYÊN NGHIỆP • ĐẲNG CẤP
            </span>
          </h1>

          <p className="vnt-hero-desc">
            Giải pháp du lịch toàn diện được thiết kế riêng cho cá nhân, gia
            đình và doanh nghiệp. Tận hưởng những hành trình nghỉ dưỡng, gắn kết
            và tái tạo năng lượng trọn vẹn.
          </p>

          {/* CTA */}
          <div className="vnt-hero-btns">
            <a href="/danh-sach-tour" className="vnt-btn vnt-btn-main">
              <span>Khám phá hành trình</span>
              <ArrowRight size={18} />
            </a>

            <a href="tel:0373954963" className="vnt-btn vnt-btn-outline">
              <Phone size={18} />
              <span>Gọi tư vấn ngay</span>
            </a>
          </div>

          {/* TRUST */}
          <div className="vnt-hero-trust">
            <div className="vnt-trust-item">
              <strong>5,000+</strong>
              <span>Khách hàng tin tưởng</span>
            </div>

            <div className="vnt-trust-divider" />

            <div className="vnt-trust-item">
              <strong>Nhiều năm</strong>
              <span>Kinh nghiệm lữ hành</span>
            </div>
          </div>
        </div>

        {/* =========================
            CỘT PHẢI - FORM
        ========================= */}
        <div className="vnt-hero-form-box">
          <div className="vnt-glass-card">
            <div className="vnt-card-header">
              <h2>LIÊN HỆ TƯ VẤN</h2>

              <p>Để lại thông tin, Việt Nam Tour sẽ liên hệ tư vấn cho bạn.</p>
            </div>

            <form className="vnt-form-main" ref={formRef} onSubmit={sendEmail}>
              <div className="vnt-input-group">
                <input
                  name="user_name"
                  type="text"
                  placeholder="Họ và tên của bạn"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="vnt-input-group">
                <input
                  name="user_phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="Số điện thoại liên hệ"
                  autoComplete="tel"
                  required
                />
              </div>

              <div className="vnt-input-group">
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

              <button
                type="submit"
                className="vnt-btn-submit"
                disabled={loading}
              >
                <span>{loading ? "ĐANG GỬI..." : "GỬI YÊU CẦU"}</span>

                {!loading && <Send size={18} />}
              </button>
            </form>

            <p className="vnt-form-footer">
              🛡️ Cam kết bảo mật thông tin khách hàng
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
