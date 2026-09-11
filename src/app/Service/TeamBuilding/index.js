import React, { useEffect, useMemo, useState } from "react";
import API from "../../../config/APINoToken";
import { Helmet } from "react-helmet";

import {
  ArrowRight,
  Award,
  Briefcase,
  Check,
  ChevronDown,
  ClipboardList,
  Flag,
  HeartHandshake,
  Lightbulb,
  PackageCheck,
  Phone,
  Puzzle,
  Settings,
  ShieldCheck,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

import "./index.css";

export default function TeamBuilding() {
  const [openFaq, setOpenFaq] = useState(-1);
  const [dataCustomer, setDataCustomer] = useState([]);

  const [builder, setBuilder] = useState({
    people: "100 - 300",
    location: "Phan Thiết",
    goal: "Gắn kết",
    style: "Năng lượng",
  });

  useEffect(() => {
    getCustomer();
  }, []);

  const getCustomer = async () => {
    try {
      const response = await API.get("customer/get");

      setDataCustomer(response.data.data || []);
    } catch (error) {
      console.error("Lỗi lấy khách hàng:", error);
    }
  };

  const displayCustomers = useMemo(() => {
    return dataCustomer.slice(0, 10);
  }, [dataCustomer]);

  const scrollToContact = () => {
    const element = document.getElementById("tb-contact");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("tb-projects");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const formats = [
    {
      title: "BEACH TEAM BUILDING",
      desc: "Bãi biển · Resort · Khu du lịch",
      sub: "30 - 1.000+ người",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=90",
    },
    {
      title: "AMAZING RACE",
      desc: "Khám phá điểm đến theo trạm thử thách",
      sub: "50 - 500+ người",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=90",
    },
    {
      title: "CORPORATE TEAM BUILDING",
      desc: "Teamwork · Leadership · Communication",
      sub: "Theo mục tiêu doanh nghiệp",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=90",
    },
    {
      title: "CSR TEAM BUILDING",
      desc: "Gắn kết đội ngũ kết hợp hoạt động cộng đồng",
      sub: "Gắn kết · Ý nghĩa",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=90",
    },
    {
      title: "TREKKING / ADVENTURE",
      desc: "Chinh phục · Thử thách · Vượt giới hạn",
      sub: "Đội ngũ năng động",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=90",
    },
    {
      title: "INDOOR TEAM BUILDING",
      desc: "Ballroom · Hội trường · Resort",
      sub: "Không phụ thuộc thời tiết",
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=90",
    },
  ];

  const concepts = [
    {
      title: "ONE TEAM\nONE DREAM",
      desc: "Cùng một mục tiêu\nCùng một hành trình",
      fit: "Annual Trip / Company Trip",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=90",
    },
    {
      title: "BREAK THE LIMIT",
      desc: "Phá vỡ giới hạn\nBứt tốc tương lai",
      fit: "Kick Off / Sales Team",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=90",
    },
    {
      title: "TOGETHER\nWE GROW",
      desc: "Gắn kết nội lực\nCùng nhau phát triển",
      fit: "Doanh nghiệp đông nhân sự",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=90",
    },
    {
      title: "WE ARE ONE",
      desc: "Khác biệt từng cá nhân\nĐồng lòng một tập thể",
      fit: "Doanh nghiệp nhiều phòng ban",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=90",
    },
    {
      title: "BEYOND\nTHE FUTURE",
      desc: "Kết nối hôm nay\nKiến tạo ngày mai",
      fit: "Ngân hàng / Corporate",
      image:
        "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=900&q=90",
    },
  ];

  const faq = [
    {
      question: "Bao nhiêu người thì tổ chức Team Building được?",
      answer:
        "Từ khoảng 20 - 30 người đã có thể tổ chức. Việt Nam Tour sẽ điều chỉnh số đội, số trạm và nhân sự vận hành phù hợp với quy mô đoàn.",
    },
    {
      question: "Việt Nam Tour có lo địa điểm không?",
      answer:
        "Có. Việt Nam Tour có thể tư vấn bãi biển, resort, khu du lịch, sân cỏ hoặc hội trường phù hợp.",
    },
    {
      question: "Có thiết kế kịch bản riêng cho công ty không?",
      answer:
        "Có. Concept, key message, storyline, trò chơi và hình ảnh chương trình có thể thiết kế riêng theo doanh nghiệp.",
    },
    {
      question: "Có thể tổ chức Team Building mà không mua tour không?",
      answer:
        "Có. Khách hàng có thể sử dụng riêng dịch vụ Team Building hoặc kết hợp tour, Gala Dinner và sự kiện.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Team Building doanh nghiệp | Việt Nam Tour</title>
      </Helmet>

      <main className="tbx">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="tbx-hero">
          <div className="tbx-hero-image">
            <img
              src="https://cdn.myvietnamtour.vn/IMG_0350%202.jpg"
              alt="Team Building"
            />
          </div>

          <div className="tbx-hero-mask" />

          <div className="tbx-container tbx-hero-inner">
            <div className="tbx-hero-content">
              <span className="tbx-hero-label">TEAM BUILDING</span>

              <h1>
                BIẾN MỘT TẬP THỂ
                <br />
                <span>THÀNH MỘT ĐỘI NGŨ.</span>
              </h1>

              <p>
                Việt Nam Tour thiết kế & tổ chức chương trình{" "}
                <strong>Team Building</strong> trọn gói dành riêng cho doanh
                nghiệp từ <strong>30 - 1.000+ thành viên.</strong>
              </p>

              <div className="tbx-hero-meta">
                <span>KỊCH BẢN RIÊNG</span>
                <i>•</i>
                <span>MC</span>
                <i>•</i>
                <span>GAME</span>
                <i>•</i>
                <span>ĐẠO CỤ</span>
                <i>•</i>
                <span>ÂM THANH</span>
                <i>•</i>
                <span>BACKDROP</span>
                <i>•</i>
                <span>QUAY CHỤP</span>
              </div>

              <div className="tbx-hero-actions">
                <button
                  type="button"
                  className="tbx-btn-primary"
                  onClick={scrollToContact}
                >
                  NHẬN Ý TƯỞNG TEAM BUILDING
                </button>

                <button
                  type="button"
                  className="tbx-btn-secondary"
                  onClick={scrollToProjects}
                >
                  XEM CHƯƠNG TRÌNH ĐÃ TỔ CHỨC
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            STATS
        ===================================================== */}

        <div className="tbx-stats">
          <div className="tbx-container tbx-stats-grid">
            <div>
              <Award />
              <p>
                <strong>100+</strong>
                <span>CHƯƠNG TRÌNH</span>
              </p>
            </div>

            <div>
              <Users />
              <p>
                <strong>30 - 1.000+</strong>
                <span>THÀNH VIÊN</span>
              </p>
            </div>

            <div>
              <ClipboardList />
              <p>
                <strong>KỊCH BẢN</strong>
                <span>THEO DOANH NGHIỆP</span>
              </p>
            </div>

            <div>
              <ShieldCheck />
              <p>
                <strong>TỔ CHỨC</strong>
                <span>TOÀN QUỐC</span>
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="tbx-section tbx-intro">
          <div className="tbx-container tbx-intro-grid">
            <div className="tbx-intro-image">
              <img
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1500&q=90"
                alt=""
              />
            </div>

            <div className="tbx-intro-content">
              <span className="tbx-eyebrow">TEAM BUILDING</span>

              <h2>
                KHÔNG PHẢI
                <br />
                <span>CHỈ LÀ MỘT BUỔI CHƠI.</span>
              </h2>

              <p className="tbx-intro-question">
                Một chương trình tốt phải trả lời được doanh nghiệp muốn đạt
                điều gì?
              </p>

              <div className="tbx-intro-values">
                <div>
                  <Users />
                  Gắn kết nhân sự
                </div>

                <div>
                  <HeartHandshake />
                  Tri ân đội ngũ
                </div>

                <div>
                  <Briefcase />
                  Truyền tải văn hóa doanh nghiệp
                </div>

                <div>
                  <Zap />
                  Tái tạo năng lượng
                </div>

                <div>
                  <Target />
                  Kick-off mục tiêu mới
                </div>

                <div>
                  <Puzzle />
                  Kết nối các phòng ban
                </div>
              </div>

              <p className="tbx-intro-note">
                <strong>
                  Việt Nam Tour bắt đầu từ mục tiêu của doanh nghiệp,
                </strong>
                <br />
                sau đó mới xây dựng concept, storyline và hệ thống thử thách.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            FORMATS
        ===================================================== */}

        <section className="tbx-section tbx-format-section">
          <div className="tbx-container">
            <div className="tbx-center-heading">
              <h2>CHỌN HÌNH THỨC TEAM BUILDING</h2>
            </div>

            <div className="tbx-format-grid">
              {formats.map((item, index) => (
                <article key={index} className="tbx-format-card">
                  <img src={item.image} alt={item.title} />

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <strong>{item.sub}</strong>
                  </div>
                </article>
              ))}
            </div>

            <div className="tbx-center-button">
              <button type="button" onClick={scrollToContact}>
                TƯ VẤN HÌNH THỨC PHÙ HỢP
                <ArrowRight />
              </button>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section className="tbx-section tbx-process">
          <div className="tbx-container">
            <div className="tbx-process-heading">
              <h2>
                DOANH NGHIỆP ĐƯA MỤC TIÊU
                <br />
                VIỆT NAM TOUR BIẾN NÓ
                <span> THÀNH CUỘC CHƠI.</span>
              </h2>
            </div>

            <div className="tbx-process-grid">
              <article>
                <ClipboardList />
                <h3>BRIEF</h3>

                <p>
                  Mục tiêu
                  <br />
                  Số lượng
                  <br />
                  Độ tuổi
                  <br />
                  Văn hóa
                </p>
              </article>

              <ArrowRight className="tbx-arrow" />

              <article className="orange">
                <Lightbulb />
                <h3>BIG IDEA</h3>

                <p>
                  Concept
                  <br />
                  Key message
                  <br />
                  Storyline
                </p>
              </article>

              <ArrowRight className="tbx-arrow" />

              <article>
                <Puzzle />
                <h3>GAME DESIGN</h3>

                <p>
                  Trạm thử thách
                  <br />
                  Luật chơi
                  <br />
                  Đạo cụ
                </p>
              </article>

              <ArrowRight className="tbx-arrow" />

              <article className="orange">
                <Settings />
                <h3>PRODUCTION</h3>

                <p>
                  Backdrop
                  <br />
                  Âm thanh
                  <br />
                  MC · Nhân sự
                </p>
              </article>

              <ArrowRight className="tbx-arrow" />

              <article>
                <Flag />
                <h3>SHOWTIME</h3>

                <p>
                  Vận hành
                  <br />
                  Quay chụp
                  <br />
                  Tổng kết
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONCEPT
        ===================================================== */}

        <section className="tbx-section tbx-concepts">
          <div className="tbx-container">
            <div className="tbx-center-heading">
              <h2>
                KỊCH BẢN TEAM BUILDING
                <span> – CONCEPT LIBRARY</span>
              </h2>
            </div>

            <div className="tbx-concept-grid">
              {concepts.map((item, index) => (
                <article key={index}>
                  <img src={item.image} alt={item.title} />

                  <div className="tbx-concept-overlay" />

                  <section>
                    <h3>
                      {item.title.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </h3>

                    <p>
                      {item.desc.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>

                    <strong>Phù hợp: {item.fit}</strong>
                  </section>
                </article>
              ))}
            </div>

            <div className="tbx-center-button">
              <button type="button">
                XEM THÊM CONCEPT
                <ArrowRight />
              </button>
            </div>
          </div>
        </section>

        {/* =====================================================
            BENEFIT + PACKAGE
        ===================================================== */}

        <section className="tbx-section tbx-package">
          <div className="tbx-container tbx-package-layout">
            <div className="tbx-benefit">
              <h2>
                MỖI TRÒ CHƠI
                <br />
                ĐỀU CÓ MỘT LÝ DO.
              </h2>

              <div className="tbx-benefit-grid">
                <div>
                  <HeartHandshake />
                  <p>
                    <strong>Communication</strong>
                    <span>Truyền đạt & phối hợp</span>
                  </p>
                </div>

                <div>
                  <Zap />
                  <p>
                    <strong>Speed</strong>
                    <span>Khả năng phản ứng</span>
                  </p>
                </div>

                <div>
                  <Users />
                  <p>
                    <strong>Collaboration</strong>
                    <span>Phân chia vai trò</span>
                  </p>
                </div>

                <div>
                  <Lightbulb />
                  <p>
                    <strong>Problem Solving</strong>
                    <span>Giải quyết vấn đề</span>
                  </p>
                </div>

                <div>
                  <Target />
                  <p>
                    <strong>Strategy</strong>
                    <span>Lập kế hoạch</span>
                  </p>
                </div>

                <div>
                  <Trophy />
                  <p>
                    <strong>Leadership</strong>
                    <span>Khả năng dẫn dắt</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="tbx-package-side">
              <h2>TEAM BUILDING PACKAGE</h2>

              <div className="tbx-package-grid">
                <article>
                  <header>
                    <h3>ESSENTIAL</h3>
                    <span>Chương trình gọn nhẹ</span>
                  </header>

                  <ul>
                    <li>
                      <Check /> MC
                    </li>
                    <li>
                      <Check /> Game master
                    </li>
                    <li>
                      <Check /> Đạo cụ
                    </li>
                    <li>
                      <Check /> Backdrop
                    </li>
                    <li>
                      <Check /> Nhân sự vận hành
                    </li>
                  </ul>

                  <button type="button" onClick={scrollToContact}>
                    NHẬN BÁO GIÁ
                  </button>
                </article>

                <article className="featured">
                  <div className="tbx-recommend">ĐỀ XUẤT</div>

                  <header>
                    <h3>SIGNATURE</h3>
                    <span>Đủ dấu ấn thương hiệu</span>
                  </header>

                  <ul>
                    <li>
                      <Check /> Concept riêng
                    </li>
                    <li>
                      <Check /> Storyline
                    </li>
                    <li>
                      <Check /> MC chuyên nghiệp
                    </li>
                    <li>
                      <Check /> Game master
                    </li>
                    <li>
                      <Check /> Đạo cụ custom
                    </li>
                    <li>
                      <Check /> Âm thanh
                    </li>
                    <li>
                      <Check /> Backdrop
                    </li>
                  </ul>

                  <button type="button" onClick={scrollToContact}>
                    NHẬN BÁO GIÁ
                  </button>
                </article>

                <article>
                  <header>
                    <h3>CUSTOMIZED</h3>
                    <span>Thiết kế theo doanh nghiệp</span>
                  </header>

                  <ul>
                    <li>
                      <Check /> Concept độc quyền
                    </li>
                    <li>
                      <Check /> Đạo cụ riêng
                    </li>
                    <li>
                      <Check /> Sân khấu / LED
                    </li>
                    <li>
                      <Check /> Media production
                    </li>
                    <li>
                      <Check /> Gala integration
                    </li>
                  </ul>

                  <button type="button" onClick={scrollToContact}>
                    NHẬN BÁO GIÁ
                  </button>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BUILDER
        ===================================================== */}

        <section className="tbx-section tbx-builder" id="tb-contact">
          <div className="tbx-container tbx-builder-grid">
            <div className="tbx-builder-left">
              <h2>TẠO TEAM BUILDING CỦA BẠN</h2>

              <p>Điền thông tin để nhận kịch bản phù hợp miễn phí!</p>

              <div className="tbx-choice">
                <label>SỐ LƯỢNG THÀNH VIÊN</label>

                <div>
                  {[
                    "30 - 50",
                    "50 - 100",
                    "100 - 300",
                    "300 - 500",
                    "500+",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={builder.people === item ? "active" : ""}
                      onClick={() =>
                        setBuilder({
                          ...builder,
                          people: item,
                        })
                      }
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="tbx-choice">
                <label>ĐỊA ĐIỂM TỔ CHỨC</label>

                <div>
                  {[
                    "Vũng Tàu",
                    "Phan Thiết",
                    "Đà Lạt",
                    "Nha Trang",
                    "Khác",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={builder.location === item ? "active" : ""}
                      onClick={() =>
                        setBuilder({
                          ...builder,
                          location: item,
                        })
                      }
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="tbx-choice">
                <label>MỤC TIÊU CHÍNH</label>

                <div>
                  {["Gắn kết", "Kick Off", "Tri ân", "Văn hóa", "Vui chơi"].map(
                    (item) => (
                      <button
                        key={item}
                        type="button"
                        className={builder.goal === item ? "active" : ""}
                        onClick={() =>
                          setBuilder({
                            ...builder,
                            goal: item,
                          })
                        }
                      >
                        {item}
                      </button>
                    ),
                  )}
                </div>
              </div>

              <div className="tbx-style-title">PHONG CÁCH CHƯƠNG TRÌNH</div>

              <div className="tbx-style-grid">
                {[
                  ["🔥", "Máu lửa"],
                  ["⚙", "Chiến thuật"],
                  ["☀", "Chinh phục"],
                  ["💙", "Vui nhộn"],
                  ["✨", "Sang trọng"],
                  ["💗", "Ý nghĩa"],
                ].map((item) => (
                  <button
                    type="button"
                    key={item[1]}
                    className={builder.style === item[1] ? "active" : ""}
                    onClick={() =>
                      setBuilder({
                        ...builder,
                        style: item[1],
                      })
                    }
                  >
                    <span>{item[0]}</span>
                    <strong>{item[1]}</strong>
                  </button>
                ))}
              </div>
            </div>

            <div className="tbx-contact-box">
              <div>
                <label>Họ và tên của bạn?</label>
                <input type="text" placeholder="Nhập họ tên" />

                <label>Số điện thoại?</label>
                <input type="tel" placeholder="Nhập số điện thoại" />

                <button type="button">NHẬN KỊCH BẢN PHÙ HỢP</button>

                <small>Chúng tôi cam kết bảo mật thông tin của bạn.</small>
              </div>

              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=90"
                alt=""
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECT
        ===================================================== */}

        <section className="tbx-section tbx-projects" id="tb-projects">
          <div className="tbx-container">
            <h2>DỰ ÁN ĐÃ TỔ CHỨC</h2>

            <div className="tbx-project-grid">
              <article className="big">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1500&q=90"
                  alt=""
                />

                <div />

                <section>
                  <span>TEAM BUILDING · 350 KHÁCH</span>
                  <h3>TOGETHER WE GROW</h3>
                  <p>Corporate Trip · Team Building · Gala Dinner</p>

                  <button type="button">
                    XEM CASE STUDY
                    <ArrowRight />
                  </button>
                </section>
              </article>

              <div className="mini">
                <img
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=90"
                  alt=""
                />

                <img
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=90"
                  alt=""
                />
              </div>

              <article className="big">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1500&q=90"
                  alt=""
                />

                <div />

                <section>
                  <span>TEAM BUILDING · 120 KHÁCH</span>
                  <h3>BREAK THE LIMIT</h3>

                  <button type="button">
                    XEM CASE STUDY
                    <ArrowRight />
                  </button>
                </section>
              </article>
            </div>

            {displayCustomers.length > 0 && (
              <>
                <div className="tbx-client-title">
                  ĐƯỢC LỰA CHỌN BỞI CÁC TỔ CHỨC & DOANH NGHIỆP
                </div>

                <div className="tbx-client-grid">
                  {displayCustomers.map((item, index) => (
                    <div
                      className="tbx-client-item"
                      key={`${item.customerid ||
                        item.customer_id ||
                        "customer"}-${index}`}
                    >
                      <img
                        src={item.customerlogo}
                        alt={item.customername || "Đối tác"}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* =====================================================
            PREP
        ===================================================== */}

        <section className="tbx-section tbx-prep">
          <div className="tbx-container tbx-prep-grid">
            <div>
              <h2>
                1 GIỜ TEAM BUILDING
                <br />
                LÀ HÀNG CHỤC GIỜ
                <br />
                CHUẨN BỊ.
              </h2>

              <p>
                “Khách hàng chỉ cần xuất hiện.
                <br />
                Phần còn lại để Việt Nam Tour chuẩn bị.”
              </p>
            </div>

            <div className="tbx-prep-items">
              {[
                ["Test đạo cụ", PackageCheck],
                ["Vẽ sơ game", Puzzle],
                ["Dựng backdrop", Target],
                ["Họp MC", Users],
                ["Chia nhân sự", Briefcase],
                ["Set âm thanh", Zap],
                ["Brief game master", ClipboardList],
              ].map((item, index) => {
                const Icon = item[1];

                return (
                  <div key={index}>
                    <Icon />
                    <span>{item[0]}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <section className="tbx-section tbx-faq">
          <div className="tbx-container">
            <div className="tbx-center-heading">
              <h2>CÂU HỎI THƯỜNG GẶP</h2>
            </div>

            <div className="tbx-faq-grid">
              {faq.map((item, index) => (
                <article
                  key={index}
                  className={openFaq === index ? "open" : ""}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <ChevronDown />
                  </button>

                  {openFaq === index && <p>{item.answer}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="tbx-mobile-cta">
          <a href="tel:0373954963">
            <Phone />
            GỌI TƯ VẤN
          </a>

          <button type="button" onClick={scrollToContact}>
            NHẬN BÁO GIÁ
          </button>
        </div>
      </main>
    </>
  );
}
