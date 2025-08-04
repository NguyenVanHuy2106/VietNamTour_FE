import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [city, setCity] = useState("Đang xác định...");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
          );
          const data = await res.json();
          const foundCity =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            "Không xác định";

          setCity(foundCity);
        } catch (err) {
          console.error("Lỗi khi lấy địa chỉ:", err);
          setCity("Không xác định");
        }
      },
      (error) => {
        console.error("Lỗi khi lấy vị trí:", error);
        setCity("Không xác định");
      }
    );
  }, []);

  return (
    <Navbar
      expand="lg"
      className="p-3 flex-column"
      style={{ backgroundColor: "#ffffff", color: "#1D61AD" }}
    >
      <Container className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
        <Navbar.Brand href="/" className="me-3 d-flex align-items-center">
          <img
            src="https://images.vietnamluxtour.com/uploads/vnt.png"
            alt="Logo"
            style={{ width: "280px", height: "80px" }}
          />
        </Navbar.Brand>

        <Form className="d-flex flex-grow-1 mx-3" style={{ minWidth: "200px" }}>
          <FormControl
            type="search"
            placeholder="Tìm kiếm..."
            className="me-2"
          />
        </Form>

        {/* Hiển thị vị trí thay vì admin */}
        <div className="d-none d-lg-flex align-items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="Location"
            style={{ width: "24px", height: "24px" }}
          />
          <span className="ms-2" style={{ color: "#1D61AD", fontSize: "16px" }}>
            {city}
          </span>
        </div>
      </Container>

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
