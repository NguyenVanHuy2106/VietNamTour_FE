import React from "react";
import {
  Users,
  Map,
  GraduationCap,
  Ticket,
  Ship,
  ArrowRight,
} from "lucide-react";

import "./index.css";

const Search = () => {
  const serviceGroups = [
    {
      id: "mice",
      category: "DOANH NGHIỆP",
      title: "Team Building, MICE & Sự Kiện",
      icon: <Users size={22} />,
      services: [
        "Team Building",
        "Tổ chức Event",
        "Hội nghị / Hội thảo",
        "YEP & Tân niên",
      ],
      image:
        "https://cms.cybershow.vn/wp-content/uploads/2020/02/company-trip-prudential-118-scaled.jpg",
      type: "featured",
    },
    {
      id: "tour",
      category: "KHÁM PHÁ",
      title: "Du Lịch Truyền Thống",
      icon: <Map size={22} />,
      services: ["Du lịch trong nước", "Hành hương", "Trekking"],
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop",
      type: "wide",
    },
    {
      id: "edu",
      category: "TRẢI NGHIỆM",
      title: "Học Tập & Trải Nghiệm",
      icon: <GraduationCap size={22} />,
      services: ["Trải nghiệm học tập", "Ngoại khoá", "Dã ngoại"],
      image:
        "https://bizweb.dktcdn.net/100/072/558/files/tour-hoc-sinh-5.jpg?v=1583379965455",
      type: "small",
    },
    {
      id: "luxury",
      category: "SANG TRỌNG",
      title: "Du Thuyền Cao Cấp",
      icon: <Ship size={22} />,
      services: ["Nghỉ dưỡng trên vịnh", "Tiệc du thuyền"],
      image:
        "https://travelhalong.com.vn/UserFiles/images/Du%20thuy%E1%BB%81n%205%20sao/Scarlet%20Pearl/DJI_0013%20-%20Copy.jpg",
      type: "small",
    },
    {
      id: "support",
      category: "TIỆN ÍCH",
      title: "Dịch Vụ Booking",
      icon: <Ticket size={22} />,
      services: [
        "Vé máy bay",
        "Combo du lịch",
        "Khách sạn",
        "Vé tham quan",
        "Nhà hàng",
      ],
      image:
        "https://static.vinwonders.com/production/2025/02/canh-dep-sai-gon-banner.jpg",
      type: "full",
    },
  ];

  return (
    <section className="vnt-services-section">
      <div className="vnt-services-container">
        {/* HEADER */}
        <div className="vnt-services-header">
          <div className="vnt-services-heading">
            <span className="vnt-services-eyebrow">HỆ SINH THÁI LỮ HÀNH</span>

            <h2>Dịch vụ đa trải nghiệm</h2>

            <p>
              Giải pháp du lịch toàn diện dành cho cá nhân, doanh nghiệp và tổ
              chức với hệ thống dịch vụ chuyên nghiệp.
            </p>
          </div>
        </div>

        {/* SERVICES */}
        <div className="vnt-services-grid">
          {serviceGroups.map((group) => (
            <article
              key={group.id}
              className={`vnt-service-card vnt-service-${group.type}`}
            >
              <div
                className="vnt-service-image"
                style={{
                  backgroundImage: `url(${group.image})`,
                }}
              />

              <div className="vnt-service-overlay" />

              <div className="vnt-service-content">
                {/* TOP */}
                <div className="vnt-service-top">
                  <div className="vnt-service-icon">{group.icon}</div>

                  <span className="vnt-service-category">{group.category}</span>
                </div>

                {/* BOTTOM */}
                <div className="vnt-service-bottom">
                  <h3>{group.title}</h3>

                  <ul className="vnt-service-tags">
                    {group.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>

                  <div className="vnt-service-link">
                    <span>Khám phá chi tiết</span>
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* MOBILE HINT */}
        <div className="vnt-services-mobile-hint">
          <span>Vuốt để khám phá thêm</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </section>
  );
};

export default Search;
