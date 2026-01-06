import React, { useEffect } from "react";
import "./index.css";

const MiceLandingPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Hàm xử lý cuộn trang khi bấm nút Hero
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const steps = [
    {
      n: "01",
      t: "Tiếp nhận",
      d: "Phân tích mục tiêu và văn hóa doanh nghiệp.",
    },
    {
      n: "02",
      t: "Chiến lược",
      d: "Xây dựng Concept MICE độc bản gắn liền thương hiệu.",
    },
    {
      n: "03",
      t: "Kế hoạch",
      d: "Lập Timeline chi tiết và báo giá minh bạch.",
    },
    {
      n: "04",
      t: "Triển khai",
      d: "Setup kỹ thuật, đối tác và nhân sự chuyên môn.",
    },
    {
      n: "05",
      t: "Vận hành",
      d: "Giám sát trải nghiệm thực tế xuyên suốt sự kiện.",
    },
    {
      n: "06",
      t: "Tổng kết",
      d: "Báo cáo hiệu quả và đánh giá mức độ hài lòng.",
    },
  ];

  return (
    <div className="mice-body">
      {/* SECTION 1: HERO FULL WIDTH */}
      <section className="hero-full">
        <div className="hero-overlay"></div>
        <div className="hero-content reveal">
          <p
            style={{
              letterSpacing: "4px",
              color: "#60a5fa",
              fontWeight: "bold",
            }}
          >
            PREMIUM CORPORATE TRAVEL
          </p>
          <h1>Du lịch MICE - Nâng tầm thương hiệu</h1>
          <p style={{ maxWidth: "600px", fontSize: "1.2rem", opacity: 0.9 }}>
            Giải pháp tổ chức sự kiện và hành trình khen thưởng trọn gói, chuyên
            nghiệp, tối ưu chi phí cho mọi doanh nghiệp.
          </p>
          <button
            onClick={scrollToContact}
            style={{
              marginTop: "40px",
              padding: "20px 50px",
              borderRadius: "50px",
              border: "none",
              background: "#2563eb",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1.1rem",
            }}
          >
            NHẬN TƯ VẤN NGAY
          </button>
        </div>
      </section>

      {/* SECTION 2: QUY TRÌNH SO LE (Giữ nguyên các bước trên) */}
      <section className="process-section">
        <h2
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: "80px",
          }}
          className="reveal"
        >
          Quy trình 6 bước chuẩn
        </h2>
        <div className="process-grid">
          {steps.map((step, i) => (
            <div key={i} className="process-card reveal">
              <div className="step-num">{step.n}</div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>
                {step.t}
              </h3>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                }}
              >
                {step.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: ĐIỂM ĐẾN (Giữ nguyên phần này) */}
      <section style={{ padding: "100px 0" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: "60px",
          }}
          className="reveal"
        >
          Điểm đến tiêu biểu
        </h2>
        <div className="dest-grid">
          {[
            {
              n: "Đà Nẵng - Hội An",
              img: "https://statics.vinpearl.com/%E1%BA%A2nh%2014_0.jpg",
            },
            {
              n: "Phú Quốc Đảo Ngọc",
              img: "https://cdn3.ivivu.com/2022/08/honthom.jpg",
            },
            {
              n: "Nha Trang Biển Gọi",
              img:
                "https://bomanhatrang.com/wp-content/uploads/2023/03/dia-diem-du-lich-nha-trang-thumbnail-1.jpg",
            },
          ].map((dest, i) => (
            <div key={i} className="dest-item reveal">
              <img src={dest.img} alt={dest.n} />
              <div className="dest-text">
                <h3 style={{ fontSize: "2rem" }}>{dest.n}</h3>
                <p>Trung tâm hội nghị đẳng cấp kết hợp nghỉ dưỡng cao cấp.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA - PHẦN KẾT NỐI DOANH NGHIỆP */}
      <footer
        id="contact-section"
        style={{
          padding: "120px 5%",
          background: "#0f172a",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="reveal">
          <h2 style={{ fontSize: "3.5rem", marginBottom: "20px" }}>
            Sẵn sàng kết nối doanh nghiệp?
          </h2>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "1.2rem",
              marginBottom: "50px",
            }}
          >
            Hãy để chuyên gia MICE đồng hành cùng bạn tạo nên những sự kiện bùng
            nổ.
          </p>

          <div className="contact-btns-wrapper">
            {/* Nút Gọi Điện */}
            <a href="tel:0373954963" className="btn-contact btn-phone">
              <span>📞 Gọi Điện Tư Vấn</span>
            </a>

            {/* Nút Zalo */}
            <a
              href="https://zalo.me/0373954963"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contact btn-zalo"
            >
              <span>💬 Nhắn Tin Zalo</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MiceLandingPage;
