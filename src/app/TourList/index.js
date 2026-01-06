import React, { useState, useEffect, useRef } from "react";
import API from "../../config/APINoToken";
import { useNavigate, useLocation } from "react-router-dom";
import { toSlug } from "../../Components/ToSlug";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {
  FaRegClock,
  FaRegCalendarAlt,
  FaBus,
  FaRegBuilding,
  FaMapMarkerAlt,
  FaFilter,
  FaSearch,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

export default function TourList() {
  const navigate = useNavigate();
  const location = useLocation();

  // --- QUẢN LÝ STATE ---
  const [dataTourList, setDataTourList] = useState([]);
  const [options, setOptions] = useState({
    destinations: [],
    departures: [],
    timeTypes: [],
    hotelTypes: [],
    vehicleTypes: [],
  });

  // State lọc chi tiết (Giữ nguyên các field bạn đã có)
  const [filters, setFilters] = useState({
    tourtype: [],
    timetypeid: [],
    hoteltypeid: [],
    vehicletypeid: [],
    selectedFrom: "",
    selectedDestination: "",
    minPrice: "",
    maxPrice: "",
    accessibility: [], // Wheelchair, Service Animal...
  });

  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 8;

  // --- FIX LỖI CHUYỂN TRANG (PAYLOAD) ---
  // Lắng nghe location.state để cập nhật tourtype ngay khi user bấm link từ ngoài vào
  useEffect(() => {
    const { tourtype: initialTourtype, destinationid: initialDestination } =
      location.state || {};

    let newTourTypeArr = [];
    if (Array.isArray(initialTourtype)) newTourTypeArr = initialTourtype;
    else if (typeof initialTourtype === "string")
      newTourTypeArr = [initialTourtype];

    setFilters((prev) => ({
      ...prev,
      tourtype: newTourTypeArr,
      selectedDestination: initialDestination || "",
    }));

    window.scrollTo(0, 0);
  }, [location.state]); // Khi state từ navigate thay đổi, useEffect này sẽ chạy

  // Fetch các option cho dropdown/checkbox
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [dep, time, hotel, vehicle, des] = await Promise.all([
          API.get("/province/get"),
          API.get("/timeType/get"),
          API.get("/hotelType/get"),
          API.get("/vehicleType/get"),
          API.get("/travelLocation/get"),
        ]);
        setOptions({
          departures: dep.data.data,
          timeTypes: time.data.data,
          hotelTypes: hotel.data.data,
          vehicleTypes: vehicle.data.data,
          destinations: des.data.data,
        });
      } catch (err) {
        console.error("Failed to fetch dropdown data", err);
      }
    };
    fetchOptions();
  }, []);

  // --- GỌI API KHI FILTER THAY ĐỔI ---
  useEffect(() => {
    const getData = async () => {
      try {
        const payload = {};
        if (filters.tourtype.length > 0) payload.tourtype = filters.tourtype;
        if (filters.timetypeid.length > 0)
          payload.timetypeid = filters.timetypeid;
        if (filters.hoteltypeid.length > 0)
          payload.hoteltypeid = filters.hoteltypeid;
        if (filters.vehicletypeid.length > 0)
          payload.vehicletypeid = filters.vehicletypeid;
        if (filters.selectedFrom) payload.departure = filters.selectedFrom;
        if (filters.selectedDestination)
          payload.destination = filters.selectedDestination;
        // Có thể thêm logic price range vào payload tùy API của bạn

        const response = await API.post("/tour/search", payload);
        setDataTourList(response.data.data || []);
      } catch (error) {
        console.error("Lỗi khi lấy tour:", error);
      }
    };
    getData();
  }, [filters]); // Chạy lại mỗi khi bất kỳ filter nào thay đổi

  // --- XỬ LÝ SỰ KIỆN ---
  const handleCheckboxChange = (key, value) => {
    setFilters((prev) => {
      const current = prev[key];
      const next = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [key]: next };
    });
    setCurrentPage(1);
  };

  const handleGoToDetail = (slug) => {
    navigate(`/tour/${slug}`);
    //console.log(slug);
  };

  // Pagination logic
  const totalPages = Math.ceil(dataTourList.length / toursPerPage);
  const currentTours = dataTourList.slice(
    (currentPage - 1) * toursPerPage,
    currentPage * toursPerPage
  );

  return (
    <div className="tour-page-wrapper bg-light">
      {/* Search Header Section */}
      <section className="tour-search-hero">
        <div className="container">
          <div className="hero-content text-center animate-hero">
            <h1>Khám Phá Hành Trình Mới</h1>
            <p>Hàng trăm tour du lịch hấp dẫn đang chờ đón bạn</p>

            <div
              className="search-panel-premium mx-auto"
              style={{ maxWidth: "950px" }}
            >
              <div className="row g-2">
                {" "}
                {/* g-2 để các ô cách nhau một chút cho thoáng */}
                {/* Điểm khởi hành */}
                <div className="col-md-4">
                  <div className="search-item-box shadow-sm">
                    <FaMapMarkerAlt className="text-primary" size={18} />
                    <div className="text-start flex-grow-1">
                      <label
                        className="d-block ps-2 mb-0"
                        style={{
                          fontSize: "9px",
                          fontWeight: 800,
                          color: "#999",
                        }}
                      >
                        KHỞI HÀNH
                      </label>
                      <select
                        className="form-select shadow-none bg-transparent py-0"
                        value={filters.selectedFrom}
                        onChange={(e) =>
                          setFilters({
                            ...filters,
                            selectedFrom: e.target.value,
                          })
                        }
                      >
                        <option value="">Tất cả tỉnh thành</option>
                        {options.departures.map((loc) => (
                          <option key={loc.provinceid} value={loc.provinceid}>
                            {loc.provincename}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                {/* Điểm đến */}
                <div className="col-md-5">
                  <div className="search-item-box shadow-sm">
                    <FaSearch className="text-primary" size={16} />
                    <div className="text-start flex-grow-1">
                      <label
                        className="d-block ps-2 mb-0"
                        style={{
                          fontSize: "9px",
                          fontWeight: 800,
                          color: "#999",
                        }}
                      >
                        ĐIỂM ĐẾN
                      </label>
                      <select
                        className="form-select shadow-none bg-transparent py-0"
                        value={filters.selectedDestination}
                        onChange={(e) =>
                          setFilters({
                            ...filters,
                            selectedDestination: e.target.value,
                          })
                        }
                      >
                        <option value="">Bạn muốn đi đâu?</option>
                        {options.destinations.map((des) => (
                          <option
                            key={des.travellocationid}
                            value={des.travellocationid}
                          >
                            {des.travellocationname}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                {/* Nút Tìm kiếm */}
                <div className="col-md-3">
                  <button className="btn btn-search-premium shadow-sm">
                    Tìm kiếm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-4">
        <div className="row">
          {/* SIDEBAR FILTER (Đầy đủ trường như bài gốc của bạn) */}
          <aside className="col-lg-3 mb-4">
            <div className="sidebar-filter-card shadow-sm p-4 bg-white rounded-3">
              <h5 className="fw-bold mb-4 d-flex align-items-center">
                <FaFilter className="me-2 text-primary" size={16} /> Bộ lọc
              </h5>

              {/* Loại tour */}
              <div className="filter-group mb-4">
                <label className="fw-bold mb-2">Loại tour</label>
                <div className="form-check custom-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={filters.tourtype.includes("")}
                    onChange={() => handleCheckboxChange("tourtype", "")}
                  />
                  <label className="form-check-label">Tour lẻ</label>
                </div>
                <div className="form-check custom-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={filters.tourtype.includes("DOAN")}
                    onChange={() => handleCheckboxChange("tourtype", "DOAN")}
                  />
                  <label className="form-check-label">Tour đoàn</label>
                </div>
              </div>

              {/* Giá tour */}
              <div className="filter-group mb-4">
                <label className="fw-bold mb-2">Giá tour (VNĐ)</label>
                <div className="d-flex gap-2">
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    placeholder="Từ"
                  />
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    placeholder="Đến"
                  />
                </div>
              </div>

              {/* Thời gian */}
              <div className="filter-group mb-4">
                <label className="fw-bold mb-2">Thời gian</label>
                {options.timeTypes.map((opt) => (
                  <div key={opt.timetypeid} className="form-check custom-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={filters.timetypeid.includes(opt.timetypeid)}
                      onChange={() =>
                        handleCheckboxChange("timetypeid", opt.timetypeid)
                      }
                    />
                    <label className="form-check-label">
                      {opt.timetypename}
                    </label>
                  </div>
                ))}
              </div>

              {/* Khách sạn */}
              <div className="filter-group mb-4">
                <label className="fw-bold mb-2">Tiêu chuẩn khách sạn</label>
                {options.hotelTypes.map((opt) => (
                  <div
                    key={opt.hoteltypeid}
                    className="form-check custom-check"
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={filters.hoteltypeid.includes(opt.hoteltypeid)}
                      onChange={() =>
                        handleCheckboxChange("hoteltypeid", opt.hoteltypeid)
                      }
                    />
                    <label className="form-check-label">
                      {opt.hoteltypename}
                    </label>
                  </div>
                ))}
              </div>

              {/* Phương tiện */}
              <div className="filter-group mb-4">
                <label className="fw-bold mb-2">Phương tiện</label>
                {options.vehicleTypes.map((opt) => (
                  <div
                    key={opt.vehicletypeid}
                    className="form-check custom-check"
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={filters.vehicletypeid.includes(
                        opt.vehicletypeid
                      )}
                      onChange={() =>
                        handleCheckboxChange("vehicletypeid", opt.vehicletypeid)
                      }
                    />
                    <label className="form-check-label">
                      {opt.vehicletypename}
                    </label>
                  </div>
                ))}
              </div>

              {/* Accessibility (Mục bạn có trong bài gốc) */}
              <div className="filter-group">
                <label className="fw-bold mb-2">Tiện ích đi kèm</label>
                {[
                  "Wheelchair",
                  "Service Animal",
                  "Listening Devices",
                  "Audio Guides",
                ].map((item) => (
                  <div key={item} className="form-check custom-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">{item}</label>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* MAIN LIST */}
          <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0 fw-bold">
                Tìm thấy{" "}
                <span className="text-primary">{dataTourList.length}</span> tour
              </h5>
            </div>

            {currentTours.map((tour) => (
              <div
                key={tour.tourid}
                className="tour-card-item bg-white shadow-sm rounded-3 mb-4 overflow-hidden"
                onClick={() => handleGoToDetail(tour.slug)}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="tour-image-box">
                      <img
                        src={
                          tour.images && tour.images[0]
                            ? tour.images[0].imageurl
                            : "https://via.placeholder.com/400x300"
                        }
                        alt="tour"
                      />
                      <div className="tour-tag">
                        {tour.tourtype === "DOAN" ? "Đoàn" : "Lẻ"}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="p-3 d-flex flex-column h-100">
                      <div className="mb-auto">
                        <div className="text-uppercase text-muted small fw-bold mb-1">
                          <FaMapMarkerAlt className="text-primary me-1" />{" "}
                          {tour.destination_name}
                        </div>
                        <h5 className="tour-name-heading mb-2">
                          {tour.tourname}
                        </h5>

                        <div className="d-flex flex-wrap gap-2 mb-3">
                          <span className="badge-info-item">
                            <FaRegClock /> {tour.timetype_name}
                          </span>
                          <span className="badge-info-item">
                            <FaRegBuilding /> {tour.hoteltypename}
                          </span>
                          <span className="badge-info-item">
                            <FaBus /> {tour.vehicletype_name}
                          </span>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between align-items-end pt-3 border-top">
                        <div className="departure-info text-muted small">
                          Nơi khởi hành:{" "}
                          <span className="text-dark fw-bold">
                            {tour.departure_name}
                          </span>
                        </div>
                        <div className="price-box text-end">
                          <div className="price-title">Giá từ</div>
                          <div className="price-amount">
                            {tour.price
                              ? Number(tour.price.adultprice).toLocaleString(
                                  "vi-VN"
                                )
                              : "0"}{" "}
                            ₫
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            {totalPages > 1 && (
              <nav className="mt-5">
                <ul className="pagination justify-content-center custom-pagination-style">
                  <li
                    className={`page-item ${currentPage === 1 && "disabled"}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage((p) => p - 1)}
                    >
                      <FaChevronLeft />
                    </button>
                  </li>
                  {[...Array(totalPages)].map((_, i) => (
                    <li
                      key={i}
                      className={`page-item ${
                        currentPage === i + 1 ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}
                  <li
                    className={`page-item ${currentPage === totalPages &&
                      "disabled"}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage((p) => p + 1)}
                    >
                      <FaChevronRight />
                    </button>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
