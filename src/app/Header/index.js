import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Header = () => {
  //const [city, setCity] = useState("Đang xác định...");

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(
    //   async (position) => {
    //     const { latitude: lat, longitude: lon } = position.coords;
    //     try {
    //       const res = await fetch(
    //         `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
    //       );
    //       const data = await res.json();
    //       setCity(
    //         data.address.city ||
    //           data.address.town ||
    //           data.address.village ||
    //           "Việt Nam"
    //       );
    //     } catch (err) {
    //       setCity("Việt Nam");
    //     }
    //   },
    //   () => setCity("Việt Nam")
    // );
  }, []);

  return (
    <div className="header-container shadow-sm bg-white">
      {/* 1. Top Bar: Logo, Search, Location */}
      <Container className="py-2">
        <div className="d-flex align-items-center justify-content-between flex-nowrap gap-2 gap-md-4">
          <Navbar.Brand href="/" className="m-0">
            <img
              src="https://cdn.myvietnamtour.vn/uploads/vnt.png"
              alt="Logo"
              className="header-logo"
            />
          </Navbar.Brand>

          <Form className="flex-grow-1 search-container">
            <div className="search-wrapper">
              <FormControl
                type="search"
                placeholder="Tìm chuyến đi..."
                className="search-input"
              />
              <FaSearch className="search-icon-inside" />
            </div>
          </Form>

          <div
            className="d-none d-lg-flex align-items-center gap-2 flex-shrink-0"
            style={{ color: "#1D61AD", fontSize: "14px", fontWeight: "700" }}
          >
            <div className="px-3 py-1 border-start">Hotline: 0373.954.963</div>
          </div>
        </div>
      </Container>

      {/* 2. Sub Nav: Danh mục có hiệu ứng cuộn ngang trên Mobile */}
      <div className="sub-nav-scroll">
        <Container>
          <Nav className="flex-nowrap sub-nav-content">
            {HeaderNavData.map((item) => (
              <Nav.Link
                key={item.id}
                href={item.link}
                className="sub-nav-link-item"
              >
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </div>
    </div>
  );
};

const HeaderNavData = [
  { id: 1, name: "Team Building", link: "/dich-vu/team-building" },
  { id: 2, name: "Du lịch trong nước", link: "/dich-vu/du-lich-trong-nuoc" },
  { id: 3, name: "Tổ chức Event", link: "/dich-vu/to-chuc-su-kien" },
  { id: 4, name: "Cho thuê xe", link: "/dich-vu/cho-thue-xe" },
  { id: 5, name: "Trải nghiệm học tập", link: "/dich-vu/du-lich-hoc-tap" },
  { id: 6, name: "Du lịch Mice", link: "/dich-vu/du-lich-mice" },
  { id: 7, name: "YEP, Tân niên", link: "/dich-vu/year-end-party" },
  { id: 8, name: "Hội nghị - Hội thảo", link: "/dich-vu/hoi-nghi-hoi-thao" },
  {
    id: 9,
    name: "Booking dịch vụ: Khách sạn, nhà hàng",
    link: "/dich-vu/booking-dich-vu",
  },
];

export default Header;
