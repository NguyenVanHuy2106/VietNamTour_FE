import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Phone,
  Sparkles,
  Target,
  Users,
  Trophy,
  ShieldCheck,
  Palette,
  Play,
} from "lucide-react";

import "./index.css";

const TeamBuildingLuxury = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* =========================================================
     FORMATS
  ========================================================= */
  const formats = [
    {
      id: "01",
      title: "Team Building ngoài trời",
      description:
        "Không gian mở, năng lượng cao và phù hợp với những chương trình cần tạo sự kết nối mạnh giữa các thành viên.",
      image:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1400&q=85",
    },
    {
      id: "02",
      title: "Team Building trong nhà",
      description:
        "Linh hoạt tại khách sạn, hội trường hoặc trung tâm sự kiện, phù hợp với nhiều quy mô và điều kiện tổ chức.",
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1400&q=85",
    },
    {
      id: "03",
      title: "Team Building kết hợp Gala",
      description:
        "Kết nối hoạt động tập thể với Gala Dinner, vinh danh, truyền thông và những khoảnh khắc đáng nhớ.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85",
    },
    {
      id: "04",
      title: "Team Building theo chủ đề",
      description:
        "Concept được phát triển dựa trên văn hóa, thông điệp và mục tiêu riêng của từng doanh nghiệp.",
      image:
        "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1400&q=85",
    },
  ];

  /* =========================================================
     PROCESS
  ========================================================= */
  const process = [
    {
      id: "01",
      title: "Hiểu doanh nghiệp",
      description:
        "Tiếp nhận nhu cầu, quy mô đoàn, mục tiêu chương trình, ngân sách và văn hóa doanh nghiệp.",
    },
    {
      id: "02",
      title: "Thiết kế concept",
      description:
        "Xây dựng chủ đề, thông điệp, trò chơi và kịch bản phù hợp với mục tiêu của chương trình.",
    },
    {
      id: "03",
      title: "Chuẩn bị & vận hành",
      description:
        "Đồng bộ nhân sự, đạo cụ, âm thanh, sân khấu, kỹ thuật và phương án dự phòng trước ngày tổ chức.",
    },
    {
      id: "04",
      title: "Triển khai chương trình",
      description:
        "MC, hoạt náo viên và đội ngũ điều hành phối hợp xuyên suốt để kiểm soát trải nghiệm của đoàn.",
    },
    {
      id: "05",
      title: "Tổng kết & truyền thông",
      description:
        "Bàn giao hình ảnh, video và tư liệu chương trình phục vụ truyền thông nội bộ sau sự kiện.",
    },
  ];

  /* =========================================================
     GALLERY
  ========================================================= */
  const galleryImages = [
    {
      src:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=85",
      className: "tbl-gallery-large",
    },
    {
      src:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=85",
      className: "tbl-gallery-medium",
    },
    {
      src:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=85",
      className: "tbl-gallery-medium",
    },
    {
      src:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85",
      className: "tbl-gallery-small",
    },
    {
      src:
        "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1200&q=85",
      className: "tbl-gallery-small",
    },
    {
      src:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85",
      className: "tbl-gallery-small",
    },
  ];

  /* =========================================================
     SCROLL TO CONTACT
  ========================================================= */
  const scrollToContact = () => {
    const contactSection = document.getElementById("team-building-contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Team Building doanh nghiệp | Việt Nam Tour</title>

        <meta
          name="description"
          content="Tổ chức Team Building doanh nghiệp chuyên nghiệp, concept riêng, vận hành đồng bộ và kết hợp Gala Dinner, MICE, nghỉ dưỡng cùng Việt Nam Tour."
        />
      </Helmet>

      <main className="tbl-page">
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="tbl-hero">
          <div className="tbl-hero-image" />

          <div className="tbl-hero-overlay" />

          <div className="tbl-hero-glow tbl-hero-glow-one" />

          <div className="tbl-hero-glow tbl-hero-glow-two" />

          <div className="tbl-container tbl-hero-container">
            {/* LEFT */}
            <div className="tbl-hero-content">
              <div className="tbl-eyebrow tbl-eyebrow-light">
                <Sparkles size={15} />
                TEAM BUILDING FOR BUSINESS
              </div>

              <h1>
                Không chỉ là một trò chơi.
                <span>
                  Đây là hành trình kết nối
                  <br />
                  một tập thể.
                </span>
              </h1>

              <p className="tbl-hero-description">
                Việt Nam Tour thiết kế và vận hành chương trình Team Building
                dành riêng cho doanh nghiệp, tổ chức và đơn vị có nhu cầu gắn
                kết đội ngũ, truyền tải văn hóa và tạo dấu ấn tập thể.
              </p>

              <div className="tbl-hero-actions">
                <button
                  type="button"
                  className="tbl-btn tbl-btn-primary"
                  onClick={scrollToContact}
                >
                  Nhận proposal chương trình
                  <ArrowRight size={17} />
                </button>

                <a href="tel:0373954963" className="tbl-btn tbl-btn-glass">
                  <Phone size={16} />
                  0373 954 963
                </a>
              </div>

              <div className="tbl-hero-trust">
                <div>
                  <Check size={14} />

                  <span>Concept theo mục tiêu doanh nghiệp</span>
                </div>

                <div>
                  <Check size={14} />

                  <span>Vận hành chương trình đồng bộ</span>
                </div>

                <div>
                  <Check size={14} />

                  <span>Hỗ trợ hình ảnh & truyền thông</span>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="tbl-hero-card">
              <span className="tbl-hero-card-label">
                GIẢI PHÁP TEAM BUILDING
              </span>

              <h3>
                Mỗi doanh nghiệp
                <br />
                cần một kịch bản khác nhau.
              </h3>

              <div className="tbl-hero-card-list">
                <div>
                  <Target size={18} />

                  <span>Mục tiêu chương trình</span>
                </div>

                <div>
                  <Users size={18} />

                  <span>Văn hóa đội ngũ</span>
                </div>

                <div>
                  <Palette size={18} />

                  <span>Concept thương hiệu</span>
                </div>
              </div>

              <button
                type="button"
                onClick={scrollToContact}
                className="tbl-hero-card-link"
              >
                Trao đổi với chuyên viên
                <ChevronRight size={15} />
              </button>
            </div>
          </div>

          <div className="tbl-hero-bottom-fade" />
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}
        <section className="tbl-intro">
          <div className="tbl-container tbl-intro-grid">
            {/* IMAGE */}
            <div className="tbl-intro-media">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1500&q=85"
                alt="Team Building doanh nghiệp"
              />

              <div className="tbl-intro-media-overlay" />

              <div className="tbl-intro-floating">
                <span>TEAM BUILDING</span>

                <strong>
                  Thiết kế theo
                  <br />
                  dấu ấn doanh nghiệp
                </strong>
              </div>
            </div>

            {/* CONTENT */}
            <div className="tbl-intro-content">
              <div className="tbl-eyebrow">
                <span />
                KHÔNG CÓ KỊCH BẢN ĐẠI TRÀ
              </div>

              <h2>
                Một chương trình tốt phải
                <span> đúng với con người bên trong doanh nghiệp.</span>
              </h2>

              <p className="tbl-section-description">
                Thay vì sử dụng một bộ trò chơi cho mọi khách hàng, chúng tôi
                bắt đầu từ mục tiêu của chương trình: gắn kết, truyền thông văn
                hóa, tái tạo năng lượng, phát triển tinh thần lãnh đạo hay đơn
                giản là tạo nên một ngày thật đáng nhớ cho tập thể.
              </p>

              <div className="tbl-value-list">
                <div className="tbl-value-item">
                  <span>01</span>

                  <div>
                    <h3>Đúng mục tiêu</h3>

                    <p>
                      Nội dung chương trình được xây dựng xoay quanh điều doanh
                      nghiệp thực sự muốn đạt được.
                    </p>
                  </div>
                </div>

                <div className="tbl-value-item">
                  <span>02</span>

                  <div>
                    <h3>Đúng tinh thần</h3>

                    <p>
                      Từ cách dẫn dắt, trò chơi đến hình ảnh đều bám theo văn
                      hóa và tính cách của tập thể.
                    </p>
                  </div>
                </div>

                <div className="tbl-value-item">
                  <span>03</span>

                  <div>
                    <h3>Đúng trải nghiệm</h3>

                    <p>
                      Chương trình được vận hành theo một flow liền mạch, hạn
                      chế tối đa cảm giác rời rạc giữa các hoạt động.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CAPABILITY
        ===================================================== */}
        <section className="tbl-capability">
          <div className="tbl-container">
            <div className="tbl-capability-grid">
              <div>
                <Target />

                <span>Chiến lược</span>

                <strong>Thông điệp rõ ràng</strong>
              </div>

              <div>
                <Palette />

                <span>Sáng tạo</span>

                <strong>Concept riêng biệt</strong>
              </div>

              <div>
                <ShieldCheck />

                <span>Vận hành</span>

                <strong>Kiểm soát đồng bộ</strong>
              </div>

              <div>
                <Trophy />

                <span>Trải nghiệm</span>

                <strong>Dấu ấn đáng nhớ</strong>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FORMATS
        ===================================================== */}
        <section className="tbl-formats">
          <div className="tbl-container">
            <div className="tbl-section-heading tbl-section-heading-row">
              <div>
                <div className="tbl-eyebrow">
                  <span />
                  PROGRAM FORMATS
                </div>

                <h2>
                  Một mục tiêu.
                  <br />
                  <span>Nhiều cách để tạo kết nối.</span>
                </h2>
              </div>

              <p>
                Tùy quy mô đoàn, địa điểm và mục tiêu nội bộ, chương trình có
                thể được triển khai theo nhiều format khác nhau.
              </p>
            </div>

            <div className="tbl-format-list">
              {formats.map((item) => (
                <article className="tbl-format-item" key={item.id}>
                  <div className="tbl-format-number">{item.id}</div>

                  <div className="tbl-format-image">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="tbl-format-content">
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <button type="button" onClick={scrollToContact}>
                      Tư vấn format này
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}
        <section className="tbl-process">
          <div className="tbl-container">
            <div className="tbl-section-heading tbl-process-heading">
              <div className="tbl-eyebrow tbl-eyebrow-light">
                <span />
                OUR PROCESS
              </div>

              <h2>
                Từ một ý tưởng
                <span> đến một chương trình hoàn chỉnh.</span>
              </h2>

              <p>
                Mỗi giai đoạn đều có mục tiêu rõ ràng để đảm bảo trải nghiệm của
                khách hàng được kiểm soát xuyên suốt.
              </p>
            </div>

            <div className="tbl-process-list">
              {process.map((item, index) => (
                <div className="tbl-process-item" key={item.id}>
                  <div className="tbl-process-step">
                    <span>{item.id}</span>
                  </div>

                  <div className="tbl-process-content">
                    <span className="tbl-process-label">BƯỚC {item.id}</span>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>

                  {index !== process.length - 1 && (
                    <div className="tbl-process-line" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            GALLERY
        ===================================================== */}
        <section className="tbl-gallery">
          <div className="tbl-container">
            <div className="tbl-section-heading tbl-section-heading-row">
              <div>
                <div className="tbl-eyebrow">
                  <span />
                  EVENT HIGHLIGHTS
                </div>

                <h2>
                  Những khoảnh khắc
                  <span> tạo nên tinh thần tập thể.</span>
                </h2>
              </div>

              <p>
                Mỗi chương trình là một câu chuyện khác nhau về con người, năng
                lượng và sự kết nối.
              </p>
            </div>

            <div className="tbl-gallery-grid">
              {galleryImages.map((item, index) => (
                <div
                  className={`tbl-gallery-item ${item.className}`}
                  key={index}
                >
                  <img src={item.src} alt={`Team Building ${index + 1}`} />

                  <div className="tbl-gallery-hover">
                    <Play size={18} fill="currentColor" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            QUOTE
        ===================================================== */}
        <section className="tbl-quote">
          <div className="tbl-quote-bg" />

          <div className="tbl-quote-overlay" />

          <div className="tbl-container tbl-quote-content">
            <span>VIỆT NAM TOUR</span>

            <blockquote>
              “Một chương trình Team Building tốt không kết thúc khi trò chơi
              kết thúc. Giá trị thật sự nằm ở cách mọi người nhìn nhau khác đi
              sau hành trình.”
            </blockquote>
          </div>
        </section>

        {/* =====================================================
            CONTACT CTA
        ===================================================== */}
        <section className="tbl-contact" id="team-building-contact">
          <div className="tbl-container">
            <div className="tbl-contact-card">
              <div className="tbl-contact-glow" />

              <div className="tbl-contact-content">
                <div className="tbl-eyebrow tbl-eyebrow-light">
                  <Sparkles size={14} />
                  START YOUR PROGRAM
                </div>

                <h2>
                  Đang lên kế hoạch
                  <br />
                  <span>Team Building cho doanh nghiệp?</span>
                </h2>

                <p>
                  Chia sẻ quy mô đoàn, địa điểm dự kiến và mục tiêu chương
                  trình. Việt Nam Tour sẽ tư vấn phương án phù hợp cho bạn.
                </p>

                <div className="tbl-contact-actions">
                  <a href="tel:0373954963" className="tbl-btn tbl-btn-white">
                    <Phone size={16} />
                    0373 954 963
                  </a>

                  <a
                    href="mailto:dulichvasukienvietnam@gmail.com"
                    className="tbl-btn tbl-btn-outline-white"
                  >
                    Nhận proposal qua Email
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="tbl-contact-side">
                <span>TEAM BUILDING</span>

                <strong>
                  Concept
                  <br />
                  Planning
                  <br />
                  Operation
                </strong>

                <p>Việt Nam Tour</p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MOBILE FIXED CTA
        ===================================================== */}
        <div className="tbl-mobile-fixed">
          <a href="tel:0373954963">
            <Phone size={15} />
            Gọi tư vấn
          </a>

          <button type="button" onClick={scrollToContact}>
            Nhận proposal
            <ArrowRight size={14} />
          </button>
        </div>
      </main>
    </>
  );
};

export default TeamBuildingLuxury;
