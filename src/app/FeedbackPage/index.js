import React, { useState } from "react";
import "./index.css";
import { Phone, MessageCircle, MessageSquare } from "lucide-react"; // dùng icon từ lucide-react

const FeedbackPage = () => {
  const [ratings, setRatings] = useState({
    tour: 0,
    transport: 0,
    hotel: 0,
    food: 0,
    guide: 0,
    support: 0,
  });

  const categories = [
    {
      id: "tour",
      label: "1. Chất lượng tour & lịch trình",
      desc: "Chương trình, điểm tham quan, thời gian di chuyển.",
    },
    {
      id: "transport",
      label: "2. Dịch vụ vận chuyển",
      desc: "Độ an toàn, đúng giờ, thái độ tài xế.",
    },
    {
      id: "hotel",
      label: "3. Khách sạn & lưu trú",
      desc: "Vị trí, tiện nghi, vệ sinh & phục vụ.",
    },
    {
      id: "food",
      label: "4. Ăn uống & nhà hàng",
      desc: "Chất lượng, khẩu vị, không gian phục vụ.",
    },
    {
      id: "guide",
      label: "5. Hướng dẫn viên / điều phối",
      desc: "Kiến thức, sự nhiệt tình, khả năng kết nối.",
    },
    {
      id: "support",
      label: "6. Công tác tổ chức & hỗ trợ",
      desc: "Thông tin trước chuyến đi, xử lý sự cố.",
    },
  ];

  const handleRating = (cat, score) => {
    setRatings({ ...ratings, [cat]: score });
  };

  return (
    <div className="feedback-page">
      {/* HEADER */}
      <section className="fb-header">
        <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 800 }}>
          Đánh giá dịch vụ
        </h1>
        <p style={{ opacity: 0.8, maxWidth: "700px", margin: "15px auto" }}>
          Ý kiến của khách hàng sau mỗi hành trình là giá trị để chúng tôi hoàn
          thiện hơn.
        </p>
      </section>

      <div className="fb-container">
        {/* GIỚI THIỆU */}
        <div className="fb-card">
          <h3 style={{ color: "#c5a059", marginBottom: "15px" }}>
            Trân trọng Quý khách!
          </h3>
          <p style={{ fontSize: "0.95rem", color: "#64748b" }}>
            Sau mỗi chuyến đi, sự kiện, ý kiến của bạn giúp chúng tôi đo lường
            sự hài lòng, phát hiện điểm yếu và nâng cao trải nghiệm cho những
            hành trình tiếp theo.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
              marginTop: "25px",
            }}
          >
            <div style={{ fontSize: "0.85rem" }}>✅ Bảo mật thông tin</div>
            <div style={{ fontSize: "0.85rem" }}>✅ Lắng nghe trung thực</div>
            <div style={{ fontSize: "0.85rem" }}>✅ Cải thiện liên tục</div>
            <div style={{ fontSize: "0.85rem" }}>✅ Quà tặng tri ân</div>
          </div>
        </div>

        {/* FORM ĐÁNH GIÁ CHÍNH */}
        <div className="fb-card">
          <h2 style={{ marginBottom: "30px", textAlign: "center" }}>
            Nội dung đánh giá
          </h2>

          {categories.map((cat) => (
            <div key={cat.id} className="rating-group">
              <div className="rating-header">
                <div>
                  <h4 style={{ margin: 0 }}>{cat.label}</h4>
                  <small style={{ color: "#94a3b8" }}>{cat.desc}</small>
                </div>
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span
                      key={s}
                      onClick={() => handleRating(cat.id, s)}
                      className={
                        s <= ratings[cat.id] ? "star-active" : "star-inactive"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div style={{ marginTop: "40px" }}>
            <h4 style={{ marginBottom: "10px" }}>Ý kiến đóng góp khác</h4>
            <textarea
              className="fb-input"
              rows="4"
              placeholder="Quý khách có góp ý gì để chúng tôi phục vụ tốt hơn không?"
            ></textarea>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button
              className="btn-submit"
              onClick={() => alert("Cảm ơn bạn đã đánh giá!")}
            >
              GỬI ĐÁNH GIÁ NGAY
            </button>
            <p
              style={{
                textAlign: "center",
                fontSize: "0.8rem",
                color: "#94a3b8",
                marginTop: "15px",
              }}
            >
              Chỉ mất 2-3 phút để hoàn thành – Cảm ơn sự đồng hành của bạn!
            </p>
          </div>
        </div>

        {/* PHẢN HỒI TIÊU BIỂU */}
        <div className="fb-card">
          <h3 style={{ marginBottom: "20px" }}>Khách hàng nói về chúng tôi</h3>
          <div className="mini-testi">
            “Chuyến đi được tổ chức chuyên nghiệp, lịch trình hợp lý, hướng dẫn
            viên rất nhiệt tình.”
          </div>
          <div className="mini-testi">
            “Dịch vụ đúng như tư vấn ban đầu, không phát sinh chi phí, rất hài
            lòng.”
          </div>
        </div>

        {/* FOOTER LIÊN HỆ */}
      </div>
      <section className="feedback-cta" id="contact">
        <div className="feedback-cta-overlay" />
        <div className="container feedback-cta-wrap">
          <div className="feedback-cta-content">
            <span className="feedback-cta-label">VIETNAM TOUR</span>
            <h2>
              Trân trọng mọi ý kiến
              <br />& Cam kết đồng hành cùng bạn
            </h2>
            <p>
              Nếu Quý khách có bất kỳ vấn đề nào chưa hài lòng hoặc cần hỗ trợ
              khẩn cấp về dịch vụ, đừng ngần ngại kết nối trực tiếp với đội ngũ
              quản lý của chúng tôi. Sự hài lòng của bạn là ưu tiên tuyệt đối.
            </p>
          </div>
          <div className="feedback-cta-action">
            <a href="tel:0373954963" className="feedback-btn primary">
              <Phone size={23} />
              Gọi qua điện thoại
            </a>
            <a href="#contact-form" className="feedback-btn primary">
              <img
                src="https://cdn.myvietnamtour.vn/uploads/Logo-zalo-png.png"
                alt="Logo"
                style={{ width: "25px", height: "25px" }}
              />
              Nhắn tin qua zalo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeedbackPage;
