// App.js
import React, { useState, useEffect, useRef } from "react";
import API from "../../config/APINoToken";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { toSlug } from "../../Components/ToSlug";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {
  FaRegClock,
  FaRegCalendarAlt,
  FaBus,
  FaInfo,
  FaRegBuilding,
  FaMapMarkerAlt,
  FaRegMap,
} from "react-icons/fa";
// Main App component
export default function TourList() {
  const navigate = useNavigate();
  const location = useLocation();

  const { tourtype: initialTourtype, destinationid: initialDestination } =
    location.state || {};

  const [tourtype, setTourtype] = useState(() => {
    // Nếu initialTourtype là mảng thì dùng luôn
    if (Array.isArray(initialTourtype)) return initialTourtype;

    // Nếu là chuỗi ("DOAN" hoặc "") thì chuyển thành mảng
    if (typeof initialTourtype === "string") return [initialTourtype];

    return [];
  });

  const tourtypeRef = useRef(tourtype);
  const [timetypeid, setTimetypeid] = useState([]); // mặc định không chọn
  const [hoteltypeid, setHotelTypeid] = useState([]); // mặc định không chọn
  const [vehicletypeid, setVehicleTypeid] = useState([]);

  const [selectedFrom, setSelectedFrom] = useState("");
  const [selectedDestination, setSelectedDestination] = useState(
    initialDestination || ""
  );
  const [dataTourList, setDataTourList] = useState([]);
  const [options, setOptions] = useState({
    destinations: [],
    departures: [],
    timeTypes: [],
    hotelTypes: [],
    vehicleTypes: [],
  });
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
        destinations: des.data.data,
        departures: dep.data.data,
        timeTypes: time.data.data,
        hotelTypes: hotel.data.data,
        vehicleTypes: vehicle.data.data,
      });
      //console.log(options);
      //setLoading(false);
    } catch (err) {
      console.error("Failed to fetch dropdown data", err);
    }
  };
  const getFormattedDate = (date) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month starts from 0
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [selectedDate, setSelectedDate] = useState(
    getFormattedDate(new Date())
  );

  //Xử lý handlechange phần search

  const handleChange = (value) => {
    const newTourtype = tourtype.includes(value)
      ? tourtype.filter((item) => item !== value)
      : [...tourtype, value];

    setTourtype(newTourtype);
    tourtypeRef.current = newTourtype;

    // Gọi lại API với tourtype mới và timetypeid hiện tại
    getData(
      newTourtype,
      timetypeid,
      hoteltypeid,
      vehicletypeid,
      selectedFrom,
      selectedDestination
    );
  };

  const handleTimetypeChange = (value) => {
    const newTimetypeid = timetypeid.includes(value)
      ? timetypeid.filter((item) => item !== value)
      : [...timetypeid, value];

    setTimetypeid(newTimetypeid);
    getData(
      tourtype,
      newTimetypeid,
      hoteltypeid,
      vehicletypeid,
      selectedFrom,
      selectedDestination
    ); // Gọi đủ 3 điều kiện
  };

  const handleHoteltypeChange = (value) => {
    const newHoteltypeid = hoteltypeid.includes(value)
      ? hoteltypeid.filter((item) => item !== value)
      : [...hoteltypeid, value];

    setHotelTypeid(newHoteltypeid);

    // Gọi lại API với đầy đủ điều kiện
    getData(
      tourtype,
      timetypeid,
      newHoteltypeid,
      vehicletypeid,
      selectedFrom,
      selectedDestination
    );
  };

  const handleVehicleTypeChange = (value) => {
    const newVehicletypeid = vehicletypeid.includes(value)
      ? vehicletypeid.filter((item) => item !== value)
      : [...vehicletypeid, value];

    setVehicleTypeid(newVehicletypeid);

    // Gọi lại API với đầy đủ điều kiện
    getData(
      tourtype,
      timetypeid,
      hoteltypeid,
      newVehicletypeid,
      selectedFrom,
      selectedDestination
    );
  };
  const handleChangeFrom = (value) => {
    setSelectedFrom(value);

    // Nếu value là chuỗi rỗng thì không truyền vào API
    const departure = value !== "" ? value : undefined;

    getData(
      tourtypeRef.current,
      timetypeid,
      hoteltypeid,
      vehicletypeid,
      departure,
      selectedDestination
    );
  };
  const handleChangeDestination = (value) => {
    setSelectedDestination(value);

    const destination = value !== "" ? value : undefined;

    getData(
      tourtypeRef.current,
      timetypeid,
      hoteltypeid,
      vehicletypeid,
      selectedFrom,
      destination
    );
  };

  // Hàm lấy dữ liệu search
  const getData = async (
    tourtype = tourtypeRef.current,
    timetypeid = [],
    hoteltypeid = [],
    vehicletypeid = [],
    selectedFrom = "",
    selectedDestinationArg
  ) => {
    try {
      const selectedDestination =
        selectedDestinationArg || initialDestination || "";
      const payload = {};
      if (tourtype && tourtype.length > 0) {
        payload.tourtype = tourtype;
      }

      if (timetypeid.length > 0) {
        payload.timetypeid = timetypeid;
      }
      if (hoteltypeid.length > 0) {
        payload.hoteltypeid = hoteltypeid;
      }
      if (vehicletypeid.length > 0) {
        payload.vehicletypeid = vehicletypeid;
      }
      if (selectedFrom !== "") {
        payload.departure = selectedFrom;
      }
      if (selectedDestination !== "") {
        payload.destination = selectedDestination;
      }

      const response = await API.post("/tour/search", payload);
      setDataTourList(response.data.data || []);
    } catch (error) {
      console.error("Lỗi khi lấy tour:", error.response || error);
    }
  };

  const handleGoToDetail = (tourid, tourname) => {
    const slug = toSlug(tourname);
    navigate(`/tour/${slug}-${tourid}`);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchOptions();
    tourtypeRef.current = tourtype;
    getData();
    //console.log(selectedDestination);
  }, [tourtype]);
  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 8;

  // Tính chỉ số bắt đầu và kết thúc
  const totalPages = Math.ceil(dataTourList.length / toursPerPage);

  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = dataTourList.slice(indexOfFirstTour, indexOfLastTour);
  const getPageNumbers = () => {
    const maxPageNumbers = 5;
    const pages = [];

    if (totalPages <= maxPageNumbers) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 3) pages.push("...");

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("...");

      pages.push(totalPages);
    }

    return pages;
  };
  return (
    <div className="min-vh-100 bg-light font-sans text-secondary">
      {/* Hero Section with search bar, dropdowns, and date picker */}
      <section
        className="position-relative d-flex align-items-center justify-content-center"
        style={{
          height: "160px", // Custom height for the hero section
          backgroundImage:
            "url(https://images.vietnamluxtour.com/uploads/1753847633413.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          //   borderRadius: "0.5rem", // rounded-lg equivalent
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>{" "}
        {/* opacity-30 equivalent */}
        <div className="position-relative z-1 d-flex flex-column align-items-center justify-content-center h-100 p-3 w-100">
          <div
            className="bg-white p-2 rounded-pill shadow d-flex flex-column flex-md-row align-items-center justify-content-center w-100"
            style={{ maxWidth: "700px" }}
          >
            {/* Dropdown for 'From' */}
            <select
              className="form-select border-0 rounded-pill text-sm text-md p-2 my-1 my-md-0 mx-md-1 flex-grow-1"
              value={selectedFrom}
              onChange={(e) => handleChangeFrom(e.target.value)}
            >
              <option value="">Khởi hành từ</option>
              {options.departures.map((loc) => (
                <option key={loc.provinceid} value={loc.provinceid}>
                  {loc.provincename}
                </option>
              ))}
            </select>

            {/* Dropdown for 'Destination' */}
            <select
              className="form-select border-0 rounded-pill text-sm text-md p-2 my-1 my-md-0 mx-md-1 flex-grow-1"
              value={selectedDestination}
              onChange={(e) => handleChangeDestination(e.target.value)}
            >
              <option value="">Điểm đến</option>
              {options.destinations.map((cont) => (
                <option
                  key={cont.travellocationid}
                  value={cont.travellocationid}
                >
                  {cont.travellocationname}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
      <div className="container" style={{ paddingTop: "20px" }}>
        <div className="row">
          {/* Bộ lọc bên trái */}
          <div className="col-md-3">
            <div className="p-3 border rounded bg-white">
              <h5>Tìm kiếm</h5>

              <div className="mb-3">
                <label className="form-label fw-bold">Loại tour</label>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={Array.isArray(tourtype) && tourtype.includes("")}
                    onChange={() => handleChange("")}
                  />{" "}
                  Tour lẻ
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={
                      Array.isArray(tourtype) && tourtype.includes("DOAN")
                    }
                    onChange={() => handleChange("DOAN")}
                  />{" "}
                  Tour đoàn
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Giá tour (vnđ)</label>
                <div className="d-flex gap-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Từ"
                  />
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Đến"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Loại thời gian</label>
                <div className="form-check">
                  {options.timeTypes.map((option, index) => (
                    <div key={index} className="option">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`time-${index}`}
                        // value={option.timetypeid}
                        // // onChange={handleChange} // Nếu bạn xử lý lọc theo thời gian
                        checked={timetypeid.includes(option.timetypeid)}
                        onChange={() => handleTimetypeChange(option.timetypeid)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`time-${index}`}
                      >
                        {option.timetypename}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="mb-3">
                <label className="form-label fw-bold">Length (days)</label>
                <input type="range" className="form-range" min="3" max="21" />
              </div> */}

              <div className="mb-3">
                <label className="form-label fw-bold">Lưu trú</label>
                <div className="form-check">
                  {options.hotelTypes.map((option, index) => (
                    <div key={index} className="option">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`stay-${index}`}
                        checked={hoteltypeid.includes(option.hoteltypeid)}
                        onChange={() =>
                          handleHoteltypeChange(option.hoteltypeid)
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`stay-${index}`}
                      >
                        {option.hoteltypename}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Phương tiện</label>

                <div className="form-check">
                  {options.vehicleTypes.map((option, index) => (
                    <div key={index} className="option">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`vehicle-${index}`}
                        checked={vehicletypeid.includes(option.vehicletypeid)}
                        onChange={() =>
                          handleVehicleTypeChange(option.vehicletypeid)
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`vehicle-${index}`}
                      >
                        {option.vehicletypename}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Accessibility</label>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />{" "}
                  Wheelchair
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" /> Service
                  Animal
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />{" "}
                  Listening Devices
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />{" "}
                  Restrooms
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" /> Audio
                  Guides
                </div>
              </div>
            </div>
          </div>

          {/* Danh sách tour */}
          <div className="col-md-9">
            <h5 className="mb-3">Đã tìm thấy {dataTourList.length} tour</h5>
            {currentTours.map((tour) => (
              <div
                key={tour.tourid}
                className="cardTourList mb-4 shadow-sm"
                onClick={() => handleGoToDetail(tour.tourid, tour.tourname)}
              >
                <div className="cardHover row g-0">
                  <div className="col-md-4">
                    <img
                      src={tour.images[0].imageurl}
                      className="img-fluid rounded-start"
                      alt="VietNam Tour - image"
                      style={{
                        objectFit: "cover",
                        height: "220px",
                        width: "100%",
                        padding: 10,
                      }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="cardTourList-body">
                      <p className="DestinationName">{tour.destination_name}</p>
                      <h6
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                          textAlign: "justify",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {tour.tourname}
                      </h6>

                      <span
                        style={{
                          paddingLeft: 10,
                          paddingRight: 10,
                          paddingTop: 4,
                          paddingBottom: 4,
                          borderRadius: 20,
                          marginRight: 10,
                          backgroundColor: "#99FFFF",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 4,
                          color: "#0000FF",
                        }}
                      >
                        {tour.tourtype === "DOAN" ? "Tour đoàn" : "Tour lẻ"}
                      </span>

                      {/* <p className="text-muted mb-1">{tour.label}</p> */}
                      {/* <p className="mb-1">
                        <strong>Dates:</strong> {tour.dates.join(", ")}
                      </p> */}
                      <div className="mb-2 mt-2 gap-2">
                        <span
                          style={{
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 4,
                            paddingBottom: 4,
                            borderRadius: 20,
                            backgroundColor: "#99FFFF",
                            marginRight: 10,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            color: "#0000FF",
                          }}
                        >
                          <FaRegClock />
                          {tour.timetype_name}
                        </span>
                        <span
                          style={{
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 4,
                            paddingBottom: 4,
                            borderRadius: 20,
                            marginRight: 10,
                            backgroundColor: "#99FFFF",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            color: "#0000FF",
                          }}
                        >
                          <FaRegBuilding />
                          {tour.hoteltypename}
                        </span>
                        <span
                          style={{
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 4,
                            paddingBottom: 4,
                            borderRadius: 20,
                            marginRight: 10,
                            backgroundColor: "#99FFFF",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            color: "#0000FF",
                          }}
                        >
                          <FaBus />
                          {tour.vehicletype_name}
                        </span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p
                          style={{
                            fontStyle: "italic",
                            fontSize: 14,
                            color: "#999999",
                          }}
                        >
                          Khởi hành: {tour.departure_name}
                        </p>
                        <p
                          className="mb-0"
                          style={{
                            textAlign: "right",
                            fontSize: 17,
                            fontWeight: "bold",
                            color: "#FF0000",
                          }}
                        >
                          {tour.price &&
                            Number(tour.price.adultprice).toLocaleString(
                              "de-DE"
                            )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center mt-4">
            <nav>
              <ul className="pagination">
                {/* Nút Previous */}
                <li className={`page-item ${currentPage === 1 && "disabled"}`}>
                  <button
                    className="page-link"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                  >
                    &laquo;
                  </button>
                </li>

                {/* Số trang + ... */}
                {getPageNumbers().map((number, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === number ? "active" : ""
                    } ${number === "..." ? "disabled" : ""}`}
                  >
                    {number === "..." ? (
                      <span className="page-link">...</span>
                    ) : (
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(number)}
                      >
                        {number}
                      </button>
                    )}
                  </li>
                ))}

                {/* Nút Next */}
                <li
                  className={`page-item ${currentPage === totalPages &&
                    "disabled"}`}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                  >
                    &raquo;
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
