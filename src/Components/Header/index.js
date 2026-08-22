import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt, FaChevronRight } from "react-icons/fa";

import "../Styles/Header.css";

const Header = ({ navigationData = [] }) => {
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* =========================================================
     MENU MẶC ĐỊNH
     Nếu API navigationData có dữ liệu thì sẽ dùng API
  ========================================================= */
  const defaultNavigation = [
    {
      id: "home",
      name: "Trang chủ",
      path: "/",
    },
    {
      id: "tour",
      name: "Tour du lịch",
      path: "/danh-sach-tour",
    },
    {
      id: "corporate",
      name: "Tour khách đoàn",
      path: "/danh-sach-tour",
    },
    {
      id: "blog",
      name: "Cẩm nang",
      path: "/blog",
    },
  ];

  const menuItems =
    navigationData && navigationData.length > 0
      ? navigationData
      : defaultNavigation;

  /* =========================================================
     SCROLL
  ========================================================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     KHÓA SCROLL KHI MỞ MOBILE MENU
  ========================================================= */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =========================================================
     RESOLVE PATH
  ========================================================= */
  const getMenuPath = (item) => {
    if (item.path) {
      return item.path;
    }

    if (item.url) {
      return item.url;
    }

    if (item.slug) {
      return `/${item.slug}`;
    }

    return null;
  };

  /* =========================================================
     HANDLE MENU
  ========================================================= */
  const handleMenuClick = (item) => {
    const path = getMenuPath(item);

    if (path) {
      navigate(path);
    }

    setMobileOpen(false);
  };

  return (
    <>
      <header className={`vnt-header ${scrolled ? "vnt-header-scrolled" : ""}`}>
        <div className="vnt-header-inner">
          {/* =================================================
              LOGO
          ================================================= */}
          <Link
            to="/"
            className="vnt-header-brand"
            onClick={() => setMobileOpen(false)}
          >
            <img
              src="https://cdn.myvietnamtour.vn/uploads/logovnt.png"
              alt="Việt Nam Tour"
              className="vnt-header-logo"
            />

            <div className="vnt-header-brand-text">
              <strong>VIỆT NAM TOUR</strong>

              <span>KHÁM PHÁ VẺ ĐẸP VIỆT</span>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}
          <nav className="vnt-header-nav">
            {menuItems.map((item, index) => (
              <button
                key={item.id || index}
                type="button"
                className="vnt-header-nav-item"
                onClick={() => handleMenuClick(item)}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* =================================================
              DESKTOP RIGHT
          ================================================= */}
          <div className="vnt-header-actions">
            <a href="tel:0373954963" className="vnt-header-hotline">
              <div className="vnt-header-hotline-icon">
                <FaPhoneAlt />
              </div>

              <div>
                <span>Tư vấn ngay</span>
                <strong>0373 954 963</strong>
              </div>
            </a>

            <button
              type="button"
              className="vnt-header-tour-btn"
              onClick={() => navigate("/danh-sach-tour")}
            >
              Xem tour
              <FaChevronRight />
            </button>
          </div>

          {/* =================================================
              MOBILE ACTIONS
          ================================================= */}
          <div className="vnt-header-mobile-actions">
            <a
              href="tel:0373954963"
              className="vnt-header-mobile-phone"
              aria-label="Gọi Việt Nam Tour"
            >
              <FaPhoneAlt />
            </a>

            <button
              type="button"
              className={`vnt-header-menu-btn ${mobileOpen ? "active" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}
      <div
        className={`vnt-mobile-menu-overlay ${mobileOpen ? "show" : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      <div className={`vnt-mobile-menu ${mobileOpen ? "open" : ""}`}>
        <div className="vnt-mobile-menu-header">
          <span>MENU</span>

          <button type="button" onClick={() => setMobileOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <nav className="vnt-mobile-nav">
          {menuItems.map((item, index) => (
            <button
              key={item.id || index}
              type="button"
              onClick={() => handleMenuClick(item)}
            >
              <span>{item.name}</span>

              <FaChevronRight />
            </button>
          ))}
        </nav>

        {/* MOBILE CTA */}
        <div className="vnt-mobile-menu-contact">
          <span>VIỆT NAM TOUR</span>

          <h3>Bạn cần tư vấn hành trình?</h3>

          <p>
            Đội ngũ Việt Nam Tour sẵn sàng hỗ trợ tour cá nhân, khách đoàn, MICE
            và sự kiện.
          </p>

          <a href="tel:0373954963">
            <FaPhoneAlt />

            <div>
              <span>Hotline tư vấn</span>
              <strong>0373 954 963</strong>
            </div>
          </a>
        </div>
      </div>

      {/* Spacer vì header fixed */}
      <div className="vnt-header-spacer" />
    </>
  );
};

export default Header;
