import React, { useEffect } from "react";
import "./index.css";

const LuxuryTravel = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.05 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="luxury-travel">
      <section className="hero">
        <div className="reveal">
          <h1>Booking Dịch Vụ Du Lịch Trọn Gói</h1>
          <p
            style={{
              color: "#c5a059",
              fontWeight: 700,
              marginBottom: "10px",
              fontSize: "1.4rem",
            }}
          >
            Nhanh Chóng - Minh Bạch - Tối Ưu
          </p>
          <p>
            Giải pháp booking toàn diện giúp bạn đặt dịch vụ nhanh – đúng nhu
            cầu – giá tốt – không rủi ro.
          </p>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="btn btn-gold"
            >
              NHẬN TƯ VẤN NGAY
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="btn btn-outline"
            >
              XEM DỊCH VỤ
            </button>
          </div>
        </div>
      </section>

      <section className="services-highlight" id="services">
        <div
          style={{ textAlign: "center", marginBottom: "70px" }}
          className="reveal"
        >
          <span
            style={{
              color: "#c5a059",
              fontWeight: 700,
              letterSpacing: "2px",
              fontSize: "0.9rem",
              textTransform: "uppercase",
            }}
          >
            Giải pháp du lịch toàn diện
          </span>
          <h2
            className="services-title"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              marginTop: "10px",
              display: "block",
            }}
          >
            CÁC DỊCH VỤ CUNG CẤP
          </h2>
        </div>

        <div className="main-grid-premium">
          {[
            {
              icon: "🏨",
              t: "Khách sạn – Resort",
              l: [
                "Hệ thống 3–5 sao toàn quốc",
                "Villa, Suite cao cấp hướng biển",
                "Giá ưu đãi hợp đồng tốt nhất",
              ],
            },
            {
              icon: "✈️",
              t: "Vé máy bay",
              l: [
                "Săn vé Nội địa & Quốc tế nhanh",
                "Tư vấn giờ bay đẹp, tối ưu nhất",
                "Hỗ trợ đổi/hoàn & xuất VAT",
              ],
            },
            {
              icon: "🍽️",
              t: "Nhà hàng – Gala Dinner",
              l: [
                "Phòng VIP riêng tư sang trọng",
                "Tiệc đoàn, sự kiện, Gala Dinner",
                "Set menu đa dạng vùng miền",
              ],
            },
            {
              icon: "⛵",
              t: "Du thuyền – Cao cấp",
              l: [
                "Nghỉ đêm cao cấp trên vịnh",
                "Ăn tối lãng mạn trên sông",
                "Trải nghiệm riêng tư tuyệt đối",
              ],
            },
            {
              icon: "🚐",
              t: "Xe du lịch đời mới",
              l: [
                "Dòng xe 4–45 chỗ, Limousine",
                "Đưa đón sân bay đúng giờ",
                "Tài xế chuyên nghiệp, lịch sự",
              ],
            },
            {
              icon: "🎟️",
              t: "Dịch vụ bổ trợ",
              l: [
                "Vé tham quan các KDL, Show",
                "Bảo hiểm du lịch, Visa nhanh",
                "Hướng dẫn viên nhiệt tình",
              ],
            },
          ].map((s, i) => (
            <div key={i} className="service-card-premium reveal">
              <div className="icon-box">{s.icon}</div>
              <h3 style={{ color: "#0f172a" }}>{s.t}</h3>
              <ul
                style={{
                  padding: 0,
                  listStyle: "none",
                  color: "#64748b",
                  fontSize: "1rem",
                  marginTop: "auto",
                }}
              >
                {s.l.map((item, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✦</span> {item}
                  </li>
                ))}
              </ul>
              {/* Nút giả để tăng độ sang trọng */}
              <div
                style={{
                  marginTop: "25px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#c5a059",
                  letterSpacing: "1px",
                }}
              >
                XEM CHI TIẾT →
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="process-highlight">
        <div
          style={{ textAlign: "center", marginBottom: "50px" }}
          className="reveal"
        >
          <h2
            style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 800 }}
          >
            QUY TRÌNH CHUYÊN NGHIỆP
          </h2>
        </div>
        <div className="main-grid">
          {[
            { s: "B1", t: "Tiếp nhận", d: "Ghi nhận yêu cầu & ngân sách." },
            { s: "B2", t: "Tư vấn", d: "Đề xuất phương án tối ưu nhất." },
            { s: "B3", t: "Xác nhận", d: "Ký kết hợp đồng minh bạch." },
            { s: "B4", t: "Triển khai", d: "Đặt giữ chỗ & theo dõi dịch vụ." },
            { s: "B5", t: "Hỗ trợ", d: "Xử lý phát sinh 24/7." },
            { s: "B6", t: "Hậu mãi", d: "Xuất hóa đơn & chăm sóc." },
          ].map((step, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                padding: "25px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "15px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <span style={{ color: "#c5a059", fontWeight: 800 }}>
                {step.s}
              </span>
              <h4 style={{ margin: "10px 0" }}>{step.t}</h4>
              <p style={{ fontSize: "0.85rem", opacity: 0.7 }}>{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "80px 5%", textAlign: "center" }}>
        <div className="reveal">
          <h2
            style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "40px" }}
          >
            CAM KẾT DỊCH VỤ
          </h2>
          <div className="commit-grid">
            {[
              { i: "💎", t: "Minh bạch", d: "Thông tin đúng thực tế." },
              { i: "🚫", t: "Không phí ẩn", d: "Giá trọn gói niêm yết." },
              { i: "🎯", t: "Đúng dịch vụ", d: "Chất lượng chuẩn 5 sao." },
              { i: "🔒", t: "Bảo mật", d: "An toàn dữ liệu khách." },
            ].map((c, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  padding: "30px",
                  border: "1px solid #eee",
                  borderRadius: "20px",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
                  {c.i}
                </div>
                <h4 style={{ margin: "0 0 5px" }}>{c.t}</h4>
                <p style={{ fontSize: "0.8rem", color: "#64748b" }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="contact-highlight" id="contact">
        <div className="reveal">
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 500,
              marginBottom: "40px",
            }}
          >
            LIÊN HỆ BOOKING DỊCH VỤ
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            <a
              href="tel:0373954963"
              className="btn btn-gold"
              style={{ fontSize: "1.2rem" }}
            >
              📞 GỌI ĐIỆN
            </a>
            <a
              href="https://zalo.me/0373954963"
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{
                background: "#0068ff",
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              💬 ZALO TƯ VẤN
            </a>
          </div>

          <p
            style={{
              marginTop: "40px",
              fontWeight: 700,
              color: "#c5a059",
              fontSize: "1.2rem",
            }}
          >
            Booking đúng – Trải nghiệm trọn vẹn – An tâm trên mọi hành trình.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LuxuryTravel;
