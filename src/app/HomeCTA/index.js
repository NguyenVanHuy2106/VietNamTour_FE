import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Phone, Sparkles, CheckCircle2 } from "lucide-react";

import "./index.css";

const HomeCTA = () => {
  const navigate = useNavigate();

  const benefits = [
    "Thiết kế hành trình theo nhu cầu",
    "Tư vấn nhanh, minh bạch, rõ ràng",
    "Đồng hành xuyên suốt chương trình",
  ];

  return (
    <section className="home-cta-section">
      {/* BACKGROUND */}
      <div className="home-cta-bg" />
      <div className="home-cta-overlay" />

      {/* DECOR */}
      <div className="home-cta-glow home-cta-glow-one" />
      <div className="home-cta-glow home-cta-glow-two" />

      <div className="home-cta-inner">
        {/* LEFT */}
        <div className="home-cta-left">
          <div className="home-cta-eyebrow">
            <Sparkles size={14} />
            <span>BẮT ĐẦU MỘT HÀNH TRÌNH ĐÁNG NHỚ</span>
          </div>

          <h2 className="home-cta-title">
            Đi đâu không quan trọng bằng
            <span> đi cùng một kế hoạch thật tốt.</span>
          </h2>

          <p className="home-cta-desc">
            Từ tour nghỉ dưỡng, khách đoàn doanh nghiệp đến MICE và sự kiện,
            Việt Nam Tour đồng hành cùng bạn từ ý tưởng đầu tiên đến khi hành
            trình kết thúc trọn vẹn.
          </p>

          <div className="home-cta-actions">
            <button
              type="button"
              className="home-cta-btn home-cta-btn-primary"
              onClick={() => navigate("/danh-sach-tour")}
            >
              Khám phá hành trình
              <ArrowRight size={17} />
            </button>

            <a
              href="tel:0373954963"
              className="home-cta-btn home-cta-btn-secondary"
            >
              <Phone size={17} />
              Gọi tư vấn ngay
            </a>
          </div>

          <div className="home-cta-mini-trust">
            <span>5,000+ khách hàng</span>
            <span className="home-cta-dot">•</span>
            <span>100+ đối tác</span>
            <span className="home-cta-dot">•</span>
            <span>Tour thiết kế riêng</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="home-cta-right">
          <div className="home-cta-floating-card">
            <span className="home-cta-card-label">VIỆT NAM TOUR</span>

            <h3>Mỗi chuyến đi đều có thể trở thành một dấu ấn đáng nhớ.</h3>

            <div className="home-cta-benefits">
              {benefits.map((item, index) => (
                <div className="home-cta-benefit" key={index}>
                  <CheckCircle2 size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="home-cta-card-footer">
              <div>
                <strong>5,000+</strong>
                <span>Khách hàng tin tưởng</span>
              </div>

              <div className="home-cta-divider" />

              <div>
                <strong>100+</strong>
                <span>Đối tác tiêu biểu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
