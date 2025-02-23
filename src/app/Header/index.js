import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <Navbar
      className="p-3 flex-column"
      style={{
        backgroundColor: "#ffffff",
        color: "#1D61AD",
        paddingTop: 0,
        paddingBottom: 0,
      }}
    >
      <Container
        className="d-flex justify-content-between align-items-center mb-2"
        style={{
          paddingTop: 0,
          paddingBottom: 0,
        }}
      >
        {/* Logo */}
        <Navbar.Brand href="#" className="me-3 d-flex align-items-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/LOGOWEB.png?alt=media&token=c2420a58-23d8-42ab-b9a5-c2d54a9c6c32" // Thay bằng logo thật
            alt="Logo"
            // className="rounded-circle me-2"
            style={{ width: "300px", height: "100px" }}
          />
        </Navbar.Brand>

        {/* Ô tìm kiếm */}
        <Form className="d-flex flex-grow-1 mx-3">
          <FormControl
            type="search"
            placeholder="Tìm kiếm..."
            className="me-2"
          />
        </Form>

        {/* Administrator */}
        <div className="d-flex align-items-center">
          <img
            src="https://via.placeholder.com/40" // Thay bằng avatar thật
            alt="Admin"
            style={{ width: "40px", height: "40px" }}
          />
          <span className="text-white">Administrator</span>
        </div>
      </Container>
      <div>
        <Nav className="">
          {HeaderNavData.map((item) => (
            <Nav.Link
              key={item.id}
              href={item.link}
              style={{
                fontSize: "14px",
                color: "#1D61AD",
                paddingTop: 0,
                paddingBottom: 0,
              }}
            >
              {item.name}
            </Nav.Link>
          ))}
        </Nav>
      </div>
    </Navbar>
  );
};

export default Header;

const HeaderNavData = [
  {
    id: 1,
    name: "Team Building",
    link: "#",
  },
  {
    id: 2,
    name: "Gala Dinner",
    link: "#",
  },
  {
    id: 3,
    name: "Tổ chức Event",
    link: "#",
  },
  {
    id: 4,
    name: "Cho thuê xe",
    link: "#",
  },
  {
    id: 5,
    name: "Vé máy báy",
    link: "#",
  },
  {
    id: 6,
    name: "Du lịch trải nghiệm học tập",
    link: "#",
  },
  {
    id: 7,
    name: "Du lịch Mice",
    link: "#",
  },
  {
    id: 8,
    name: "Tổ chức YEP, Tân niên",
    link: "#",
  },
  {
    id: 9,
    name: "Hội nghị - Hội thảo",
    link: "#",
  },
  {
    id: 10,
    name: "Booking dịch vụ: Khách sạn, nhà hàng,...",
    link: "#",
  },
];
