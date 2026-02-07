import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { FaHome, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ thêm
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu-container">
      {/* Menu chính */}
      <div className={`menu-items ${isOpen ? "open" : ""}`}>
        {/* Home */}
        <Nav.Link
          as={Link}
          to="/"
          className="menu-item home"
          onClick={() => setIsOpen(false)}
        >
          <FaHome style={{ marginRight: 5, width: 25, height: 25 }} />
        </Nav.Link>

        {/* Menu động */}
        {HeaderNavData.map((item) => (
          <Nav.Link
            key={item.id}
            as={Link}
            to={item.link}
            state={item.state} // ✅ truyền state
            className="menu-item"
            onClick={() => setIsOpen(false)} // đóng menu mobile
          >
            {item.name}
          </Nav.Link>
        ))}
      </div>

      {/* Nút mở menu khi responsive */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </div>
    </div>
  );
};

export default Menu;

/* ================= DATA ================= */

const HeaderNavData = [
  {
    id: 1,
    name: "TOUR TRONG NƯỚC",
    link: "/danh-sach-tour",
  },
  {
    id: 2,
    name: "TOUR DOANH NGHIỆP",
    link: "/danh-sach-tour",
    state: { tourtype: "DOAN" },
  },
  { id: 3, name: "TOUR NƯỚC NGOÀI", link: "" },
  { id: 4, name: "TIN TỨC - SỰ KIỆN", link: "/tin-tuc-su-kien" },
  { id: 5, name: "BLOG", link: "/blog" },
  { id: 6, name: "HÌNH ẢNH", link: "/hinh-anh" },
  { id: 7, name: "ĐÁNH GIÁ", link: "/danh-gia" },
  { id: 8, name: "LIÊN HỆ", link: "/lien-he" },
  { id: 9, name: "TUYỂN DỤNG", link: "/tuyen-dung" },
];
