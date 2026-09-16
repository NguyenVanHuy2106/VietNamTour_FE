import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./index.css";

const ConferenceLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Tổ chức hội nghị – hội thảo chuyên nghiệp | Việt Nam Tour</title>

        <meta
          name="description"
          content="Dịch vụ tổ chức hội nghị – hội thảo – sự kiện khoa học trọn gói. Quy mô lớn – vận hành chuẩn – đúng quy định."
        />

        <link
          rel="canonical"
          href="https://myvietnamtour.vn/dich-vu/hoi-nghi-hoi-thao"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Việt Nam Tour" />
        <meta
          property="og:title"
          content="Tổ chức hội nghị – hội thảo chuyên nghiệp | Việt Nam Tour"
        />
        <meta
          property="og:description"
          content="Dịch vụ tổ chức hội nghị – hội thảo – sự kiện khoa học trọn gói. Quy mô lớn – vận hành chuẩn – đúng quy định."
        />
        <meta
          property="og:url"
          content="https://myvietnamtour.vn/dich-vu/hoi-nghi-hoi-thao"
        />
      </Helmet>

      {/* HERO */}
      <section className="conf-hero">
        <div className="conf-hero-content">
          <h1>TỔ CHỨC HỘI NGHỊ – HỘI THẢO</h1>
          <p>
            Giải pháp tổ chức hội nghị, hội thảo, hội nghị khoa học
            <br />
            chuẩn quy trình – đúng quy định – tối ưu chi phí
          </p>
          <a href="#consult" className="conf-btn">
            Nhận tư vấn chi tiết
          </a>
        </div>
      </section>

      {/* GIỚI THIỆU */}
      <section className="conf-section">
        <div className="container conf-intro">
          <div className="intro-left">
            <h2>Năng lực tổ chức hội nghị</h2>
            <p>
              Việt Nam Tour chuyên tổ chức hội nghị – hội thảo cho các cơ quan,
              tổ chức, doanh nghiệp, viện – trung tâm nghiên cứu trên toàn quốc.
            </p>
            <p>
              Chúng tôi đảm bảo quy trình tổ chức chặt chẽ, nội dung rõ ràng,
              vận hành chuyên nghiệp và tuân thủ đầy đủ các quy định hiện hành.
            </p>
          </div>

          <div className="intro-right">
            <div className="stat-box">
              <h3>1000+</h3>
              <span>Đại biểu / hội nghị</span>
            </div>
            <div className="stat-box">
              <h3>50+</h3>
              <span>Hội nghị quy mô lớn</span>
            </div>
            <div className="stat-box">
              <h3>100%</h3>
              <span>Đúng tiến độ</span>
            </div>
          </div>
        </div>
      </section>

      {/* HẠNG MỤC DỊCH VỤ – STAGGERED CARDS */}
      <section className="conference-services-stagger">
        <div className="container">
          <div className="stagger-header">
            <h2>Hạng mục dịch vụ hội nghị – hội thảo</h2>
            <p>
              Các nhóm dịch vụ cốt lõi được triển khai đồng bộ, đảm bảo hội nghị
              vận hành chuẩn mực và hiệu quả.
            </p>
          </div>

          <div className="stagger-wrapper">
            <div className="stagger-card up">
              <h3>Tư vấn & kịch bản</h3>
              <p>
                Phân tích mục tiêu, đối tượng và nội dung hội nghị để xây dựng
                kịch bản phù hợp, logic và hiệu quả.
              </p>
            </div>

            <div className="stagger-card down">
              <h3>Địa điểm & không gian</h3>
              <p>
                Trung tâm hội nghị, khách sạn, hội trường với bố trí khoa học,
                đúng chuẩn hội thảo – hội nghị.
              </p>
            </div>

            <div className="stagger-card up">
              <h3>Kỹ thuật hội nghị</h3>
              <p>
                Âm thanh, ánh sáng, màn hình LED, trình chiếu và vận hành kỹ
                thuật xuyên suốt chương trình.
              </p>
            </div>

            <div className="stagger-card down">
              <h3>Điều phối & nhân sự</h3>
              <p>
                MC, lễ tân, điều phối viên, kỹ thuật viên được đào tạo bài bản,
                xử lý linh hoạt mọi tình huống.
              </p>
            </div>

            <div className="stagger-card up">
              <h3>Truyền thông & hậu kỳ</h3>
              <p>
                Ghi hình, chụp ảnh, livestream và tổng hợp tư liệu phục vụ
                truyền thông sau hội nghị.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUY TRÌNH */}
      <section className="conf-process">
        <div className="container">
          <h2 className="section-title">
            Quy trình tổ chức hội nghị – hội thảo chuyên nghiệp
          </h2>
          <p className="section-desc">
            Vận hành bài bản – kiểm soát chặt chẽ – phù hợp hội nghị khoa học, y
            tế, đào tạo, hội thảo chuyên ngành và sự kiện cấp cơ quan.
          </p>

          <div className="process-grid">
            <div className="process-card fade-up">
              <div className="icon">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <span className="step">01</span>
              <h4>Tiếp nhận & khảo sát yêu cầu</h4>
              <p>
                Tiếp nhận thông tin chương trình, mục tiêu hội nghị, thành phần
                đại biểu, quy mô, ngân sách và các yêu cầu đặc thù (y tế – khoa
                học – nhà nước – Doanh nghiệp).
              </p>
            </div>

            <div className="process-card fade-up">
              <div className="icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <span className="step">02</span>
              <h4>Xây dựng kịch bản & phương án</h4>
              <p>
                Lập kịch bản tổng thể, timeline chi tiết, phân công nhân sự, sơ
                đồ không gian, phương án kỹ thuật và truyền thông.
              </p>
            </div>

            <div className="process-card fade-up">
              <div className="icon">
                <i className="fas fa-microphone-alt"></i>
              </div>
              <span className="step">03</span>
              <h4>Chuẩn bị hậu cần & kỹ thuật</h4>
              <p>
                Setup âm thanh, ánh sáng, màn hình LED, sân khấu, backdrop, tài
                liệu, booth trưng bày và đội ngũ kỹ thuật vận hành.
              </p>
            </div>

            <div className="process-card fade-up">
              <div className="icon">
                <i className="fas fa-users-cog"></i>
              </div>
              <span className="step">04</span>
              <h4>Tổ chức & điều phối hội nghị</h4>
              <p>
                Điều phối chương trình đúng kịch bản, kiểm soát tiến độ, xử lý
                linh hoạt các tình huống phát sinh trong suốt sự kiện.
              </p>
            </div>

            <div className="process-card fade-up">
              <div className="icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <span className="step">05</span>
              <h4>Tổng kết & bàn giao</h4>
              <p>
                Báo cáo tổng kết chương trình, bàn giao hình ảnh – video – tư
                liệu, đánh giá hiệu quả tổ chức theo mục tiêu ban đầu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HÌNH ẢNH */}
      <section className="conf-gallery">
        <div className="container">
          <h2 className="center">Hình ảnh hội nghị tiêu biểu</h2>
          <div className="gallery-grid">
            {[
              "photo-1503428593586-e225b39bddfe",
              "photo-1515162305281-9b6cfd52c6b8",
              "photo-1521737604893-d14cc237f11d",
              "photo-1505373877841-8d25f7d46678",
            ].map((img, i) => (
              <img
                key={i}
                src={`https://images.unsplash.com/${img}`}
                alt="Conference"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="conf-cta-alt" id="consult">
        <div className="conf-cta-overlay" />

        <div className="container conf-cta-wrap">
          {/* LEFT */}
          <div className="conf-cta-content">
            <span className="conf-cta-label">VIETNAM TOUR EVENT</span>
            <h2>
              Giải pháp tổ chức
              <br />
              Hội nghị – Hội thảo trọn gói
            </h2>
            <p>
              Tư vấn chuyên sâu – kịch bản bài bản – vận hành chuyên nghiệp, phù
              hợp mọi quy mô từ nội bộ đến cấp ngành.
            </p>
          </div>

          {/* RIGHT */}
          <div className="conf-cta-action">
            <a href="tel:0900000000" className="conf-btn primary">
              📞 Gọi tư vấn nhanh
            </a>
            <a href="#contact-form" className="conf-btn outline">
              Nhận proposal chi tiết
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConferenceLanding;
