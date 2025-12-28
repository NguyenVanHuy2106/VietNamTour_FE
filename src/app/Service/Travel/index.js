import React, { useState, useEffect, useRef } from "react";
import {
  Users,
  Home,
  Building2,
  Phone,
  MessageSquare,
  ChevronDown,
  MapPin,
  Star,
  ShieldCheck,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Clock,
} from "lucide-react";
import "./index.css";

const Travel = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const scrollRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );

    scrollRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="premium-tour-page">
      {/* 1. ĐẲNG CẤP HERO SECTION */}
      <section className="lp-hero">
        <div className="lp-container">
          {/* CỘT TRÁI: THÔNG ĐIỆP CHỐT ĐƠN */}
          <div className="lp-content">
            <div className="lp-promo-badge">
              <span className="lp-fire-icon">🔥</span>
              Ưu đãi giới hạn: Giảm 20% cho nhóm khách đoàn
            </div>

            <h1 className="lp-title">
              DU LỊCH TRONG NƯỚC
              <span className="lp-highlight">
                TRỌN GÓI • CHUYÊN NGHIỆP • ĐẲNG CẤP
              </span>
            </h1>

            <p className="lp-subtext">
              Hệ thống Tour thiết kế riêng giúp bạn tận hưởng trọn vẹn từng
              khoảnh khắc. Không lo về giá - Không lo lịch trình - Chỉ việc xách
              vali và đi.
            </p>

            <ul className="lp-features">
              <li>
                <CheckCircle size={18} className="lp-icon" /> Cam kết giá tốt
                nhất thị trường
              </li>
              <li>
                <CheckCircle size={18} className="lp-icon" /> Khách sạn 4-5 sao
                tiêu chuẩn quốc tế
              </li>
              <li>
                <CheckCircle size={18} className="lp-icon" /> Bảo hiểm du lịch
                lên đến 100 triệu
              </li>
            </ul>

            <div className="lp-cta-group">
              <a
                href="https://zalo.me/0373954963"
                target="_blank"
                rel="noopener noreferrer"
                className="lp-btn-primary"
              >
                NHẬN BÁO GIÁ QUA ZALO <ArrowRight size={20} />
              </a>
              <div className="lp-timer">
                <Clock size={16} />
                <span>Tư vấn ngay trong 5 phút</span>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI: HÌNH ẢNH DẠNG GRID HIỆN ĐẠI */}
          <div className="lp-visual">
            <div className="lp-image-stack">
              <div className="lp-main-img-box">
                <img
                  src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
                  alt="Travel"
                />
              </div>
              {/* Thẻ đánh giá nổi */}
              <div className="lp-floating-review">
                <div className="lp-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#ffc107" color="#ffc107" />
                  ))}
                </div>
                <p>"Dịch vụ tuyệt vời, tour Sapa vừa rồi rất hài lòng!"</p>
                <small>— Chị Minh Anh, Hà Nội</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BENTO GRID - GIẢI PHÁP TOÀN DIỆN */}
      <section className="bento-services container">
        <h2
          className="main-title reveal"
          ref={(el) => (scrollRef.current[0] = el)}
        >
          GIẢI PHÁP DU LỊCH TOÀN DIỆN
        </h2>
        <div className="bento-grid">
          <div
            className="bento-item big reveal"
            ref={(el) => (scrollRef.current[1] = el)}
          >
            <Building2 size={48} className="icon-blue" />
            <h3>Dành cho Doanh Nghiệp</h3>
            <p>
              Tour khen thưởng, hội nghị MICE, sự kiện đẳng cấp dành cho đối tác
              VIP. Đảm bảo hình ảnh và trải nghiệm thương hiệu tối ưu.
            </p>
            <span className="tag-new">Chuyên nghiệp nhất</span>
          </div>
          <div
            className="bento-item reveal"
            ref={(el) => (scrollRef.current[2] = el)}
          >
            <Users size={32} />
            <h3>Tour Đoàn Thể</h3>
            <p>
              Team Building gắn kết, lịch trình khoa học cho cơ quan nhà nước, y
              tế.
            </p>
          </div>
          <div
            className="bento-item reveal"
            ref={(el) => (scrollRef.current[3] = el)}
          >
            <Home size={32} />
            <h3>Gia Đình Nhỏ</h3>
            <p>
              An toàn, riêng tư, lịch trình tinh tế cho người già và trẻ em.
            </p>
          </div>
          <div
            className="bento-item long reveal"
            ref={(el) => (scrollRef.current[4] = el)}
          >
            <div className="long-content">
              <h3>Vì sao chọn Việt Nam Tour?</h3>
              <div className="features">
                <span>
                  <ShieldCheck size={18} /> Chi phí minh bạch
                </span>
                <span>
                  <Zap size={18} /> Hỗ trợ 24/7
                </span>
                <span>
                  <Globe size={18} /> Đối tác 5 sao
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ĐIỂM ĐẾN NỔI BẬT - PARALLAX CARDS */}
      <section className="destinations-v2">
        <div className="container">
          <h2 className="main-title">ĐA DẠNG ĐIỂM ĐẾN</h2>
          <div className="dest-scroller">
            {["Biển Đảo", "Núi Rừng", "Văn Hóa"].map((name, i) => (
              <div key={i} className="dest-card-v2">
                <div
                  className="dest-img"
                  style={{
                    backgroundImage: `url(https://picsum.photos/800/1000?sig=${i})`,
                  }}
                ></div>
                <div className="dest-overlay">
                  <h4>{name}</h4>
                  <p>Khám phá ngay →</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ - CLEAN DESIGN */}
      <section className="faq-v2 container">
        <h2 className="main-title">GIẢI ĐÁP THẮC MẮC</h2>
        <div className="faq-wrapper">
          {[
            {
              q: "Có thiết kế tour theo yêu cầu không?",
              a:
                "Chúng tôi chuyên may đo lịch trình riêng biệt theo ngân sách và mong muốn của khách hàng doanh nghiệp và gia đình.",
            },
            {
              q: "Thủ tục thanh toán và hợp đồng như thế nào?",
              a:
                "Quy trình chuyên nghiệp, hỗ trợ đầy đủ hóa đơn VAT, hợp đồng pháp lý nhanh chóng.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`faq-item-v2 ${activeFaq === i ? "active" : ""}`}
              onClick={() => setActiveFaq(activeFaq === i ? null : i)}
            >
              <div className="faq-q">
                {item.q} <ChevronDown className="arrow" />
              </div>
              <div className="faq-a">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CONTACT & FOOTER */}
      <footer className="footer-v2">
        <div className="container">
          <div className="footer-content">
            <h2>BẮT ĐẦU CHUYẾN ĐI CỦA BẠN</h2>
            <p>Liên hệ để nhận tư vấn lịch trình miễn phí trong 5 phút</p>
            <div className="footer-btns">
              <a href="tel:0373954963" className="btn-call-v2">
                GỌI TƯ VẤN NGAY
              </a>
              <a href="https://zalo.me/0373954963" className="btn-zalo-v2">
                CHAT ZALO NGAY
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Travel;
