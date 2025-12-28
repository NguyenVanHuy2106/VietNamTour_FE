import React from "react";
import {
  ShieldCheck,
  GraduationCap,
  Globe,
  Target,
  Award,
  Eye,
  Coffee,
  Compass,
  Leaf,
  Landmark,
  UserCheck,
  Calendar,
  Users,
  Download,
  PhoneCall,
} from "lucide-react";
import "./index.css";

const StudyTour = () => {
  const handleZaloClick = () => {
    window.open("https://zalo.me/0373954963", "_blank"); // Thay số điện thoại của bạn vào đây
  };
  return (
    <div className="st-pro-wrapper">
      {/* SECTION 1: HERO - Sang trọng và tập trung */}
      <header className="st-pro-hero">
        <div className="hero-visual">
          <img
            src="https://c3ngoctao.edu.vn/wp-content/uploads/2022/11/DSC04306-scaled.jpg"
            alt="Education"
          />
        </div>
        <div className="hero-text">
          <div className="reveal-box">
            <span className="st-pre-title">
              ĐỐI TÁC CHIẾN LƯỢC CỦA NHÀ TRƯỜNG
            </span>
            <h1>
              DU LỊCH HỌC TẬP <br />
              <span>An toàn – Hiệu quả</span>
            </h1>
            <p>
              Các chương trình được xây dựng bài bản cho học sinh, sinh viên,
              chú trọng trải nghiệm giáo dục, an toàn vận hành và tính minh bạch
              trong suốt hành trình.
            </p>
            <div className="hero-actions">
              <button className="btn-main">Hợp tác ngay</button>
              <button className="btn-outline">Tải Profile (PDF)</button>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2: THE MATRIX - Thông tin dày đặc về uy tín */}
      <section className="st-matrix">
        <div className="st-pro-container">
          <div className="matrix-grid">
            {/* Cột trái: Thế mạnh chuyên môn */}
            <div className="matrix-content">
              <h2 className="title-accent">
                Hệ thống giáo dục trải nghiệm dành cho học sinh
              </h2>
              <p className="content-accent">
                Mô hình du lịch học tập kết hợp trải nghiệm thực tế, giúp học
                sinh học hiệu quả – đi an toàn – nhà trường và phụ huynh hoàn
                toàn yên tâm.
              </p>
              <div className="matrix-cards">
                <div className="m-card">
                  <div className="m-icon">
                    <GraduationCap />
                  </div>
                  <div>
                    <h4>Học tập qua trải nghiệm thực tế</h4>
                    <p>
                      Mỗi chuyến đi được xây dựng như một hành trình khám phá
                      thực tế, giúp học sinh học qua quan sát, trải nghiệm và
                      tương tác trực tiếp tại điểm đến. Kiến thức trở nên sinh
                      động, dễ hiểu và dễ ghi nhớ hơn so với học trên lớp.
                    </p>
                  </div>
                </div>
                <div className="m-card">
                  <div className="m-icon">
                    <ShieldCheck />
                  </div>
                  <div>
                    <h4>An toàn & quản lý học sinh chặt chẽ</h4>
                    <p>
                      Toàn bộ lộ trình, hoạt động và điểm đến đều được chuẩn bị
                      kế hoạch an toàn rõ ràng. Học sinh được quản lý theo nhóm
                      nhỏ, có nhân sự theo sát và bảo hiểm đầy đủ trong suốt
                      chuyến đi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cột phải: Dữ liệu thực chứng */}
            <div className="matrix-stats">
              <div className="stat-glass">
                <div className="stat-item">
                  <span className="number">100+</span>
                  <span className="label">
                    Chương trình học tập & trải nghiệm trong nước (phù hợp cho
                    tiểu học – THCS – THPT)
                  </span>
                </div>
                <div className="stat-item">
                  <span className="number">100%</span>
                  <span className="label">
                    Nhân sự đồng hành đạt chuẩn (hướng dẫn viên, điều phối viên,
                    giáo viên hỗ trợ)
                  </span>
                </div>
                <div className="stat-item">
                  <span className="number">1:10</span>
                  <span className="label">
                    Tỷ lệ quản lý học sinh tối ưu 1 nhân sự giám sát tối đa 10
                    học sinh
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ACADEMIC FLOW - Cấu trúc 1 chương trình học */}
      <section className="st-flow">
        <div className="st-pro-container">
          <h2 className="center-title">Quy trình vận hành 5 giai đoạn</h2>

          <div className="flow-steps">
            {[
              {
                id: "01",
                title: "Khảo sát & Thiết kế chương trình",
                desc:
                  "Phối hợp cùng nhà trường xây dựng chương trình trải nghiệm phù hợp độ tuổi, nội dung học tập và mục tiêu của chuyến đi.",
              },
              {
                id: "02",
                title: "Tiền trạm & Đánh giá an toàn",
                desc:
                  "Đội ngũ chuyên môn khảo sát thực tế điểm đến, tuyến di chuyển và điều kiện tổ chức nhằm đảm bảo an toàn cho học sinh.",
              },
              {
                id: "03",
                title: "Chuẩn bị & Hướng dẫn trước chuyến đi",
                desc:
                  "Học sinh được phổ biến lịch trình, nội dung trải nghiệm và các lưu ý cần thiết để tham gia chương trình một cách chủ động và an toàn.",
              },
              {
                id: "04",
                title: "Trải nghiệm thực tế & Hoạt động học tập",
                desc:
                  "Học sinh tham gia các hoạt động trải nghiệm, học tập thực tế và workshop dưới sự đồng hành, quản lý sát sao của đội ngũ điều phối.",
              },
              {
                id: "05",
                title: "Tổng kết & Báo cáo kết quả",
                desc:
                  "Tổng hợp kết quả chương trình, ghi nhận hoạt động trải nghiệm và xác nhận hoàn thành cho học sinh.",
              },
            ].map((step) => (
              <div key={step.id} className="step-card">
                <span className="step-num">{step.id}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="wcu-section">
        <div className="wcu-container">
          <div className="wcu-header">
            <span className="wcu-tag">OUR VALUES</span>
            <h2 className="wcu-title">
              Vì sao phụ huynh & nhà trường <br />
              <span>tin chọn chúng tôi?</span>
            </h2>
            <div className="wcu-line"></div>
          </div>

          <div className="wcu-grid">
            {reasons.map((item, index) => (
              <div className="wcu-card" key={index}>
                <div className="wcu-icon-box">{item.icon}</div>
                <div className="wcu-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="wcu-card-bg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tours-section">
        <div className="tours-container">
          <div className="tours-header">
            <div>
              <span className="tours-tag">EXCEPTIONAL PROGRAMS</span>
              <h2 className="tours-title">
                Các chương trình Study Tour tiêu biểu
              </h2>
            </div>
            <p className="tours-subtitle">
              Hệ thống lộ trình được nghiên cứu kỹ lưỡng, cân bằng giữa yếu tố
              học thuật và trải nghiệm thực tế.
            </p>
          </div>

          <div className="tours-grid">
            {tours.map((tour, index) => (
              <div
                className="tour-card"
                key={index}
                style={{ "--accent": tour.color }}
              >
                <div className="tour-img-wrapper">
                  <img src={tour.img} alt={tour.title} />
                  <div className="tour-category">
                    {tour.icon}
                    <span>{tour.category}</span>
                  </div>
                </div>
                <div className="tour-info">
                  <h3 className="tour-name">{tour.title}</h3>
                  <div className="tour-meta">
                    <div className="meta-item">
                      <Users size={16} />
                      <span>
                        Độ tuổi: <strong>{tour.age}</strong>
                      </span>
                    </div>
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>
                        Thời lượng: <strong>{tour.duration}</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-final-section">
        <div className="cta-container">
          <div className="cta-glass-card">
            <div className="cta-content">
              <span className="cta-sup">READY TO START?</span>
              <h2 className="cta-main-title">
                Sẵn sàng kiến tạo hành trình <br />
                <span>trải nghiệm cho học sinh?</span>
              </h2>
              <p className="cta-desc">
                Để lại thông tin để nhận ngay chương trình du lịch giáo dục chất
                lượng và bảng báo giá giải pháp dành riêng cho Nhà trường.
              </p>

              <div className="cta-buttons">
                <button
                  className="btn-primary-cta zalo-btn"
                  onClick={handleZaloClick}
                >
                  <img
                    src="https://cdn.myvietnamtour.vn/uploads/Logo-zalo-png.png"
                    alt="Zalo Logo"
                    style={{
                      width: "25px",
                      height: "25px",
                      objectFit: "contain",
                    }}
                  />
                  Nhận Tư Vấn Qua Zalo
                </button>
                <button className="btn-secondary-cta">
                  <Download size={20} />
                  Tải Hồ Sơ Năng Lực
                </button>
              </div>
            </div>

            <div className="cta-contact-box">
              <div className="contact-item">
                <div className="c-icon">
                  <PhoneCall />
                </div>
                <div>
                  <span>Hotline hỗ trợ 24/7</span>
                  <p>0373 954 963</p>
                </div>
              </div>
              <div className="contact-divider"></div>
              <p className="contact-note">
                Cam kết phản hồi yêu cầu thiết kế lộ trình trong vòng 24h làm
                việc
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="cta-blob b-1"></div>
        <div className="cta-blob b-2"></div>
      </section>
    </div>
  );
};

export default StudyTour;

const reasons = [
  {
    icon: <ShieldCheck size={36} />,
    title: "An toàn là ưu tiên số 1",
    desc:
      "Quy trình quản lý học sinh rõ ràng, đội ngũ nhân sự chuyên trách theo sát và hỗ trợ 24/7 trong suốt hành trình.",
  },
  {
    icon: <Target size={36} />,
    title: "Chương trình thiết kế riêng",
    desc:
      "Không tour đại trà. Nội dung được tùy chỉnh linh hoạt phù hợp với độ tuổi, tâm lý và mục tiêu học tập của từng trường.",
  },
  {
    icon: <Award size={36} />,
    title: "Kinh nghiệm tổ chức chuyên sâu",
    desc:
      "Với nhiều năm trong ngành lữ hành học đường, chúng tôi thấu hiểu tâm lý học sinh và mọi mối quan tâm của phụ huynh.",
  },
  {
    icon: <Eye size={36} />,
    title: "Minh bạch chi phí & kế hoạch",
    desc:
      "Toàn bộ lộ trình, hoạt động trải nghiệm và chi phí được thông tin chi tiết, rõ ràng trước khi hành trình bắt đầu.",
  },
  {
    icon: <Coffee size={36} />,
    title: "Hậu cần trọn gói, chu đáo",
    desc:
      "Chăm chút từng bữa ăn, chỗ nghỉ phù hợp độ tuổi học sinh, đảm bảo sức khỏe và tinh thần tốt nhất để các em học tập.",
  },
  {
    icon: <Compass size={36} />, // Sử dụng icon Compass (La bàn)
    title: "Trải nghiệm thực địa sống động",
    desc:
      "Biến mọi điểm đến thành lớp học không tường, giúp học sinh tiếp thu kiến thức qua quan sát trực tiếp và thực hành thực tế.",
  },
];

const tours = [
  {
    category: "Trải nghiệm thiên nhiên",
    title: "Khám phá thiên nhiên & nông trại học tập",
    age: "6 – 12 tuổi",
    duration: "1 Ngày",
    icon: <Leaf size={20} />,
    img:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=800",
    color: "#2d6a4f",
  },
  {
    category: "Lịch sử & Văn hóa",
    title: "Hành trình tìm hiểu lịch sử – bảo tàng & di tích",
    age: "8 – 15 tuổi",
    duration: "1 Ngày",
    icon: <Landmark size={20} />,
    img:
      "https://images2.thanhnien.vn/528068263637045248/2025/1/3/anh-19a-17359154897271376696203.jpg",
    color: "#9c6644",
  },
  {
    category: "Kỹ năng & Định hướng",
    title: "Trại hè Thủ lĩnh: Kỹ năng sinh tồn & Lãnh đạo trẻ",
    age: "12 - 17 tuổi",
    duration: "4 Ngày 3 Đêm",
    icon: <UserCheck size={20} />,
    img:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800",
    color: "#0052cc",
  },
  {
    category: "Du lịch trải nghiệm",
    title: "Nha Trang trải nghiệm: Biển – Khoa học – Văn hóa địa phương",
    age: "10 – 18 tuổi",
    duration: "3 Ngày 2 Đêm",
    icon: <Globe size={20} />,
    img:
      "https://images.unsplash.com/photo-1596414086775-3e321ab08f36?auto=format&fit=crop&q=80&w=800",
    color: "#005f73",
  },
];
