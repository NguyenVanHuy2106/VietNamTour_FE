import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./index.css";

const YearEndEvent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>YEP – Tiệc Tân Niên & Họp Mặt Cuối Năm | Việt Nam Tour</title>

        <meta
          name="description"
          content="Dịch vụ tổ chức YEP, Tiệc Tân Niên, Họp Mặt Cuối Năm chuyên nghiệp – kịch bản riêng – hình ảnh sang trọng – vận hành trọn gói."
        />

        <link
          rel="canonical"
          href="https://myvietnamtour.vn/dich-vu/year-end-party"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Việt Nam Tour" />
        <meta
          property="og:title"
          content="YEP – Tiệc Tân Niên & Họp Mặt Cuối Năm | Việt Nam Tour"
        />
        <meta
          property="og:description"
          content="Dịch vụ tổ chức YEP, Tiệc Tân Niên, Họp Mặt Cuối Năm chuyên nghiệp – kịch bản riêng – hình ảnh sang trọng – vận hành trọn gói."
        />
        <meta
          property="og:url"
          content="https://myvietnamtour.vn/dich-vu/year-end-party"
        />
      </Helmet>

      {/* HERO */}
      <section className="yep-hero">
        <div className="yep-hero-content">
          <h1>YEP & TIỆC TÂN NIÊN DOANH NGHIỆP</h1>
          <p>
            Chương trình kết nối toàn thể nhân viên, tri ân khách hàng
            <br />
            Sang trọng – Chuyên nghiệp – Ghi dấu ấn doanh nghiệp
          </p>
          <a href="#contact" className="yep-btn">
            Nhận proposal ngay
          </a>
        </div>
      </section>

      {/* GIỚI THIỆU */}
      <section className="yep-section">
        <div className="container yep-intro">
          <div className="intro-left">
            <h2>Trải nghiệm sự kiện chuyên nghiệp</h2>
            <p>
              Việt Nam Tour tổ chức YEP, Tiệc Tân Niên & Họp Mặt Cuối Năm cho
              doanh nghiệp lớn, tập đoàn, chi nhánh trên toàn quốc.
            </p>
            <p>
              Kịch bản riêng biệt theo văn hóa doanh nghiệp, đảm bảo sự kiện
              sang trọng – vận hành chuẩn – ghi dấu ấn.
            </p>
          </div>

          <div className="intro-right">
            <div className="stat-box">
              <h3>500+</h3>
              <span>Khách tham dự mỗi sự kiện</span>
            </div>
            <div className="stat-box">
              <h3>150+</h3>
              <span>Sự kiện đã tổ chức</span>
            </div>
            <div className="stat-box">
              <h3>100%</h3>
              <span>Đúng tiến độ & hài lòng</span>
            </div>
          </div>
        </div>
      </section>

      {/* HẠNG MỤC DỊCH VỤ */}
      <section className="yep-services-stagger">
        <div className="container">
          <div className="stagger-header">
            <h2>Hạng mục dịch vụ sự kiện</h2>
            <p>
              Tất cả hạng mục được triển khai đồng bộ, đảm bảo YEP & Tiệc Tân
              Niên chuyên nghiệp, ấn tượng.
            </p>
          </div>

          <div className="stagger-wrapper">
            <div className="stagger-card up">
              <h3>Tư vấn & Kịch bản</h3>
              <p>
                Xây dựng kịch bản riêng theo mục tiêu, văn hóa doanh nghiệp và
                thông điệp sự kiện.
              </p>
            </div>

            <div className="stagger-card down">
              <h3>Địa điểm & Không gian</h3>
              <p>
                Khách sạn, resort, hội trường, sân khấu ngoài trời với bố trí
                cao cấp, sang trọng.
              </p>
            </div>

            <div className="stagger-card up">
              <h3>Âm thanh & Ánh sáng</h3>
              <p>
                Hệ thống ánh sáng, LED, âm thanh chuyên nghiệp, tạo hiệu ứng thị
                giác ấn tượng.
              </p>
            </div>

            <div className="stagger-card down">
              <h3>MC & Điều phối</h3>
              <p>
                MC, lễ tân, điều phối viên được đào tạo chuyên nghiệp, xử lý
                linh hoạt mọi tình huống.
              </p>
            </div>

            <div className="stagger-card up">
              <h3>Hậu kỳ & Truyền thông</h3>
              <p>
                Chụp ảnh, quay video, livestream, tổng hợp tư liệu truyền thông
                chuyên nghiệp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUY TRÌNH */}
      <section className="yep-process">
        <div className="container">
          <h2 className="section-title">
            Quy trình tổ chức sự kiện chuyên nghiệp
          </h2>
          <p className="section-desc">
            Quy trình bài bản – kiểm soát chặt chẽ – phù hợp mọi quy mô từ nội
            bộ đến tập đoàn lớn.
          </p>

          <div className="process-grid">
            <div className="process-card fade-up">
              <div className="icon">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <span className="step">01</span>
              <h4>Tiếp nhận & khảo sát yêu cầu</h4>
              <p>
                Lắng nghe nhu cầu doanh nghiệp, số lượng khách, ngân sách,
                concept và các yêu cầu đặc thù.
              </p>
            </div>

            <div className="process-card fade-up">
              <div className="icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <span className="step">02</span>
              <h4>Xây dựng kịch bản & phương án</h4>
              <p>
                Lập kịch bản tổng thể, timeline chi tiết, bố trí sân khấu, ánh
                sáng, nhân sự và truyền thông.
              </p>
            </div>

            <div className="process-card fade-up">
              <div className="icon">
                <i className="fas fa-microphone-alt"></i>
              </div>
              <span className="step">03</span>
              <h4>Chuẩn bị hậu cần & kỹ thuật</h4>
              <p>
                Setup âm thanh, ánh sáng, backdrop, bàn tiệc, quà tặng và đội
                ngũ kỹ thuật vận hành.
              </p>
            </div>

            <div className="process-card fade-up">
              <div className="icon">
                <i className="fas fa-users-cog"></i>
              </div>
              <span className="step">04</span>
              <h4>Tổ chức & điều phối</h4>
              <p>
                Triển khai đúng kịch bản, kiểm soát tiến độ, xử lý linh hoạt mọi
                tình huống trong sự kiện.
              </p>
            </div>

            <div className="process-card fade-up">
              <div className="icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <span className="step">05</span>
              <h4>Tổng kết & bàn giao</h4>
              <p>
                Báo cáo, bàn giao hình ảnh – video – tư liệu, đánh giá hiệu quả
                sự kiện theo mục tiêu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="yep-gallery">
        <div className="container">
          <h2 className="center">Khoảnh khắc YEP & Tiệc Tân Niên</h2>
          <div className="gallery-grid">
            {[
              "photo-1515162305281-9b6cfd52c6b8",
              "photo-1521737604893-d14cc237f11d",
              "photo-1505373877841-8d25f7d46678",
              "photo-1543269865-cbf427effbad",
            ].map((img, i) => (
              <img
                key={i}
                src={`https://images.unsplash.com/${img}`}
                alt="Year End Event"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="yep-cta" id="contact">
        <div className="yep-cta-overlay" />
        <div className="container yep-cta-wrap">
          <div className="yep-cta-content">
            <span className="yep-cta-label">VIETNAM TOUR EVENT</span>
            <h2>
              Giải pháp tổ chức
              <br />
              YEP & Tiệc Tân Niên trọn gói
            </h2>
            <p>
              Tư vấn chuyên sâu – kịch bản bài bản – vận hành chuyên nghiệp, phù
              hợp mọi quy mô từ nội bộ đến tập đoàn lớn.
            </p>
          </div>
          <div className="yep-cta-action">
            <a href="tel:0373954963" className="yep-btn primary">
              📞 Gọi tư vấn nhanh
            </a>
            <a href="#contact-form" className="yep-btn outline">
              Nhận proposal chi tiết
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default YearEndEvent;
