import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="p-3 flex-column"
      style={{ backgroundColor: "#ffffff", color: "#1D61AD" }}
    >
      <Container className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
        {/* Logo nhỏ hơn */}
        <Navbar.Brand href="#" className="me-3 d-flex align-items-center">
          <img
            src="https://images.vietnamluxtour.com/uploads/vnt.png"
            alt="Logo"
            style={{ width: "280px", height: "80px" }}
          />
        </Navbar.Brand>

        {/* Ô tìm kiếm giữ nguyên */}
        <Form className="d-flex flex-grow-1 mx-3" style={{ minWidth: "200px" }}>
          <FormControl
            type="search"
            placeholder="Tìm kiếm..."
            className="me-2"
          />
        </Form>

        {/* Administrator - chỉ hiển thị trên màn hình lớn */}
        <div className="d-none d-lg-flex align-items-center">
          <img
            src="https://images.vietnamluxtour.com/uploads/user-icon.png"
            alt="Admin"
            style={{ width: "40px", height: "40px" }}
          />
          <span className="ms-2" style={{ color: "#1D61AD" }}>
            Administrator
          </span>
        </div>
      </Container>

      {/* Thanh menu (chỉ hiển thị trên màn hình lớn) */}
      <Navbar.Collapse id="navbar-nav" className="w-100 d-none d-lg-block">
        <Nav className="d-flex justify-content-center w-100 flex-wrap">
          {HeaderNavData.map((item) => (
            <Nav.Link
              key={item.id}
              href={item.link}
              style={{
                fontSize: "14px",
                color: "#1D61AD",
                padding: "5px 10px",
              }}
            >
              {item.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

const HeaderNavData = [
  { id: 1, name: "Team Building", link: "#" },
  { id: 2, name: "Gala Dinner", link: "#" },
  { id: 3, name: "Tổ chức Event", link: "#" },
  { id: 4, name: "Cho thuê xe", link: "#" },
  { id: 5, name: "Vé máy báy", link: "#" },
  { id: 6, name: "Du lịch trải nghiệm học tập", link: "#" },
  { id: 7, name: "Du lịch Mice", link: "#" },
  { id: 8, name: "Tổ chức YEP, Tân niên", link: "#" },
  { id: 9, name: "Hội nghị - Hội thảo", link: "#" },
  { id: 10, name: "Booking dịch vụ: Khách sạn, nhà hàng,...", link: "#" },
];
