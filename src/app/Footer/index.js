import React from "react";
import { Nav } from "react-bootstrap";
import { FaHome } from "react-icons/fa"; // Import icon Home
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Import file CSS

const Footer = () => {
  return (
    <div className="menu-container-footer">
      <Nav.Link href="#" className="homeFooter">
        HOTLINE
      </Nav.Link>
      {HeaderNavData.map((item) => (
        <Nav.Link
          key={item.id}
          href={item.link}
          className="menu-item-footer"
          style={{
            fontStyle: "italic",
          }}
        >
          {item.name}
        </Nav.Link>
      ))}
    </div>
  );
};

export default Footer;

const HeaderNavData = [
  { id: 1, name: "MR HOÀNG - 076 4747 160", link: "#" },
  { id: 2, name: "MR HUY - 037 395 4963", link: "#" },
  { id: 3, name: "MR HẬU - 0896 41 42 43", link: "#" },
];
