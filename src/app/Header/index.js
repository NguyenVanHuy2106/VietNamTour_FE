import React, { useEffect, useRef, useState } from "react";

import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import {
  FaSearch,
  FaClipboardList,
  FaTimes,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

/* ==========================================
   VIET NAM TOUR HEADER
========================================== */

const CUSTOMER_PHONE_KEY = "vnt_customer_phone";
const QUOTE_LOOKUP_PATH = "/yeu-cau-bao-gia";

/* ==========================================
   PHONE HELPERS
========================================== */

function normalizePhone(value) {
  let phone = String(value || "")
    .trim()
    .replace(/[\s().-]/g, "");

  if (/^\+84\d{9}$/.test(phone)) {
    phone = "0" + phone.slice(3);
  }

  if (/^84\d{9}$/.test(phone)) {
    phone = "0" + phone.slice(2);
  }

  return phone;
}

function isValidPhone(phone) {
  return /^0\d{9}$/.test(phone);
}

/* ==========================================
   READ STORED PHONE
========================================== */

function getStoredPhone() {
  try {
    const phone = normalizePhone(
      window.localStorage.getItem(CUSTOMER_PHONE_KEY),
    );

    return isValidPhone(phone) ? phone : "";
  } catch (error) {
    return "";
  }
}

/* ==========================================
   SAVE PHONE
========================================== */

function saveCustomerPhone(phone) {
  try {
    window.localStorage.setItem(CUSTOMER_PHONE_KEY, phone);

    return true;
  } catch (error) {
    return false;
  }
}

/* ==========================================
   HEADER COMPONENT
========================================== */

const Header = () => {
  const navigate = useNavigate();

  const [showPhoneModal, setShowPhoneModal] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const phoneInputRef = useRef(null);

  /* ======================================
     OPEN QUOTE LOOKUP
  ====================================== */

  const handleQuoteLookup = () => {
    const storedPhone = getStoredPhone();

    // Đã có SĐT -> vào thẳng trang tra cứu
    if (storedPhone) {
      navigate(QUOTE_LOOKUP_PATH);
      return;
    }

    // Chưa có -> yêu cầu nhập số điện thoại
    setPhone("");
    setPhoneError("");
    setShowPhoneModal(true);
  };

  /* ======================================
     CLOSE MODAL
  ====================================== */

  const closePhoneModal = () => {
    setShowPhoneModal(false);
    setPhoneError("");
  };

  /* ======================================
     SUBMIT PHONE
  ====================================== */

  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    const normalizedPhone = normalizePhone(phone);

    if (!isValidPhone(normalizedPhone)) {
      setPhoneError("Vui lòng nhập số điện thoại hợp lệ gồm 10 chữ số.");
      return;
    }

    const saved = saveCustomerPhone(normalizedPhone);

    if (!saved) {
      setPhoneError(
        "Không thể lưu số điện thoại trên trình duyệt. " +
          "Vui lòng kiểm tra cài đặt trình duyệt.",
      );
      return;
    }

    setShowPhoneModal(false);
    setPhoneError("");

    navigate(QUOTE_LOOKUP_PATH);
  };

  /* ======================================
     MODAL EFFECTS
  ====================================== */

  useEffect(() => {
    if (!showPhoneModal) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    if (phoneInputRef.current) {
      phoneInputRef.current.focus();
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closePhoneModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showPhoneModal]);

  /* ======================================
     RENDER
  ====================================== */

  return (
    <>
      <div className="header-container shadow-sm bg-white">
        {/* TOP BAR */}

        <Container className="py-2">
          <div className="vnt-header-top">
            {/* LOGO */}

            <Navbar.Brand href="/" className="m-0 vnt-header-brand">
              <img
                src="https://cdn.myvietnamtour.vn/uploads/vnt.png"
                alt="Việt Nam Tour"
                className="header-logo"
              />
            </Navbar.Brand>

            {/* SEARCH */}

            <Form
              className="search-container"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div className="search-wrapper">
                <FormControl
                  type="search"
                  placeholder="Tìm chuyến đi..."
                  className="search-input"
                  aria-label="Tìm chuyến đi"
                />

                <FaSearch className="search-icon-inside" aria-hidden="true" />
              </div>
            </Form>

            {/* ACTIONS */}

            <div className="vnt-header-actions">
              {/* TRA CỨU BÁO GIÁ */}

              <button
                type="button"
                className="vnt-header-my-quotes"
                onClick={handleQuoteLookup}
                title="Tra cứu yêu cầu báo giá"
              >
                <FaClipboardList
                  className="vnt-header-my-quotes-icon"
                  aria-hidden="true"
                />

                <span className="vnt-header-my-quotes-text">
                  Tra cứu báo giá
                </span>
              </button>

              {/* HOTLINE */}

              <div className="vnt-header-hotline">
                <span>Hotline:</span>

                <a href="tel:0373954963">0373.954.963</a>
              </div>
            </div>
          </div>
        </Container>

        {/* SUB NAV */}

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

      {/* ======================================
          MODAL NHẬP SỐ ĐIỆN THOẠI
      ====================================== */}

      {showPhoneModal && (
        <div
          className="vnt-header-phone-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closePhoneModal();
            }
          }}
        >
          <div
            className="vnt-header-phone-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="vnt-phone-title"
          >
            {/* CLOSE */}

            <button
              type="button"
              className="vnt-header-phone-close"
              onClick={closePhoneModal}
              aria-label="Đóng"
            >
              <FaTimes aria-hidden="true" />
            </button>

            {/* ICON */}

            <div className="vnt-header-phone-icon">
              <FaClipboardList aria-hidden="true" />
            </div>

            {/* TITLE */}

            <h2 id="vnt-phone-title">Tra cứu báo giá</h2>

            <p className="vnt-header-phone-description">
              Vui lòng nhập số điện thoại đã sử dụng khi gửi yêu cầu báo giá đến
              Việt Nam Tour.
            </p>

            {/* FORM */}

            <form onSubmit={handlePhoneSubmit}>
              <label
                htmlFor="vnt-header-customer-phone"
                className="vnt-header-phone-label"
              >
                Số điện thoại
                <span> *</span>
              </label>

              <div className="vnt-header-phone-input-wrap">
                <FaPhoneAlt aria-hidden="true" />

                <input
                  ref={phoneInputRef}
                  id="vnt-header-customer-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="Ví dụ: 0901234567"
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                    setPhoneError("");
                  }}
                  maxLength={20}
                  aria-invalid={Boolean(phoneError)}
                  aria-describedby={
                    phoneError ? "vnt-header-phone-error" : undefined
                  }
                />
              </div>

              {phoneError && (
                <p
                  id="vnt-header-phone-error"
                  className="vnt-header-phone-error"
                  role="alert"
                >
                  {phoneError}
                </p>
              )}

              <button type="submit" className="vnt-header-phone-submit">
                Tiếp tục tra cứu
                <FaArrowRight aria-hidden="true" />
              </button>
            </form>

            <p className="vnt-header-phone-note">
              Số điện thoại được lưu trên trình duyệt để thuận tiện cho lần tra
              cứu tiếp theo.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

/* ==========================================
   HEADER NAV DATA
========================================== */

const HeaderNavData = [
  {
    id: 1,
    name: "Team Building",
    link: "/dich-vu/team-building",
  },
  {
    id: 2,
    name: "Du lịch trong nước",
    link: "/dich-vu/du-lich-trong-nuoc",
  },
  {
    id: 3,
    name: "Tổ chức Event",
    link: "/dich-vu/to-chuc-su-kien",
  },
  {
    id: 4,
    name: "Cho thuê xe",
    link: "/dich-vu/cho-thue-xe",
  },
  {
    id: 5,
    name: "Trải nghiệm học tập",
    link: "/dich-vu/du-lich-hoc-tap",
  },
  {
    id: 6,
    name: "Du lịch Mice",
    link: "/dich-vu/du-lich-mice",
  },
  {
    id: 7,
    name: "YEP, Tân niên",
    link: "/dich-vu/year-end-party",
  },
  {
    id: 8,
    name: "Hội nghị - Hội thảo",
    link: "/dich-vu/hoi-nghi-hoi-thao",
  },
  {
    id: 9,
    name: "Booking dịch vụ: Khách sạn, nhà hàng",
    link: "/dich-vu/booking-dich-vu",
  },
];

export default Header;
