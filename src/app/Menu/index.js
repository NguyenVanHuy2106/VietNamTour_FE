import React from "react";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Import file CSS

const Menu = () => {
  return (
    <div className="menu-container">
      {HeaderNavData.map((item) => (
        <Nav.Link key={item.id} href={item.link} className="menu-item">
          {item.name}
        </Nav.Link>
      ))}
    </div>
  );
};

export default Menu;

const HeaderNavData = [
  { id: 1, name: "TOUR TRONG NƯỚC", link: "#" },
  { id: 2, name: "TOUR NƯỚC NGOÀI", link: "#" },
  { id: 3, name: "TOUR ĐOÀN", link: "#" },
  { id: 4, name: "TOUR DOANH NGHIỆP", link: "#" },
  { id: 5, name: "DỊCH VỤ", link: "#" },
  { id: 6, name: "KHẢO SÁT", link: "#" },
  { id: 7, name: "LIÊN HỆ", link: "#" },
  { id: 8, name: "TUYỂN DỤNG", link: "#" },
];
