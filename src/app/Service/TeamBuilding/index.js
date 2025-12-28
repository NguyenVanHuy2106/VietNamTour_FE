import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./index.css";

const TeamBuildingLuxury = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = [
    "photo-1500530855697-b586d89ba3ee",
    "photo-1528605248644-14dd04022da1",
    "photo-1543269865-cbf427effbad",
    "photo-1522071820081-009f0129c71c",
    "photo-1531497865144-0464ef8fb9a9",
    "photo-1511632765486-a01980e01a18",
  ];

  return (
    <>
      <Helmet>
        <title>Team Building cao cấp | Việt Nam Tour</title>
        <meta
          name="description"
          content="Tổ chức Team Building cao cấp cho doanh nghiệp – trải nghiệm độc quyền, hình ảnh ấn tượng, vận hành chuyên nghiệp."
        />
      </Helmet>

      {/* HERO FULL-WIDTH */}
      <section className="hero-fullwidth">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>TEAM BUILDING DOANH NGHIỆP CAO CẤP</h1>
          <p>
            Chương trình team building chuyên nghiệp, phù hợp mọi doanh nghiệp,
            cơ quan, tổ chức y tế. Tăng cường tinh thần đồng đội, khơi nguồn
            sáng tạo và gắn kết nhân sự, tạo trải nghiệm đẳng cấp cho toàn bộ
            đội ngũ.
          </p>
          <a href="#contact" className="btn-main">
            Nhận proposal
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-container section-white">
        <div className="container intro-flex">
          <div className="intro-text">
            <h2>Trải nghiệm độc quyền cho doanh nghiệp</h2>
            <p>
              Mỗi chương trình Team Building được thiết kế riêng theo văn hóa,
              mục tiêu và quy mô doanh nghiệp.
            </p>
            <ul>
              <li>Kịch bản sáng tạo & độc quyền</li>
              <li>Đội ngũ vận hành chuyên nghiệp</li>
              <li>Hình ảnh & truyền thông cao cấp</li>
            </ul>
          </div>
          <div className="intro-image">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
              alt="Team Building"
            />
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="formats-container section-gray">
        <div className="container">
          <h2>Hình thức tổ chức đa dạng</h2>
          <div className="formats-grid">
            <div className="format-card">
              <img
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80"
                alt="Outdoor Team"
              />
              <div className="format-text">
                <h3>Team Building ngoài trời</h3>
              </div>
            </div>
            <div className="format-card">
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
                alt="Indoor Team"
              />
              <div className="format-text">
                <h3>Team Building trong nhà</h3>
              </div>
            </div>
            <div className="format-card">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Gala Dinner"
              />
              <div className="format-text">
                <h3>Kết hợp Gala Dinner</h3>
              </div>
            </div>
            <div className="format-card">
              <img
                src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80"
                alt="Themed Team"
              />
              <div className="format-text">
                <h3>Team Building theo chủ đề</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-container section-white">
        <div className="container">
          <h2>Quy trình tổ chức chuyên nghiệp</h2>
          <div className="process-grid">
            <div className="process-item">
              <span className="step">01</span>
              <h3>Tiếp nhận & tư vấn</h3>
              <p>
                Lắng nghe mục tiêu, văn hóa và ngân sách để đề xuất giải pháp
                tối ưu.
              </p>
            </div>
            <div className="process-item">
              <span className="step">02</span>
              <h3>Xây dựng kịch bản</h3>
              <p>
                Thiết kế kịch bản Team Building riêng biệt, sáng tạo và đúng
                thông điệp doanh nghiệp.
              </p>
            </div>
            <div className="process-item">
              <span className="step">03</span>
              <h3>Tổ chức & vận hành</h3>
              <p>
                Triển khai chương trình với đội ngũ MC, hoạt náo, kỹ thuật
                chuyên nghiệp.
              </p>
            </div>
            <div className="process-item">
              <span className="step">04</span>
              <h3>Tổng kết & truyền thông</h3>
              <p>
                Báo cáo chương trình, bàn giao hình ảnh, video và tư liệu truyền
                thông.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-container section-gray">
        <div className="container">
          <h2>Khoảnh khắc đáng nhớ</h2>
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <img
                key={i}
                src={`https://images.unsplash.com/${img}?auto=format&fit=crop&w=600&q=80`}
                alt="Team Building"
              />
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="quote-container section-white">
        <div className="quote-overlay" />
        <div className="container quote-content">
          <h2>
            “Một đội ngũ mạnh không đến từ cá nhân xuất sắc, mà từ sự kết nối
            bền vững.”
          </h2>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-white" id="contact">
        <div className="container">
          <div className="cta-card">
            <div className="cta-text">
              <h2>Lên kế hoạch Team Building cùng Việt Nam Tour</h2>
              <p>
                Trải nghiệm trọn gói, kịch bản độc quyền và hình ảnh đẳng cấp
                cho doanh nghiệp bạn.
              </p>
            </div>
            <div className="cta-button">
              <a href="tel:0373954963" className="btn-cta">
                📞 Gọi tư vấn ngay
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamBuildingLuxury;
