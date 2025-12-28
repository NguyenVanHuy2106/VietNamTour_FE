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
      icon: <Users size={24} />,
      services: [
        "Team Building",
        "Tổ chức Event",
        "Hội nghị / Hội thảo",
        "YEP & Tân niên",
      ],
      image:
        "https://cms.cybershow.vn/wp-content/uploads/2020/02/company-trip-prudential-118-scaled.jpg",
      gridArea: "1 / 1 / 3 / 3", // Ô này lớn nhất (2x2)
    },
    {
      id: "tour",
      category: "KHÁM PHÁ",
      title: "Du Lịch Truyền Thống",
      icon: <Map size={24} />,
      services: ["Du lịch trong nước", "Du lịch hành hương, Trekking"],
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop",
      gridArea: "1 / 3 / 2 / 5", // Ô nằm ngang (1x2)
    },
    {
      id: "edu",
      category: "TRẢI NGHIỆM",
      title: "Học Tập & Trải Nghiệm",
      icon: <GraduationCap size={24} />,
      services: ["Trải nghiệm học tấp", "Ngoại khoá, dã ngoại"],
      image:
        "https://bizweb.dktcdn.net/100/072/558/files/tour-hoc-sinh-5.jpg?v=1583379965455",
      gridArea: "2 / 3 / 3 / 4", // Ô 1x1
    },
    {
      id: "luxury",
      category: "SANG TRỌNG",
      title: "Du Thuyền Cao Cấp",
      icon: <Ship size={24} />,
      services: ["Nghỉ dưỡng trên vịnh", "Tiệc du thuyền"],
      image:
        "https://travelhalong.com.vn/UserFiles/images/Du%20thuy%E1%BB%81n%205%20sao/Scarlet%20Pearl/DJI_0013%20-%20Copy.jpg",
      gridArea: "2 / 4 / 3 / 5", // Ô 1x1
    },
    {
      id: "support",
      category: "TIỆN ÍCH",
      title: "Dịch Vụ booking",
      icon: <Ticket size={24} />,
      services: [
        "Vé máy bay nội địa & quốc tế",
        "Combo du lịch",
        "Khách sạn",
        "Vé tham quan",
        "Nhà hàng",
      ],
      image:
        "https://static.vinwonders.com/production/2025/02/canh-dep-sai-gon-banner.jpg",
      gridArea: "3 / 1 / 4 / 5", // Ô dài cuối trang (1x4)
    },
  ];

  return (
    <section className="bento-services-section">
      <div className="bento-container">
        <div className="bento-header-v4">
          <div className="text-left">
            <span className="v4-badge">HỆ SINH THÁI LỮ HÀNH</span>
            <h2 className="v4-title">Dịch vụ đa trải nghiệm</h2>
          </div>
          <p className="v4-desc">
            Cung cấp giải pháp du lịch toàn diện từ cá nhân đến doanh nghiệp với
            tiêu chuẩn chất lượng cao nhất.
          </p>
        </div>

        <div className="bento-grid-v4">
          {serviceGroups.map((group) => (
            <div
              key={group.id}
              className="bento-item"
              style={{ gridArea: group.gridArea }}
            >
              <div
                className="bento-item-img"
                style={{ backgroundImage: `url(${group.image})` }}
              ></div>
              <div className="bento-item-overlay"></div>

              <div className="bento-item-content">
                <div className="bento-item-top">
                  <div className="bento-icon-v4">{group.icon}</div>
                  <span className="bento-category">{group.category}</span>
                </div>

                <h3 className="bento-group-title">{group.title}</h3>

                <ul className="bento-sub-services">
                  {group.services.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>

                <div className="bento-item-footer">
                  <span className="explore-link">
                    Khám phá chi tiết <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Search;
