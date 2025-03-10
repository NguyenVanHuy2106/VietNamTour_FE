import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { FaHome, FaBars } from "react-icons/fa"; // Import icon Home & Menu
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Import file CSS

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu-container">
      {/* Menu chính */}
      <div className={`menu-items ${isOpen ? "open" : ""}`}>
        <Nav.Link href="#" className="menu-item home">
          <FaHome style={{ marginRight: 5, width: 25, height: 25 }} />
        </Nav.Link>
        {HeaderNavData.map((item) => (
          <Nav.Link key={item.id} href={item.link} className="menu-item">
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

const HeaderNavData = [
  { id: 1, name: "TOUR TRONG NƯỚC", link: "#" },
  { id: 2, name: "TOUR NƯỚC NGOÀI", link: "#" },
  { id: 3, name: "TOUR ĐOÀN", link: "#" },
  { id: 4, name: "TOUR DOANH NGHIỆP", link: "#" },
  { id: 5, name: "BLOG", link: "#" },
  { id: 6, name: "KHẢO SÁT", link: "#" },
  { id: 7, name: "LIÊN HỆ", link: "#" },
  { id: 8, name: "TUYỂN DỤNG", link: "#" },
];
