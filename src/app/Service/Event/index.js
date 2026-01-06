import React from "react";
import "./index.css";

const EventLanding = () => {
  return (
    <main className="event-page">
      {/* HERO SECTION - FULL WIDTH */}
      <section className="hero-full">
        <div className="hero-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80"
          alt="Hero Background"
          className="hero-bg"
        />
        <div className="hero-content">
          <span className="eyebrow-light">VIETNAM TOUR EVENT</span>
          <h1>
            Tổ chức <span className="text-accent">Sự kiện doanh nghiệp</span>
            <br />
            Chuyên nghiệp & Đẳng cấp
          </h1>
          <p>
            Chạm tới đỉnh cao của sự chuyên nghiệp cùng đội ngũ tư vấn tận tâm.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn-solid">
              Nhận tư vấn ngay
            </a>
            <a href="#services" className="btn-white">
              Tìm hiểu thêm
            </a>
          </div>
        </div>

        {/* Floating Badge */}
        <div className="floating-badge">
          <div className="badge-icon">⭐</div>
          <div>
            <strong>100+</strong>
            <p>Sự kiện / năm</p>
          </div>
        </div>
      </section>

      {/* DỊCH VỤ CỐT LÕI - TONE SÁNG */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-title">
            <h2>Dịch vụ cốt lõi</h2>
            <div className="title-line"></div>
          </div>

          <div className="services-grid-modern">
            {[
              {
                title: "Hội nghị - Hội thảo",
                icon: "🤝",
                img:
                  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=500&q=80",
              },
              {
                title: "Gala Dinner",
                icon: "🥂",
                img:
                  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=500&q=80",
              },
              {
                title: "Lễ khai trương",
                icon: "✂️",
                img:
                  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=500&q=80",
              },
              {
                title: "Team Building",
                icon: "🏆",
                img:
                  "https://images.unsplash.com/photo-1526676023601-d0742c17fb3a?auto=format&fit=crop&w=500&q=80",
              },
            ].map((item, i) => (
              <div className="service-card-modern" key={i}>
                <div className="card-img">
                  <img src={item.img} alt={item.title} />
                  <div className="card-icon-float">{item.icon}</div>
                </div>
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p>
                    Giải pháp trọn gói, tối ưu ngân sách và trải nghiệm người
                    tham gia.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KHOẢNH KHẮC SỰ KIỆN */}
      <section className="gallery-section">
        <div className="container">
          <div className="section-title">
            <h2>Khoảnh khắc sự kiện</h2>
          </div>
          <div className="gallery-masonry">
            {[
              "1501281668745-f7f57925c3b4",
              "1540575861501-7cf05a4b125a",
              "1531058020387-3be344556be6",
              "1492684223066-81342ee5ff30",
              "1505236858219-8359eb29e329",
              "1514525253361-b83f859b73c0",
            ].map((id, i) => (
              <div className="gallery-box" key={i}>
                <img
                  src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`}
                  alt="Moment"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-light" id="contact">
        <div className="cta-container">
          <h2>Bắt đầu sự kiện của bạn ngay hôm nay</h2>
          <p>
            Liên hệ hotline: <strong>0373 954 963</strong> để được tư vấn miễn
            phí.
          </p>
          <a href="tel:0373954963" className="btn-cta-red">
            Liên hệ ngay
          </a>
        </div>
      </section>
    </main>
  );
};

export default EventLanding;
