import React, { useEffect } from "react";
import "./index.css";

const CarRentalPro = () => {
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

  const scrollToContact = () =>
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });

  return (
    <div className="rental-wrapper">
      {/* 1. HERO & SEARCH */}
      <section className="hero-section">
        <div className="reveal">
          <h1 style={{ fontSize: "4.5rem", fontWeight: 800 }}>
            DỊCH VỤ THUÊ XE <br />
            <span style={{ color: "var(--accent)" }}>4 - 45 CHỖ</span>
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: "800px",
              margin: "20px auto",
            }}
          >
            Hành trình an toàn cùng dàn xe đời mới 2024 - 2025. Phục vụ du lịch,
            hành hương, đưa đón sân bay và sự kiện MICE chuyên nghiệp.
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
              onClick={scrollToContact}
              style={{
                padding: "20px 40px",
                borderRadius: "50px",
                border: "none",
                background: "var(--accent)",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              ĐẶT XE GỌI NGAY
            </button>
            <button
              onClick={() =>
                document.getElementById("price-list").scrollIntoView()
              }
              style={{
                padding: "20px 40px",
                borderRadius: "50px",
                border: "1px solid white",
                background: "transparent",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              XEM BẢNG GIÁ
            </button>
          </div>
        </div>
      </section>

      {/* 2. THÔNG TIN ĐỘI XE - NỔI BẬT KHỐI */}
      <section style={{ padding: "100px 8%" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "60px",
          }}
          className="reveal"
        >
          Dòng Xe Đang Phục Vụ
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              t: "Xe 4 - 7 Chỗ",
              d: "Vios, Accent, Veloz, Fortuner",
              p: "Phù hợp gia đình, gặp đối tác",
              img:
                "https://xedatphuongnam.vn/upload/product/z2577450721381015fb9aefb6ac0ab195f0a7635917848-3440.jpg",
            },
            {
              t: "Xe 16 Chỗ",
              d: "Ford Transit, Hyundai Solati",
              p: "Ghế da cao cấp, wifi, máy lạnh êm",
              img: "https://alolimo.com/wp-content/uploads/2020/11/2-2.jpg",
            },
            {
              t: "Xe 29 - 45 Chỗ",
              d: "Thaco Town, Universe đời mới",
              p: "Hầm xe rộng, ghế ngả, karaoke giải trí",
              img:
                "https://product.hstatic.net/200000504989/product/cho_thue_xe_45_cho_kia_grandbird-6_c69b77d54ea446768eb7b465b3907146_master.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                border: "1px solid #eee",
              }}
            >
              <img
                src={item.img}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                alt={item.t}
              />
              <div style={{ padding: "25px" }}>
                <h3>{item.t}</h3>
                <p
                  style={{
                    color: "var(--blue)",
                    fontWeight: "bold",
                    margin: "10px 0",
                  }}
                >
                  {item.d}
                </p>
                <p style={{ fontSize: "0.9rem", color: "#64748b" }}>{item.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BẢNG GIÁ THAM KHẢO */}
      <section id="price-list" className="price-table-container">
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "50px",
          }}
          className="reveal"
        >
          Bảng Giá Tham Khảo 2026
        </h2>
        <div className="reveal">
          <table className="price-table">
            <thead>
              <tr>
                <th>Loại Xe</th>
                <th>Nội Thành (8h - 100km)</th>
                <th>Sân Bay (Đón/Tiễn)</th>
                <th>Thêm Giờ / km</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Xe 4 chỗ</td>
                <td>1.200.000đ</td>
                <td>400.000đ</td>
                <td>100.000đ</td>
              </tr>
              <tr>
                <td>Xe 7 chỗ</td>
                <td>1.400.000đ</td>
                <td>500.000đ</td>
                <td>120.000đ</td>
              </tr>
              <tr>
                <td>Xe 16 chỗ</td>
                <td>1.800.000đ</td>
                <td>800.000đ</td>
                <td>150.000đ</td>
              </tr>
              <tr>
                <td>Xe 29 chỗ</td>
                <td>3.000.000đ</td>
                <td>1.500.000đ</td>
                <td>200.000đ</td>
              </tr>
              <tr>
                <td>Xe 45 chỗ</td>
                <td>4.500.000đ</td>
                <td>2.500.000đ</td>
                <td>300.000đ</td>
              </tr>
            </tbody>
          </table>
          <p
            style={{
              marginTop: "20px",
              fontSize: "0.9rem",
              fontStyle: "italic",
              color: "#64748b",
            }}
          >
            * Giá mang tính tham khảo, tùy thuộc vào thời điểm và giá nhiên
            liệu.
          </p>
        </div>
      </section>

      {/* 4. TẠI SAO CHỌN CHÚNG TÔI */}
      <section className="feature-container">
        {[
          {
            i: "🛡️",
            t: "An Toàn Tuyệt Đối",
            d:
              "Hệ thống xe được bảo trì định kỳ nghiêm ngặt, trang bị đầy đủ bảo hiểm hành khách trên mỗi chuyến đi.",
            s: "01",
          },
          {
            i: "👨‍✈️",
            t: "Tài Xế Chuyên Nghiệp",
            d:
              "Đội ngũ bác tài lịch sự, rành đường, đúng giờ và luôn sẵn lòng hỗ trợ khuân vác hành lý tận tâm.",
            s: "02",
          },
          {
            i: "💰",
            t: "Giá Cả Minh Bạch",
            d:
              "Cam kết báo giá trọn gói, tuyệt đối không phát sinh chi phí ẩn hay phụ phí ngoài hợp đồng.",
            s: "03",
          },
          {
            i: "✨",
            t: "Dàn Xe Đời Mới",
            d:
              "Sở hữu các dòng xe 2024 - 2025 sạch sẽ, không mùi, đầy đủ tiện nghi giải trí và wifi tốc độ cao.",
            s: "04",
          },
        ].map((f, i) => (
          <div key={i} className="feature-card-modern reveal" data-step={f.s}>
            <div className="feature-icon-wrapper">{f.i}</div>
            <div className="feature-text">
              <h4>{f.t}</h4>
              <p>{f.d}</p>
            </div>
          </div>
        ))}
      </section>

      {/* 5. FAQ - CÂU HỎI THƯỜNG GẶP */}
      <section className="faq-section reveal">
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          Giải Đáp Thắc Mắc
        </h2>
        {[
          {
            q: "Giá thuê xe đã bao gồm phí cầu đường, cao tốc chưa?",
            a:
              "Thông thường báo giá của chúng tôi đã bao gồm xăng dầu, tài xế và phí cầu đường.",
          },
          {
            q: "Tôi cần đặt trước bao lâu để có xe?",
            a:
              "Để đảm bảo dịch vụ tốt nhất, bạn nên đặt trước 2-3 ngày, hoặc 1-2 tuần vào mùa cao điểm.",
          },
        ].map((item, i) => (
          <div key={i} className="faq-item">
            <h4 style={{ color: "var(--blue)" }}>Q: {item.q}</h4>
            <p style={{ marginTop: "10px", fontSize: "0.9rem" }}>A: {item.a}</p>
          </div>
        ))}
      </section>

      {/* 6. LIÊN HỆ & NÚT BẤM */}
      <footer
        id="contact"
        style={{
          padding: "100px 5%",
          background: "var(--navy)",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="reveal">
          <h2 style={{ fontSize: "3rem" }}>Sẵn Sàng Cho Hành Trình Của Bạn?</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "50px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:0373954963"
              style={{
                background: "var(--accent)",
                color: "var(--navy)",
                padding: "20px 40px",
                borderRadius: "15px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              📞 GỌI ĐIỆN NGAY
            </a>
            <a
              href="https://zalo.me/0373954963"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#0068ff",
                color: "white",
                padding: "20px 40px",
                borderRadius: "15px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              💬 TƯ VẤN QUA ZALO
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CarRentalPro;
